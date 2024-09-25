const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const jwt = require("jsonwebtoken")
const zod = require("zod")
const express = require("express")
const router = express.Router()
const SAFE = "06062003"

const checkUser = zod.object({
    userName : zod.string().email(),
    password : zod.string()
})

router.post("/userSignin" , async(req,res)=>{
    let {suceess} = checkUser.safeParse(req.body)
    if(!suceess){
        return res.json({
            msg : "Enter a valid input"
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
          await prisma.user.create({
            userName : userName,
            password : password
          })
          
          let userid = jwt.sign({checker} , SAFE)

          res.json({
            token : userid,
            msg : "User created successfully"
          })

        }

    }

    catch{
        res.json({
            msg : "Something went wrong please check it "
        })
    }
   

})

module.exports = router