
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {FaGithub} from 'react-icons/fa'

function Footer() {

    return (
        <>
            <div className="container border-t-2 border-gray-400 px-5 w-full">
                <div className="footer h-20 sm:h-14 items-center my-auto sm:flex justify-between">
                    <div className="my-2 ml-5 sm:text-[18px] ">© 2025 | abouzari.vercel.app</div>

                    <div className="icon flex gap-12  justify-between  px-5 ">
                        <FaFacebook className=" text-3xl hover:border-blue-600 hover:text-blue-600 transition duration-300 ease-in border rounded-full p-1" />
                        <a href="https://github.com/abzar12" target="_Blank" aria-label="Github profile"><FaGithub className=" text-3xl hover:border-blue-600 hover:text-blue-600 transition duration-300 ease-in border rounded-full p-1" /></a>
                        <a href="https://wa.me/23391716839?text=Hello%2C%20I'm%20interested%20in%20your%20services" target="_Blank" aria-label="Chat On Whatsapp"><FaWhatsapp className=" text-3xl hover:border-blue-600 hover:text-blue-600 transition duration-300 ease-in border rounded-full p-1" /></a>
                        <a href="https://www.linkedin.com/in/" target="_Blank" aria-label="Linkdin Profile"><FaLinkedin className=" text-3xl hover:border-blue-600 hover:text-blue-600 transition duration-300 ease-in border rounded-full p-1" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;