import { TypeEducation } from "../../../types/data"

interface ListResumeProps {
  props: TypeEducation;
}

export const ListResume = ({ props }: ListResumeProps) => {

  const { place, period, description } = props;

  return (
    <div className="timeline-item">
      <h4 className="text-white-two font-medium capitalize text-lg lg:text-lg mb-2">{place}</h4>
      <span className="text-vegas-gold font-normal leading-4 mb-3 text-lg lg:text-base">{period}</span>
      <p className="text-light-gray font-light leading-6 text-lg lg:text-base">{description}</p>
    </div>
  )
}
