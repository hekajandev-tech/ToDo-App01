const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoModal = require("./modals/Todo");


//creating the express app
const app = express();

app.use(cors());
app.use(express.json());


//connecting to the database
mongoose.connect('mongodb://localhost:27017/Todo');


// Doing the functions

//route to get all the tasks
app.get('/get', (req,res) => {
    TodoModal.find()
    .then(result => res.json(result))
    .catch(err => console.log(err))
})


//route to edit a task
app.put('/update/:id' , (req,res)=> {
    const {id} = req.params;
    TodoModal.findByIdAndUpdate({_id: id}, {done : true})
    .then(result => res.json(result))
    .catch(err=> res.json(err))
}); 

//route to add a task 
app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModal.create({
        task: task
    }).then(result => {
        location.reload()
    })
        .catch(err => res.json(err))
});

//route to delete a task
app.delete('/delete/:id', (req,res) => {
    const {id} = req.params;
    TodoModal.findByIdAndDelete({ _id: id })
    .then(result => res.json(result))
    .catch(err=> res.json(err))
})

//listening to the server via port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});