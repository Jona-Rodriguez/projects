const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
    '21 Savage': {
    'age': 29,
    'birthName': 'Bill',
    'birthLocation': 'London, England'
    },
    'Chance the Rapper': {
        'age': 29,
        'birthName': 'Bob',
        'birthLocation': 'Texas, USA'
    },
    'unknown': {
        'age': 99,
        'birthName': 'Joe',
        'birthLocation': 'Somewhere, Nevada'
    }
}

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html');
});

app.get('/api', (request, response) =>{
    response.json(rappers);
});

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
});