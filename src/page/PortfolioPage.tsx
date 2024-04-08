import { Header } from '../components/common/Header/Header'

interface PortfolioPageProps {
  title: string;
}

export const PortfolioPage = ({ title }: PortfolioPageProps) => {
  return (
    <section className='p-5'>
      <Header title={title} />
      <div className='text-light-gray font-light leading-6 pt-8'>
        <p className='mb-7'>
        PortfolioPage
        </p>
      </div>
    </section>
  )
}

