import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Pimg1 from "../src/assets/image/Gestion.jpg";
import { FaEye } from "react-icons/fa";


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
            Link: "https://abouzari.lovestoblog.com/",
            image: Pimg1,
            h1: "Complete School Management Portal with Admin Dashboard",
        },
        {
            id: 2,
            Link: "https://as-code.wuaze.com/search&filter/",
            image: "filter.png",
            h1: "RESEACH ITEM OR FILTER",
        },
        {
            id: 3,
            Link: "https://as-code.wuaze.com/To-do-list/To-do_list.html",
            image: "to-do.png",
            h1: "Vanilla JS To-Do App with Local Storage",
        },
        {
            id: 4,
            Link: "https://abzar12.github.io/abouzari-sweat-food/",
            image: "restaurant.png",
            h1: "Restaurant SWEAT-MEAL",
        },
        {
            id: 5,
            Link: "https://as-code.wuaze.com/index.html",
            image: "formcontact.png",
            h1: "Let’s talk about your website — contact us here",
        },
        {
            id: 6,
            Link: "https://abzar12.github.io/End-of-day-Challenges/Drum%20kit/drum.html",
            image: "drum.png",
            h1: "KeyBoardBeats",
        },
        {
            id: 7,
            Link: "https://as-code.wuaze.com/image-slide/image-slide.html",
            image: "imageSlide.png",
            h1: "Image Slide Example",
        },
        {
            id: 8,
            Link: "https://abzar12.github.io/End-of-day-Challenges/playing-css&js/var.html",
            image: "var.png",
            h1: "Customizing Styles with JavaScript and CSS Root Variables",
        }
    ]
    return (
        <>
            <div className="conatainer">
                <div className="">
                    <h1 className="text-3xl font-[Lora] text-blue-600 text-center">PROJETS</h1>
                    <div className="ac-items" >
                        {
                            project.map((ele) => (
                                    <div className="item" >
                                        <ul className="">
                                            <a href={ele.Link} className="z-50" target="_blank" rel="noopener noreferrer" data-aos="fade-right">
                                            <li key={ele.id} className="">
                                                <img className="" src={ele.image} key={ele.id} alt="Gestion_Etudiant" />
                                                    <div className="">
                                                        <h1 className="font-[Lora] text-center">{ele.h1}</h1>
                                                    </div>
                                                     < FaEye className="my-eye" />
                                            </li>
                                                </a>
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