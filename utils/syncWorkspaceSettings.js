const { readFile, writeFile } = require('fs/promises')
const { join } = require('path')

const propertyToReplacePath = 'stylelint.configFile'

const rootDir = join(__dirname, '..')
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

  projectSettings.forEach(function (_el, i) {
    projectSettings[i].data = packageSettings[i]
  })

  for (const { path, data } of projectSettings) {
    for (const [key, _value] of Object.entries(data)) {
      const isInRootSettings = Object.hasOwn(rootSettings, key)

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
      await writeFile(path, JSON.stringify(data, null, 4) + '\n')
    } catch (error) {
      console.error('Failed to write file to', path)
      process.exit(1)
    }
  }
}

main()
