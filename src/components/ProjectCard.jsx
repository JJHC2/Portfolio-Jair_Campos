import React, { useState } from "react";
import getImgUrl from "../utils/GetImgUrl";

const ProjectCard = ({ project }) => {
    // Verificamos si image es un arreglo (múltiples fotos) o un string (una sola)
    const imagenes = Array.isArray(project.image) ? project.image : [project.image];
    const [currentIdx, setCurrentIdx] = useState(0);
    console.log("Intentando...",getImgUrl(imagenes[0]));

    const next = (e) => {
        e.stopPropagation();
        setCurrentIdx((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
    };

    const prev = (e) => {
        e.stopPropagation();
        setCurrentIdx((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
    };

    return (
        <div className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 transition-all duration-300 hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(250,204,21,0.15)] hover:-translate-y-2">
            
           
            <div className="relative h-1/2 overflow-hidden bg-black">
                <img
                    src={getImgUrl(imagenes[currentIdx])}
                    alt={project.alt || project.nombre}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />

                {imagenes.length > 1 && (
                    <>
                        <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                            <button onClick={prev} className="p-1.5 rounded-full bg-black/60 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <button onClick={next} className="p-1.5 rounded-full bg-black/60 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>
                        {/* Indicadores de posición (Puntitos) */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                            {imagenes.map((_, i) => (
                                <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === currentIdx ? 'w-5 bg-yellow-500' : 'w-1.5 bg-white/30'}`} />
                            ))}
                        </div>
                    </>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-transparent to-transparent opacity-70" />
            </div>

            <div className="p-5">
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">
                    {project.nombre}
                </h3>
                <p className="text-sm text-zinc-400 mt-2 mb-4  leading-relaxed">
                    {project.descripcion}
                </p>

                {project.tecnologias && (
                    <div className="mt-4">
                        <h4 className="text-[10px] uppercase tracking-[0.2em] text-yellow-500 font-black mb-3 opacity-80">
                            Stack Técnico
                        </h4>
                       
                        <div className="grid grid-cols-2 gap-2">
                            {project.tecnologias.map((tech, index) => (
                                <div key={index} className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-zinc-800/40 border border-zinc-700/50 group-hover:border-yellow-500/20 transition-all">
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.6)]" />
                                    <span className="text-[11px] font-medium text-zinc-300 truncate">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

           
            <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
    );
};

export default ProjectCard;