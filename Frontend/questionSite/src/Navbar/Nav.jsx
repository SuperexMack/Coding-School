import NewProfile from "./New_lc.jpg"

export function Navbar(){
   return(
    <>

    <div className="h-[150px] flex items-center border-b border-slate-500 cursor-pointer">

        <div className="relative left-11">
          <img src={NewProfile} className="h-[130px] w-[130px] rounded-full"></img>
        </div>

        <div className="w-[300px] absolute right-[20rem] text-[30px]">

            <ul className="flex justify-center items-center gap-7">
              <li className="hover:relative left-4">Home</li>
              <li className="hover:relative left-4">About</li>
              <li className="hover:relative left-4">Support</li>
              <li className="hover:relative left-4">Visit</li>
            </ul>
        </div>

    </div>

    </>
   )
}