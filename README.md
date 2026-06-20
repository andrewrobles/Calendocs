# Notes

Capture thoughts or detailed notes.

## Setup

Install as a command
```
npm link
```

Uninstall as a command
```
npm link
```

## Tests

Run all tests

```bash
npm run test
```

Run a single test file
```bash
cd /path/to/file
npx jest <test-file>
```

Run a single test
```bash
npx jest <test-file> -t "<test name>"
```

## Demo

### Create a note for this month
```
$ note month
Created month: "April"
$ cat README.md
| S | M | T | W | T | F | S |
|---|---|---|---|---|---|---|
|   |   |   | 1 | 2 | 3 | 4 |
| 5 | 6 | 7 | 8 | 9 | 10 | 11 |
| 12 | 13 | 14 | 15 | 16 | 17 | 18 |
| 19 | 20 | 21 | 22 | 23 | 24 | 25 |
| 26 | 27 | 28 | 29 | 30 |   |   |
```

| S | M | T | W | T | F | S |
|---|---|---|---|---|---|---|
|   |   |   | 1 | 2 | 3 | 4 |
| 5 | 6 | 7 | 8 | 9 | 10 | 11 |
| 12 | 13 | 14 | 15 | 16 | 17 | 18 |
| 19 | 20 | 21 | 22 | 23 | 24 | 25 |
| 26 | 27 | 28 | 29 | 30 |   |   |

### Create a note with a title
```
$ note "Journal"
Created note: "Journal"
$ cat 01-01.md
[01/01](./README.md)

- [Journal](./01-01/Journal.md)
```

[1/1](./README.md)

- [Journal](./01-01/Journal.md)
