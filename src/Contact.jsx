import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { useForm} from '@formspree/react';
import { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import React from "react";
import './assets/components/contact.css'

function Contact() {
    useEffect(() => {
            AOS.init({
              duration: 1500, // animation duration in ms
              once: true      // animation only happens once on scroll
            });
          }, []);
    const [state, handleSubmit] = useForm("manjynvj");
    const [formsuccess, SetFormsuccess] = useState(""); // initiate the form 
    const [formData, SetFormData] = useState({
        Nom: "",
        Email: "",
        Message: ""
    })
    // function to manage form
    const handleForm = (e) => {
        SetFormData({ ...formData, [e.target.name]: e.target.value })
    }
    // after getting the value to check the information getting
    const validateForm = () => {
        const ValidName = /^[a-zA-Z._+]+$/;
        const ValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const ValidMessage = /^.{5,}$/;

        // removing the white space 
        return (
            ValidName.test(formData.Nom.trim()) &&
            ValidEmail.test(formData.Email.trim()) &&
            ValidMessage.test(formData.Message.trim())
        );
    };

    // function for success or error
    const customSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            await handleSubmit(e);
            if (state.succeeded) {
                SetFormsuccess("Success");
                SetFormData({ Nom: "", Email: "", Message: "" });
            }
        } else {
            SetFormsuccess("Error");
        }
    };
    const Tasks = [{
        id: 1,
        title: "Combien coûte un site web sur mesure ?",
        content: "Le tarif d’un site web sur mesure dépend de plusieurs facteurs comme le design, le nombre de pages et les fonctionnalités spécifiques. En moyenne, un site vitrine personnalisé coûte entre 75 000 F CFA et 150 000 F CFA. Un devis est établi selon les besoins de chaque projet.",
    },
    {
        id: 2,
        title: "Pourquoi faire appel à un développeur freelance ?",
        content: "Un freelance offre plus de flexibilité, une relation directe et souvent un meilleur rapport qualité-prix qu’une agence. Vous travaillez avec une seule personne de confiance, qui vous accompagne de la conception à la mise en ligne.",
    },
    {
        id: 3,
        title: "Comment choisir un bon développeur web ?",
        content: "Pour trouver un bon développeur, assurez-vous qu’il maîtrise les technologies adaptées à votre projet, qu’il communique bien et respecte les délais. Vérifiez son portfolio et ses références, et choisissez quelqu’un qui comprend vos besoins et propose des solutions sur mesure",
    }]
    const [openTask, setOpenTasks] = useState(null);
    const handletask = (id) => {
        setOpenTasks(openTask === id ? null : id);
    }

    return (
        <>
            <div className="section py-10">
                <div className="container w-full px-5 mx-auto">
                    <div className="row mx-auto ">
                        <h1 className="text-3xl font-[Lora] text-blue-600 text-center">CONTACTEZ NOUS</h1>
                        <div className="p-5 max-w-[800px] mx-auto">
                            <p className="font-[Lora] text-[17px]" data-aos="zoom-in-up">Vous cherchez à travailler avec un développeur web freelance pour votre projet ? Que ce soit pour un site sur mesure, une refonte, une application web ou une boutique e-commerce, je suis là pour vous accompagner.Je collabore avec des startups, Petites et Moyennes Entreprises et indépendants pour créer des sites modernes, efficaces et adaptés à leurs objectifs</p>
                        </div>
                        <div className="px-auto ">
                            <div className=" md:grid grid-flow-col gap-5 lg:gap-32">

                                <div className="lg:pl-16">
                                    <h3 className='text-2xl text-center mb-10 underline'>Questions fréquentes</h3>
                                    {
                                        Tasks.map((Task) => (
                                            <div className="mb-5 p-2 max-w-[600px] bg-white/30 transition duration-300 hover:bg-white/40 rounded-lg " data-aos="fade-right" key={Task.id}>
                                                <div onClick={() => handletask(Task.id)} className=' cursor-pointer font-bold'><h2>{Task.title}</h2></div>
                                                {
                                                    openTask === Task.id && (
                                                        <div className="pl-10 text-[15px]"><h2>{Task.content}</h2></div>
                                                    )

                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="w-full pt-5">
                                    <div className="ac_form w-[350px] shadow-[0_3px_5px_rgb(255,255,255,0.5)] mx-auto" data-aos="zoom-in-right">
                                        <form onSubmit={customSubmit} action={"https://formspree.io/f/manjynvj"} className='p-5'>
                                            <div className="text-left ac_input_contain ">
                                                <label htmlFor="prenom" className='text-white  mr-5 font-bold font-[Merriweather] '>Nom / Prenom :</label><br />
                                                <input className=' w-[250px] h-8 ml-10 py-1 px-2 mt-2 mb-7 rounded-lg text-gray-200 bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                                    value={formData.Nom}
                                                    onChange={handleForm}
                                                    type="text" name="Nom" placeholder='Nom complet' />
                                                {/* <ValidationError
                                                    prefix="Prenom"
                                                    field="prenom"
                                                    errors={state.errors}
                                                /> */}
                                            </div>
                                            <div className=" ac_input_contain">
                                                <label htmlFor="mail" className='text-white mr-5 font-bold font-[Merriweather] '>Email :</label><br />
                                                <input type="text" name="Email" placeholder='example@gmail.com' className=' w-[250px] h-8 ml-10 py-1 px-2 mt-2 mb-7 rounded-lg text-gray-200 bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500' value={formData.Email}
                                                    onChange={handleForm} />
                                                {/* <ValidationError
                                                    prefix="Email"
                                                    field="mail"
                                                    errors={state.errors}
                                                /> */}

                                            </div>

                                            <div className=" ac_input_contain">
                                                <label htmlFor="message" className='text-white mr-5 font-bold font-[Merriweather] '>Message :</label><br />
                                                <textarea name="Message" className='ml-10 w-[250px] h-28 py-1 px-3 mt-2 rounded-lg bg-white/20 resize-none text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500' value={formData.Message}
                                                    onChange={handleForm} >
                                                </textarea>
                                                {/* <ValidationError
                                                    prefix="Message"
                                                    field="message"
                                                    errors={state.errors}
                                                /> */}
                                            </div>
                                            <div className="text-right m-5">
                                                <button type="submit" disabled={state.submitting} className='w-16 h-7 border rounded text-white font-[Lora] transition duration-300 hover:bg-white/20 '>
                                                    Submit
                                                </button>
                                            </div>
                                            {
                                                formsuccess === "Success" && (
                                                    <div className="text-center">
                                                        <FaCheckCircle className='mx-auto text-3xl text-green-500'/>
                                                        <p className='text-green-500 text-[18px]'> Merci pour votre message ! Nous vous contacterons dans les plus brefs délais.</p>
                                                    </div>
                                                )
                                            }
                                            {
                                                formsuccess === "Error" && (
                                                    <div className="text-center">
                                                        <p className='text-red-400 text-[18px]'>Tous les champs doivent être remplis.</p>
                                                    </div>
                                                )

                                            }
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default Contact;