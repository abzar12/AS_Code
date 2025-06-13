import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Pimg1 from "../src/assets/image/Gestion.jpg";

function Project() {
    useEffect(() => {
                AOS.init({
                  duration: 1500, // animation duration in ms
                  once: true      // animation only happens once on scroll
                });
              }, []);
    const project = [
        {
            id: 1,
            Name: "Gestion Des Etudiants",
            Link: "https://abouzari.lovestoblog.com/",
            image: Pimg1,
            h1: "ENGLISH LANGUAGE LABORATORY",
            p: "A school management web app for the English Language Laboratory, built with HTML, CSS, and JavaScript. It includes a dashboard for teachers and admins to manage students and track their performance."
        },
        {
            id: 2,
            Name: "Gestion Des Etudiants",
            Link: "https://abouzari.lovestoblog.com/",
            image: Pimg1,
            h1: "ENGLISH LANGUAGE LABORATORY",
            p: "A school management web app for the English Language Laboratory, built with HTML, CSS, and JavaScript. It includes a dashboard for teachers and admins to manage students and track their performance."
        },
        {
            id: 3,
            Name: "Gestion Des Etudiants",
            Link: "https://abouzari.lovestoblog.com/",
            image: Pimg1,
            h1: "ENGLISH LANGUAGE LABORATORY",
            p: "A school management web app for the English Language Laboratory, built with HTML, CSS, and JavaScript. It includes a dashboard for teachers and admins to manage students and track their performance."
        }
    ]
    return (
        <>
            <div className="conatainer m-5">
                <div className="ac_row w-full  text-white p-4 rounded min-h-[300px]">
                    <h1 className="text-3xl font-[Lora] text-blue-600 text-center">PROJETS</h1>
                    <div className=" w-full  p-5 mx-auto" >
                        {
                            project.map((ele) => (
                                <div className="mx-auto mb-20 bg-[#001227] shadow-[0_0_30px_rgba(255,255,255,0.2)] max-w-[900px]" >
                                    <ul className="">
                                        <li key={ele.id} className="" >
                                            <a href={ele.Link} className="mx-auto sm:flex" target="_blank" rel="noopener noreferrer" data-aos="fade-right"><img className="sm:max-w-[350px] " src={ele.image} key={ele.id} alt="Gestion_Etudiant" />
                                                <div className=" mx-5 sm:mt-5">
                                                    <h1 className="font-[Lora] underline font-bold text-1xl md:text-2xl ">{ele.h1}</h1>
                                                    <p className=" font-[Roboto] text-gray-400 ">{ele.p}</p>
                                                </div>
                                            </a>

                                        </li>
                                    </ul>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Project;