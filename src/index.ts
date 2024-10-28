import express from "express";
import path from "path";
import router from "../src/router/router"
import dotenv from 'dotenv'
import mongoose from "mongoose"
import morgan from 'morgan'
dotenv.config()
const app = express();


app.use(express.json()); //json parse cheyyan
app.use(express.urlencoded({ extended: true })); // path params query params okke parse cheyyan venditt

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));
app.use(morgan('dev'))

app.use('/',router)

mongoose.connect(process.env.MONGODB  as string).then(()=>{
    console.log("connected")
})
.catch((error)=>{
    console.log(error)
})



app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
