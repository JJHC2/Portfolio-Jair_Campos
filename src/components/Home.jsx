import React from "react";
import { FaReact, FaNode, FaLaravel } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import Jair from "../assets/images/jaircampos.jpg";
import SkillCard from "./SkillCard";
const Home = () => {
    const skills = [
        {
            name: "ReactJS",
            icon: FaReact,
            borderColor: "border-blue-200",
            shadowColor: "text-blue-500",
        },
        {
            name: "NodeJS",
            icon: FaNode,
            borderColor: "border-green-200",
            shadowColor: "text-green-500",
        },
        {
            name: "Laravel",
            icon: FaLaravel,
            borderColor: "border-red-200",
            shadowColor: "text-red-500",
        },
        {
            name: "MySQL",
            icon: SiMysql,
            borderColor: "border-yellow-200",
            shadowColor: "text-yellow-500",
        }
    ];

    return (
        <section className="py-16 md:py-24" id="home">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center gap-0 md:gap-8">
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 className="text-4xl font-bold text-slate-900 font-serif mb-4 md:mt-0 mt-6">
                            Jair Josue Heras Campos
                        </h1>
                        <p className="text-4xl font-semibold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] mb-4">
                            Desarrollador Web Full Stack JR
                        </p>
                        <p className="text-slate-800 font-medium max-w-2xl leading-relaxed">
                            ✌️¡Hola! Soy Jair Josue Heras Campos un joven desarrollador egresado
                            cuento con una trayectoria de 1 año 5 meses en el desarrollo web.
                            Mi especialidad es crear aplicaciones web que cumplan con los
                            estandares modernos asi como con la experiencia del usuario. Me
                            encanta el desarrollo Full Stack y siempre estoy buscando aprender
                            nuevas tecnologias y mejorar mis habilidades.
                        </p>
                        <h5 className="text-slate-800 font-medium max-w-2xl leading-relaxed">Estas son algunas de las tecnologias que e utilizado a largo de mi trayectoria:</h5><br></br>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                            {skills.map((skill, index) => (
                                <SkillCard
                                    key={index}
                                    Icon={skill.icon}
                                    name={skill.name}
                                    borderColor={skill.borderColor}
                                    shadowColor={skill.shadowColor}
                                />
                            ))}
                        </div>
                    </div>
                
                    <div className="md:w-1/3 mt-8 md:mt-0 flex justify-end border-radius: 50px;">
                        <img src={Jair} alt="Jair Campos - Desarrollador"
                            className="w-full max-w-[350px] h-auto rounded-lg shadow-lg"
                            title="Jair Campos" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
