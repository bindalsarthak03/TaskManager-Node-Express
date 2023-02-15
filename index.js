const express = require('express');
const app = express();
const taskRouter = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
//middleware
app.use(express.json());

//nQavSYSU5z2n41x0


//Routes
app.get('/hello',(req,res,next)=>{
    res.send('TaskManager App');
})

app.use('/api/v1/tasks',taskRouter);

const start  = async ()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(process.env.PORT,()=>{console.log(`SERVER RUNNING AT ${process.env.PORT}....`)})
    } catch (error) {
        console.log(error)
    }
}

start();
