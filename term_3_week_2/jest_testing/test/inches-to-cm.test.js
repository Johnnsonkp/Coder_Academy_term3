const { inchesTocm } = require("../src/inches-to-cm")

describe('inchesToCm', () => {
    it('converts from inches to cm', () => {
        expect(inchesTocm(1)).toBe(2.54)
        expect(inchesTocm(2)).toBe(5.08)
        expect(inchesTocm(4)).toBe(10.16)
    })
})