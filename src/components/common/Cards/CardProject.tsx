import { Link } from "react-router-dom";
import { TypeProjects } from "../../../types/data"
import { IoEyeSharp } from "react-icons/io5";
import { SiGithub } from "react-icons/si";

interface CardProjectProps {
  props: TypeProjects;
}

export const CardProject = ({ props }: CardProjectProps) => {
  return (
    <div className="w-full bg-black-main-one rounded-2xl p-2 shadow-lg shadow-black-main-two">
      <div className="project-card w-full relative">
        <figure className="project-image rounded-xl">
          <div className="hover-links absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 ease-in-out flex items-center justify-center gap-10 bg-[#00000080]">
            <Link to={props.repository} target="_blank">
              <button className="bg-black-two p-2 rounded-md">
                <SiGithub className="w-6 h-6 text-orange-yellow-crayola" />
              </button>
            </Link>
            <Link to={props.url} target="_blank">
              <button className="bg-black-two p-2 rounded-md">
                <IoEyeSharp className="w-6 h-6 text-orange-yellow-crayola" />
              </button>
            </Link>
          </div>
          <img src={`/assets/projects/${props.image}.png`} alt={props.name} className="image h-52" />
        </figure>
        <div className="project-details">
          <div className="px-3 py-3">
            <h3 className="text-white-two font-medium capitalize text-lg mb-1">{props.name}</h3>
            <p className="text-light-gray-70 font-normal capitalize text-sm">{props.category}</p>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-start gap-2 px-3 py-2 flex-wrap">
        {
          props.tags.map((item, key) => (
            <span key={key} className="text-light-gray text-xs rounded-lg bg-black-one px-3 py-1 hover:bg-black-two select-none">{item}</span>
          ))
        }
      </div>
    </div>
  );
}