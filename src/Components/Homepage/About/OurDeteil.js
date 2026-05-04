"use client";
import React, { useRef } from "react";
import Image from "next/image";
import logo from "../../../assets/img/DummyLogo.jpg";
import { motion, useInView } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

// Section data
const sections = [
    {
        heading: "Our History",
        paragraphs: [
            "JECRC University was founded with a vision to be a center of excellence for education, research, and innovation. Over the years, it has grown into a multidisciplinary institution offering programs in engineering, management, sciences, and humanities.",
        ],
    },
    {
        heading: "Campus & Facilities",
        paragraphs: [
            "Spread across 32 acres, the campus provides a world-class environment featuring modern lecture halls, digital libraries, labs, hostels, cafeterias, and sports arenas — all designed to encourage learning and collaboration.",
            "The university also promotes sustainable practices and has green zones, solar panels, and water recycling systems in place.",
        ],
    },
    {
        heading: "Innovation & Projects",
        isProjectSection: true,
        projects: [
            {
                title: "Smart Campus App",
                desc: "An app developed by students to digitize campus operations, from attendance to resource booking.",
                tags: ["React", "Firebase", "UI/UX"],
            },
            {
                title: "Green Energy Lab",
                desc: "Research-focused lab for solar energy and renewable technologies managed by engineering students.",
                tags: ["Sustainability", "Engineering", "Innovation"],
            },
        ],
    },
    {
        heading: "Why Choose Us?",
        paragraphs: [
            "With an emphasis on holistic development, JECRC University provides a perfect balance of academic rigor and co-curricular exposure. Our alumni have gone on to excel in top companies, research institutions, and entrepreneurial ventures.",
        ],
        cta: {
            text: "Contact Us",
            href: "/contact",
        },
    },
];

const OurDetail = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.article
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeUp}
            className="font-sans mx-auto max-w-5xl px-6 py-16 bg-white text-gray-800"
        >
            {/* Header */}
            <motion.div
                variants={fadeUp}
                className="flex flex-col md:flex-row justify-between items-center mb-10"
            >
                <h1 className="text-4xl font-bold text-[#43A047] mb-4 md:mb-0">
                    About Our Institution
                </h1>
                <Image
                    src={logo}
                    alt="School Logo"
                    width={176}
                    height={176}
                    className="rounded-full shadow-md"
                />
            </motion.div>

            {/* Introduction */}
            <motion.p variants={fadeUp} className="text-lg leading-relaxed mb-8">
                Established with the mission to nurture excellence in education,
                <span className="text-[#43A047] font-semibold"> JECRC University</span> is a
                premier institution committed to developing future leaders. Located in the
                heart of Jaipur, our campus is known for its vibrant academic life,
                state-of-the-art facilities, and inclusive learning environment.
            </motion.p>

            {/* Section Mapping */}
            {sections.map((section, idx) => (
                <motion.section key={idx} variants={fadeUp} className="mb-12">
                    <h2 className="text-2xl font-bold text-[#43A047] mb-4">{section.heading}</h2>

                    {/* Paragraphs */}
                    {section.paragraphs?.map((para, i) => (
                        <p key={i} className="text-base leading-relaxed mb-3">
                            {para}
                        </p>
                    ))}

                    {/* Projects Section */}
                    {section.isProjectSection && (
                        <div className="grid gap-6 sm:grid-cols-2 mt-6">
                            {section.projects.map((proj, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="border border-[#43A047] rounded-lg p-5 shadow hover:shadow-md transition-all"
                                >
                                    <h3 className="text-lg font-semibold text-[#43A047] mb-2">
                                        {proj.title}
                                    </h3>
                                    <p className="text-gray-700 mb-4">{proj.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {proj.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-[#43A047]/10 text-[#43A047] px-3 py-1 text-sm rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Call-to-Action */}
                    {section.cta && (
                        <a
                            href={section.cta.href}
                            className="inline-block bg-[#43A047] text-white px-6 py-3 mt-6 rounded-md font-semibold hover:bg-[#388E3C] transition"
                        >
                            {section.cta.text}
                        </a>
                    )}
                </motion.section>
            ))}
        </motion.article>
    );
};

export default OurDetail;
