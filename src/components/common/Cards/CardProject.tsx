import { TypeProjects } from "../../../types/data"

interface CardProjectProps {
  props: TypeProjects;
}

export const CardProject = ({ props }: CardProjectProps) => {
  return (
    <div className="w-full bg-black-main-one rounded-2xl p-2 shadow-lg shadow-black-main-two">
      <figure>
        <img src={`/assets/projects/${props.image}.png`} alt={props.name} className="object-cover w-full h-52 rounded-xl" />
      </figure>
      <div className="px-3 py-3">
        <h3 className="text-white-two font-medium capitalize text-xl mb-1">{props.name}</h3>
        <p className="text-light-gray-70 font-normal capitalize text-base">{props.category}</p>
      </div>
      <div className="w-full flex items-center justify-start gap-3 px-3 py-2 flex-wrap">
        {
          props.tags.map((item, key) => (
            <span key={key} className="text-light-gray text-sm rounded-lg bg-black-one px-3 py-1 hover:bg-black-two select-none">{item}</span>
          ))
        }
      </div>
    </div>
  )
}
