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
    <nav className="absolute top-0 right-0 z-20 w-auto bg-[#2b2b2cbf] h-16 rounded-tr-3xl rounded-bl-3xl border border-t-0 border-black-one">
      <div className="w-full h-full flex items-center justify-between gap-5 px-12">
        {
          navs.map((nav, index) => (
            <button
              key={index}
              className={`bg-transparent text-lg font-medium ${
                activeNav === nav.path ? 'text-orange-yellow-crayola' : 'text-light-gray hover:text-light-gray-70'
              }`}
              onClick={() => handleNavActive(nav.path)}
            >
              <span className="px-5">{nav.path}</span>
            </button>
          ))
        }
      </div>
    </nav>
  );
};