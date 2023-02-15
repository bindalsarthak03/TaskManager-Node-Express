const Task = require("../models/Task");

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createTasks = async (req, res, next) => {
  try {
    //Create a new task
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getTask = async (req, res, next) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    //If Task Id not found
    if (!task) {
      return res
        .status(404)
        .json({ message: `No task with id: ${taskID} found!` });
    }
    //If Task Id found
    res.json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res
        .status(404)
        .json({ message: `No task with id: ${taskID} found!` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body,{
        //Adding this to add validators such as name required and maxLength checks while updating
        new:true,
        runValidators:true
    });
    if (!task) {
      return res
        .status(404)
        .json({ message: `No task with id: ${taskID} found!` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  deleteTask,
  updateTask,
};
