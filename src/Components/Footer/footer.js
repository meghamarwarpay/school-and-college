"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";


// Sample Footer Data
const footerLinks = [
    {
        title: "Company",
        links: [
            { name: "Home", href: "/" },
            { name: "About", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Contact", href: "/contact" },
            { name: "Placement", href: "/contact" },
        ],
    },
    {
        title: "Quick Links",
        links: [
            { name: "Figma UI System", href: "/products/figma" },
            { name: "Icons Assets", href: "/products/icons" },
            { name: "Blocks", href: "/products/blocks" },
            { name: "Components", href: "/products/components" },
        ],
    },
    {
        title: "Information",
        links: [
            { name: "FAQs", href: "/faq" },
            { name: "Docs", href: "/docs" },
            { name: "User Guide", href: "/guide" },
            { name: "Privacy Policy", href: "/privacy" },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="bg-white text-green-800 border-t border-green-100">
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="pt-16 pb-8 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto"
            >
                {/* Top Section */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-b border-green-100 pb-12">
                    <Link href="/" className="text-2xl font-bold text-green-700">
                        {/* Add your logo SVG or text */}

                        NAGOR INTERNATIONAL<br /> PUBLIC SCHOOL
                    </Link>
                    <div className="flex gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-green-100 hover:bg-green-200 text-green-800 transition">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-green-100 hover:bg-green-200 text-green-800 transition">
                            <FaInstagram size={18} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-green-100 hover:bg-green-200 text-green-800 transition">
                            <FaTwitter size={18} />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-green-100 hover:bg-green-200 text-green-800 transition">
                            <FaYoutube size={18} />
                        </a>
                    </div>

                </div>

                {/* Footer Links Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-green-100">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h4 className="text-lg font-semibold text-green-900 mb-5">
                                {section.title}
                            </h4>
                            <ul className="space-y-1">
                                {section.links.map((link, idx) => (
                                    <li key={idx}>
                                        <Link
                                            href={link.href}
                                            className="text-base text-green-700 hover:text-green-900 transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold text-green-900 mb-5">Newsletter</h4>
                        <form className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-3 border border-green-200 rounded-md text-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                            />
                            <button
                                type="submit"
                                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-green-500">
                    <span>© {new Date().getFullYear()} MyWebsite. All rights reserved.</span>
                    <Link href="/terms" className="hover:text-green-800">
                        Terms & Conditions
                    </Link>
                </div>
            </motion.section>
        </footer>
    );
};

export default Footer;
