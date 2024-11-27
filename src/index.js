import dotenv from "dotenv";
dotenv.config();
import { app } from "./app.js";

import ConnectDB from "./db/index.js";

ConnectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on Port: ${process.env.PORT}`);
    });
    app.on("ERRROR", (error)=>{
        console.log("ERORRR:", error);
        throw error
        
    })
  })
  .catch((err) => {
    console.log("Datebase Connection error", err);
  });
