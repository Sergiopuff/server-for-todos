const express = require('express');
const router = express.Router();

const todo_controller = require('../controllers/todo.controller');

router.get('/todos', todo_controller.getAllTodos);

router.post('/todos', todo_controller.addTodo);

router.put('/todos/:id', todo_controller.updateOneTodo);

router.put('/todos', todo_controller.updateMany);

router.delete('/todos/:id', todo_controller.deleteOneTodo);

router.delete('/todos', todo_controller.deleteMany);


module.exports = router;
