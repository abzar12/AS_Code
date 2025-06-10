
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {

    return (
        <>
            <div className="container border-t-2 border-gray-400 px-5">
                <div className="footer h-20 sm:h-14 items-center my-auto sm:flex justify-between">
                    <div className="my-2 ml-5 sm:text-[18px] ">© 2025 | abouzari.vercel.app</div>

                    <div className="icon flex gap-12  justify-between  px-5 ">
                        <FaFacebook className=" text-3xl hover:border-blue-600 hover:text-blue-600 transition duration-300 ease-in border rounded-full p-1" />
                        <FaTiktok className=" text-3xl hover:border-blue-600 hover:text-blue-600 transition duration-300 ease-in border rounded-full p-1" />
                        <a href="#"><FaWhatsapp className=" text-3xl hover:border-blue-600 hover:text-blue-600 transition duration-300 ease-in border rounded-full p-1" /></a>
                        <FaTwitter className=" text-3xl hover:border-blue-600 hover:text-blue-600 transition duration-300 ease-in border rounded-full p-1" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;