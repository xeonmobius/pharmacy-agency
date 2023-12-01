import Link from "next/link";

export default function Component() {
  return (
    <div className="flex justify-center items-center flex-col dark:bg-gray-800">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mt-20 mb-10">
        Welcome to Our Website!
      </h1>
      <p className="text-xl text-gray-500 dark:text-gray-300 mb-10 px-6 text-center">
        We provide the best services in the industry. Explore our site to learn
        more about what we can do for you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Service 1
          </h2>
          <p className="text-gray-500 dark:text-gray-300">
            Details about Service 1.
          </p>
        </div>
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Service 2
          </h2>
          <p className="text-gray-500 dark:text-gray-300">
            Details about Service 2.
          </p>
        </div>
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Service 3
          </h2>
          <p className="text-gray-500 dark:text-gray-300">
            Details about Service 3.
          </p>
        </div>
      </div>
      <Link
          href="#"
          className="mb-20 bg-purple-600 text-white hover:bg-purple-700 transition duration-300 py-2 px-4 rounded"
        >
          Learn More
        </Link>
    </div>
  );
}
