

const signup=(req,res)=>{
const dataReceived=req.body;
console.log(dataReceived)

res.status(200).json({ message: "Signup successful",dataReceived });

}
export {signup}