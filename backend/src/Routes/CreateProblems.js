const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const zod = require("zod")
const express = require("express")
const UserAuth = require("../Middleware/UserAuth")
const router = express.Router()


const createQuestion = zod.object({
    title : zod.string(),
    link : zod.string()
})

router.post("/createProblem" , UserAuth , async(req,res)=>{


   let checkMyUser = req.user_id

   if(checkMyUser != 3){
    return res.json({
        msg :"You have no rights to create the questions"
     })
   }
    
   else{

    let {success} = createQuestion.safeParse(req.body)
    if(!success){
        return res.json({
            msg : "your data do not fit our requirement",
        })
    }
    else{
        try{
           let {title , link} = req.body
           let dataCreated = await prisma.topics.create({
            data:{
                title : title,
                link : link
            }
           })

           if(dataCreated){
            res.json({
                msg : "Data created Successfully"
            })
           }

        }
        catch(error){
           return res.json({
            msg : "Something went wrong while creating the data" , 
            error : error
           })
        }
    }
}
})

module.exports = router
