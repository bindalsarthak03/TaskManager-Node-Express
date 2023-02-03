const express = require('express');
const app = express();
const taskRouter = require('./routes/tasks')
require('./db/connect')
//middleware
app.use(express.json());

//nQavSYSU5z2n41x0


//Routes
app.get('/hello',(req,res,next)=>{
    res.send('TaskManager App');
})

app.use('/api/v1/tasks',taskRouter);

//app.get('/api/v1/tasks') //get all tasks
//app.post('/api/v1/tasks') //post a task
//app.get('api/v1/tasks/:id') //get a task
//api.patch('api/v1/tasks/:id') //update a task
//api.delete('api/v1/tasks/:id') //delete a task


app.listen(5000,()=>{console.log("SERVER RUNNING AT 5000...")})
