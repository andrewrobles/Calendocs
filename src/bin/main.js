#!/usr/bin/env node

const { createDay, deleteDay } = require('../lib/day')
const { createMonth } = require('../lib/month')
const { createNote, renameNote } = require('../lib/note')

function printHelp() {
  console.log(`
These are common commands used in various situations:
    note month          Create calendar of the current month
    note "<title>"      Create a new note
`)
}

async function main() {
  const args = process.argv.slice(2)
  const cmd = args[0]
  const subCmd = args[1]
  const subValue = args[2]

  if (!cmd || cmd === '-h' || cmd === '--help') {
    printHelp()
    process.exit(0)
  }

  try {
    if (cmd === "rename") {
      const nameBefore = args[1]
      const nameAfter = args[2]
      renameNote(nameBefore, nameAfter)
      console.log(`Renamed note: ${nameAfter}`)
      process.exit(0)
    }

    if (cmd === 'today') {
      if (subCmd === '-d') {
        deleteDay()
      } else {
        const result = createDay()
        if (result?.message) console.log(result.message)
      }
      process.exit(0)
    }

    if (cmd === 'month') {
      const offset = subCmd === '-i' ? parseInt(subValue, 10) : 0
      const monthName = createMonth(offset)
      console.log(`Created month: "${monthName}"`)
      process.exit(0)
    }

    // ---- DEFAULT: CREATE NOTE ----

    const result = createDay()
    if (result?.message) console.log(result.message)

    const title = args.join(' ').trim()

    if (!title) {
      console.error('Error: title is required\n')
      console.log('Usage: note "<title>"')
      process.exit(1)
    }

    createNote(title)
    console.log(`Created note: "${title}"`)
    process.exit(0)

  } catch (err) {
    console.error(err?.stack || err)
    process.exit(1)
  }
}

main()