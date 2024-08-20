
import User from "../Models/User.js";
import bcrypt from 'bcrypt';

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
        "newuser:",newUser)
    res.status(200).json({ message: "Signup successful",data:newUser });

    
} catch (error) {
    res.status(400).json({ error});

    
}



}
export {signup}