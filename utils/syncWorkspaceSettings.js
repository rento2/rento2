const { readFile, writeFile } = require('fs/promises')
const { join } = require('path')

const propertyToReplacePath = 'stylelint.configFile'

const rootDir = join(__filename, '../../')
const settingsJsonPath = '.vscode/settings.json'
const settingsRootPath = join(rootDir, settingsJsonPath)

const projectNames = [
  'frontend',
  'backend',
  'admin'
]

const projectSettings = projectNames
  .map(name => ({ path: join(rootDir, 'packages', name, settingsJsonPath) }))

const main = async () => {
  const [rootSettings, ...packageSettings] = (await Promise.all([
    readFile(settingsRootPath, { encoding: 'utf-8' }),
    ...projectSettings.map(({ path }) => readFile(path, { encoding: 'utf-8' }))
  ])).map(JSON.parse)

  for (const [index, _value] of projectSettings.entries()) {
    projectSettings[index].data = packageSettings[index]
  }

  for (const { path, data } of projectSettings) {
    for (const [key, _value] of Object.entries(data)) {
      const isInRootSettings = Object.prototype.hasOwnProperty.call(rootSettings, key)

      if (isInRootSettings) {
        let newValue
        if (key === propertyToReplacePath) {
          newValue = rootSettings[key].split('/').slice(2).join('/')
        }

        data[key] = newValue ?? rootSettings[key]
        console.log(`Synced ${key} in ${path}`)
      }
    }

    try {
      writeFile(path, JSON.stringify(data, null, 4))
    } catch (error) {
      console.log('Failed to write file to', path)
    }
  }
}

main()
