import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import image4 from "../src/assets/image/respo,sible.jpg"
import image2 from "../src/assets/image/skill.jpg";
import image3 from "../src/assets/image/database.jpg"
import image1 from "../src/assets/image/ux:ui.jpg"

function Skill() {
     useEffect(() => {
            AOS.init({
              duration: 1500, // animation duration in ms
              once: true      // animation only happens once on scroll
            });
          }, []);
    const allSkill = [
        {
            ID: 1,
            img: image4,
            Name: "🖥️ Front-End Development",
            P1: "HTML5, CSS3, JavaScript (ES6+)",
            P2: "Responsive Design (Flexbox, CSS Grid)",
            P3: "Frameworks/Libraries: React.js, Bootstrap, Tailwind CSS, jQuery",
        },
        {
            ID: 1,
            img: image2,
            Name: "🛠️ Back-End Development",
            P1: "PHP (vanilla and OOP)",
            P2: "Laravel framework",
            P3: "Node.js (basic knowledge, if applicable)"
        },
        {
            ID: 1,
            img: image3,
            Name: "🗄️ Database Management",
            P1: "MySQL",
            P2: "phpMyAdmin",
            P3: " Oracle"
        },
        {
            ID: 1,
            img: image1,
            Name: "🧰 Tools & Platforms",
            P1: "XAMPP, VS Code",
            P2: "Git & GitHub",
            P3: "Postman (API testing)"
        }
    ]


    return (
        <>
            <div className="section">
                    <div className="w-full p-15">
                        <h1 className=" text-3xl text-center font-[Lora] pb-5 text-blue-600">COMPETENCES</h1>
                        <div className="   md:ml-20">
                            <ul className="grid grid-cols-[repeat(auto-fit,_minmax(2,_2fr))] md:grid-cols-none gap-10 text-left">
                            {
                                allSkill.map((menu) => (
                                    <li key={menu.ID} className=" md:pb-5 sm:border-none md:flex w-auto p-5" data-aos="fade-right">
                                        <img src={menu.img} key={menu.key} alt="" className="md:w-[350px] w-full text-left rounded-lg " />
                                        <div className=" font-[Merriweather] py-3 pl-3 md:p-0 bg-sky-950 md:bg-transparent rounded-e-lg w-full border-l-8 border-blue-500 md:border-none md:w-[500px] md:mx-5" >
                                            <label htmlFor="" className="text-2xl md:text-3xl lg:mr-5 font-bold font-[Lora]">{menu.Name}</label>
                                            <div className=" ">
                                            <p className=" text-white font-light font-[Open Sans]"><span className="text-2xl text-white ">•</span> {menu.P1}</p>
                                            <p className=" text-white font-light font-[Open Sans]"><span className="text-2xl text-white ">•</span> {menu.P2}</p>
                                            <p className=" text-white font-light font-[Open Sans]"><span className="text-2xl text-white ">•</span> {menu.P3}</p>
                                            </div>
                                            
                                        </div>

                                    </li>
                                ))
                            }
                        </ul>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default Skill;