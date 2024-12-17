import { FooterForm } from "@/util/FooterForm";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[#005425] to-[#2c2e30] mx-auto">
      <div className="flex justify-center items-center text-white mx-auto max-w-7xl border-b border-stone-400">
        <form className="pt-20 max-w-3xl pb-32">
          <div className="mb-8">
            <h2 className="flex justify-center font-bold text-3xl mb-8">
              Start a Conversation
            </h2>
            <p className="flex text-center items-center">
              Allow us to help you determine if our team/system is right for
              your office. Call or send us an email using the form below and we
              will reply promptly.
            </p>
          </div>
          <div>
            <p>Contact Info</p>
            <FooterForm />
          </div>
        </form>
      </div>
      <div className="flex max-w-7xl p-20"></div>
      <div className="flex justify-between items-center w-full bg-black px-14">
        <span className="items-center text-white">
          © 2024 Phynovate. All Rights Reserved. Privacy Policy
        </span>
        <span className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 48 48"
          >
            <path
              fill="#3F51B5"
              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
            ></path>
            <path
              fill="#FFF"
              d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 48 48"
          >
            <path
              fill="#0288D1"
              d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
            ></path>
            <path
              fill="#FFF"
              d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Footer;
