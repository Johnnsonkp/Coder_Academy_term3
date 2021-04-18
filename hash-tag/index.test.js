const {hashTagGenerator} = require('./index')

describe('hashTagGenerator', () => {
    it('must start with a hash symbol (#)', () => {
        const hashTag = hashTagGenerator("hello world");
        expect(hashTag[0]).toBe('#');
    });

    it('must start with a hashtag', () => {
        const hashTag = hashTagGenerator("hello world");
        expect(hashTag).toBe('#HelloWorld');
    });

    it('should return false on a final result longer than 140 character', () => {
        let example = "";
        for(let i = 0; i <= 140; i++) {
            example += 'a'
        }
        expect(hashTagGenerator(example)).toBe(false);
    });

    it('should return false when passed empty string', () => {
        expect(hashTagGenerator('')).toBe(false);
    });
})