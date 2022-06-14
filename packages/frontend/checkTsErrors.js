const { exec } = require('child_process')

const main = () => {
  exec('npx tsc --noEmit --pretty false | grep -Ev "TS2464|TS4111" || true', async (err, stdout, stderr) => {
    if (err) {
      console.log('Callback error:', err)
      return
    }

    if (stderr) {
      console.log(stderr)
      console.log('Command output to stderr:', stderr)
      return
    }

    if (stdout) {
      console.error('Found TS errors:')
      console.error(stdout)
      process.exit(1)
    } else {
      process.exit(0)
    }
  })
}

main()
