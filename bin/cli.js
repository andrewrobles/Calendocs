#!/usr/bin/env node

const { createDay, deleteDay } = require('../src/day')
const { createMonth } = require('../src/month')

function printHelp() {
  console.log(`
These are common ways to start various kinds of documents:
    docs month    a calendar of the current month
    docs day      a blank document of the current day
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
    if (cmd === 'day') {
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
      const md = createMonth(offset)
      if (md) console.log(md)
      process.exit(0)
    }

    console.error(`Unknown command: ${cmd}`)
    printHelp()
    process.exit(1)
  } catch (err) {
    console.error(err?.stack || err)
    process.exit(1)
  }
}

main()