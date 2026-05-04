"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dmy from "../../../assets/img/SchlBnr.jpg";

const AboutBanner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={dmy}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-extrabold mb-4 leading-snug drop-shadow"
        >
          Welcome to <br />
          <span className="text-red-400">Nagor Public International School</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-sm md:text-lg text-gray-300 max-w-xl mb-6"
        >
          A Legacy of Learning, Leadership, and Innovation
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-red-500 hover:bg-red-600 transition px-6 py-2 rounded-full text-sm font-medium shadow-lg"
        >
          Learn More
        </motion.button>
      </div>
    </div>
  );
};

export default AboutBanner;
