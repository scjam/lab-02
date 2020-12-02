const request = require( 'superagent' );

const fetchQuotes = async() => {
   
    const response = await request.get('http://futuramaapi.herokuapp.com/api/quotes');

    const results = response.body[18]

    return quote = {
        name: results.character,
        text: results.quote,
        image: results.image
    };
};

module.exports = { 
    fetchQuotes 
};
