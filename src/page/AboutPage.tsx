import { Header } from '../components/common/Header/Header';

interface AboutPageProps {
  title: string;
}

export const AboutPage = ({ title }: AboutPageProps) => {
  return (
    <section className='p-5'>
      <Header title={title} />
      <div className='text-light-gray font-light leading-6 pt-8'>
        <p className='mb-7'>
        AboutPage
        </p>
      </div>
    </section>
  )
}
