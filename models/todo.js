const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
    text: {type: String, required: true, max: 500 },
    done: {type: Boolean, required: true }
});

 
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;