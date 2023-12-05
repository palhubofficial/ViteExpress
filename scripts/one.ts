const startTime = Date.now()

function gitPull() {
  console.log('(1)', formatTime(Date.now() - startTime))
}

console.log({
  REPLIT: process.env['REPLIT']
})

// if (process.env['REPLIT'] === 'true')
setInterval(gitPull, 1e3 * 5)

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
