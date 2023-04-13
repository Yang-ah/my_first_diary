import mongoose from "mongoose";

mongoose.connect(
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.0/mfd",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log("DB Error", error);

// db.on("error", (error) => console.log("DB Error", error);
db.on("error", handleError);
db.once("open", handleOpen);

// mongoose.connection.on("error", handleError);
