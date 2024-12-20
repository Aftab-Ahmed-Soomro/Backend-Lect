import express from "express";
import dotenv from "dotenv";
import productRoute from "./Routes/ProductsRoute.js";
import usersRoute from "./Routes/usersRoute.js";
import cors from "cors";
import authRoute from "./Routes/authRoute.js";

const app = express();
dotenv.config();

app.use(cors())

const PORT = process.env.PORT || 8000;

app.get('/',(req,res)=> {
    res.status(200).send("Welcome To Backend");
})

app.use("/products",productRoute);

app.use("/users",usersRoute);

app.use("/auth",authRoute)

// app.get('/profile',(req,res)=> {
//     res.status(200).send("Welcome To Profile");
// })

// app.get('/users/:id',(req,res)=> {
//     const id = req.params.id;
//     res.status(200).send(`Welcome To My Product ${id}`);
// })

// app.get('/comments',(req,res)=> {
//     res.status(200).send({status:200, message:"success",data:comments})
// })

// app.get("*",(req, res)=> {
//     res.status(404).send("Page Not Found");
// })

app.listen(PORT, ()=> {
    console.log(`Server is running on Port ${PORT}`);
})