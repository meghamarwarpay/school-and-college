"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import dmy from "../../../assets/img/DummyLogo.jpg";

// Footer Stats Data
const stats = [
    { value: "25+", label: "Years of Excellence" },
    { value: "2500+", label: "Graduated Students" },
    { value: "125+", label: "Dedicated Faculty" },
];

// Animation Variant
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.2 },
    }),
};

const Empouring = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="bg-white py-16 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden"
        >
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
                {/* Left Video */}
                <motion.div
                    className="w-full lg:w-1/2"
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={0}
                >
                    <video
                        src="/video/Vd2.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="rounded-2xl shadow-xl w-full h-auto object-cover"
                    />
                </motion.div>

                {/* Right Content */}
                <motion.div
                    className="w-full lg:w-1/2"
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={0.2}
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
                        Nurturing Potential,{" "}
                        <span className="text-[#00a400]">Inspiring Excellence</span>
                    </h2>
                    <p className="text-gray-600 text-lg sm:text-xl mb-8">
                        At Ranabai School & College, we empower every student to thrive through quality education, a supportive environment, and values that shape character and future success.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                className="bg-[#00a4001a] rounded-xl shadow-sm p-6 text-center hover:shadow-md transition"
                                variants={fadeUp}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                custom={0.4 + i * 0.2}
                            >
                                <p className="text-3xl font-extrabold text-[#00a400]">
                                    {stat.value}
                                </p>
                                <p className="mt-1 text-sm text-gray-700">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Signature */}
                    <motion.div
                        className="mt-8 flex items-center gap-4 border-t pt-5"
                        variants={fadeUp}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={1}
                    >
                        <Image
                            src={dmy}
                            alt="Principal"
                            width={48}
                            height={48}
                            className="rounded-full object-cover shadow"
                        />
                        {/* <div>
                            <p className="font-semibold text-gray-800">Dr. R. K. Sharma</p>
                            <p className="text-sm text-gray-500">Principal, Ranabai School & College</p>
                        </div> */}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Empouring;
