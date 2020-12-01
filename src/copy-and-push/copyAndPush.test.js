const { copyAndPush } = require('./copyAndPush.js');

describe('copyAndPush', () => {
    const numbers = [1, 2, 3];

    it('returns a new array with all the items in the original array and a new item pushed to the end', () => {
        const result = copyAndPush(numbers, 4);

        expect(result).toEqual([1, 2, 3, 4])
    })
    it('checks that the original array stays the same', () => {

        expect(numbers).toEqual([1, 2, 3])
    })
})