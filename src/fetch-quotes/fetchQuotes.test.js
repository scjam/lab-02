const { fetchQuotes } = require('./fetchQuotes');
const request = require('superagent');

describe('fetchQuotes', () => {
    it('returns a single quote as an object with name, text, and image properties', async() => {
        
        const result = await fetchQuotes();

        expect(result).toEqual({
            name: 'Bender',
            text: `I'm gonna drink 'til I reboot.`,
            image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png'
        });
    });
});