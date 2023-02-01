const express = require('express');
const app = express();
const taskRouter = require('./routes/tasks')
//middleware
app.use(express.json());

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


app.listen(5000,()=>{console.log("Server is up and running at 5000...")})
