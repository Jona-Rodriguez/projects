const express = require('express')
const app = express()
const PORT = 3001

// Current progress: 37

let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (req,res) => {
    res.json(persons)
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

app.get('/info', (req, res) =>{
  const currentDate = new Date()
  res.send(`<h2>Phonebook has info for ${persons.length} people</h2> <h2>${currentDate}`)
})

app.get('/api/persons/:id', (req,res) => {
    const id = req.params.id
    const entry = persons.find(entry =>{
      entry.id == id
    })
    if (entry){
       res.json(entry)
    } else {
      res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req,res) => {
  const id = NUMBER(req.params.id)
  persons = persons.filter(entry => entry != id)
  res.status(204).end()
}))