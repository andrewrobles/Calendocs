// createMonth.test.js
// Assumes you export the function from a module like:
// module.exports = { createMonth }

const { createMonth } = require("./create-month")

describe("createMonth", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  test("uses Sunday-start headers by default", () => {
    jest.setSystemTime(new Date("2026-02-15T12:00:00"))

    const md = createMonth()
    expect(md).toContain("| S | M | T | W | T | F | S |")
  })

  test("renders a valid separator row", () => {
    jest.setSystemTime(new Date("2026-02-15T12:00:00"))

    const md = createMonth()
    // exact separator row produced by the function
    expect(md).toContain("|---|---|---|---|---|---|---|")
  })

  test("places day 1 under the correct weekday (Sunday-start)", () => {
    // March 2026: March 1, 2026 is a Sunday
    jest.setSystemTime(new Date("2026-03-10T12:00:00"))

    const md = createMonth()
    const lines = md.split("\n")

    // Find first week row (after title blank line + header + separator)
    // Layout:
    // 0: ## Month Year
    // 1: ""
    // 2: header row
    // 3: separator row
    // 4: first week row
    const firstWeek = lines[2]
    expect(firstWeek).toBe("| 1 | 2 | 3 | 4 | 5 | 6 | 7 |")
  })

  test("handles a 28-day February (non-leap year)", () => {
    // Feb 2026 has 28 days
    jest.setSystemTime(new Date("2026-02-15T12:00:00"))

    const md = createMonth()
    // Should contain 28, should NOT contain 29
    expect(md).toMatch(/\b28\b/)
    expect(md).not.toMatch(/\b29\b/)
  })

  test("handles leap year February (29 days)", () => {
    // Feb 2024 has 29 days
    jest.setSystemTime(new Date("2024-02-15T12:00:00"))

    const md = createMonth()
    expect(md).toMatch(/\b29\b/)
  })
})