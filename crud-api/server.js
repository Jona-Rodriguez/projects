const express = require('express');
const app = express();
const PORT = 8000;

const savage = {
    'age': 29,
    'birthName': 'bill',
    'birthLocation': 'London, England'
}

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html');
});

app.get('/api', (request, response) =>{
    response.json(savage);
});

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
});