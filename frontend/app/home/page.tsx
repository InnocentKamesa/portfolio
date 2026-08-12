"use client"

import { Badge, Wrench, Terminal, ChartLine } from "lucide-react";
import { ProjectCard, ServiceCard } from "../components/cards";
import { InfoDisplay, SectionUnderline, SkillDisplay, Spinner } from "../components/displays";
import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiExpress, SiNextdotjs, SiPostgresql } from "react-icons/si";
import type { IconType } from "react-icons";

type Badge = {
    title: string;
    logo: IconType;
};

export default function HomePage() {
    const el = useRef<HTMLSpanElement | null>(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (!el.current) return;


        const typed = new Typed(el.current, {
            strings: ['Full-Stack Developer', 'Data Scientist', 'CyberSecurity Specialist',],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, []);

    const portfolioBatches: Badge[] = [
        { title: "Next.js", logo: SiNextdotjs },
        { title: "TypeScript", logo: SiTypescript },
    ];

    const userManagementBatches: Badge[] = [
        { title: "Next.js", logo: SiNextdotjs },
        { title: "TypeScript", logo: SiTypescript },
        { title: "Express", logo: SiExpress },
        { title: "PostgreSQL", logo: SiPostgresql },
        { title: "Tailwind CSS", logo: SiTailwindcss },
    ];

    return (
        <div className="px-4 flex flex-col gap-15 items-center text-black/80">

            {/**Hero */}
            <motion.div id="hero"

                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-gray-100 mx-auto p-4 flex flex-col md:flex-row gap-5 md:gap-15 md:w-[90%] rounded-md min-h-screen shadow-md">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row gap-2 items-center">
                        <Badge className="w-4 h-4 bg-green-500 rounded-full" />
                        <p>Open to work</p>
                    </div>
                    <p className="text-2xl font-bold my-3">Hello, I'm <span className="block text-5xl my-2">Innocent Kamesa</span><span ref={el} className="text-2xl"></span></p>

                    {/**socials */}
                    <div className="flex flex-row gap-4">
                        <a href="https://www.linkedin.com/in/innocent-kamesa-0169353b5"><FaLinkedin className="w-6 h-6 hover:text-blue-600 transition-all duration-300 ease-in-out" /></a>
                        <a href="mailto:innocentkamesa05@gmail.com"><FaEnvelope className="w-6 h-6 hover:text-blue-600 transition-all duration-300 ease-in-out" /></a>
                        <a href="https://github.com/InnocentKamesa"><FaGithub className="w-6 h-6 hover:text-blue-600 transition-all duration-300 ease-in-out" /></a>
                        <a href="https://wa.me/265983759420"><FaWhatsapp className="w-6 h-6 hover:text-blue-600 transition-all duration-300 ease-in-out" /></a>
                    </div>

                    <p className="">A computer science student with strong foundation in software development</p>
                    <a href="#projects" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-neutral rounded-full p-4">View Projects</a>
                    <button onClick={() => { window.location.href = "/files/Innocent kamesa resume v1.pdf" }} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-gray-200 text-black rounded-full p-4">Download Resume</button>


                </div>
                <img src="/innocent.jpg" alt="portrait" className="w-sm md:w-md md:ml-auto rounded-md my-4" />
            </motion.div>

            {/**About */}
            <motion.div id="about"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: "easeIn" }}
                className="w-full flex flex-col gap-4  md:px-20">

                {/**title */}
                <div className="flex flex-col items-center">
                    <p className="font-bold mx-auto text-4xl my-4">ABOUT</p>
                    <SectionUnderline />
                </div>

                <div className="flex flex-col gap-4 md:max-w-[80%] mx-auto w-full">
                    <p>I’m an Applied Computer Science student and aspiring Full-Stack Developer
                        with a strong interest in building practical, scalable, and user-focused
                        software solutions. I work across the frontend and backend, with experience using
                        technologies such as React, Next.js, TypeScript, Node.js, Express, PostgreSQL,
                        and modern UI frameworks. I enjoy turning ideas into functional applications while
                        paying attention to clean architecture, intuitive user experiences, reliable APIs,
                        and maintainable code.
                    </p>

                    <p>
                        Beyond software development, I’m also developing my skills in Data Science,
                        Machine Learning, Artificial Intelligence, and Cybersecurity.
                        I’m particularly interested in using data to uncover insights,
                        building intelligent systems, and understanding how software and
                        systems can be designed and secured against real-world threats.
                        Through academic work, personal projects, and continuous learning,
                        I’m building a broad technical foundation while seeking opportunities
                        to gain practical industry experience and contribute to meaningful technology
                        solutions.
                    </p>

                </div>

            </motion.div >

            {/**skills */}
            < motion.div id="skills"
                initial={{ opacity: 0, y: 50 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col gap-6 items-center w-full" >
                <div className="flex flex-col items-center">
                    <p className="text-4xl font-bold mx-auto my-4">SKILLS</p>
                    <SectionUnderline />
                    <p className=" text-sm mx-auto my-4">A brief showcase of my skills</p>
                </div>

                {/* name of each tab group should be unique */}
                <div className="tabs tabs-border text-black">
                    <input type="radio" name="skills" className="tab text-black" aria-label="Data Analysis" />
                    <div className="tab-content border-base-300 p-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 w-full px-10 md:px-20">
                            <SkillDisplay title="Python" value={90} />
                            <SkillDisplay title="R" value={60} />
                            <SkillDisplay title="Machine Learning" value={90} />
                            <SkillDisplay title="Data visualization" value={60} />
                            <SkillDisplay title="SQL" value={100} />
                        </div>
                    </div>

                    <input type="radio" name="skills" className="tab text-black" aria-label="Full Stack" defaultChecked />
                    <div className="tab-content border-base-300 p-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 w-full px-10 md:px-20">
                            <SkillDisplay title="Python" value={80} />
                            <SkillDisplay title="JavaScript" value={90} />
                            <SkillDisplay title="Java" value={50} />
                            <SkillDisplay title="HTML & CSS" value={100} />
                            <SkillDisplay title="Django" value={70} />
                            <SkillDisplay title="Express.js" value={80} />
                            <SkillDisplay title="Next.js" value={70} />
                            <SkillDisplay title="TypeScript" value={60} />
                            <SkillDisplay title="Tailwindcss" value={90} />
                        </div>
                    </div>

                    <input type="radio" name="skills" className="tab text-black" aria-label="CyberSecurity" />
                    <div className="tab-content border-base-300 p-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 w-full px-10 md:px-20">
                            <SkillDisplay title="CyberSecurity fundamentals" value={80} />
                            <SkillDisplay title="Encryption" value={80} />
                            <SkillDisplay title="Advanced Systems Security" value={80} />
                            <SkillDisplay title="JWT authentication" value={90} />
                        </div>
                    </div>
                </div>

            </motion.div >

            {/**Projects */}
            < motion.div id="projects"

                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <div className="flex flex-col items-center my-6">
                    <p className="text-4xl font-bold mx-auto my-4">PROJECTS</p>
                    <SectionUnderline />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 my-4 md:max-w-[90%] mx-auto w-full gap-10">
                    <ProjectCard
                        image="/user management placeholder.png"
                        title="Secure user management system"
                        description="A web based user management system designed to securely store and manage user data"
                        badges={userManagementBatches}
                    />
                    <ProjectCard
                        image="/portfolio cover.png"
                        title="Personal portfolio"
                        description="A web based mobile-first responsive minimalist portfolio implementation"
                        badges={portfolioBatches}
                    />
                </div>
            </motion.div >

            {/**Services */}
            < motion.div id="services"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col items-center"
                >
                <div className="flex flex-col items-center my-6">
                    <p className="text-4xl font-bold mx-auto my-4">SERVICES</p>
                    <SectionUnderline />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 my-4 mx-auto w-full gap-10">
                    <ServiceCard title="Custom Web Development" description="I develop scalable and secure web applications using modern technologies. I am passionate about creating user-friendly interfaces and seamless user experiences." Logo={Terminal} />
                    <ServiceCard title="IT support" description="I can offer ICT support work to help with system diagnosis, maintainance and management of IT systems." Logo={Wrench} />
                    <ServiceCard title="Data Analytics" description="Iam also capable of analysing data to understand patterns thhhat can help with decision making and business growth." Logo={ChartLine} />
                </div>

            </motion.div >

            {/**Contact */}
            < motion.div id="contact"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:w-[90%]">
                <div className="flex flex-col items-center my-6">
                    <p className="text-4xl font-bold mx-auto my-4">CONTACT</p>
                    <SectionUnderline />
                    <p className="text-sm mx-auto my-4">Let's Connect</p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:max-w-[90%] mx-auto w-full">
                    <div className="flex-1 flex flex-col gap-4 p-4 bg-gray-100 rounded-md">
                        <p className="text-lg font-semibold">Contact Info</p>
                        <p className="text-sm">Feel free to reach out to me through any of the following channels:</p>
                        <div className="flex flex-col gap-2">

                            {/**email */}
                            <div className="flex flex-row gap-3 items-center">
                                <FaEnvelope className="w-6 h-6" />
                                <p>innocentkamesa05@gmail.com</p>
                            </div>
                            {/**phone */}
                            <div className="flex flex-row gap-3 items-center">
                                <FaPhone className="w-6 h-6" />
                                <p>+265 983 75 94 20</p>
                            </div>

                            {/**linkedin*/}
                            <div className="flex flex-row gap-3 items-center">
                                <FaLinkedin className="w-6 h-6" />
                                <p>https://www.linkedin.com/in/innocent-kamesa-0169353b5</p>
                            </div>
                        </div>
                        <form className="flex flex-col gap-4 md:max-w-[70%] mx-auto w-full p-4">
                            <p className="font-bold mx-auto text-lg">Contact Form</p>
                            <div className="flex flex-col gap-4 justify-between">
                                {/*name */}
                                <input type="text" placeholder="Your name" className="flex-1 border bg-white border-gray-200 p-3" />

                                {/**email */}
                                <input type="email" placeholder="Your email" className="flex-1 border bg-white border-gray-200 p-3" required />
                            </div>

                            {/**subject */}
                            <input type="text" placeholder="Subject" className="p-3 border border-gray-200 w-full bg-white" />

                            {/**message */}
                            <textarea className="textarea bg-white w-full border border-gray-200" placeholder="Your message"></textarea>

                            <button className="btn btn-neutral btn-sm w-30 rounded-2xl self-center px-2 py-4">Send Message</button>
                        </form>
                    </div>
                </div>


            </motion.div >


            {/**Footer */}
            < footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-6" >
                <nav className="grid grid-flow-col gap-4">
                    <a href="#about" className="link link-hover">About me</a>
                    <a href="#skills" className="link link-hover">Skills</a>
                    <a href="#projects" className="link link-hover">Projects</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.linkedin.com/in/innocent-kamesa-0169353b5"><FaLinkedin className="w-6 h-6 hover:text-blue-600 transition-all duration-300 ease-in-out" /></a>
                        <a href="mailto:innocentkamesa05@gmail.com"><FaEnvelope className="w-6 h-6 hover:text-blue-600 transition-all duration-300 ease-in-out" /></a>
                        <a href="https://github.com/InnocentKamesa"><FaGithub className="w-6 h-6 hover:text-blue-600 transition-all duration-300 ease-in-out" /></a>
                        <a href="https://wa.me/265983759420"><FaWhatsapp className="w-6 h-6 hover:text-blue-600 transition-all duration-300 ease-in-out" /></a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Innocent Kamesa</p>
                </aside>
            </footer >
        </div >
    )
}