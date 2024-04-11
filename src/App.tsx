import { useState } from "react";
import { SideBar } from "./components/SideBar"
import { NavBar } from "./components/common/NavBar/NavBar";
import { AboutPage } from "./page/AboutPage";
import { PortfolioPage } from "./page/PortfolioPage";
import { ResumePage } from "./page/ResumePage";
import { ContactPage } from "./page/ContactPage";

function App() {

  const [currentPage, setCurrentPage] = useState<string>("About");

  const pageComponents: { [key: string]: React.ReactNode } = {
    About: <AboutPage title="About Me" />,
    Resume: <ResumePage title="Resume" />,
    Portfolio: <PortfolioPage title="Portfolio" />,
    Contact: <ContactPage title="Contact" />,
  };

  const handleTitle = (title: string) => {
    setCurrentPage(title)
  }

  return (
    <main className="w-full h-full min-h-screen mx-auto max-w-6xl relative overflow-hidden">
      <div className="w-full h-full flex flex-col lg:flex-row items-start justify-start gap-6 pt-16 px-3 md:px-10 lg:px-0">
        <SideBar />
        <article 
          className="w-full min-h-96 bg-black-main-two rounded-3xl mb-0 relative z-50 border border-black-one" 
          style={{ 
            boxShadow: "0 24px 80px hsla(0, 0%, 0%, 0.25)" 
          }}
        >
          <article className="w-full h-full p-4 min-h-full">
            <NavBar handleTitle={handleTitle} />
            {pageComponents[currentPage]}
          </article>
        </article>
      </div>
    </main>
  );
}

export default App
