import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import imageProfile from "/src/assets/image/abzar2.png";

import './assets/components/abou.css';
function Hero() {
    useEffect(() => {
        AOS.init({
          duration: 1500, // animation duration in ms
          once: true      // animation only happens once on scroll
        });
      }, []);
    return (
        <>
            <section className="ac_section pb-5">
                <div className="container lg::h-[600px] my-auto p-2 gap-5 lg:grid lg:grid-cols-2">
                    <div className="flex items-center">
                        <div className=" md:px-10 px-5">
                            <h1 className="pt-10 lg:pt-0 text-white text-4xl font-[Merriweather]" data-aos="zoom-in">Abzar Camara</h1>
                            <div className=" ">
                                <label className="animate-bounce-slow ml-10 text-1xl text-blue-500">Développeur Full stack</label>
                                <p className="py-5 px-2 text-[12px] md:text-[18px]" data-aos="fade-right">
                                    Je conçois des applications web complètes, du design frontend à l'architecture backend.
                                    Passionné par le code propre, la performance et l'expérience utilisateur.
                                </p>
                                <div className=" px-5 flex justify-between md:gap-16 bg-transparent">
                                    {/* link of whatsapp */}
                                    <a href="https://wa.me/23391716839?text=Hello%2C%20I'm%20interested%20in%20your%20services" target="_Blank" aria-label="Chat On Whatsapp">
                                        <FaWhatsapp className=" rounded-full text-4xl border border-[rgb(37,211,102)] text-[rgb(37,211,102)]  hover:text-[rgb(37,211,102)] hover:shadow-[1px_0px_25px_rgb(37,211,102)] cursor-pointer transition duration-300 ease-in" />
                                    </a>
                                    {/* link of Link */}
                                    <a href="https://www.linkedin.com/in/" target="_Blank" aria-label="Linkdin Profile">
                                        <FaLinkedin className="text-4xl text-[rgb(29,161,242)] border border-[rgb(29,161,242)] rounded-full p-1 hover:shadow-[1px_0_25px_rgb(29,161,242)] transition duration-300 ease" />
                                    </a>
                                    {/* link of Facebook */}
                                    <a href="">
                                        <FaFacebook className="text-4xl border p-1  border-[rgb(24,114,242)] text-[rgb(24,114,242)] rounded-full hover:shadow-[1px_0_25px_rgb(24,114,242)] transition duration-300 ease-out" /> </a>
                                    {/* link of GitHub */}
                                    <a href="https://github.com/abzar12" target="_Blank" aria-label="Github profile">
                                        <FaGithub className="text-4xl text-[rgb(255,255,255)] border border-[rgba(255,255,255,0.5)] rounded-full p-1 hover:shadow-[1px_0_25px_rgb(255,255,255,0.5)] transition duration-300 ease" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="img_container h-[400px] w-auto sm:w-96 mt-24 mx-auto overflow-hidden">
                        <div className="image_box ">
                            <img src={imageProfile} alt="AbzarCamara" className="object-cover overflow-hidden" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;