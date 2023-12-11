import React from "react";

export default function Component() {
  return (
    <div className="relative">
      <div className="h-[70vh] max-w-6xl mx-auto">
        <img
          src="/pharmacist.jpg"
          alt="Hero"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center h-full">
        <h1 className="text-6xl text-white">Pharmacy Staffing Done Right</h1>
        <h1 className="text-4xl text-white">
          Swift, Reliable, and Tailored to Your Needs
        </h1>
      </div>
    </div>
  );
}
