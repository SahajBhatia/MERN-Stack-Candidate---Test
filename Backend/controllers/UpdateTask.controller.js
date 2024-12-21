import Todo from "../models/todo.model.js";

const UpdateTask = async (req, res) => {
    try {
        const id = req.params.id;
        const updateTask = await Todo.findByIdAndUpdate(id, {text : req.body.text, completed : req.body.completed}, {new : true});
        if(!updateTask) {
            return res.status(404).json({message : "Task not found"});
        }
        res.json(updateTask);
    }
    catch(err){
        res.status(500).json({error : err.message});
    }
}
export default UpdateTask;