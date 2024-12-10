import express from "express";

const usersRoute = express.Router();

usersRoute.get('/login',(req,res)=> {
    res.send({message:"Login Page"});
})

usersRoute.get('/signup',(req,res)=> {
    res.send({message:"Signup Page"});
})

export default usersRoute;