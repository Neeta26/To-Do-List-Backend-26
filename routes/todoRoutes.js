//all the endpoints for todolist
const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/todoController");
const { verifyPostRequest } = require("../middlewares/todoMiddleware");

//represents an endpoint for express/todolist/tasks
router.route("/tasks").get(getAllTasks).post(verifyPostRequest, createTask);

// id query params
router
  .route("/tasks/:taskId")
  .get(getTask)
  .patch(updateTask)
  .delete(deleteTask);

module.exports = router;
