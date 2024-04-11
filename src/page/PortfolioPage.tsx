import { useMemo, useState } from 'react';
import { CardProject } from '../components/common/Cards/CardProject';
import { Header } from '../components/common/Header/Header'
import { projects } from '../data/data';
import { filterProjects } from '../data/navs';
import { IoIosArrowDown } from 'react-icons/io';

interface PortfolioPageProps {
  title: string;
}

export const PortfolioPage = ({ title }: PortfolioPageProps) => {

  const [isFilterActive, setIsFilterActive] = useState<string>('All');
  const [isActiveList, setIsActiveList] = useState<boolean>(false);

  const handleFilterProject = (filter: string) => {
    setIsFilterActive(filter);
    setIsActiveList(false);
  }

  const showFilterList = () => {
    setIsActiveList(!isActiveList);
  }

  const filteredProjects = useMemo(
    () =>
      isFilterActive === 'All'
        ? projects
        : projects.filter((project) => project.category === isFilterActive),
    [isFilterActive]
  );

  return (
    <article className='py-3 lg:py-5 px-2 md:px-6'>
      <Header title={title} />
      <section className='py-3'>
        <div className='hidden md:block'>
          <div className='w-full flex items-center justify-start gap-6 my-5'>
            {
              filterProjects.map((item, key) => (
                <button key={key} className={`font-medium ${isFilterActive === item ? 'text-orange-yellow-crayola' : 'text-light-gray'} text-base lg:text-lg transition-colors`} onClick={() => handleFilterProject(item)}>{item}</button>
              ))
            }
          </div>
        </div>
        <div className='block md:hidden '>
          <div className='w-full my-5 relative mb-6'>
            <button className='w-full flex items-center justify-between rounded-xl border border-light-gray-70 px-5 py-3' onClick={showFilterList}>
              <span className="text-light-gray font-medium text-sm transition-colors">{isFilterActive}</span>
              <IoIosArrowDown className='text-light-gray w-6 h-6' />
            </button>
            {
              isActiveList &&
              <div className='absolute top-12 left-0 w-full grid grid-cols-1 my-5 bg-black-main-two rounded-xl p-2 border border-light-gray-70'>
                {
                  filterProjects.map((item, key) => (
                    <button 
                      key={key} 
                      className="text-light-gray font-light text-sm transition-colors w-full text-left hover:bg-black-two px-4 py-3 rounded-lg"
                      onClick={() => handleFilterProject(item)}
                    >
                      {item}
                    </button>
                  ))
                }
              </div>
            }
          </div>
        </div>
        <div className='py-5 w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
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

