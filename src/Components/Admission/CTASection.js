'use client';

import React from 'react';
import { BiBuilding, BiFile } from 'react-icons/bi';
import { motion } from 'framer-motion';

const cardData = [
    {
        icon: <BiBuilding className="text-4xl text-green-600" />,
        title: 'Visit Our Campus',
        description:
            'Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget felis porttitor volutpat.',
        buttonLabel: 'Schedule a Tour',
        link: '#',
        style: 'light',
    },
    {
        icon: <BiFile className="text-4xl text-white" />,
        title: 'Ready to Apply?',
        description:
            'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet.',
        buttonLabel: 'Start Application',
        link: '#',
        style: 'dark',
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

const CTASection = () => {
    return (
        <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {cardData.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            custom={index + 1}
                            className={`p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 ${card.style === 'dark'
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-100 text-gray-800'
                                }`}
                        >
                            <div className="flex flex-col items-start gap-4">
                                <div>{card.icon}</div>
                                <h3
                                    className={`text-xl font-semibold ${card.style === 'dark' ? 'text-white' : 'text-gray-800'
                                        }`}
                                >
                                    {card.title}
                                </h3>
                                <p
                                    className={`text-sm ${card.style === 'dark' ? 'text-white/80' : 'text-gray-600'
                                        }`}
                                >
                                    {card.description}
                                </p>
                                <a
                                    href={card.link}
                                    className={`inline-block mt-2 px-4 py-2 rounded font-medium transition ${card.style === 'dark'
                                        ? 'bg-white text-green-700 hover:bg-gray-100'
                                        : 'bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white'
                                        }`}
                                >
                                    {card.buttonLabel}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;
