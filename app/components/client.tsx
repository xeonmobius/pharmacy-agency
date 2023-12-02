import Image from "next/image";

export default function Client() {
  return (
    <div className="flex justify-center items-center flex-col dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mt-20 mb-10 text-center">
          Our Clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <Image
              alt="Walmart"
              height="300"
              src="/walmart logo.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "contain",
              }}
              width="300"
            />
          </div>
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <Image
              alt="Shoppers Drugmart"
              height="300"
              src="/shoppers logo.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "contain",
              }}
              width="300"
            />
          </div>
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <Image
              alt="Metro"
              height="300"
              src="/metro logo.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "contain",
              }}
              width="300"
            />
          </div>
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4">
            <Image
              alt="Loblaws"
              height="300"
              src="/loblaws logo.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "contain",
              }}
              width="300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
