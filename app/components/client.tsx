import Image from "next/image";

export default function Component() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mt-20 text-center">
          Our Clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-lg p-4">
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
          <div className="rounded-lg p-4">
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
          <div className="rounded-lg p-4">
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
          <div className="rounded-lg p-4">
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
          <div className="rounded-lg p-4">
            <Image
              alt="Sobeys"
              height="300"
              src="/sobey logo.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "contain",
              }}
              width="300"
            />
          </div>
          
          <div className="rounded-lg p-4">
            <Image
              alt="Food Basics"
              height="300"
              src="/food basics logo.svg"
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
