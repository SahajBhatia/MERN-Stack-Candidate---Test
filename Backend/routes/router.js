import express from 'express';
import GetTask from '../controllers/GetTask.controller.js';
import NewTask from '../controllers/NewTask.controller.js';
import UpdateTask from '../controllers/UpdateTask.controller.js';
import DeleteTask from '../controllers/DeleteTask.controller.js';

const router = express.Router();

router.get("/", GetTask);
router.post("/", NewTask);
router.put("/:id", UpdateTask);
router.delete("/:id", DeleteTask);

export default router;