"use client";

import IconCloseR from "./closeIcon";

type Props = {
  setContactOpen: (open: boolean) => void;
};

export default function ContactModal({ setContactOpen }: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-lg w-full">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-white mb-4">
            Please fill in the form
          </h2>
          <h2
            className="text-white text-2xl font-bold"
            onClick={() => setContactOpen(false)}
          >
            <IconCloseR />
          </h2>
        </div>
        <form className="space-y-4">
          <input
            aria-label="First Name"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded"
            placeholder="First Name*"
            type="text"
          />
          <input
            aria-label="Last Name"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded"
            placeholder="Last Name*"
            type="text"
          />
          <input
            aria-label="Email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded"
            placeholder="Email*"
            type="email"
          />
          <input
            aria-label="Phone Number"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded"
            placeholder="Phone Number*"
            type="text"
          />
          <input
            aria-label="Pharmacy Name"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded"
            placeholder="Pharmacy Name*"
            type="text"
          />
          <input
            aria-label="From Date"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded"
            placeholder="From Date"
            type="date"
          />
          <input
            aria-label="To Date"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded"
            placeholder="To Date"
            type="date"
          />
          <textarea
            aria-label="Message"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded"
            placeholder="Message"
          />
          <button
            aria-label="Submit"
            className="w-full bg-purple-600 text-white hover:bg-purple-700 transition duration-300 py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
