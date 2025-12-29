import React from "react";
import Yo from "../assets/images/Yo.jpg";

const About = () => {
    return (
        <section id="about" className="py-16 bg-[#FAFAFA]">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-primary mb-6 text-center">
                    Acerca de Mi
                </h1>
                <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-0">
                    <div className="md:w-1/4 mb-8 md:mb-0 flex justify-center">
                        <div className="rounded-full overflow-hidden shadow-xl">
                            <img
                                src={Yo}
                                alt="Jair Campos - Desarrollador Full Stack"
                                className="w-48 rounded-full h-48 object-cover border-4 border-primary"
                            />
                        </div>
                    </div>

                    <div className="md:w-2/3 md:px-8">
                        <div className="text-[#333333]">
                            <p className="mb-4 text-justify">
                                Mi formación técnica inició en la Universidad Tecnologica del Valle de Toluca (UTVT), donde desarrollé una sólida base en lógica y resolución de problemas.
                                Mi verdadera pasión la encontré en el mundo del <strong>software</strong>, lo que me llevó a dar lo mejor de mi durante 3 años y medio de carrera para poder
                                graduarme como Ingeniero en Desarrollo y Gestión de Software en abril de 2025.
                            </p>
                            <p className="mb-4 text-justify">
                                Un factor clave en mi crecimiento ha sido que a los 19 años obtuve mi primera
                                oportunidad profesional, lo que me permitió desarrollar una mentalidad de responsabilidad y trabajo en equipo mucho antes de
                                terminar mis estudios. Esta experiencia previa me dio la disciplina necesaria para gestionar proyectos reales y entender las necesidades del entorno productivo.
                            </p>
                            <p className="mb-4 text-justify">
                                Actualmente a mis 22 años, combino esa curiosidad por cómo funcionan las cosas con la capacidad de construir aplicaciones web modernas.
                                Tras egresar en abril de 2025, he dedicado estos últimos meses a perfeccionar mi stack tecnológico y a desarrollar proyectos que reflejan
                                mi compromiso con la calidad y el aprendizaje continuo. Actualmente, estoy en busca una gran oportunidad profesional donde
                                pueda aportar mi energía,  mi capacidad de adaptación y mis conocimientos en el desarrollo Full Stack."
                            </p>
                            <p className="text-justify ">
                                Mi meta es seguir construyendo software que impacte positivamente a los usuarios. Estoy abierto a oportunidades como
                                Desarrollador Full Stack donde la calidad del código y la experiencia de usuario sean la prioridad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;