const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient
const connectionString = "mongodb+srv://jonathan1998rodriguez:DrinkingWater!1@cluster0.kuhiebo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// MongoClient.connect('mongodb-connection-string', (err, client) => {
//   // Do something here
// })

MongoClient.connect(connectionString).then(client => {
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')
    app.use()
    app.get()
    app.post('/quotes', (req,res) =>{
        quotesCollection
            .insterOne(req.body)
            .then(result =>{
                console.log(result)
            })
    }).catch(err => console.log(err))
    app.listen()
    app.getapp.postapp.listen
}).catch(err => console.log(err))
//   console.log('Connected to Database')
//   const db = client.db('star-wars-quotes')
// ).catch(error => console.error(error))

// Make sure you place this before your CRUD handlers!
app.use(express.urlencoded({ extended: true }))

// All your handlers here...
app.listen(3000, function (){
    console.log('Listening on 3000')
})

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req,res) => {
    console.log(req.body)
})