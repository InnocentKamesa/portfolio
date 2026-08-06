"use client"

import { Badge, Wrench, Terminal, ChartLine } from "lucide-react";
import { ProjectCard, ServiceCard } from "../components/cards";
import { InfoDisplay, SectionUnderline, SkillDisplay } from "../components/displays";
import { useEffect, useRef } from 'react';
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
    const el = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Full-Stack Developer', 'UI/UX Enthusiast', 'Data Science Enthusiast'],
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
        <div className="px-4 flex flex-col gap-15 text-black/80">
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
                    <button onClick={() => { window.location.href = "/files/Computer Science general resume.pdf" }} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-gray-200 text-black rounded-full p-4">View Resume</button>

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
                <p className="text-md mx-auto my-4">Iam a passionate and self-driven individual with a strong interest in systems development. I have dedicated myself to exploring different tools and technologies to develop scalable and secure web systems.</p>
                <div className="w-full flex flex-col md:flex-row gap-6">

                    {/**image */}
                    <div className="flex-1 flex items-center">
                        <img src="/innocent2.jpg" alt="portrait" className="mx-auto w-sm md:w-sm md:h-sm md:ml-auto rounded-md" />
                    </div>

                    {/**info */}
                    <div className="flex flex-2 flex-col gap-4 p-2">
                        <p className="text-3xl font-semibold">Computer Science</p>
                        <p className="text-md">Iam currently in the final year doing computer science at LUANAR. The institution has laid very important groundwork for my journey by sharpening my mind through relevant coursework like Data structures and algorithms, software engineering e.t.c. This makes me certain that iam fit to work in various roles like ICT roles, cybersecurity and Software Engineering.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                            <InfoDisplay title="Birth" value="7 May" />
                            <InfoDisplay title="City" value="Lilongwe" />
                            <InfoDisplay title="Degree" value="Bsc In Applied Computer Science" />
                            <InfoDisplay title="Availability" value="Open to Work Immediately" />
                            <InfoDisplay title="Freelance" value="Available" />
                        </div>
                        <p>I am actively seeking opportunities to grow as a software developer, gain practical industry experience, and contribute to meaningful projects. I am particularly interested in internships, industrial attachments, junior developer roles, and collaborative opportunities where I can apply my skills, learn from experienced professionals, and continue developing as a full-stack developer.
                        </p>
                    </div>
                </div>


            </motion.div>

            {/**skills */}
            <motion.div id="skills"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col gap-6 items-center w-full">
                <div className="flex flex-col items-center">
                    <p className="text-4xl font-bold mx-auto my-4">SKILLS</p>
                    <SectionUnderline />
                    <p className=" text-sm mx-auto my-4">A brief showcase of my skills</p>
                </div>
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
            </motion.div>

            {/**Projects */}
            <motion.div id="projects"
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
            </motion.div>

            {/**Services */}
            <motion.div id="services"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <div className="flex flex-col items-center my-6">
                    <p className="text-4xl font-bold mx-auto my-4">SERVICES</p>
                    <SectionUnderline />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 my-4 md:max-w-[90%] mx-auto w-full gap-10">
                    <ServiceCard title="Custom Web Development" description="I develop scalable and secure web applications using modern technologies. I am passionate about creating user-friendly interfaces and seamless user experiences." Logo={Terminal} />
                    <ServiceCard title="IT support" description="I can offer ICT support work to help with system diagnosis, maintainance and management of IT systems." Logo={Wrench} />
                    <ServiceCard title="Data Analytics" description="Iam also capable of analysing data to understand patterns thhhat can help with decision making and business growth." Logo={ChartLine} />
                </div>

            </motion.div>

            {/**Contact */}
            <motion.div id="contact"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <div className="flex flex-col items-center my-6">
                    <p className="text-4xl font-bold mx-auto my-4">CONTACT</p>
                    <SectionUnderline />
                    <p className="text-sm mx-auto my-4">View contact info or fill a contact form</p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:max-w-[90%] mx-auto w-full">
                    <div className="flex-1 flex flex-col gap-4 p-4 bg-gray-100 rounded-md">
                        <p className="text-lg font-semibold">Contact Info</p>
                        <p className="text-sm">Feel free to reach out to me through any of the following channels:</p>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row gap-2 items-center">
                                <FaEnvelope className="w-6 h-6" />
                                <p>innocentkamesa05@gmail.com</p>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <FaPhone className="w-6 h-6" />
                                <p>+265 983 75 94 20</p>
                            </div>
                        </div>
                        <form className="flex flex-col gap-4 md:max-w-[70%] mx-auto w-full p-4">
                            <p className="font-bold mx-auto text-lg">Contact Form</p>
                            <div className="flex flex-col gap-4 md:flex-row w-full justify-between">
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


            </motion.div>


            {/**Footer */}
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-6">
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
            </footer>
        </div >
    )
}