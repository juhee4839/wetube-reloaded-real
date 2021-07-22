import mongoose from "mongoose";


mongoose.connect("mongodb://127.0.0.1:27017/wetube", { useNewUrlParser: true, useUnifiedTopology: true } )
//mongodb://127.0.0.1:27017/

const db = mongoose.connection;


const handleOpen = () => console.log("🍿Connected to DB");
const handleError = (error) => console.log("🙅🏼‍♀️DB Error", error);

db.on("error", (error) => console.log("DB Error", error)); 
db.once("open", handleOpen);