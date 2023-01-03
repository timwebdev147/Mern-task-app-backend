const dotenv = require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use('/api/tasks', taskRoutes)



// routes
app.get('/', (req, res) => {
res.send('welcome to the home page')
})




mongoose
    .set('strictQuery', false)
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, (
            console.log(`server running on port ${PORT}`)
        ))
    })
    .catch((err) => console.log(err))





