import express from 'express'
import cors from 'cors'
import Chance from 'chance'

const app = express()
//Middleware
app.use(cors())
app.use(express.json())//automatically parses any json

const chance = new Chance()

//[...Array(250).keys()] --- Converts the array into an array of integers that are indexes e.g(0,1,2,3,..n)
const animals = [...Array(250).keys()].map(id => {
    return{
        id,
        type: chance.animal(),
        age: chance.age(),
        name: chance.name(),
    }
    //creates a 250 long array of objects that have randomly generated data
})

app.get('', (req,res) => {
    //Filter results by query
    const q = req.query.q?.toLowerCase() || ''; //lowerCase so the search is case-insensitive
    const results = animals.filter(animal => animal.type.toLowerCase().includes(q))

    res.send(results)
})

app.listen(8080,() => {console.log('Listening on port http://localhost:8080')})
