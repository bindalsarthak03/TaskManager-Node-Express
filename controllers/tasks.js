const getAllTasks= (req,res,next)=>{
    res.send("get all tasks");
}

const createTasks = (req,res,next)=>{
    res.send("creae a task")
}

module.exports={
    getAllTasks,createTasks
}