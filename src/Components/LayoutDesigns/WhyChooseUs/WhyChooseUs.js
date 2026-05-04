"use client";

import React from 'react';
import Image from 'next/image';
import dmy from "../../../assets/img/WhyChooseUs.jpg";
import {
    FaUsers,
    FaTrophy,
    FaMusic,
    FaGlobe,
    FaQuestionCircle,
} from 'react-icons/fa';

const featureData = [
    {
        title: 'Vibrant Student Clubs',
        description:
            'Encouraging leadership, creativity, and teamwork through various student-led clubs and activities.',
    },
    {
        title: 'Sports & Athletics',
        description:
            'We host regular inter-house and inter-school sports events to promote fitness and team spirit.',
    },
    {
        title: 'Arts & Cultural Programs',
        description:
            'Nurturing artistic talents through music, drama, and cultural events that celebrate diversity.',
    },
    {
        title: 'Global Learning Exposure',
        description:
            'Providing opportunities for students to engage in global education programs and collaborations.',
    },
];

// Function to get icon based on title
const getIconByTitle = (title) => {
    switch (title) {
        case 'Vibrant Student Clubs':
            return <FaUsers />;
        case 'Sports & Athletics':
            return <FaTrophy />;
        case 'Arts & Cultural Programs':
            return <FaMusic />;
        case 'Global Learning Exposure':
            return <FaGlobe />;
        default:
            return <FaQuestionCircle />;
    }
};

const WhyChooseUs = () => {
    return (
        <section className="bg-[#f4f8f7] py-16 px-4 md:px-8 lg:px-20">
            <div className="text-center mb-12">
                <h2 className="text-xl text-green-600 font-semibold tracking-wide mb-2">
                    Ranabai School & College
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 heading">
                    Why Choose Us
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover what sets Ranabai School & College apart in nurturing future-ready learners.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Left Image Section */}
                <div className="w-full lg:w-1/2">
                    <div className="relative rounded-xl overflow-hidden shadow-lg h-[300px] md:h-[400px]">
                        <Image
                            src={dmy}
                            alt="Campus Life"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-4 left-4 text-white">
                            <h4 className="text-lg font-semibold">Experience Holistic Education</h4>
                            <a className="text-green-300 text-sm hover:underline">Explore More →</a>
                        </div>
                    </div>
                </div>

                {/* Right Cards Section */}
                <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featureData.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow p-6">
                            <div className="bg-green-100 text-green-600 w-10 h-10 flex items-center justify-center rounded-full mb-4">
                                {getIconByTitle(item.title)}
                            </div>
                            <h5 className="text-lg font-semibold mb-2">{item.title}</h5>
                            <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                    ))}

                    <div className="col-span-1 md:col-span-2">
                        <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition-all">
                            View All
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
