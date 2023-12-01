import Image from "next/image";

export default function Client() {
  return (
    <div className="flex justify-center items-center flex-col dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mt-20 mb-10">Our Clients</h2>
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
          <p className="text-gray-800 dark:text-white mt-2">Client 1</p>
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
          <p className="text-gray-800 dark:text-white mt-2">Client 2</p>
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
          <p className="text-gray-800 dark:text-white mt-2">Client 3</p>
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
          <p className="text-gray-800 dark:text-white mt-2">Client 4</p>
        </div>
      </div>
    </div>
  )
}

