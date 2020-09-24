// router.get('/todos', (req, res) => {
//     Todo.find({})
//         .then(todos => {
//             res.send(todos)
//         })
//         .catch(err => {
//             res.send(err)
//         }) 
//   });
  
// router.post('/todos', (req, res) => {
//     Todo.create(req.body)
//         .then(todo => {
//             res.send(todo)
//         })
//         .catch(err => {
//             res.send(err)
//         })
// });

// router.put('/todos/:id', (req, res) => {
//     Todo.findByIdAndUpdate({_id: req.params.id}, req.body)
//         .then(()=> {
//             Todo.findOne({_id: req.params.id})
//                 .then(todo => {
//                     res.send(todo)
//                 });
//         })
//         .catch(err => {
//             console.log(err)
//         })
// });

// router.put("/todos",(req, res) => {
//     Todo.updateMany({done: !req.body.done}, { $set: {done: req.body.done}})
//     .then(todos => {
//         res.send(todos);
//     })
//     .catch(err => {
//         res.send(err); 
//     })  
// });

// router.delete('/todos/:id', (req, res) => {
//     Todo.deleteOne({_id: req.params.id})
//         .then(todo => {
//             res.send(todo)
//         })
//         .catch(err => {
//             res.send(err)
//         })
// });

// router.delete("/todos", (req, res) => {
//     Todo.deleteMany({ done : true })
//     .then(todos => {
//         res.send(todos);
//     })
//     .catch(err => {
//         res.send(err); 
//     })  
// });

// module.exports = router;