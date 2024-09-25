import { Navbar } from "../Navbar/Nav";
import Roadmap from "./dsaRoadmap.png"
import intro from "./introo.gif"
import codeforces from "./codeforces.png"
import lc from "./lc.png"
import gfgg from "./gfgg.png"
import { Link } from 'react-router-dom';


export function Mainpage(){
    return(
        <>
        <Navbar></Navbar>
        <div className="flex justify-center items-center h-[auto]  relative top-[30px]">
            <img src={Roadmap}></img>
        </div>

         <div className="flex justify-center  h-[auto] w-[auto]  relative top-[100px]">
            <h1 className="text-[60px]">About The Developer</h1>
         </div>

         <div className="flex justify-evenly items-center h-[500px] w-[auto] relative top-[100px]">

            <div className="h-[auto] border border-slate-600 rounded-lg p-14 w-[800px]">
               <p className="text-violet-900 font-bold">
                Hey, I’m Mohit Sati, a fellow developer from India. I made this site to share my personal journey with Data Structures and Algorithms (DSA). I'm not a pro or anything—just documenting my progress and sharing the questions I’ve come across.<br></br><br></br>
                I’ll be posting my experiences as I learn and improve, and this space will act as a sort of DSA diary where I’ll share the ups and downs of the journey. It’s more about growth than perfection, and I hope it’ll help others who are also working through similar challenges. <br></br><br></br>
               Feel free to follow along, try the questions, and join me on this path. Together, we can learn and get better at DSA step by step!
               </p>
            </div>

            <div className="h-[300px] ">
              <img className="h-[300px] rounded-lg" src={intro}></img>
            </div>

         </div>

         <div className="relative top-[200px] flex justify-center items-center text-[60px] font-bold">
            <h1>My Coding Profiles</h1>
         </div>

        <div className="relative top-[300px] h-[auto] w-[auto] flex justify-center items-center gap-16">
           <Link to={"https://leetcode.com/u/MackWalker/"}><img className="h-[190px] w-[190px] border border-slate-700 rounded-lg p-4" src={lc}/></Link>
           <Link to={"https://codeforces.com/profile/Mohit_Sati"}><img className="h-[190px] w-[190px] border border-slate-700 rounded-lg p-4" src={codeforces}/></Link>
           <Link to={"https://www.geeksforgeeks.org/user/mohitsatipop/"}><img className="h-[190px] w-[190px] border border-slate-700 rounded-lg p-4" src={gfgg}/></Link>
        </div>

        </>
    )
}