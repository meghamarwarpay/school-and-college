"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import a1 from "../../../assets/img/a1.png";

const AboutUs = () => {
    return (
        <section className="min-h-screen bg-white text-gray-800 py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Side: Image with animation */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full md:w-5/12 flex justify-center h-full md:justify-end"
            >
                <Image
                    src={a1}
                    alt="About Ranabai School & College"
                    className="w-72 h-96 md:w-80 lg:w-96 object-cover rounded-lg shadow-lg"
                />
            </motion.div>

            {/* Right Side: Text Content with animation */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full md:w-7/12 text-center md:text-left relative"
            >
                {/* Vertical Text */}
                <div className="absolute left-[40%] -top-6 md:-left-16 lg:top-0 md:top-6 rotate-0 md:-rotate-90 text-sm tracking-widest">
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-16 h-[2px] bg-[#00a400]"></div>
                        <p className="text-[#00a400]">MORE ABOUT</p>
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-1 pl-10">
                    About Ranabai <br className="hidden md:block" /> School & College
                </h2>

                {/* Paragraphs */}
                <p className="text-gray-600 mb-1 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
                    Ranabai School & College, located in the heart of our community, is a beacon of educational excellence that nurtures young minds from nursery to higher education.
                </p>
                <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
                    Our campus offers a safe, inclusive, and vibrant learning environment where students are encouraged to grow academically, socially, and emotionally. With well-equipped classrooms, experienced faculty, and modern facilities, we are committed to holistic development.
                </p>
                <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
                    At Ranabai, we believe in education that goes beyond textbooks — fostering creativity, leadership, and moral values. Our students excel not only in academics but also in sports, arts, and community service, becoming confident citizens of tomorrow.
                </p>

                {/* Button */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a
                        href="#"
                        className="text-[#00a400] font-semibold py-2 px-4 rounded-lg hover:bg-[#00a4001a] transition-colors text-center text-2xl"
                    >
                        School Overview
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutUs;
