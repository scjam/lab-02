const { fetchQuotes } = require('./fetchQuotes');

describe('fetchQuotes', () => {
    it('returns a single quote as an object with name, text, and image properties', async() => {
        
        const result = await fetchQuotes();

        expect(result).toEqual({
            name: expect.any(String),
            text: expect.any(String),
            image: expect.any(String)
        });
    });
});