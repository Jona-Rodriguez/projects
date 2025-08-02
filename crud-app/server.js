const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient

// https://zellwk.com/blog/crud-express-mongodb/
// https://www.youtube.com/watch?v=TmlyYKEzE_Q

// requiring the env file
require('dotenv').config()
const connectionString = process.env.DB_STRING

MongoClient.connect(connectionString, { useUnifiedTopology: true})
    .then(client => {
        console.log('Connected to Database')
        const db = client.db('star-wars-quotes')
        const quotesCollection = db.collection('quotes')

        app.use(bodyParser.json())
        // Adding the public folder for use
        app.use(express.static('public'))
        // setting the view to ejs
        app.set( 'view engine', 'ejs') 
        // make sure you place this before your CRUD handlers!
        app.use(bodyParser.urlencoded({ extended: true }))
        // render our new index.ejs
        app.get('/', (req, res) =>{
            // adding the reads by FINDing them and ARRAYing them
            quotesCollection.find().toArray()
                .then(results => {
                    console.log(results)
                    // render our data
                    res.render('index.ejs', {quotes: results})
                })
                .catch(error => console.log(error))
            // passing our index to the server
            // res.sendFile(__dirname + '/index.html')
            // replaced with index.ejs remember to run npm run dev
        })

        app.post('/quotes', (req,res) => {
            console.log(req.body)
            quotesCollection.insertOne(req.body)
                .then(result => {
                    console.log(result)
                    // Added Redirect
                    res.redirect('/')
                })
                
                .catch(error => console.error(error))
        })
        app.put('/quotes', (req,res) =>{
            quotesCollection.findOneAndUpdate(
                {name: 'Yoda'},
                {
                    $set: {
                        name: req.body.name,
                        quote: req.body.quote
                    }
                },
                {
                    upsert: true
                })
                .then(result => {
                    console.log(result)
                    res.json('Success') 
                })
                .catch(error => console.log(error))
            })

        app.delete('/quotes', (req,res) =>{
            quotesCollection.deleteOne(
                {name: req.body.name}
            )
            .then(result => {
                if (result.deletedCount === 0){
                    return res.json('No Darth Vader quote to delete')
                } else {
                    res.json('Deleted vader\'s quote')
                }
            })
            .catch(error => {
                console.log(error)
            })
        })

        // All your handlers here...
        app.listen(3000, () => {
            console.log('Listening on 3000')
        })
            })
    .catch(error => console.log(error))