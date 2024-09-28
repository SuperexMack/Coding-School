const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const zod = require("zod")
const path = require("path")
const express = require("express")
const UserAuth = require("../Middleware/UserAuth")
require("dotenv").config({path : path.resolve(__dirname , "../prisma/.env")})
let authId = process.env.SecretMember
const router = express.Router()


console.log("secretMember is :" + authId)


const createQuestion = zod.object({
    title : zod.string(),
})




router.post("/createProblem" , UserAuth , async(req,res)=>{


   let checkMyUser = req.user_id

   if(checkMyUser != authId){
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
           let {title} = req.body
           let dataCreated = await prisma.topics.create({
            data:{
                title : title,
                user:{
                    connect : {id:checkMyUser}
                }
            }
           })

           if(dataCreated){
            return res.json({
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



const createTopics = zod.object({
    questionName: zod.string(),
    link : zod.string()
})


// using the below we will able to add the links , Names of the question to the database

router.post("/addproblem" , UserAuth , async(req,res)=>{

    let checkMyUser = req.user_id

    if (checkMyUser != authId) {
        return res.json({
            msg: "You have no rights to create the questions"
        })
    }

    else {

        let { success } = createTopics.safeParse(req.body)
        if (!success) {
            return res.json({
                msg: "your data do not fit our requirement",
            })
        }
        else {
            try {
                let { questionName , link } = req.body
                let  questionData = await prisma.questions.create({
                    data: {
                        questionName: questionName,
                        link: link,
                        connect:{
                            topicInfo:{}
                        }
                    }
                })

                if (questionData) {
                    res.json({
                        msg: "Data created Successfully"
                    })
                }

            }
            catch (error) {
                return res.json({
                    msg: "Something went wrong while creating the data",
                    error: error
                })
            }
        }
    }
})


module.exports = router
