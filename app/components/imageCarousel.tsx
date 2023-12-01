import Link from "next/link";
import Image from "next/image";
export default function Component() {
  return (
    <div className="flex justify-center items-center flex-col dark:bg-gray-800">
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg mb-20">
        <div className="absolute inset-y-0 left-0 flex items-center">
          <Link
            href="#"
            className="ml-3 bg-white dark:bg-gray-800 text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 py-2 px-4 rounded"
          >
            <IconArrowleft className="h-6 w-6" />
          </Link>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <Link
            href="#"
            className="mr-3 bg-white dark:bg-gray-800 text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 py-2 px-4 rounded"
          >
            <IconArrowright className="h-6 w-6" />
          </Link>
        </div>
        <div className="flex justify-center items-center h-96">
          <div className="text-center">
            <Image
              alt="Service 1 Image"
              className="mb-4"
              height="384"
              src="/placeholder.svg"
              style={{
                aspectRatio: "384/384",
                objectFit: "cover",
              }}
              width="384"
            />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Service 1
            </h2>
            <p className="text-gray-500 dark:text-gray-300 mb-4">
              Details about Service 1.
            </p>
            <Link
              className="bg-purple-600 text-white hover:bg-purple-700 transition duration-300 py-2 px-4 rounded"
              href="#"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

interface IconArrowProps {
  // define the properties of the 'props' object
  // for example:
  className: string;
}
function IconArrowleft(props: IconArrowProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function IconArrowright(props: IconArrowProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
