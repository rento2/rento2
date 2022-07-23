import fs from 'fs'

const candidates = fs.readdirSync('./app/Models')

candidates.forEach(file => {
  if (fs.lstatSync(`./app/Models/${file}`).isDirectory()) {
    return
  }

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const modelRawPayload = fs.readFileSync(`./app/Models/${file}`, 'utf8')
  const modelRawPayloadLines = modelRawPayload.split('\n')

  modelRawPayloadLines.map(v => {
    const overload = v.trim().match(/public (.*?)!: /)
    if (!overload) return null

    console.info(overload)
    if (overload[1]) {
      return overload[1]
    }

    return null
  })

  // console.info(modelRawPayloadLines)
})
