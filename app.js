const express = require('express')
const fetch = require('node-fetch');
const app = express()
const dotenv = require('dotenv').config()
const port = 5678

app.use( express.json() ); 	      	// enable parsing of JSON data

app.use('/spoons', express.static('public')); /// this makes the frontend available.

// Forward queries to spoonacular and send back the response
app.get('/spoons/search/:query', (req, res) => {
    let query = encodeURIComponent( req.params.query);
    let endpoint = 'https://api.spoonacular.com/recipes/complexSearch'+
    '?apiKey='+process.env.SPOON_KEY+
    '&query='+query
    console.log(endpoint);

    fetch(endpoint)
    .then(response => response.json())
    .then(result =>  res.send(  result ) )
    .catch(error => console.log('error', error));
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
