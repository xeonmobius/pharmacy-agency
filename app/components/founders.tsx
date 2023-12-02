import Image from "next/image";

export default function Component() {
  return (
    <div className="flex justify-center items-center flex-col dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mt-20 mb-10">
          Our Pharmacists
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <Image
              alt="Client 1 logo"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <h3 className="text-gray-800 dark:text-white mt-2 text-2xl text-center">
              Apeksha Jani
            </h3>
          </div>
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <Image
              alt="Client 2 logo"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <h3 className="text-gray-800 dark:text-white mt-2 text-2xl text-center">
              Shannon Chowdhury
            </h3>
          </div>
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <Image
              alt="Client 3 logo"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <h3 className="text-gray-800 dark:text-white mt-2 text-2xl text-center">
              Michael Chowdhury
            </h3>
          </div>
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <Image
              alt="Client 4 logo"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
            <h3 className="text-gray-800 dark:text-white mt-2 text-2xl text-center">
              Tony Dhinraj
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
