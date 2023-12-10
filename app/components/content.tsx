import IconClockCircle from "./icons/clockIcon";
import IconTrophy from "./trophyIcon";
import IconBarcode from "./icons/barcodeIcon";

export default function Component() {
  return (
    <div className="flex justify-center items-center flex-col dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mt-20 mb-10 text-center">
          Swift Script Partners: Your Trusted Partner in Pharmacy Staffing
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-300 mb-10 px-6 text-justify">
          Stop struggling to find the right pharmacists for your busy pharmacy.
          At Swift Script Partners, we understand the challenges pharmacy owners
          face when it comes to staffing. That's why we've dedicated ourselves
          to providing tailored staffing solutions that meet your specific needs
          and schedule.
        </p>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mt-20 mb-10 text-center">
          Here's why you should choose Swift Script Partners:
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Excellent Service Time
            </h2>
            <IconClockCircle className="text-white text-8xl justify-center w-full" />
            <p className="text-gray-500 dark:text-gray-300">
              Have a pharmacist appear at your location within the next 24
              hours.
            </p>
          </div>
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Excellent Experienced Pharmacist
            </h2>
            <IconTrophy className="text-white text-8xl justify-center w-full" />
            <p className="text-gray-500 dark:text-gray-300">
              We have a network of highly qualified pharmacists with diverse
              backgrounds and expertise. We carefully match each pharmacist to
              your specific requirements, ensuring a seamless integration into
              your team.
            </p>
          </div>
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Exceptional Relief Experience
            </h2>
            <IconBarcode className="text-white text-8xl justify-center w-full" />
            <p className="text-gray-500 dark:text-gray-300">
              Our pharmacists are more than just employees; they're partners in
              your success. They are dedicated to providing outstanding patient
              care and ensuring a smooth workflow in your pharmacy.
            </p>
          </div>
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Growth Partner{" "}
            </h2>
            <IconBarcode className="text-white text-8xl justify-center w-full" />
            <p className="text-gray-500 dark:text-gray-300">
              We believe in the success of your pharmacy. Our ultimate goal is
              to help your business grow and thrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
