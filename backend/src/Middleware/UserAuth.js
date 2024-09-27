const jwt = require("jsonwebtoken")
const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, "../prisma/.env") })
const Secret_Code = process.env.Secret_Code


const UserAuth = (req,res,next)=>{
   let userDataAuth = req.headers.authorization
   console.log("first")
   if(!userDataAuth || !userDataAuth.startsWith("Bearer ")){
    return res.json({
      msg : "Your login data is not valid please login"
    })
   }

   
   console.log("third")

   let getMyUserData = userDataAuth.split(" ")[1]

   try{

      console.log("second")
      console.log("Token is :" + getMyUserData)
      console.log("fifth")
      console.log("Secret Code value is :" + Secret_Code)
      let userIdGotter = jwt.verify(getMyUserData , Secret_Code)
      console.log("fourth")
      if(userIdGotter.myChecker){
         req.user_id = userIdGotter.myChecker
         console.log("This is the userId " + userIdGotter)
         next()
       }
      else{
         res.json({
            msg : "Unable to save the data"
         })
       }
   }

   catch(error){
      res.json({
        msg : "Something went wrong while Authorization",
        error : error
       })
   }
   
    
}

module.exports = UserAuth