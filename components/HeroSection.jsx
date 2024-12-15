import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-teal-700 to-green-500 w-full h-[70vh] flex items-center justify-center text-white">
      {/* Background Image (Optional) */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/hero-bg.jpg')", // Replace with your image path
        }}
      ></div>
      <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Overlay */}
      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl px-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-yellow-300">Phynovate</span>
        </h1>
        <p className="text-base md:text-lg font-medium mb-6">
          Empowering businesses with innovative financial solutions to help you
          achieve your goals and drive success.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/about">
            <button className="px-5 py-2 bg-yellow-300 text-teal-700 font-semibold rounded-md shadow-md hover:bg-yellow-400 transition">
              Learn More
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-5 py-2 bg-teal-700 text-white font-semibold rounded-md shadow-md hover:bg-teal-600 transition">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
