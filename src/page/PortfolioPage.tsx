import { useMemo, useState } from 'react';
import { CardProject } from '../components/common/Cards/CardProject';
import { Header } from '../components/common/Header/Header'
import { projects } from '../data/data';
import { filterProjects } from '../data/navs';

interface PortfolioPageProps {
  title: string;
}

export const PortfolioPage = ({ title }: PortfolioPageProps) => {

  const [isFilterActive, setIsFilterActive] = useState<string>('All');

  const handleFilterProject = (filter: string) => {
    setIsFilterActive(filter);
  }

  const filteredProjects = useMemo(
    () =>
      isFilterActive === 'All'
        ? projects
        : projects.filter((project) => project.category === isFilterActive),
    [isFilterActive]
  );

  return (
    <article className='py-5 px-6'>
      <Header title={title} />
      <section className='py-3'>
        <div className='w-full flex items-center justify-start gap-6 my-5'>
          {
            filterProjects.map((item, key) => (
              <button key={key} className={`font-medium ${isFilterActive === item ? 'text-orange-yellow-crayola' : 'text-light-gray'} text-xl transition-colors`} onClick={() => handleFilterProject(item)}>{item}</button>
            ))
          }
        </div>
        <div className='py-5 w-full grid grid-cols-2 gap-5'>
          {
            filteredProjects.map((item, key) => (
              <CardProject key={key} props={item} />
            ))
          }
        </div>
      </section>
    </article>
  )
}

