import React, { useEffect, useState } from 'react'
import SkillCard from './SkillCard'
import { FaReact, FaNode, FaLaravel, FaJava, FaVuejs, FaGitlab, FaBootstrap,FaMicrosoft  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiMicrosoftTeamsLogoBold } from "react-icons/pi";
import { SiMysql, SiPostgresql, SiMongodb, SiJavascript, SiGit, SiHtml5, SiCss3, SiPhp, SiPostman, SiRender, SiHostinger } from "react-icons/si";

const Habilities = () => {
    const [Skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('Skills.json')
            .then(response => response.json())
            .then(data => {
                console.log(data);


                const iconMapping = {
                    FaReact: FaReact,
                    FaNode: FaNode,
                    FaLaravel: FaLaravel,
                    SiMysql: SiMysql,
                    SiPostgresql: SiPostgresql,
                    SiMongodb: SiMongodb,
                    SiJavascript: SiJavascript,
                    SiGit: SiGit,
                    SiHtml5: SiHtml5,
                    SiCss3: SiCss3,
                    SiPhp: SiPhp,
                    FaJava: FaJava,
                    SiPostman: SiPostman,
                    SiRender: SiRender,
                    SiHostinger: SiHostinger,
                    FaVuejs: FaVuejs,
                    FaGitlab: FaGitlab,
                    FaBootstrap: FaBootstrap,
                    RiTailwindCssFill: RiTailwindCssFill,
                    FaMicrosoft: FaMicrosoft,
                    PiMicrosoftTeamsLogoBold: PiMicrosoftTeamsLogoBold
                }

                const skillsWithIcons = data.map(skill => ({
                    ...skill,
                    icon: iconMapping[skill.icon]
                }));

                setSkills(skillsWithIcons);

            });
    })

    return (
        <section id="tecnologies" className="py-24 bg-[#121212]">
            <div className="container mx-auto px-6 max-w-6xl">


                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Tecnologías y <span className="text-blue-500">Herramientas</span>
                    </h2>
                    <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full">
                    </div>
                </div>
                <div className='mb-12 text-center'>
                    <p className='text-2xl text-amber-300 hover:text-amber-100 cursor-pointer font-semibold'>"Stack tecnológico y herramientas clave en mi experiencia como desarrollador."</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Skills.map((skill, index) => (
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
        </section>
    )
}

export default Habilities