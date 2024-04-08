import { Header } from '../components/common/Header/Header'

interface ContactPageProps {
  title: string;
}

export const ContactPage = ({ title }: ContactPageProps) => {
  return (
    <section className='p-5'>
      <Header title={title} />
      <div className='text-light-gray font-light leading-6 pt-8'>
        <p className='mb-7'>
        ContactPage
        </p>
      </div>
    </section>
  )
}

