
import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
import React from "react";

function Contact() {
    const [state, handleSubmit] = useForm("manjynvj");
    if (state.succeeded) {
        return <p>Thanks for Conctact Us !</p>;
    }
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
                        <h1 className="text-2xl font-[Lora] text-blue-600 text-center Uppercase">CONTACTE NOUS</h1>
                        <div className="p-5 max-w-[800px] mx-auto">
                            <p className="font-[Lora] text-[17px]">Vous cherchez à travailler avec un développeur web freelance pour votre projet ? Que ce soit pour un site sur mesure, une refonte, une application web ou une boutique e-commerce, je suis là pour vous accompagner.Je collabore avec des startups, Petites et Moyennes Entreprises et indépendants pour créer des sites modernes, efficaces et adaptés à leurs objectifs</p>
                        </div>
                        <div className="px-auto ">
                            <div className=" md:grid grid-flow-col gap-32">
                                <div className="pl-16 ">
                                    <h3 className='text-3xl text-center mb-10 underline'>Questions fréquentes</h3>
                                    {
                                        Tasks.map((Task) => (
                                            <div className="mb-5 p-2 max-w-[600px] bg-white/30 transition duration-300 hover:bg-white/40 rounded-lg" key={Task.id}>
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
                                <div className="w-full">
                                    <div className="w-[350px] shadow-[0_3px_5px_rgb(255,255,255,0.5)] mx-auto">
                                        <form onSubmit={handleSubmit} action={"https://formspree.io/f/manjynvj"} className='p-5'>
                                            <div className="text-left">
                                                <label htmlFor="prenom" className='text-white  mr-5 font-bold font-[Merriweather] '>Nom / Prenom :</label><br />
                                                <input className=' w-[250px] h-8 ml-10 py-1 px-2 mt-2 mb-7 rounded-lg text-black bg-white/20' type="text" name="Prenom" id="prenom" placeholder='Prenom' />
                                                <ValidationError
                                                    prefix="Prenom"
                                                    field="prenom"
                                                    errors={state.errors}
                                                />
                                            </div>
                                            <div className="">
                                                <label htmlFor="mail" className='text-white mr-5 font-bold font-[Merriweather] '>Email :</label><br />
                                                <input type="text" name="Email" id="mail" placeholder='example@gmail.com' className=' w-[250px] h-8 ml-10 py-1 px-2 mt-2 mb-7 rounded-lg text-black bg-white/20' />
                                                <ValidationError
                                                    prefix="Email"
                                                    field="mail"
                                                    errors={state.errors}
                                                />
                                            </div>

                                            <div className="">
                                                <label htmlFor="message" className='text-white mr-5 font-bold font-[Merriweather] '>Message :</label><br />
                                                <textarea name="Message" id="message" className='ml-10 w-[250px] h-28 py-1 px-3 mt-2 rounded-lg bg-white/20'>
                                                </textarea>
                                                <ValidationError
                                                    prefix="Message"
                                                    field="message"
                                                    errors={state.errors}
                                                />
                                            </div>
                                            <div className="text-right m-5">
                                                <button type="submit" disabled={state.submitting} className='w-16 h-7 border rounded text-white font-[Lora] transition duration-300 hover:bg-white/20 '>
                                                    Submit
                                                </button>
                                            </div>

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