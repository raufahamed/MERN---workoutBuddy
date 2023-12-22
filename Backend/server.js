require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workout')
const userRoutes = require('./routes/User')

const app = express()

app.use(express.json())

app.use(cors({origin:'http://localhost:3000'}))

app.use((req,res,next)=>{

    console.log(req.path,req.method);
    next()
})

//routes
app.use( '/api/workouts',workoutRoutes)
app.use( '/api/user',userRoutes)

//connecting to the db 
console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
.then(()=>{

    app.listen(process.env.PORT,()=>{
        console.log('listening on the port');
    })
})
.catch((err)=>{

    console.log(err);
})




