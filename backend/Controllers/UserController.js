
import User from "../Models/User.js";
import bcrypt from 'bcrypt';
import generateTokenAndSetCookie from "../helpers/generateTokenAndCookie.js";
import jwt from "jsonwebtoken";

const signup= async (req,res)=>{

const dataReceived=req.body;
const saltRounds=10;
console.log(dataReceived)
try {
    //take password andhash it.
    const password=dataReceived.password
    const hashedPassword=await bcrypt.hash(password,saltRounds)
    //it is converntional in REST APIs, to sendback the same data fprm db once creatig/updating a column in table
    const newUser=await User.create({
        name:dataReceived.name,
        email:dataReceived.email,
        username:dataReceived.username,
        password:hashedPassword

    })
  

    console.log(
        "newuser:",newUser.id)
        console.log("JWT Secret:", process.env.JWT_SECRET);
        try {
            generateTokenAndSetCookie(newUser.id, res);
        } catch (error) {
            console.error("Error in token generation:", error);
            return res.status(500).json({ error: "Token generation failed" });
        }
    res.status(200).json({ message: "Signup successful",data:newUser });

    
} catch (error) {
    res.status(400).json({ error});

    
}



}
export {signup}