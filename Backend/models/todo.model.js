import mongoose from 'mongoose';

const ToDoListSchema = new mongoose.Schema({
    text : {
        type : String,
        required : true
    },
    completed : {
        type : Boolean,
        default : false
    }
});

const Todo = mongoose.model("ToDo", ToDoListSchema);
export default Todo;