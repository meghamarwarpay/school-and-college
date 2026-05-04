'use client';

import React from 'react';
import { motion } from 'framer-motion';


const ContactForm = () => {
  return (
    <section className="mb-32">
      {/* Map Section */}
      <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
          width="100%"
          height="480"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className="container px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="block rounded-2xl bg-white/80 px-6 py-12 shadow-lg md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300"
        >
          <div className="flex flex-wrap">
            {/* Left Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-12 w-full lg:mb-0 lg:w-5/12 lg:px-6"
            >
              <form>
                {/* Name */}
                <div className="relative mb-6">
                  <input
                    type="text"
                    className="peer block w-full rounded border-2 border-gray-300 bg-transparent py-2 px-3 leading-6 outline-none transition-all focus:border-sky-500"
                    id="name"
                    placeholder=" "
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-3 top-2 text-gray-500 transition-all duration-200 ease-out peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-sky-500"
                  >
                    Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative mb-6">
                  <input
                    type="email"
                    className="peer block w-full rounded border-2 border-gray-300 bg-transparent py-2 px-3 leading-6 outline-none transition-all focus:border-sky-500"
                    id="email"
                    placeholder=" "
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-3 top-2 text-gray-500 transition-all duration-200 ease-out peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-sky-500"
                  >
                    Email address
                  </label>
                </div>

                {/* Message */}
                <div className="relative mb-6">
                  <textarea
                    className="peer block w-full rounded border-2 border-gray-300 bg-transparent py-2 px-3 leading-6 outline-none transition-all focus:border-sky-500"
                    id="message"
                    rows="3"
                    placeholder=" "
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-3 top-2 text-gray-500 transition-all duration-200 ease-out peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-sky-500"
                  >
                    Message
                  </label>
                </div>

                {/* Checkbox */}
                <div className="mb-6 flex items-center">
                  <input
                    type="checkbox"
                    id="copy"
                    className="mr-2 h-4 w-4 rounded border-gray-300"
                    defaultChecked
                  />
                  <label htmlFor="copy" className="text-sm text-gray-700">
                    Send me a copy of this message
                  </label>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="mb-6 w-full rounded bg-sky-500 hover:bg-sky-600 px-6 py-3 text-sm font-semibold uppercase text-white transition"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Right Column: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              viewport={{ once: true }}
              className="w-full lg:w-7/12"
            >
              <div className="flex flex-wrap gap-8">
                {/* Support */}
                <div className="flex items-start gap-4 w-full md:w-1/2">
                  <div className="inline-block rounded-md bg-sky-100 p-4 text-xl">📞</div>
                  <div>
                    <p className="mb-1 font-bold">Faculty Support</p>
                    <p className="text-sm text-gray-600">example@gmail.com</p>
                    <p className="text-sm text-gray-600">+91-9509494310</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 w-full md:w-1/2">
                  <div className="inline-block rounded-md bg-sky-100 p-4 text-xl">🏢</div>
                  <div>
                    <p className="mb-1 font-bold">Compus Address</p>
                    <p className="text-sm text-gray-600">Jaipur, Rajasthan, India</p>
                  </div>
                </div>

                {/* Business */}
                <div className="flex items-start gap-4 w-full md:w-1/2">
                  <div className="inline-block rounded-md bg-sky-100 p-4 text-xl">💼</div>
                  <div>
                    <p className="mb-1 font-bold">Admission Inquiries</p>
                    <p className="text-sm text-gray-600">Feel free to reach out via email.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
