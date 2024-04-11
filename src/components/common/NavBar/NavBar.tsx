import { useState } from 'react';
import { navs } from '../../../data/navs';

interface NavBarProps {
  handleTitle: (title: string) => void;
}

export const NavBar = ({ handleTitle }: NavBarProps) => {
  const [activeNav, setActiveNav] = useState('About');

  const handleNavActive = (nav: string) => {
    setActiveNav(nav);
    handleTitle(nav);
  };

   return (
    <>
      <nav className="absolute top-0 right-0 z-20 w-auto bg-black-two  h-16 rounded-tr-3xl rounded-bl-3xl border border-t-0 border-black-one hidden lg:block">
        <div className="w-full h-full flex items-center justify-center lg:justify-between gap-5 px-12">
          {
            navs.map((nav, index) => (
              <button
                key={index}
                className={`bg-transparent font-medium ${
                  activeNav === nav.path ? 'text-orange-yellow-crayola' : 'text-light-gray hover:text-light-gray-70'
                }`}
                onClick={() => handleNavActive(nav.path)}
              >
                <span className="px-3 text-lg">{nav.path}</span>
              </button>
            ))
          }
        </div>
      </nav>
      <nav className="fixed bottom-0 left-0 z-50 w-full bg-black-two h-16 rounded-t-3xl border border-t-0 border-black-one block lg:hidden">
        <div className="w-full h-full flex items-center justify-center lg:justify-between gap-1 md:gap-5 px-1 md:px-12">
          {
            navs.map((nav, index) => (
              <button
                key={index}
                className={`bg-transparent font-medium ${
                  activeNav === nav.path ? 'text-orange-yellow-crayola' : 'text-light-gray hover:text-light-gray-70'
                }`}
                onClick={() => handleNavActive(nav.path)}
              >
                <span className="px-3 text-base md:text-xl">{nav.path}</span>
              </button>
            ))
          }
        </div>
      </nav>
    </>
  );
  /* return (
    <nav className='fixed bottom-0 left-0 z-50 w-full bg-black-two h-16 rounded-t-3xl'>
      <div className="w-full h-full flex items-center justify-center gap-5">
        {
          navs.map((nav, index) => (
            <button
              key={index}
              className={`font-medium ${
                activeNav === nav.path ? 'text-orange-yellow-crayola' : 'text-light-gray hover:text-light-gray-70'
              }`}
              onClick={() => handleNavActive(nav.path)}
            >
              <span className="px-3 text-lg">{nav.path}</span>
            </button>
          ))
        }
      </div>
    </nav>
  ); */
};