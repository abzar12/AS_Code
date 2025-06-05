import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
    const [open, setOpen] = React.useState(false);
    const handlopen = () => {
        setOpen(!open)
    }
    const Menu = [
        {
            id: 1,
            name: "Home",
            link: "/"
        },
        {
            id: 3,
            name: "Skills",
            link: "/abouzari/AS_code/skill"
        },
        {
            id: 2,
            name: "Projects",
            link: "/abouzari/AS_code/project"
        },
        
        {
            id: 4,
            name: "About",
            link: "/abouzari/AS_code/about"
        },
        
        {
            id: 5,
            name: "Contact",
            link: "/abouzari/AS_code/contact"
        }

    ]
    return (
        <div >
            <div className=" section sm:bg-transparent bg-[rgb(15,33,77)] ">
                <div className="container mx-auto " >
                    <div className="hidden sm:flex  justify-center items-center h-[50px] ">
                        <ul className="flex gap-8 ">
                            {
                                Menu.map((menu) => (
                                    <li key={menu.id} className=" transition duration-900 ease text-center">
                                        <a href={menu.link} className=" text-[rgb(255,255,255)] transition-All ease duration-75 hover:pb-2 hover:text-gray-500 border-blue-500 hover:border-b-2 font-[Lora] text-lg"> {menu.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/*Responsible navbar */}
                    <div className="sm:hidden h-[50px]  border-b border-white">
                        <div className="flex items-center mx-5 py-3 justify-end">
                            <button onClick={handlopen} ><FaBars className="text-2xl text-left" /></button>
                        </div>
                        {open && (
                            <div className="flex justify-center  h-[150px] z-50 text-center">
                                <ul className=" gap-8 absolute border-t border-white bg-[rgb(15,33,77)] w-full">
                                    {
                                        Menu.map((menu) => (
                                            <li key={menu.id} className=" transition duration-900 ease text-center">
                                                <Link to={menu.link} className=" text-[rgb(255,255,255)] transition-All ease duration-75 hover:text-gray-500 font-[Lora] text-lg"> {menu.name}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
