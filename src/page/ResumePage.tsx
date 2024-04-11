import { Header } from '../components/common/Header/Header'
import { education, experience } from '../data/data';
import { ListResume } from '../components/common/List/ListResume';
import { PiBriefcase, PiGraduationCapFill } from 'react-icons/pi';

interface ResumePageProps {
  title: string;
}

export const ResumePage = ({ title }: ResumePageProps) => {
  return (
    <article className='py-3 lg:py-5 px-2 md:px-6'>
      <Header title={title} />
      <section className='py-10'>
        <div className='w-full flex items-center justify-start gap-6'>
          <div className='w-12 h-12 bg-black-main-one flex items-center rounded-2xl justify-center shadow-sm shadow-orange-yellow-crayola'>
            <PiGraduationCapFill className='w-6 h-6 text-orange-yellow-crayola bg-transparent' />
          </div>
          <h3 className='text-white-two capitalize text-xl md:text-2xl font-semibold'>Education</h3>
        </div>
        <div className='w-full pl-14 pt-7'>
          {
            education.map((item, key) => (
              <ListResume key={key} props={item} />
            ))
          }
        </div>
      </section>
      <section className='py-5'>
        <div className='w-full flex items-center justify-start gap-6'>
          <div className='w-12 h-12 bg-black-main-one flex items-center rounded-2xl justify-center shadow-sm shadow-orange-yellow-crayola'>
            <PiBriefcase className='w-6 h-6 text-orange-yellow-crayola bg-transparent' />
          </div>
          <h3 className='text-white-two capitalize text-xl md:text-2xl font-semibold'>Experience</h3>
        </div>
        <div className='w-full pl-14 pt-7'>
          {
            experience.map((item, key) => (
              <ListResume key={key} props={item} />
            ))
          }
        </div>
      </section>
    </article>
  )
}
