import { MdOutlineFileDownload } from "react-icons/md";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import { PiAt } from "react-icons/pi";
import { socials } from "../data/socials";
import { BtnSocial } from "./common/Buttons/BtnSocial";
import { Tooltip } from "./common/Tooltip/Tooltip";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


export const SideBar = () => {

  const [isShowContact, setIsShowContact] = useState<boolean>(false);

  return (
    <div 
      className="sticky w-full lg:w-auto h-full bg-black-main-two rounded-3xl mb-0 z-40 border border-black-one"
      style={{ 
        boxShadow: "0 24px 80px hsla(0, 0%, 0%, 0.25)" 
      }}
    >
      <div className="w-full h-full">
        <button 
          className="absolute top-0 right-0 bg-black-one p-1.5 md:px-7 md:py-3 rounded-tr-3xl rounded-bl-3xl shadow-md lg:hidden"
          onClick={() => setIsShowContact(!isShowContact)}
        >
          <IoIosArrowDown className="w-6 h-6 text-orange-yellow-crayola block md:hidden" />
          <span className="capitalize text-orange-yellow-crayola hidden md:block">Show contact</span>
        </button>
        <div className="w-full h-full flex lg:flex-col items-center justify-center gap-3 p-2 md:px-10 md:py-5 lg:pt-16 lg:py-0">
          <figure className="avatar-box">
            <img
              src={"/assets/images/profile.png"}
              alt=""
              className="w-40 md:w-52 lg:w-36"
            />
          </figure>
          <div className="w-full h-full flex flex-col items-center justify-center lg:items-center lg:justify-center lg:mt-5">
            <div className="w-full text-left">
              <h1 className="text-white-two text-base lg:text-2xl font-medium md:whitespace-nowrap md:text-center mb-1 md:mb-2 lg:mb-4 lg:mt-0">
                Alexander Valverde
              </h1>
            </div>
            <div className="w-full text-left">
              <p className="bg-black-two rounded-lg text-white-one text-xs font-light px-3 py-2 w-max mb-2 md:mb-2 lg:mb-4 lg:mx-auto lg:mt-0">
                Full Stack Developer
              </p>
            </div>
            <div className="w-full text-left">
              <ul className="w-full flex items-start justify-start lg:items-center lg:justify-center gap-4">
                {
                  socials.map( (social) => (
                    <BtnSocial key={social.id} props={social} />
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
        <div className={`w-full h-full px-5 md:px-10 lg:px-8 lg:block ${isShowContact ? 'block' : 'hidden' }`}>
          <div className="w-full h-[1px] mt-4 mb-6 bg-black-one"></div>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-y-5 px-0 lg:px-0">
            <Tooltip message="Birthday">
              <div className="w-full flex items-center justify-start lg:justify-start gap-2">
                <CiCalendar className="w-6 h-6 text-orange-yellow-crayola" />
                <p className="text-white-two font-light text-sm md:text-lg lg:text-sm">January 06</p>
              </div>
            </Tooltip>
            <Tooltip message="E-mail">
              <div className="w-full flex items-center justify-start lg:justify-start gap-2">
                <PiAt className="w-6 h-6 text-orange-yellow-crayola" />
                <p className="text-white-two font-light text-sm md:text-lg lg:text-sm" data-toggle="tooltip" data-original-title="Phone" data-placement="top">valverdealex25@gmail.com</p>
              </div>
            </Tooltip>
            <Tooltip message="Phone">
              <div className="w-full flex items-center justify-start lg:justify-start gap-2">
                <BsPhone className="w-6 h-6 text-orange-yellow-crayola" />
                <p className="text-white-two font-light text-sm md:text-lg lg:text-sm">+51 968 702 950</p>
              </div>
            </Tooltip>
            <Tooltip message="Location">
              <div className="w-full flex items-center justify-start lg:justify-start gap-2">
                <CiLocationOn className="w-6 h-6 text-orange-yellow-crayola" />
                <p className="text-white-two font-light text-sm md:text-lg lg:text-sm">Lima, Perú</p>
              </div>
            </Tooltip>
          </div>
          <div className="w-full flex items-center justify-center mt-8 mb-3">
            <button className="flex items-center justify-center px-5 shadow-sm shadow-black-main-one rounded-xl py-3 gap-3 bg-black-two hover:bg-black-one">
              <MdOutlineFileDownload className="w-6 h-6 text-orange-yellow-crayola" />
              <span className="text-orange-yellow-crayola text-sm md:text-lg lg:text-sm">Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}
