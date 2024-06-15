import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Menu } from "../constants";


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-10 flex flex-wrap justify-between items-center">
        <a href="/home">
            <h2 className=" font-bold text-4xl">Makaan</h2>
        </a>
        <button onClick={()=> setIsOpen(!isOpen)} className="p-2 rounded-lg lg:hidden">
            <RxHamburgerMenu size={25}/>
        </button>
        <div className={`${!isOpen} && hidden w-full lg:block lg:w-auto`}>
            <ul className="lg:space-x-4 flex flex-col bg-gray-50 border border-gray-50 
            text-center rounded-lg p-6 text-lg lg:dark:text-white">
                {
                    Menu.map((elem) =>(
                        <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded-sm " 
                        key={elem}>{elem}
                        </li>
                    ))
                }
            </ul>
        </div>
    </nav>
  )
}

export default Nav