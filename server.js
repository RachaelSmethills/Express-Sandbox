const express = require('express')
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const app = express()
const port = 3000;

const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})

app.use(express.static('styles'));
app.use(express.static('views/images'));
app.engine('handlebars', handlebars);
app.set('view engine', 'handlebars');

app.get('/', (request, response) => {
    response.render('summary', {})
});

app.get('/bulbasaur', (request, response) => {
    response.render('pokemon', 
    {
        name: 'Bulbasuar',
        details: 'The Grass Pokemon, second only to charmander and killer of the first 3 gyms with ease.'
    })
});

app.get('/squirtle', (request, response) => {
    response.render('pokemon', 
    {
        name: 'Squirtle',
        details: 'The water pokemon. The first avaialble in the original pokemon games, nobody in their right mind will choose him.'
    })
});

app.get('/charmander', (request, response) => {
    response.render('pokemon', 
    {
        name: 'Charmander',
        details: 'The ultimate starter - slow to grow but we all know, theres a charizard at the end'
    })
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })