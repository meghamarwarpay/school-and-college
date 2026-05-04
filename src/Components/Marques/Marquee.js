"use client"
import React from "react";

const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-transparent py-3 relative">
      <div className="inline-block animate-marquee text-black text-lg font-medium">
        Welcome to Ranabai School & College — Empowering Students for a Brighter Future —
        Quality Education from Nursery to College — Building Character, Confidence Competence —
      </div>

      {/* Scoped animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
