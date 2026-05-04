"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    FaUserGraduate,
    FaCheckCircle,
    FaBookOpen,
    FaChartLine,
    FaClock,
    FaQuestionCircle,
} from "react-icons/fa";

const News = () => {
    const statsData = [
        {
            title: "Admission Enquiry",
            link: "/admission-enquiry",
            icon: <FaQuestionCircle className="text-green-700 w-6 h-6" />,
            iconBg: "bg-green-200",
        },
        {
            title: "New Admission",
            link: "/new-admission",
            icon: <FaUserGraduate className="text-green-700 w-6 h-6" />,
            iconBg: "bg-green-200",
        },
        {
            title: "Examination",
            link: "/examination",
            icon: <FaBookOpen className="text-green-700 w-6 h-6" />,
            iconBg: "bg-green-200",
        },
        {
            title: "Result",
            link: "/results",
            icon: <FaChartLine className="text-green-700 w-6 h-6" />,
            iconBg: "bg-green-200",
        },
        {
            title: "Time Tables",
            link: "/time-tables",
            icon: <FaClock className="text-green-700 w-6 h-6" />,
            iconBg: "bg-green-200",
        },
        {
            title: "Admission Confirmation",
            link: "/admission-confirmation",
            icon: <FaCheckCircle className="text-green-700 w-6 h-6" />,
            iconBg: "bg-green-200",
        },
    ];

    return (
        <div className="flex items-center justify-center w-screen text-gray-800 p-10 bg-White">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl">
                {statsData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center p-5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className={`flex items-center justify-center ${item.iconBg} h-16 w-16 rounded-full`}>
                            {item.icon}
                        </div>
                        <div className="ml-5 flex-grow">
                            <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                            <Link
                                href={item.link}
                                className="text-sm text-green-600 font-medium hover:underline"
                            >
                                More
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default News;
