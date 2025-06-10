import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import imageProfile from "/src/assets/image/abzar2.png";
import './assets/components/abou.css';
function Hero() {
    return (
        <>
            <section className="ac_section pb-5">
                <div className="container lg::h-[600px] my-auto p-2 gap-5 lg:grid lg:grid-cols-2">
                    <div className="flex items-center">
                        <div className=" md:px-10 px-5">
                            <h1 className="pt-10 lg:pt-0 text-white text-4xl font-[Merriweather]">Abzar Camara</h1>
                            <div className=" ">
                                <label className="animate-bounce-slow ml-10 text-1xl text-blue-500">Full stack Developper</label>
                                <p className="py-5 px-2 text-[12px] md:text-[18px]">
                                    Je conçois des applications web complètes, du design frontend à l'architecture backend.
                                    Passionné par le code propre, la performance et l'expérience utilisateur.
                                </p>
                                <div className=" px-5 flex justify-between md:gap-16 bg-transparent">
                                    <a href="#"><FaWhatsapp className=" rounded-full text-4xl border border-[rgb(37,211,102)] text-[rgb(37,211,102)]  hover:text-[rgb(37,211,102)] hover:shadow-[1px_0px_25px_rgb(37,211,102)] cursor-pointer transition duration-300 ease-in" /></a>
                                    <FaTiktok className="cursor-pointer rounded-full p-1 text-black  bg-[rgb(68,80,172)] border border-[rgb(68,80,172)]  hover:border-[rgb(68,80,172)]  hover:shadow-[1px_0_25px_rgb(6,0,172)] sm:hover:bg-[rgb(68,80,172)] text-4xl hover:text-[rgb(0,0,0)] transition duration-300 ease" />
                                    <FaFacebook className="text-4xl border p-1  border-[rgb(24,114,242)] text-[rgb(24,114,242)] rounded-full hover:shadow-[1px_0_25px_rgb(24,114,242)] transition duration-300 ease-out" />
                                    <FaTwitter className="text-4xl text-[rgb(29,161,242)] border border-[rgb(29,161,242)] rounded-full p-1 hover:shadow-[1px_0_25px_rgb(29,161,242)] transition duration-300 ease" />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="img_container h-[400px] w-auto  max-sm:w-96 sm:w-96 mt-24 mx-auto overflow-hidden">
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