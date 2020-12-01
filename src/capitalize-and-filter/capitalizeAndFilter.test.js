const { capitalizeAndFilter } = require('./capitalizeAndFilter.js');

describe('capitalizeAndFilter', () => {
    it('takes in an array of strings, capitalize all strings and filter out any string that starts with the letter f', () => {
        const arr = ['spot', 'rover', 'bingo', 'fred']

        const result = capitalizeAndFilter(arr);

        expect(result).toEqual(['SPOT', 'ROVER', 'BINGO'])
    })
})