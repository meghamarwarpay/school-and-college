"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

import lg1 from "../../../public/img/lg1.jpg";
import lg2 from "../../../public/img/lg2.jpg";
import lg3 from "../../../public/img/lg3.jpg";
import lg4 from "../../../public/img/lg4.jpg";
import lg5 from "../../../public/img/lg5.jpg";

const GideHero = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const images = [
    { span: "col-span-4 sm:col-span-4", img: lg1 },
    { span: "col-span-4 sm:col-span-2", img: lg2 },
    { span: "col-span-4 sm:col-span-2", img: lg3 },
    { span: "col-span-4 sm:col-span-3", img: lg4 },
    { span: "col-span-4 sm:col-span-1", img: lg5 },
  ];

  return (
    <div className="bg-[#fdfdfd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12 md:py-24">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          {/* Text Content */}
          <div
            className="w-full lg:w-1/3 p-4 sm:p-6 md:p-10 prose"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-600 leading-tight">
              Learn with Purpose
            </h1>
            <h1 className="text-2xl sm:text-3xl text-gray-600">Lead with Confidence</h1>
            <h1 className="text-2xl sm:text-3xl text-gray-600">Live with Values</h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-gray-600">
              Welcome to Ranabai School & College
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light mt-4 sm:mt-6 md:mt-8 leading-relaxed">
              At Ranabai School & College, we are dedicated to nurturing young minds
              through academic excellence, moral values, and all-round development.
              With a strong legacy in education, modern infrastructure, and a passionate faculty,
              we prepare students to excel in life and become responsible citizens of tomorrow.
            </p>
          </div>

          {/* Image Grid */}
          <div
            className="w-full lg:w-2/3 py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-10 grid grid-cols-4 gap-3 sm:gap-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            {images.map((item, idx) => (
              <div key={idx} className={`h-48 sm:h-56 md:h-64 relative ${item.span}`}>
                <Image
                  src={item.img}
                  alt={`Gallery image ${idx + 1}`}
                  className="rounded-md object-cover"
                  fill
                  priority={idx <= 1}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GideHero;
