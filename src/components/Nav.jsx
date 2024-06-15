import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Menu } from "../constants";
import Button from "./Button";


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute z-10 lg:w-[1300px] inset-x-0 inset-y-10 mx-auto">
        <nav className="flex flex-wrap justify-between items-center w-full
          shadow h-auto rounded lg:bg-slate-200 px-6 pb-5 lg:py-0">
        <a href="/home">
            <h2 className=" font-bold text-4xl">Makaan</h2>
        </a>
        <button onClick={()=> setIsOpen(!isOpen)}
         className="p-2 rounded-lg lg:hidden dark:text-gray-400
         dark:hover:bg-gray-700 focus:ring-2 focus:ring-gray-200">
            <RxHamburgerMenu size={25}/>
        </button>
        <div className={`${!isOpen && "hidden" } w-full lg:block lg:w-auto`}>
            <ul className="lg:space-x-4 flex flex-col lg:flex-row  
             rounded-lg p-4 text-lg lg:dark:text-white">
                {
                    Menu.map((elem) =>(
                        <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded-sm uppercase" 
                        key={elem}>{elem}
                        </li>
                    ))
                }
                <Button link={"/"} title={"Login"} style={"px-5 rounded"}/>
                
            </ul>
            
        </div>
    </nav>
    </div>
  )
}

export default Nav