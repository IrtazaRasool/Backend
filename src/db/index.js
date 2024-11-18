import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const ConnectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MonogoDB CONNECTED !! DB HOST ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error Connecting to DB", error);
    process.exit(1);
  }
};

export default ConnectDB;
