const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
    '21 savage': {
    'age': 29,
    'birthName': 'Bill',
    'birthLocation': 'London, England'
    },
    'chance the rapper': {
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

app.get('/api/:name', (request, response) =>{
    const rapperName = request.params.name.toLowerCase();
    if(rappers[rapperName]){
        response.json(rappers[rapperName]);
    }else{
        response.json(rappers['unknown']);
    }
});  

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
});