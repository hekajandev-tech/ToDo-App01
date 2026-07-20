const mongoose = require('mongoose');


//creating a schema for the database
const TodoScheme = new mongoose.Schema({
    task:String,
    done:{
        type: Boolean,
        default:false
    }
});


//creating a model for the schema
const TodoModal = mongoose.model('todos',TodoScheme);


//exporting the model
module.exports = TodoModal;