import { HiOutlineBookOpen } from 'react-icons/hi2';
import { Header } from '../components/common/Header/Header'
import { education, experience } from '../data/data';
import { ListResume } from '../components/common/List/ListResume';

interface ResumePageProps {
  title: string;
}

export const ResumePage = ({ title }: ResumePageProps) => {
  return (
    <article className='py-5 px-6'>
      <Header title={title} />
      <section className='py-10'>
        <div className='w-full flex items-center justify-start gap-6'>
          <div className='w-14 h-14 bg-black-main-one flex items-center rounded-2xl justify-center shadow-sm shadow-orange-yellow-crayola'>
            <HiOutlineBookOpen className='w-7 h-7 text-orange-yellow-crayola bg-transparent' />
          </div>
          <h3 className='text-white-two capitalize text-2xl font-medium'>Education</h3>
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
          <div className='w-14 h-14 bg-black-main-one flex items-center rounded-2xl justify-center shadow-sm shadow-orange-yellow-crayola'>
            <HiOutlineBookOpen className='w-7 h-7 text-orange-yellow-crayola bg-transparent' />
          </div>
          <h3 className='text-white-two capitalize text-2xl font-medium'>Experience</h3>
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
