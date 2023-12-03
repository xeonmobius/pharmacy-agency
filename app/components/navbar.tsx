"use client";

import Link from "next/link";
import IconMortarPestlePlus from "./companyIcon";
import ContactModal from "./contactModal";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);

  return (
    <nav className="shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="#">
                <div className="flex items-center py-4 px-2 mr-6 hover:text-purple-500 transition duration-300 rounded">
                  <IconMortarPestlePlus className="h-20 w-20" />
                  Swiftscript Partners
                </div>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="#">
                <div className="py-2 px-2 hover:bg-gray-200 transition duration-300 rounded">
                  Home
                </div>
              </Link>
              <Link href="#">
                <div className="py-2 px-2 hover:bg-gray-200 transition duration-300 rounded">
                  About Us
                </div>
              </Link>
              <Link href="#">
                <div className="py-2 px-2 hover:bg-gray-200 transition duration-300 rounded">
                  Services
                </div>
              </Link>
              <Link href="#">
                <div className="py-2 px-2 hover:bg-gray-200 transition duration-300 rounded">
                  Testimonials
                </div>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            <button onClick={() => setContactOpen(true)}>
              <div className="py-2 px-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300">
                Contact Us
              </div>
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setOpen(!isOpen)}
            >
              <svg
                className="w-12 h-12 px-2 py-2 text-black hover:bg-gray-200 transition duration-300 rounded"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute bg-gray-800 z-50 w-full text-center">
          <ul>
            <li>
              <Link href="#">
                <div className="block text-sm px-2 py-4 text-white bg-purple-500 font-semibold">
                  Home
                </div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className="block text-sm px-2 py-4 text-white hover:bg-purple-500 transition duration-300">
                  About Us
                </div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className="block text-sm px-2 py-4 text-white hover:bg-purple-500 transition duration-300">
                  Services
                </div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className="block text-sm px-2 py-4 text-white hover:bg-purple-500 transition duration-300">
                  Testimonials
                </div>
              </Link>
            </li>
            <li></li>
            <li>
              <Link href="#">
                <div className="block text-sm px-2 py-4 text-white hover:bg-purple-500 transition duration-300">
                  Contact Us
                </div>
              </Link>
            </li>
          </ul>
        </div>
      )}
      {isContactOpen && <ContactModal setContactOpen={setContactOpen} />}
    </nav>
  );
}
