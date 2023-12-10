import React from "react";

export default function Component() {
  return (
    <div className="relative ">
      <div className="w-[100vw] h-[70vh] max-w-6xl mx-auto px-4">
        <img src="/pharmacist.jpg" alt="Hero" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-black opacity-50 w-full"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center h-full">
        <h1 className="text-6xl text-white">Pharmacy Staffing Done Right</h1>
        <h1 className="text-4xl text-white">Swift, Reliable, and Tailored to Your Needs</h1>
      </div>
    </div>
  );
}
