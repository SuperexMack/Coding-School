const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const jwt = require("jsonwebtoken")
const zod = require("zod")
const express = require("express")
const path = require("path")
const router = express.Router()
require("dotenv").config({ path: path.resolve(__dirname, "../prisma/.env") })

const Secret_Code = process.env.Secret_Code

const checkUser = zod.object({
    userName : zod.string(),
    password : zod.string()
})

router.post("/userSignin" , async(req,res)=>{
    let {success , error} = checkUser.safeParse(req.body)
    if(!success){
        return res.json({
            msg : "Enter a valid input",
            error : error.errors
        })
    }

    let {userName,password} = req.body

    try{
        let checker = await prisma.user.findUnique({
            where: {
                userName: userName
            }
        })

        if (checker) {
            return res.json({
                msg: "User Already exist"
            })
        }

        else {
          let userChecker = await prisma.user.create({
            data:{
                userName: userName,
                password: password
            }
            
          })

          let myChecker = userChecker.id
          console.log("This is the id :" + myChecker)
          let userid = jwt.sign({myChecker} , Secret_Code)

          res.json({
            token : userid,
            msg : "User created successfully"
          })

        }

    }

    catch(error){
        res.json({
            msg : "Something went wrong please check it ",
            myerror : error
        })
    }
   

})

module.exports = router