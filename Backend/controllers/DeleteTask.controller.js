import Todo from "../models/todo.model.js";

const DeleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteTask = await Todo.findByIdAndDelete(id);
        if (!deleteTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task deleted successfully" });
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
}
export default DeleteTask;