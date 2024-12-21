import express from "express";
import router from "./routes/router.js";
import Connect from "./db/connection.js";
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/tasks", router);
Connect().then(()=>{

    app.listen(3000, ()=>{
      console.log(3000, "port....."); 
    })
  })
  .catch((err)=>{
    console.log("errr", err);
  })

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`running on port ${PORT}`);
// });
