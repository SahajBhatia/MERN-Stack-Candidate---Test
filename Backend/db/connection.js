import mongoose  from "mongoose";


async function Connect() {
    try{
        await mongoose.connect("mongodb://localhost:27017/todolist", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connected...');
    }
    catch(err){
        console.log("disconnected", err);
        await mongoose.disconnect();
    }
}
export default Connect;

