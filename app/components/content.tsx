import Link from "next/link";
import IconClockCircle from "./icons/clockIcon";
import IconTrophy from "./trophyIcon";
import IconBarcode from "./icons/barcodeIcon";

export default function Component() {
  return (
    <div className="flex justify-center items-center flex-col dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mt-20 mb-10 text-center">
          Swift Script Partners - Who we are
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-300 mb-10 px-6 text-justify">
          Swift Script Partners specializes in delivering tailored staffing
          solutions, offering experienced pharmacists aligned with your specific
          needs and schedule. We are dedicated to consistently providing highly
          qualified professionals, ensuring a customized fit for your business
          every time. Our team of experienced pharmacists possesses in-depth
          knowledge and is well-equipped to deliver an exceptional employee
          relief experience. At Swift Script Partners, we are committed to
          supporting the growth of your business through a dedicated team of
          pharmacists. Choose us for a partnership focused on the success and
          expansion of your enterprise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Excellent Service Time
            </h2>
            <IconClockCircle className="text-white text-8xl justify-center w-full" />
            <p className="text-gray-500 dark:text-gray-300">
              Have a pharmacist appear at your location within the next 24 hours.
            </p>
          </div>
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Excellent Experienced Pharmacist 
            </h2>
            <IconTrophy className="text-white text-8xl justify-center w-full"/>
            <p className="text-gray-500 dark:text-gray-300">
              Our Pharmacist have over 5 years of experience including on how to use Kroll and HealthWatch.
            </p>
          </div>
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Expert Medication Inventory Management
            </h2>
            <IconBarcode className="text-white text-8xl justify-center w-full"/>
            <p className="text-gray-500 dark:text-gray-300">
              Our Pharmacist are trained to reduce inventory cost and optimize inventory to meet your patient&aposs needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
