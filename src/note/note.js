function createNote(title, testInputDay = null) {
  const today = new Date()
  const leadingZeroMonth = String(today.getMonth() + 1).padStart(2, '0')
  const leadingZeroDay = String(today.getDate()).padStart(2, '0')
  const filename = `${leadingZeroMonth}-${leadingZeroDay}.md`

  // Slug for calendar link: remove trailing exclamation marks, keep commas, encode spaces as %20
  const slug = title.replace(/ /g, '%20')

  const titledNote = `\n[${title}](../${filename})\n`

  let datedNote = ''
  if (testInputDay) {
    datedNote = `${testInputDay}\n- [${title}](./${leadingZeroMonth}-${leadingZeroDay}/${slug}.md)\n`
  }

  return {
    titledNote,
    datedNote
  }
}

module.exports = { createNote }
