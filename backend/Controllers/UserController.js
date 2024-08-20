
import User from "../Models/User.js";

const signup= async (req,res)=>{

const dataReceived=req.body;
console.log(dataReceived)
try {
    //it is converntional in REST APIs, to sendback the same data fprm db once creatig/updating a column in table
    const newUser=await User.create({
        name:dataReceived.name,
        email:dataReceived.email,
        username:dataReceived.username,
        password:dataReceived.password

    })
    console.log(
        "newuser:",newUser)
    res.status(200).json({ message: "Signup successful",data:newUser });

    
} catch (error) {
    res.status(400).json({ error});

    
}



}
export {signup}