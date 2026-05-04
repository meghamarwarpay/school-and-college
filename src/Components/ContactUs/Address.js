'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';

const addressData = [
  {
    title: 'Our Address',
    description: 'A-12 2nd Floor Shree Kanhaiya Mansion, Acharya Vino Vabhave Nagar, Jaipur, Rajasthan, 302021',
  },
  {
    title: 'E-mail Us',
    description: 'OurMail@gmail.com',
  },
  {
    title: 'Call Us',
    description: '+91-9509494310',
  },
];

const getIcon = (title) => {
  switch (title) {
    case 'Our Address':
      return <MdLocationOn className="h-10 w-10 text-white" />;
    case 'E-mail Us':
      return <MdEmail className="h-10 w-10 text-white" />;
    case 'Call Us':
      return <MdPhone className="h-10 w-10 text-white" />;
    default:
      return null;
  }
};

const Address = () => {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {addressData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-200 hover:shadow-2xl transition-all duration-300 rounded-xl"
            >
              {/* Hover background effect */}
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-green-400 transition-all duration-300 group-hover:scale-[10]"></span>

              <div className="relative z-10 mx-auto max-w-md">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-green-500 transition-all duration-300 group-hover:bg-green-400">
                  {getIcon(item.title)}
                </span>

                <div className="pt-5 text-center space-y-3">
                  <h3 className="text-xl font-bold text-gray-700 group-hover:text-white">{item.title}</h3>
                  <p className="text-sm text-gray-600 group-hover:text-white/90">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Address;
