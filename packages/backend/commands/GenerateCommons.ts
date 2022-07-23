import { BaseCommand } from '@adonisjs/core/build/standalone'
import path from 'path'
import fs from 'fs-extra'

export default class GenerateModelsInterface extends BaseCommand {
  public static commandName = 'generate:commons'
  public static description = 'Generate commons'

  public static settings = {
    loadApp: true,
  }

  public async run (): Promise<void> {
    const candidates = fs.readdirSync('./app/Models')

    const modelsProperties = await candidates.reduce<Promise<{[model: string]: string[]}>>(async (prev, file) => {
      if (fs.lstatSync(`./app/Models/${file}`).isDirectory()) {
        return await prev
      }

      const targetModel = path.parse(file).name
      const { default: TargetModel } = await import(`App/Models/${targetModel}`)

      const columns: string[] = []
      try {
        TargetModel.$columnsDefinitions.forEach(({ serializeAs }: any) => {
          if (!serializeAs) {
            return
          }

          columns.push(serializeAs)
        })
      } catch {
        return await prev
      }

      return {
        ...await prev,
        [targetModel]: columns
      }
    }, Promise.resolve({}))

    const ts = Object.entries(modelsProperties).reduce((prev, [name, props]) => {
      const propsTs = props.map(v => `${v}: any;`).join('\n')
      return prev + `export interface ${name} {\n${propsTs}\n}\n\n`
    }, '/* eslint-disable */\n')

    await fs.remove('./_generated').catch(() => {})

    fs.mkdir('./_generated')
    fs.writeFileSync('./_generated/models.ts', ts)
    fs.copySync('./common', './_generated/common')
  }
}
