import Image from "next/image";

const ServiceCard = ({ title, description, imageSrc, imageOnRight }) => {
  return (
    <div className="flex flex-col md:flex-row h-full shadow-xl rounded-lg overflow-hidden bg-gradient-to-r from-teal-700 to-green-500 text-white">
      {/* Image Section */}
      {!imageOnRight && (
        <div className="relative w-full md:w-3/10 h-64 md:h-auto">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="w-full md:w-7/10 p-8 flex flex-col justify-center">
        <h3 className="font-bold text-2xl mb-4">{title}</h3>
        <p className="line-clamp-4">{description}</p>
        <button className="mt-4 px-4 py-2 bg-white text-teal-700 rounded-full hover:bg-teal-800 hover:text-white transition-colors duration-300 self-start">
          Learn More
        </button>
      </div>

      {/* Image Section (When Image is on Right) */}
      {imageOnRight && (
        <div className="relative w-full md:w-3/10 h-64 md:h-auto">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
