import { TypeServices } from '../../../types/data'
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { TbDeviceImacCode } from 'react-icons/tb';
import { VscTools } from 'react-icons/vsc';
import { CgCodeSlash } from 'react-icons/cg';

interface CardAboutProps {
  props: TypeServices;
}

const iconService = (service: string) => {
  switch (service) {
    case 'Frontend Development':
      return <TbDeviceImacCode className='w-10 h-10 text-orange-yellow-crayola bg-transparent' />
    case 'Backend Development':
      return <CgCodeSlash className='w-10 h-10 text-orange-yellow-crayola bg-transparent' />
    case 'Mobile Development':
      return <HiOutlineDevicePhoneMobile className='w-10 h-10 text-orange-yellow-crayola bg-transparent' />
    case 'Skills and Expertise':
      return <VscTools className='w-10 h-10 text-orange-yellow-crayola bg-transparent' />
    default:
      return '';
  }
}

export const CardAbout = ({ props }: CardAboutProps) => {

  const { service, description } = props;

  return (
    <div className='w-full min-h-10 p-5 rounded-xl bg-black-main-one border border-orange-yellow-crayola/20' style={{ boxShadow: "0 16px 30px hsla(0, 0%, 0%, 0.25)" }}>
      <div className='w-full flex items-center justify-center'>
        <div className='w-20'>
          { iconService(service) }
        </div>
        <div className='w-full flex flex-col items-start text-left'>
          <h4 className='text-white-two font-medium capitalize text-xl mb-2'>{service}</h4>
          <p className='text-light-gray-70 leading-6 font-light text-sm'>{description}</p>
        </div>
      </div>
    </div>
  )
}
