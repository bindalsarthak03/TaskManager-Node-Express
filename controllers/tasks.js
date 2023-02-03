const getAllTasks= (req,res,next)=>{
    res.send("get all tasks");
}

const createTasks = (req,res,next)=>{
    res.json(req.body)
}

const getTask = (req,res,next)=>{
    res.json({id:req.params.id})
}

const deleteTask = (req,res,next)=>{
    res.send("delete a task")
}

const updateTask = (req,res,next)=>{
    res.send("update a task")
}
module.exports={
    getAllTasks,createTasks,getTask,deleteTask,updateTask
}