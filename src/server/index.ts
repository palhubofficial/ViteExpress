import express from 'express';
import { exec } from 'node:child_process'
export const app = express();
const startTime = Date.now()
app.get('/api/test', (req, res) => {
  res.json({
    greeting: "Hello",
    uptime: formatTime(Date.now() - startTime),
  })
  // res.send(`Vite + Express!\nUptime: ${formatTime(Date.now() - startTime)}`)
})

function gitPull() {
  exec('git pull', (err, output) => {
    if (err) {
      console.error(formatTime(Date.now() - startTime), ' - ', "could not execute command: ", err)
      return
    }
    console.log(formatTime(Date.now() - startTime), ' - ', "Output: \n", output)
  })
}

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
