const fs = require('fs')
const { createDay } = require('./day')

describe('createDay', () => {
    beforeEach(() => {
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.useRealTimers()
        // Add file deletion here if needed
        // Example: fs.unlinkSync('./02-09.md')
        if (fs.existsSync('./02-09.md')) {
            fs.unlinkSync('./02-09.md')
        }
    })

    test('removes leading zero', () => {
        jest.setSystemTime(new Date("2026-02-09T12:00:00"))
        const actual = createDay()
        const expectedBufferContent = '[9](./02-09.md)'
        expect(actual.bufferContent).toEqual(expectedBufferContent)
    })
    
    test('formats file header date', () => {
        jest.setSystemTime(new Date("2026-02-09T12:00:00"))
        const actual = createDay()
        const expectedBufferContent = '[9](./02-09.md)'
        expect(actual.bufferContent).toEqual(expectedBufferContent)
    })
    
    test('formats file header date', () => {
        jest.setSystemTime(new Date("2026-02-09T12:00:00"))
        const actual = createDay()
        const expectedBufferContent = '[2/9](./README.md)\n'
        expect(actual.fileContent).toEqual(expectedBufferContent)
    })

})