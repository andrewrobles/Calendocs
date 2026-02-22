#!/usr/bin/env node

const { createDay } = require('../src/create-day')
const { createMonth } = require('../src/create-month')

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

  if (!cmd || cmd === '-h' || cmd === '--help') {
    printHelp()
    process.exit(0)
  }

  try {
    if (cmd === 'day') {
      const result = createDay()
      if (result?.message) console.log(result.message)
      process.exit(0)
    }

    if (cmd === 'month') {
      const md = createMonth()
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