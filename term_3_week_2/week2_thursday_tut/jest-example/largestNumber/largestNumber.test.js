const largestNumber = require('./largestNumber');
// * NEEDS A FUNCTION
// * TAKES AN ARRAY
// * RETURNS LARGEST NUMBER
// * RETURNS NULL IF ARRAY EMPTY
// * HANDLES NEGATIVE NUMBERS
// * HANDLES/IGNORES NON NUMBERS


describe("largestNumber", () => {
    it("returns the largest number", () =>{
        expect(largestNumber([2, -5, 9])).toBe(9);
    });
    it('returns null if passed empty array', () => {
        expect(largestNumber([])).toBe(null);
    });
    it('returns largest negative when passed all negative', () => {
        expect(largestNumber([-2,-8,-100])).toBe(-2);
    });

    it('ignores non mumeric items in an array', () => {
        expect(largestNumber([1, 50, "apples", true])).toBe(50);
    });

    it('throws error when passed anything but array', () => {
        expect(() => {
            largestNumber(50)
        }).toThrow("Function must take array");
    })

    it('handles first item being non numeric', () => {
        expect(largestNumber([false, -10, -40, -9])).toBe(-9);
    })

})