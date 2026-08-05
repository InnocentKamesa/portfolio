"use client"

import { Badge, Wrench, Terminal, ChartLine } from "lucide-react";
import { ProjectCard, ServiceCard } from "../components/cards";
import { InfoDisplay, SectionUnderline, SkillDisplay } from "../components/displays";
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';


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

    return (
        <div className="px-4 flex flex-col gap-15 text-black/80">
            {/**Hero */}
            <motion.div
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
                        <FaLinkedin className="w-6 h-6 hover:text-blue-600 transition-all duration-300 ease-in-out" />
                        <FaEnvelope className="w-6 h-6 hover:text-blue-600 transition-all duration-300 ease-in-out" />
                        <FaInstagram className="w-6 h-6 hover:text-blue-600 transition-all duration-300 ease-in-out" />
                        <FaWhatsapp className="w-6 h-6 hover:text-blue-600 transition-all duration-300 ease-in-out" />
                    </div>

                    <p className="">A computer science student with strong foundation in software development</p>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-neutral rounded-full p-4">View Projects</button>
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-gray-200 text-black rounded-full p-4">Download Resume</button>

                </div>
                <img src="/innocent.jpg" alt="portrait" className="w-sm md:w-md md:ml-auto rounded-md my-4" />
            </motion.div>

            {/**About */}
            <motion.div
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
                <p className="text-md mx-auto my-4">Iam a forth computer science student at LUANAR with a strong foundation in systems development particularly web applications. I have dedicated myself to exploring different tools and technologies to develop scalable and secure web systems.</p>
                <div className="w-full flex flex-col md:flex-row gap-6">

                    {/**image */}
                    <div className="flex-1 flex items-center">
                        <img src="/innocent2.jpg" alt="portrait" className="mx-auto w-sm md:w-sm md:h-sm md:ml-auto rounded-md" />
                    </div>

                    {/**info */}
                    <div className="flex flex-2 flex-col gap-4 p-2">
                        <p className="text-3xl font-semibold">Computer Science student</p>
                        <p className="text-md">Iam a final year computer science student at LUANAR. The institution has laid very important groundwork for my journey by sharpening my mind through relevant coursework like Data structures and algorithms, software engineering e.t.c. This makes me certain that iam fit to work in various roles like ICT roles, cybersecurity and Software Engineering.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                            <InfoDisplay title="Birth" value="7 May 2006" />
                            <InfoDisplay title="Age" value="20" />
                            <InfoDisplay title="Degree" value="Bsc In Applied Computer Science" />
                            <InfoDisplay title="Email" value="innocentkamesa05@gmail.com" />
                            <InfoDisplay title="Phone" value="+265 98 375 9420" />
                            <InfoDisplay title="City" value="Lilongwe" />
                            <InfoDisplay title="Availability" value="Open to Work Immediately" />
                            <InfoDisplay title="Freelance" value="Available" />
                        </div>
                        <p>I am actively seeking opportunities to grow as a software developer, gain practical industry experience, and contribute to meaningful projects. I am particularly interested in internships, industrial attachments, junior developer roles, and collaborative opportunities where I can apply my skills, learn from experienced professionals, and continue developing as a full-stack developer.
                        </p>
                    </div>
                </div>


            </motion.div>

            {/**skills */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
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
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <div className="flex flex-col items-center my-6">
                    <p className="text-4xl font-bold mx-auto my-4">PROJECTS</p>
                    <SectionUnderline />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 my-4 md:max-w-[90%] mx-auto w-full gap-10">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </motion.div>

            {/**Services */}
            <motion.div
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
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <div className="flex flex-col items-center my-6">
                    <p className="text-4xl font-bold mx-auto my-4">CONTACT</p>
                    <SectionUnderline />
                    <p className="text-sm mx-auto my-4">Fill in the form below to contact me</p>
                </div>
                <form className="flex flex-col gap-4 md:max-w-[70%] mx-auto w-full p-4">
                    <div className="flex flex-col gap-4 md:flex-row w-full justify-between">

                        {/*name */}
                        <input type="text" placeholder="Your name" className="flex-1 border border-gray-200 p-3" />

                        {/**email */}
                        <input type="email" placeholder="mail@site.com" className="flex-1 border border-gray-200 p-3" required />
                    </div>

                    {/**subject */}
                    <input type="text" placeholder="Subject" className="p-3 border border-gray-200 w-full" />

                    {/**message */}
                    <textarea className="textarea bg-gray-50 w-full border border-gray-200" placeholder="Your message"></textarea>

                    <button className="btn btn-neutral btn-sm w-30 rounded-2xl self-center px-2 py-4">Send Message</button>
                </form>

            </motion.div>


            {/**Footer */}
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-6">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About me</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Projects</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">

                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Innocent Kamesa</p>
                </aside>
            </footer>
        </div >
    )
}