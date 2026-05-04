'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
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

const admissionSteps = [
  {
    title: 'Submit Application',
    desc: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh.',
  },
  {
    title: 'Send Documents',
    desc: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
  },
  {
    title: 'Interview Process',
    desc: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.',
  },
  {
    title: 'Receive Decision',
    desc: 'Vivamus suscipit tortor eget felis porttitor volutpat.',
  },
];

const deadlines = [
  { label: 'Fall Semester', date: 'March 15, 2023' },
  { label: 'Spring Semester', date: 'October 1, 2023' },
  { label: 'Summer Session', date: 'January 30, 2024' },
  { label: 'Early Decision', date: 'November 15, 2023' },
];

const requirements = [
  {
    title: 'Academic Records',
    desc: 'Pellentesque in ipsum id orci porta dapibus.',
  },
  {
    title: 'Recommendation Letters',
    desc: 'Mauris blandit aliquet elit, eget tincidunt nibh.',
  },
  {
    title: 'Personal Statement',
    desc: 'Vivamus suscipit tortor eget felis porttitor.',
  },
  {
    title: 'Standardized Tests',
    desc: 'Mauris blandit aliquet elit.',
  },
];

const AdmissionInfo = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-12">
          {/* Heading */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <h2 className="text-4xl font-bold text-gray-900">
              Begin Your Academic Journey Today
            </h2>
            <p className="mt-3 text-gray-600 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vulputate metus vel erat vehicula.
            </p>
          </motion.div>

          {/* How to Apply */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">How to Apply</h3>
            <ul className="space-y-6">
              {admissionSteps.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-4"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={idx + 2}
                >
                  <div className="bg-green-500 text-white rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold shadow-md">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Deadlines */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={6}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Key Admission Deadlines</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {deadlines.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white border border-gray-200 p-5 rounded-lg shadow hover:shadow-lg transition-all"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={idx + 7}
                >
                  <h4 className="font-semibold text-gray-900 text-lg">{item.label}</h4>
                  <p className="text-sm text-green-600 font-medium mt-1">{item.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-10">
          {/* Admission Requirements */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Admission Requirements</h3>
            <ul className="space-y-5">
              {requirements.map((item, idx) => (
                <motion.li key={idx} variants={fadeUp} initial="hidden" animate="visible" custom={idx + 10}>
                  <h4 className="font-medium text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Request Information Form */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Request Information</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400">
                <option>Program of Interest</option>
                <option>Bachelor&#39;s</option>
                <option>Master&#39;s</option>
                <option>PhD</option>
              </select>
              <textarea
                placeholder="Questions or Comments"
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all w-full"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionInfo;
