"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import dmy from "../../assets/img/dmy.jpg";

const programsData = [
  {
    category: "bachelor",
    badge: "Bachelor's Program",
    title: "B.Sc. (Computer Science)",
    duration: "3 Years",
    credits: "100 Credits",
    intake: "July & November",
    description:
      "This program equips students with foundational and advanced knowledge in computer systems, programming, and data analysis, preparing them for both industry roles and further studies.",
    image: dmy,
  },
  {
    category: "bachelor",
    badge: "Bachelor's Program",
    title: "B.Com (General)",
    duration: "3 Years",
    credits: "90 Credits",
    intake: "July Only",
    description:
      "Focused on commerce, accounting, and management principles, this course fosters analytical thinking and decision-making skills in the field of business.",
    image: dmy,
  },
  {
    category: "bachelor",
    badge: "Bachelor's Program",
    title: "B.A. (English Literature)",
    duration: "3 Years",
    credits: "90 Credits",
    intake: "July & November",
    description:
      "An enriching curriculum that blends literary analysis with communication and critical thinking, ideal for future educators, writers, and researchers.",
    image: dmy,
  },
  {
    category: "master",
    badge: "Master's Program",
    title: "M.A. (Education)",
    duration: "2 Years",
    credits: "60 Credits",
    intake: "November Only",
    description:
      "Designed for aspiring educators and administrators, this program delves into pedagogy, educational psychology, and institutional leadership.",
    image: dmy,
  },
  {
    category: "master",
    badge: "Master's Program",
    title: "M.Sc. (Mathematics)",
    duration: "2 Years",
    credits: "64 Credits",
    intake: "July Only",
    description:
      "Advanced mathematical studies that open pathways to teaching, research, and applied roles in science and analytics.",
    image: dmy,
  },
  {
    category: "certificate",
    badge: "Certificate Program",
    title: "Spoken English & Personality Development",
    duration: "3 Months",
    credits: "20 Credits",
    intake: "Year-round",
    description:
      "Empowering students with fluent English, soft skills, and confidence—perfect for personal and professional growth.",
    image: dmy,
  },
];

const categories = [
  { label: "All Programs", value: "all" },
  { label: "Bachelor's", value: "bachelor" },
  { label: "Master's", value: "master" },
  { label: "Certificates", value: "certificate" },
];

const Features = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredPrograms =
    activeTab === "all"
      ? programsData
      : programsData.filter((program) => program.category === activeTab);

  return (
    <section id="featured-programs" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#00a400]">
            Programs at Ranabai School & College
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore our diverse range of academic programs designed to foster excellence, innovation, and all-round development.
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <li
              key={cat.value}
              className={`cursor-pointer px-4 py-2 border rounded-full transition-all duration-300 text-sm md:text-base ${
                activeTab === cat.value
                  ? "bg-[#00a400] text-white border-[#00a400]"
                  : "text-gray-700 hover:bg-[#00a4001a] border border-gray-300"
              }`}
              onClick={() => setActiveTab(cat.value)}
            >
              {cat.label}
            </li>
          ))}
        </ul>

        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.title + index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative h-48 md:h-auto">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="text-sm font-semibold text-[#00a400] mb-1">
                      {program.badge}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                    <div className="flex flex-wrap text-sm text-gray-600 mb-4 gap-x-4 gap-y-1">
                      <span>🕒 {program.duration}</span>
                      <span>📘 {program.credits}</span>
                      <span>📅 {program.intake}</span>
                    </div>
                    <p className="text-gray-700 mb-4">{program.description}</p>
                    <a
                      href="#"
                      className="inline-flex items-center text-[#00a400] hover:underline"
                    >
                      <span>Learn More</span>
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
