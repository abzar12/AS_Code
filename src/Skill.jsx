import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import image4 from "../src/assets/image/respo,sible.jpg"
import image2 from "../src/assets/image/skill.jpg";
import image3 from "../src/assets/image/database.jpg"
import image1 from "../src/assets/image/ux:ui.jpg"
import { FaComputer } from "react-icons/fa6";
import './Skill.css'

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
            Name: " Tools & Platforms",
            P1: "XAMPP, VS Code",
            P2: "Git & GitHub",
            P3: "Postman (API testing)"
        }
    ]


    return (
        <>
            <div className="section">
                    <div className="ac_container">
                        <h1 className=" text-3xl text-center font-[Lora] text-blue-600">COMPETENCES</h1>
                        <div className="ac_card   ">
                            <ul className="ac_list">
                            {
                                allSkill.map((menu) => (
                                    <li key={menu.ID} className=" " data-aos="fade-right">
                                        <div className="ac_anim">
                                            <img src={menu.img} key={menu.key} alt="" className="h-[200px] w-full mx-auto rounded-t-[15px]" />
                                        <div className="ac_text font-[Merriweather] bg-sky-900 rounded-b-[15px] border-blue-500" >
                                            <label htmlFor="" className="font-[Lora] text-[18px] font-bold">{menu.Name}</label>
                                            <div className=" ">
                                            <p className=" text-white font-light font-[Open Sans] text-[15px]"><span className="text-2xl text-white ">•</span> {menu.P1}</p>
                                            <p className=" text-white font-light font-[Open Sans] text-[15px]"><span className="text-2xl text-white ">•</span> {menu.P2}</p>
                                            <p className=" text-white font-light font-[Open Sans] text-[15px]"><span className="text-2xl text-white ">•</span> {menu.P3}</p>
                                            </div>
                                            
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