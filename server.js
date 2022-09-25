const express = require('express')
var mongoose = require('mongoose');
const app = express()
const port = 8000
const cors=require("cors");
const connection = require("./db/db")
connection()
app.use(express.json())
const Person = require("./models/schema");


const corsOptions ={
   origin:'*', 
   credentials:true,          
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/userinfo', async (req, res) => {
    let { name, email, password } = req.body;

    if (!name) {
        res.status(400)
        throw new Error('Please Fill all the Fields')
    }
    else {
        const person = new Person({ name, password, email });
        const createdNote = await person.save();
        res.status(201).json(createdNote);
    }
})

app.get('/info', async (req, res) => {
    const users = await Person.find({});
    res.json(users);
    
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})