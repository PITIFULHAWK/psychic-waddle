import React from "react";

export const FooterForm = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
      {/* Row 1: Name and Phone */}
      <div className="flex flex-col">
        <label className="font-semibold text-gray-300">
          Name <span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          className="bg-transparent p-4 border border-gray-500 text-gray-300 placeholder-gray-400 rounded-md h-12 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          placeholder="Name"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold text-gray-300">
          Phone <span className="text-red-700">*</span>
        </label>
        <input
          type="tel"
          className="bg-transparent p-4 border border-gray-500 text-gray-300 placeholder-gray-400 rounded-md h-12 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          placeholder="Phone"
        />
      </div>

      {/* Row 2: Email and Website */}
      <div className="flex flex-col">
        <label className="font-semibold text-gray-300">
          Email <span className="text-red-700">*</span>
        </label>
        <input
          type="email"
          className="bg-transparent p-4 border border-gray-500 text-gray-300 placeholder-gray-400 rounded-md h-12 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          placeholder="Email"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold text-gray-300">Website</label>
        <input
          type="url"
          className="bg-transparent p-4 border border-gray-500 text-gray-300 placeholder-gray-400 rounded-md h-12 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          placeholder="Website"
        />
      </div>

      {/* Row 3: Message */}
      <div className="flex flex-col col-span-2">
        <label className="font-semibold text-gray-300">
          Message <span className="text-red-700">*</span>
        </label>
        <textarea
          className="bg-transparent p-4 border border-gray-500 text-gray-300 placeholder-gray-400 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          placeholder="Your message..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center col-span-2">
        <button
          type="submit"
          className="bg-transparent text-gray-300 border-2 border-gray-300 rounded-md pt-3 pr-6 pb-3 pl-6 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
