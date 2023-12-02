"use client";

import Link from "next/link";
import { useState } from "react";
import ContactModal from "./contactModal";

export default function Component() {
  const [isContactOpen, setContactOpen] = useState(false);

  const onClickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    setContactOpen(!isContactOpen);
  }
  return (
    <div className="flex justify-center items-center flex-col dark:bg-gray-800 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mt-20 mb-10">
          Have a Question?
        </h1>
        <Link
          href="#"
          className="mb-20 bg-purple-600 text-white hover:bg-purple-700 transition duration-300 py-2 px-4 rounded items-center w-full"
          onClick={(e) => onClickHandler(e)}
        >
          Contact Us
        </Link>
      </div>
      {isContactOpen && <ContactModal setContactOpen={setContactOpen} />}    </div>
  );
}
