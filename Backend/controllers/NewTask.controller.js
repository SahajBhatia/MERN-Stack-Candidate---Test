import Todo from "../models/todo.model.js";


const NewTask = async (req, res) => {
    try{
        const newTask = new Todo({
            text : req.body.text,
            completed : req.body.completed
        });
        const saveTask = await newTask.save();
        res.status(201).json(saveTask);
    }
    catch(err){
        res.status(500).json({error : err.message});
    }
}
export default NewTask;