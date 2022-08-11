const express = require("express")
const mongoose = require('mongoose')
const workRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

require('dotenv').config()

//express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workRoutes)
app.use('/api/user', userRoutes)

//connect to db
mongoose.connect(process.env.MONGODB_URL).then(() => {
    //liseten for request
    app.listen(process.env.PORT, () => {
        console.log('listining port', process.env.PORT);
    })
}).catch((error) => {
        console.log(error);
    })

