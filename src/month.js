function createMonth(options = {}) {
  const weekStartsOn = options.weekStartsOn ?? 0 // 0 = Sunday, 1 = Monday

  const now = new Date()
  const year = now.getFullYear()
  const monthIndex = now.getMonth() // 0-based

  const firstDay = new Date(year, monthIndex, 1)
  const lastDay = new Date(year, monthIndex + 1, 0)
  const daysInMonth = lastDay.getDate()

  const headersSunday = ["S", "M", "T", "W", "T", "F", "S"]
  const headersMonday = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const headers = weekStartsOn === 0 ? headersSunday : headersMonday

  const headerRow = `| ${headers.join(" | ")} |`
  const separatorRow = `|${headers.map(() => "---").join("|")}|`

  const jsDow = firstDay.getDay()
  const offset = weekStartsOn === 0 ? jsDow : (jsDow + 6) % 7

  const rows = []
  let row = Array(7).fill("")
  let col = offset

  for (let day = 1; day <= daysInMonth; day++) {
    row[col] = String(day)
    col++

    if (col === 7) {
      rows.push(row)
      row = Array(7).fill("")
      col = 0
    }
  }

  if (row.some(cell => cell !== "")) rows.push(row)

  const bodyRows = rows.map(r =>
    `| ${r.map(x => (x === "" ? " " : x)).join(" | ")} |`
  )

  const output = [headerRow, separatorRow, ...bodyRows].join("\n")
  return output
}

module.exports = { createMonth }