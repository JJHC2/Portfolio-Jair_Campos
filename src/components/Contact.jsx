import React from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp,FaInstagram, FaTiktok, FaTwitter, FaFacebook } from 'react-icons/fa';

const Contact = () => {
    const contactLinks = [
        {
            id: 1,
            title: "Email",
            value: "jaircampos468@gmail.com",
            icon: <FaEnvelope className="text-4xl text-yellow-500" />,
            link: "mailto:jaircampos468@gmail.com",
            color: "hover:border-yellow-500"
        },
        {
            id: 2,
            title: "LinkedIn",
            value: "Conectar en LinkedIn",
            icon: <FaLinkedin className="text-4xl text-blue-600" />,
            link: "www.linkedin.com/in/jair-campos-772976338",
            color: "hover:border-blue-600"
        },
        {
            id: 3,
            title: "GitHub",
            value: "Ver mis proyectos",
            icon: <FaGithub className="text-4xl text-gray-400" />,
            link: "https://github.com/JJHC2", 
            color: "hover:border-white"
        },
        {
            id: 4,
            title: "WhatsApp",
            value: "+52 722 806 5372", 
            icon: <FaWhatsapp className="text-4xl text-green-500" />,
            link: "https://wa.me/527228065372",
            color: "hover:border-green-500"
        },
        {
            id: 5,
            title:"instagram",
            value: "Contactame en Instagram",
            icon: <FaInstagram className="text-4xl text-pink-500" />,
            link: "https://www.instagram.com/jaircampo_26?igsh=MXVpaTlnamJjZjRqeQ==",
            color: "hover:border-pink-500"
        },
        {
            id:6,
            title:"Tik Tok",
            value: "Contactame en Tik Tok",
            icon: <FaTiktok className="text-4xl text-pink-500" />,
            link: "https://www.tiktok.com/@jair_campos26?_r=1&_t=ZS-92dUUnk9j5o",
            color: "hover:border-pink-500"
        },
        {
            id:7,
            title: "X (Twitter)",
            value: "Contactame en X",
            icon: <FaTwitter className="text-4xl text-blue-400" />,
            link: "https://x.com/PabloPepe20",
            color: "hover:border-blue-400"
        },
        {
            id:8,
            title:"Facebook",
            value: "Contactame en Facebook",
            icon: <FaFacebook className="text-4xl text-blue-700" />,
            link: "https://www.facebook.com/jair.campos.7540",
            color: "hover:border-blue-700"
        }
    ];

    return (
        <section id="contact" className="w-full min-h-screen bg-linear-to-b from-black to-gray-900 py-20 text-white">
            <div className='container mx-auto px-6 max-w-6xl'>

                <div className='mb-16 text-center'>
                    <h2 className='text-4xl md:text-5xl font-extrabold text-white mb-4'>
                        ¿Hablamos? <span className='text-yellow-500'>Contáctame</span>
                    </h2>
                    <div className="h-1 w-20 bg-yellow-500 mx-auto rounded-full"></div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {contactLinks.map((item) => (
                        <a
                            key={item.id}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`bg-gray-900/50 border-2 border-transparent p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-2 ${item.color} hover:bg-gray-800 shadow-xl`}
                        >
                            <div className="mb-4">
                                {item.icon}
                            </div>
                            <h3 className='text-xl font-bold mb-2 text-white'>{item.title}</h3>
                            <p className='text-gray-400 text-sm break-all'>
                                {item.value}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Contact