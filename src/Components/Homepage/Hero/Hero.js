"use client";

import React from "react";
import {
  FaTrophy,
  FaGlobe,
  FaUserGraduate,
  FaUniversity,
  FaStar,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="pt-18 relative bg-black text-white overflow-hidden min-h-screen flex items-center">
      {/* Background Video */}
      <video
        src="/Video/BG1.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        role="presentation"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Overlay (lighter for more visibility) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* 5 Star Rating */}
          <div className="flex items-center gap-2 text-yellow-400 text-xl">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-sm text-gray-300 ml-2">Rated 5.0 by 10K+ Students</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-md">
            Welcome to <br />
            <span className="text-emerald-400">Ranabai School & College</span>
          </h1>

          <p className="text-lg text-gray-200 leading-relaxed drop-shadow">
            Providing quality education that inspires learning, leadership, and lifelong success.
            Join a vibrant community that nurtures excellence in academics, sports, and personal growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-lg shadow-md hover:shadow-lg">
              Enroll Now
            </button>
            <button className="border border-emerald-400 hover:bg-emerald-400/10 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-lg shadow-sm">
              Explore Our Campus
            </button>
          </div>
        </div>

        {/* Right Stats Card */}
        <div className="w-full lg:w-1/2 bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/20">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Why Choose Ranabai?
          </h2>
          <div className="w-16 h-1 bg-emerald-500 mb-6 rounded" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: <FaTrophy className="text-2xl" />,
                label: "Board Exam Results",
                value: "98% Pass Rate",
              },
              {
                icon: <FaGlobe className="text-2xl" />,
                label: "Cultural & Global Exposure",
                value: "25+ Events",
              },
              {
                icon: <FaUserGraduate className="text-2xl" />,
                label: "Experienced Faculty",
                value: "40+ Teachers",
              },
              {
                icon: <FaUniversity className="text-2xl" />,
                label: "Programs Offered",
                value: "Nursery to College",
              },
            ].map((item, i) => (
              <div className="flex items-start gap-4" key={i}>
                <div className="bg-emerald-600 p-4 rounded-xl shadow-md">{item.icon}</div>
                <div>
                  <p className="text-xl font-bold text-white">{item.value}</p>
                  <p className="text-sm text-gray-300">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
