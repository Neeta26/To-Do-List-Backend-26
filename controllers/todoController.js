//all the route handlers for todolist
const Task = require("../models/todoSchema");
const AppError = require("../helpers/appErrorClass");
const sendErrorMessage = require("../helpers/sendError");
const sendResponse = require("../helpers/sendResponse");

//get all tasks
const getAllTasks = async (req, res) => {
  try {
    let task = await Task.find({});
    sendResponse(200, "Successful", task, req, res);
  } catch (err) {
    return sendErrorMessage(
      new AppError(401, "Unsuccessful", "Invalid request"),
      req,
      res
    );
  }
};

//create a task
const createTask = async (req, res) => {
  let newTask = new Task({ taskName: req.body.taskName });
  try {
    const task = await newTask.save();
    sendResponse(200, "Successful", [task], req, res);
  } catch (err) {
    return sendErrorMessage(
      new AppError(401, "Unsuccessful", "Invalid request"),
      req,
      res
    );
  }
};

//find a task
const getTask = async (req, res) => {
  try {
    let task = await Task.findOne({ taskId: req.params.taskId });
    sendResponse(200, "Successful", [task], req, res);
  } catch (err) {
    return sendErrorMessage(
      new AppError(401, "Unsuccessful", "Invalid request"),
      req,
      res
    );
  }
};

// update a task
const updateTask = async (req, res) => {
  try {
    let task = await Task.updateOne(
      { taskId: req.params.taskId },
      { status: req.body.status }
    );
    sendResponse(200, "Successful", [task], req, res);
  } catch (err) {
    return sendErrorMessage(
      new AppError(401, "Unsuccessful", "Invalid request"),
      req,
      res
    );
  }
};

// delete a task
const deleteTask = async (req, res) => {
  try {
    let task = await Task.deleteOne({ taskId: req.params.taskId });
    sendResponse(200, "Successful", [task], req, res);
  } catch (err) {
    return sendErrorMessage(
      new AppError(401, "Unsuccessful", "Invalid request"),
      req,
      res
    );
  }
};

//named the exports
module.exports.getAllTasks = getAllTasks;
module.exports.createTask = createTask;
module.exports.getTask = getTask;
module.exports.updateTask = updateTask;
module.exports.deleteTask = deleteTask;
