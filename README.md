# To-Do-List-Backend

Project contains Express API and MongoDB for to-do-list app. This repository contains required folders and files for the to-do-list backend.

# Crud Operations

Base Url-- http://localhost:3000/todoList

- Get all tasks:

Url-- http://localhost:3000/todoList/tasks . Select GET request on postman and click on send.

- Create a task:

Url-- http://localhost:3000/todoList/tasks . Select POST request on postman. Then in body select raw and in drop-down box select JSON. Enter the name of the task that is to be created in the form of {"taskName":"To-Do"} and then click on send. The task will be created with status pending.

- Find a task by taskId:

Url-- http://localhost:3000/todoList/tasks/:taskId. Enter the /:taskId that you need to find. Eg./tasks/12. Select GET request on postman and click on send.

- Update a task:

Url-- http://localhost:3000/todoList/tasks/:taskId. Enter the /:taskId that you need to update. Eg./tasks/12. Select PATCH request on postman. Then in body select raw and in drop-down box select JSON. Type {"status":"Completed"} and then click on send.

- Delete a task:

Url-- http://localhost:3000/todoList/tasks/:taskId. Enter the /:taskId that you need to delete. Eg./tasks/12. Select DELETE request on postman and click on send.

# Steps to run the project:

Execution(Terminal)-- npm run start.

Configure(config.env)-- PORT="Write port number on which you want to start the app server."

            DATABASE_URL="Write your mongoDB server base-url running on your local machine."


Storage of data-- MongoDB compass.

Use POSTMAN for performing the CRUD operations.

Heroku link--
