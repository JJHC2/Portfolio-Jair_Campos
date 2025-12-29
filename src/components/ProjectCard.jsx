import React, { useState } from "react";
import getImgUrl from "../utils/GetImgUrl";

const ProjectCard = ({ project }) => {
    const imagenes = Array.isArray(project.image) ? project.image : [project.image];
    const [currentIdx, setCurrentIdx] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

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
            
           
            <div className="relative h-80 overflow-hidden bg-black cursor-zoom-in" onClick={() => setIsOpen(true)}>
                <img
                    src={getImgUrl(imagenes[currentIdx])}
                    alt={project.alt || project.nombre}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />

                
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <span className="text-white text-xs font-bold bg-yellow-500/80 px-3 py-1 rounded-full">Ampliar Imagen </span>
                </div>

               
                {imagenes.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity z-30">
                        <button
                            onClick={prev}
                            className="p-1.5 rounded-full bg-black/60 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all shadow-lg pointer-events-auto"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            onClick={next}
                            className="p-1.5 rounded-full bg-black/60 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all shadow-lg pointer-events-auto"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                )}
                
                
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-70 z-20 pointer-events-none" />
            </div>

            <div className="p-5">
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors">
                    {project.nombre}
                </h3>
                <p className="text-sm text-zinc-400 mt-2 mb-4 leading-relaxed">
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

   
            {isOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
                    onClick={() => setIsOpen(false)}
                >
                    <button
                        className="absolute top-5 right-5 text-white hover:text-yellow-500 z-[110]"
                        onClick={() => setIsOpen(false)}
                    >
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <img
                        src={getImgUrl(imagenes[currentIdx])}
                        className="max-w-full max-h-full rounded-lg shadow-2xl transition-all duration-300"
                        alt="Preview"
                        onClick={(e) => e.stopPropagation()} 
                    />
                </div>
            )}
        </div>
    );
};

export default ProjectCard;