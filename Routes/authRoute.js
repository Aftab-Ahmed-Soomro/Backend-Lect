import express from "express";

const authRoute = express.Router();

authRoute.get("/forgot-password",(req,res)=> {
    try {
        res.status(200).send({message:"email sent"})
    }
    catch (error) {
        res.status(400).send({message:"something went wrong"})
    }
})

export default authRoute;