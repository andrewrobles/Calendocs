const fs = require('fs')
const path = require('path')
const { spawnSync } = require('child_process')

function copyToClipboard(text) {
  const platform = process.platform

  if (platform === 'darwin') {
    const res = spawnSync('pbcopy', { input: text, encoding: 'utf8' })
    if (res.error) throw res.error
    if (res.status !== 0) throw new Error(res.stderr || 'pbcopy failed')
    return
  }

  if (platform === 'win32') {
    // `clip` reads from stdin
    const res = spawnSync('cmd', ['/c', 'clip'], { input: text, encoding: 'utf8' })
    if (res.error) throw res.error
    if (res.status !== 0) throw new Error(res.stderr || 'clip failed')
    return
  }

  // Linux: try xclip, then xsel
  let res = spawnSync('xclip', ['-selection', 'clipboard'], { input: text, encoding: 'utf8' })
  if (!res.error && res.status === 0) return

  res = spawnSync('xsel', ['--clipboard', '--input'], { input: text, encoding: 'utf8' })
  if (!res.error && res.status === 0) return

  throw new Error('No clipboard utility found. Install xclip or xsel (Linux), or run on macOS/Windows.')
}

function createDay(testCalendar=null) {
  const today = new Date()
  const month = String(today.getMonth() + 1)
  const leadingZeroMonth = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate())
  const leadingZeroDay = String(today.getDate()).padStart(2, '0')
  const filename = `${leadingZeroMonth}-${leadingZeroDay}.md`
  const filepath = path.join(process.cwd(), filename)

  const fileContent = `[${month}/${day}](./README.md)\n`
  const docLink = `[${today.getDate()}](./${leadingZeroMonth}-${leadingZeroDay}.md)`
  
  let calendar
  if (!testCalendar) {
    fs.writeFileSync(filepath, fileContent)
    const readmeContent = fs.readFileSync(path.join(process.cwd(), 'README.md'), 'utf8')
    calendar = readmeContent.replace(`${today.getDate()}`, docLink)
    fs.writeFileSync(path.join(process.cwd(), 'README.md'), calendar)
  } else {
    calendar = testCalendar.replace(`${today.getDate()}`, docLink)
  }
  

  return {
    filename,
    filepath,
    docLink,
    fileContent,
    calendar
  }
}

const deleteDay = () => {
  // delete file corresponding to today
  const today = new Date()
  const leadingZeroMonth = String(today.getMonth() + 1).padStart(2, '0')
  const leadingZeroDay = String(today.getDate()).padStart(2, '0')
  const filename = `${leadingZeroMonth}-${leadingZeroDay}.md`
  const filepath = path.join(process.cwd(), filename)
  fs.unlinkSync(filepath)

  // delete link from day in calendar
  const docLink = `[${today.getDate()}](./${leadingZeroMonth}-${leadingZeroDay}.md)`
  const readmeContent = fs.readFileSync(path.join(process.cwd(), 'README.md'), 'utf8')
  const updatedContent = readmeContent.replace(docLink, `${today.getDate()}`)
  fs.writeFileSync(path.join(process.cwd(), 'README.md'), updatedContent)
}

module.exports = { createDay, deleteDay }
