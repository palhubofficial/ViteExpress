import { exec } from 'node:child_process'

const startTime = Date.now()

function gitPull() {
  exec('git pull', (err, output) => {
    if (err) {
      console.error(
        formatTime(Date.now() - startTime),
        "Error: ",
        err,
      )
      return
    }
    console.log(formatTime(Date.now() - startTime), output.trim())
  })
}

console.log({
  REPLIT: process.env['REPLIT']
})
if (process.env['REPLIT'] === 'true')
  setInterval(gitPull, 1e3 * 10)

function formatTime(milliseconds: number): string {
  let seconds = Math.floor(milliseconds / 1000)
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(minutes / 60)

  hours %= 24
  minutes %= 60
  seconds %= 60

  return [hours, minutes, seconds].map(pad2).join(':')
}

function pad2(n: number): string {
  return String(n).padStart(2, '0')
}
