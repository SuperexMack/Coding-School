import { useEffect, useState} from "react"
import { Link } from 'react-router-dom';
import landing from "./landing.png"
export function Landing(){

    const [item , setItem] = useState("")
    const [count , setCount] = useState(0)

    // this is the change

    const contentArray = ["The Mack Coding School" , "Here you will Learn" , "Here you will connect" , "And All Set"]
    

   useEffect(()=>{
     const interval = setInterval(()=>{
       setItem(contentArray[count])
       setCount((prevCount)=> (prevCount+1)%contentArray.length)
     } , 800)
     return () => clearInterval(interval)
   },[count])
    

    return(
        <>
        <div className="h-screen w-full flex justify-center items-center bg-no-repeat bg-cover" style={{backgroundImage:`url(${landing})`}}>

            <div className=" h-[auto] w-[auto] flex flex-col justify-center items-center ">
                <h1 className="mmd:text-[80px] text-blue-500 font-extrabold cursor-pointer xs:text-[40px] text-[25px]">{item}</h1>
                <p className="mmd:text-[20px] xs:text-[15px] text-[9px] text-white">Let me code on Leetcode and let me push the important question here</p>
                <div className="flex flex-row space-x-7 relative top-7">
                <Link to="/mainpage"><button className="bg-red-500 mmd:p-4 xs:p-3 p-2 rounded mmd:text-[20px] xs:text-[15px] text-[12px] text-white ">Explore More</button></Link>
                <button className="bg-violet-500 mmd:p-4 xs:p-3 p-2 rounded mmd:text-[20px] xs:text-[15px] text-[12px] text-white">Support Me</button>
                </div>
            </div>
          
        </div>
        </>
    )
}
