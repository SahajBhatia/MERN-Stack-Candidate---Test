import Todo from "../models/todo.model.js";

const GetTask = async (req, res) => {
    try{
        const tasks = await Todo.find();
        res.json(tasks);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
}

export default GetTask;