import { Header } from '../components/common/Header/Header'

interface ResumePageProps {
  title: string;
}

export const ResumePage = ({ title }: ResumePageProps) => {
  return (
    <section className='p-5'>
      <Header title={title} />
      <div className='text-light-gray font-light leading-6 pt-8'>
        <p className='mb-7'>
        ResumePage
        </p>
      </div>
    </section>
  )
}
