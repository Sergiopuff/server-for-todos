const Todo = require('../models/todo');

exports.getAllTodos = (req, res) => {
    Todo.find({})
    .then(todos => {
        res.send(todos)
    })
    .catch(err => {
        res.send(err)
    })
};

exports.addTodo = (req, res) => {
    Todo.create(req.body)
    .then(todo => {
        res.send(todo)
    })
    .catch(err => {
        res.send(err)
    })
};

exports.updateOneTodo = (req, res) => {
    Todo.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(()=> {
        Todo.findOne({_id: req.params.id})
            .then(todo => {
                res.send(todo)
            });
        })
    .catch(err => {
        console.log(err)
    })
};

exports.updateMany = (req, res) => {
    Todo.updateMany({done: !req.body.done}, { $set: {done: req.body.done}})
    .then(todos => {
        res.send(todos);
    })
    .catch(err => {
        res.send(err); 
    })  
}

exports.deleteOneTodo = (req, res) => {
    Todo.deleteOne({_id: req.params.id})
        .then(todo => {
            res.send(todo)
        })
        .catch(err => {
            res.send(err)
    })
};

exports.deleteMany = (req, res) => {
    Todo.deleteMany({ done : true })
    .then(todos => {
        res.send(todos);
    })
    .catch(err => {
        res.send(err); 
    })   
}
