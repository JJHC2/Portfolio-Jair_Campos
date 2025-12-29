import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

const Proyectos = () => {
    const [proyectosData, setProyectosData] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        fetch('/proyectos.json')
            .then((response) => response.json())
            .then((data) => {
                setProyectosData(data);
                setFilteredProjects(data);
            })
            .catch((error) => console.error('Error al cargar los proyectos:', error));
    }, []);

    const filterProjects = (category) => {
        setSelectedCategory(category);
        if (category === 'all') {
            setFilteredProjects(proyectosData);
        } else {
            setFilteredProjects(proyectosData.filter((project) => project.categoria === category));
        }
    };

    return (
        <section id="projects" className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl text-white font-bold text-center mb-4">
                    Mis <span className="text-yellow-500 font-black">Proyectos</span>
                </h2>
                <p className="text-zinc-500 text-center mb-12 max-w-xl mx-auto">
                    Una selección de mis trabajos como desarrollador Full Stack.
                </p>


                <div className="flex flex-wrap justify-center mb-16 gap-3">
                    <button
                        onClick={() => filterProjects("all")}
                        className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${selectedCategory === "all" ? "bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.3)]" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-yellow-500/50"}`}
                    >
                        Todos los Proyectos
                    </button>
                    <button
                        onClick={() => filterProjects("alfaparf")}
                        className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${selectedCategory === "alfaparf" ? "bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.3)]" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-yellow-500/50"}`}
                    >
                        AlfaParf Milano
                    </button>
                    <button onClick={() => filterProjects("uaemex")}
                        className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${selectedCategory === "uaemex" ? "bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.3)]" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-yellow-500/50"}`}>
                        UAEMEX
                    </button>
                    <button onClick={() => filterProjects("gobti")}
                        className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${selectedCategory === "gobti" ? "bg-yellow-500 text-black shadow-[0_0_20px_rgba(234,179,8,0.3)]" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-yellow-500/50"}`}>
                        Gob-Ti
                    </button>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.nombre || index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Proyectos;