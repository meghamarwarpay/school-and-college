"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaSearch,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const dmylgo = "/img/Dummylogo.jpg";

const navLinksTop = [
  { label: "Home", link: "/" },
  {
    label: "About",
    link: "/about",
    options: [
      { label: "Admission", link: "/admission" },
      { label: "Courses", link: "/courses" },
      { label: "Faculty & Staff", link: "/faculty-staff" },
      { label: "Academics", link: "/academics" },
    ],
  },
  { label: "Placements", link: "/placements" },
  { label: "Life at Ranabai", link: "/life-at-ranabai" },
];

const navLinksRight = [
  { label: "About Ranabai", link: "/about" },
  { label: "Contact", link: "/contact" },
];

const dropdownLinks = [
  {
    title: "Admissions",
    options: [
      { label: "Admission Process", link: "/admission" },
      { label: "Undergraduate", link: "/admissions/ug" },
      { label: "Postgraduate", link: "/admissions/pg" },
      { label: "PhD", link: "/admissions/phd" },
    ],
  },
  {
    title: "Departments",
    options: [
      { label: "Engineering", link: "/departments/engineering" },
      { label: "Management", link: "/departments/management" },
      { label: "Sciences", link: "/departments/sciences" },
    ],
  },
  {
    title: "Academics",
    options: [
      { label: "Courses", link: "/academic/courses" },
      { label: "Calendar", link: "/academic/calendar" },
      { label: "Syllabus", link: "/academic/syllabus" },
    ],
  },
  {
    title: "Campus Life",
    options: [
      { label: "Hostel", link: "/campus-life/hostel" },
      { label: "Clubs", link: "/campus-life/clubs" },
      { label: "Events", link: "/campus-life/events" },
    ],
  },
  {
    title: "People",
    options: [
      { label: "Faculty List", link: "/faculty/list" },
      { label: "Student Council", link: "/students/council" },
    ],
  },
];

export default function Navbar2() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);

  const loginRef = useRef(null);

  // Close login dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setLoginOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full font-sans fixed top-0 left-0 z-50 shadow-md bg-white">
      {/* Top Green Navbar */}
      <div className="bg-[#00a400] text-white px-4 py-2 flex items-center justify-between">
        <div className="relative w-32 sm:w-44 md:w-64 hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-1.5 rounded-full text-sm bg-white text-black placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        <p className="font-semibold text-sm sm:text-base md:text-lg text-center flex-1 sm:flex-none">
          Ranabai School & College
        </p>

        <div className="flex items-center gap-3 text-lg">
          <div className="hidden md:flex gap-3">
            <FaFacebookF className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaLinkedinIn className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
          </div>
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Secondary Navbar */}
      <div className="bg-white backdrop-blur-md px-4 py-3 flex items-center justify-between text-sm font-semibold text-black shadow">
        {/* Dropdown Menus (Desktop) */}
        <div className="hidden md:flex items-center gap-6 relative">
          {dropdownLinks.map((menu, i) => (
            <div
              key={i}
              className="relative cursor-pointer"
              onMouseEnter={() => setOpenDropdown(menu.title)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <span>{menu.title} ▾</span>
              {openDropdown === menu.title && (
                <div className="absolute top-full left-0 bg-white shadow rounded mt-1 py-2 z-50 w-40">
                  {menu.options.map((option, j) => (
                    <Link
                      key={j}
                      href={option.link}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {option.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {navLinksRight.map((link, i) => (
            <Link
              key={`right-${i}`}
              href={link.link}
              className="hover:text-red-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Centered Logo */}
        <div className="md:hidden mx-auto">
          <Image
            src={dmylgo}
            alt="Ranabai Logo"
            width={40}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* CTA Buttons (Desktop) */}
        <div className="hidden md:flex gap-6 relative">
          <button className="border border-red-600 px-4 py-1 rounded-full text-red-600 hover:bg-red-100">
            APPLY NOW
          </button>

          {/* LOGIN (Click Dropdown) */}
          <div className="relative" ref={loginRef}>
            <button
              className="border border-blue-600 px-4 py-1 rounded-full text-blue-600 hover:bg-blue-100"
              onClick={() => setLoginOpen(!loginOpen)}
            >
              LOGIN ▾
            </button>
            {loginOpen && (
              <div className="absolute top-full right-0 bg-white shadow rounded mt-1 py-2 w-40 z-50">
                <a
                  href="https://admin.ranabaischool.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Admin Login
                </a>
                <a
                  href="https://student.ranabaischool.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Student Login
                </a>
              </div>
            )}
          </div>

          <a
            href="/ranabhaiapk.apk"
            download
            className="border border-green-600 px-4 py-1 rounded-full text-green-600 hover:bg-green-100"
          >
            DOWNLOAD APP
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-white px-4 py-4 md:hidden flex flex-col gap-4 text-sm font-semibold text-black shadow max-h-[70vh] overflow-y-auto">
          {[...navLinksTop, ...navLinksRight].map((link, i) => (
            <div key={i}>
              <Link href={link.link} className="block py-1">
                {link.label}
              </Link>
              {link.options && (
                <div className="ml-4">
                  {link.options.map((opt, j) => (
                    <Link key={j} href={opt.link} className="block py-1">
                      {opt.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {dropdownLinks.map((menu, i) => (
            <div key={i}>
              <span className="font-bold">{menu.title}</span>
              <div className="ml-4">
                {menu.options.map((opt, j) => (
                  <Link key={j} href={opt.link} className="block py-1">
                    {opt.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <button className="mt-2 border border-red-600 px-4 py-2 rounded-full text-red-600 hover:bg-red-100 w-fit">
            APPLY NOW
          </button>

          {/* Login (Mobile) */}
          <div className="mt-2">
            <span className="font-bold">Login</span>
            <div className="ml-4">
              <a
                href="https://admin.ranabaischool.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-1"
              >
                Admin Login
              </a>
              <a
                href="https://student.ranabaischool.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-1"
              >
                Student Login
              </a>
            </div>
          </div>

          <a
            href="/ranabhaiapk.apk"
            download
            className="mt-2 border border-green-600 px-4 py-2 rounded-full text-green-600 hover:bg-green-100 w-fit"
          >
            DOWNLOAD APP
          </a>
        </div>
      )}
    </div>
  );
}
