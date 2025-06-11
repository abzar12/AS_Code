import React from "react";

function About() {
    return (
        <>
            <div className="section mx-auto">
                <div className="container m-auto lg:flex justify-center items-center text-center">
                    <div className="text-left bg-slate-700/30 lg:w-[1100px] m-4 lg:px-15 px-0 lg:pb-15 rounded-lg shadow-[1px_0_10px_rgba(255,255,255,0.6)] ">
                        <div className="text-left p-5 lg:mx-20 ">
                            <h1 className="text-3xl text-center font-[Lora] pb-5 text-blue-600">À PROPOS DE NOUS</h1>
                            <p className="mb-5 font-[Merriweather] text-base/7 text-gray-300">
                            <b className="text-white uppercase"> Abzar Camara</b> je suis <strong className="text-white">développeur full-stack freelance</strong> , spécialisé dans la création de solutions web complètes, performantes et adaptées aux besoins de mes clients. De la conception de l’interface utilisateur <b className="text-white">UI/UX</b> au développement du back-end, je prends en charge chaque étape d’un projet digital avec rigueur et créativité.</p>
                            <p className="mb-5 font-[Merriweather] text-base/7 text-gray-300">
                                Avec une solide expérience en développement front-end <b className="text-white">HTML, CSS, JavaScript, React</b> et back-end <b className="text-white"> Node.js, PHP, Laravel, MySQL,</b> je développe des applications web dynamiques, sécurisées et évolutives.
                            </p>
                            <p  className="mb- font-[Merriweather] text-base/7 text-gray-300">
                            {/*<span class="text-blue-500 mr-2">★</span>*/}
                                Je propose également des services en montage vidéo et en retouche graphique <b className="text-white">Photoshop</b>, ce qui me permet d’offrir des solutions complètes en communication visuelle pour mes clients — de la création de leur site à la production de contenus engageants <br />
                                Je suis disponible pour des missions freelance, des collaborations ponctuelles ou des projets à long terme.
                                N’hésitez pas à me contacter pour discuter de votre projet.
                            </p>
                        </div>
                        {/* <div className="">
                            <p>
                                Mes compétences clés : <br/>

                                Développement web full-stack (site vitrine, e-commerce, apps sur-mesure) <br />

                                UI/UX design : interfaces intuitives et expérience utilisateur optimisée <br />

                                Intégration et responsive design <br />

                                Montage vidéo et animation pour le web <br />

                                Création et retouche d’éléments graphiques (Photoshop) <br />

                            </p>
                        </div> */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default About;