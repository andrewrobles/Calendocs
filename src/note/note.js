const fs = require('fs')
const path = require('path')

function createNote(title, testInputDay = null) {
  const today = new Date()
  const leadingZeroMonth = String(today.getMonth() + 1).padStart(2, '0')
  const leadingZeroDay = String(today.getDate()).padStart(2, '0')
  const filename = `${leadingZeroMonth}-${leadingZeroDay}.md`
  const foldername = `${leadingZeroMonth}-${leadingZeroDay}`

  // Slug for calendar link: remove trailing exclamation marks, keep commas, encode spaces as %20
  const slug = title.replace(/ /g, '%20')

  const titledNote = `[${title}](../${filename})\n`

  let datedNote = ''
  if (testInputDay) {
    datedNote = `${testInputDay}\n- [${title}](./${foldername}/${slug}.md)\n`
  } else {
    const cwd = process.cwd()
    const folderPath = path.join(cwd, foldername)
    const titledNotePath = path.join(folderPath, `${slug}.md`)
    const datedNotePath = path.join(cwd, filename)

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath)
    }

    if (!fs.existsSync(titledNotePath)) {
      fs.writeFileSync(path.join(folderPath, `${title}.md`), titledNote)
    }

    const datedLink = `* [${title}](./${foldername}/${slug}.md)`

    if (fs.existsSync(datedNotePath)) {
      // TODO: Handle both cases when there is a new line at the end of the file or not
      fs.appendFileSync(datedNotePath, `\n${datedLink}`)
    }
  }

  return {
    titledNote,
    datedNote
  }
}

module.exports = { createNote }