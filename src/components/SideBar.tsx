import { MdOutlineFileDownload } from "react-icons/md";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import { PiAt } from "react-icons/pi";
import { socials } from "../data/socials";
import { BtnSocial } from "./common/Buttons/BtnSocial";
import { Tooltip } from "./common/Tooltip/Tooltip";


export const SideBar = () => {
  return (
    <div className="sticky w-auto h-full min-w-1/4 bg-black-main-two rounded-3xl mb-0 z-50 border border-black-one"
      style={{ 
        boxShadow: "0 24px 80px hsla(0, 0%, 0%, 0.25)" 
      }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center px-10 pt-16">
        <figure className="avatar-box">
          <img
            src={"/assets/images/profile.png"}
            alt=""
            className="w-36"
          />
        </figure>
        <div className="w-full flex flex-col items-center justify-center mt-5">
          <h1 className="text-white-two text-2xl font-medium whitespace-nowrap text-center mb-4">
            Alexander Valverde
          </h1>
          <p className="bg-black-two rounded-lg text-white-one text-sm font-light mx-auto px-3 py-2 w-max mb-4">
            Full Stack Developer
          </p>
          <ul className="w-full flex items-center justify-center gap-4 py-2">
            {
              socials.map( (social) => (
                <BtnSocial key={social.id} props={social} />
              ))
            }
          </ul>
        </div>
        <div className="w-full h-full">
          <div className="w-full h-[1px] mt-4 mb-6 bg-black-one"></div>
          <div className="w-full h-auto grid grid-cols-1 gap-y-5">
            <Tooltip message="Birthday">
              <div className="w-full flex items-center justify-start gap-2">
                <CiCalendar className="w-7 h-7 text-orange-yellow-crayola" />
                <p className="text-white-two font-light text-sm">January 06</p>
              </div>
            </Tooltip>
            <Tooltip message="Location">
              <div className="w-full flex items-center justify-start gap-2">
                <CiLocationOn className="w-7 h-7 text-orange-yellow-crayola" />
                <p className="text-white-two font-light text-sm">Lima, Perú</p>
              </div>
            </Tooltip>
            <Tooltip message="E-mail">
              <div className="w-full flex items-center justify-start gap-2">
                <PiAt className="w-7 h-7 text-orange-yellow-crayola" />
                <p className="text-white-two font-light text-sm" data-toggle="tooltip" data-original-title="Phone" data-placement="top">valverdealex25@gmail.com</p>
              </div>
            </Tooltip>
            <Tooltip message="Phone">
              <div className="w-full flex items-center justify-start gap-2">
                <BsPhone className="w-7 h-7 text-orange-yellow-crayola" />
                <p className="text-white-two font-light text-sm">+51 968 702 950</p>
              </div>
            </Tooltip>
          </div>
          <div className="w-full flex items-center justify-center my-8">
            <button className="bg-black-two hover:bg-black-one flex items-center justify-center gap-2 px-4 py-2 rounded-md overflow-hidden">
              <MdOutlineFileDownload className="w-6 h-6 text-white-one" />
              <span className="text-white-one text-sm">Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
