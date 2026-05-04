"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "../../assets/img/SchlBnr.jpg"; // Assumes using next/image with static import

const CoursesBanner = () => {
  return (
    <section className="relative w-full h-[520px] overflow-hidden">
      {/* Optimized Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={img1}
          alt="Banner Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold"
        >
          Discover Your New Home
        </motion.h1>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-full mt-6"
        >
          <div className="xl:w-1/2 lg:w-[60%] sm:w-[70%] w-[90%] mx-auto flex gap-2">
            <input
              type="text"
              className="w-full p-3 border border-gray-300 text-base text-white placeholder-white bg-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Search for courses, categories, or keywords"
            />
            <button
              type="submit"
              className="px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all"
            >
              Search
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default CoursesBanner;
