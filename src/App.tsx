import { useState } from "react";
import { SideBar } from "./components/SideBar"
import { NavBar } from "./components/common/NavBar/NavBar";
import { AboutPage } from "./page/AboutPage";

function App() {

  const [titlePage, setTitlePage] = useState<string>('About Me');

  const handleTitle = (title: string) => {
    setTitlePage(title)
  }

  return (
    <main className="w-full h-full min-h-screen mx-auto max-w-[1250px] relative overflow-hidden">
      <div className="w-full h-full flex items-start justify-start gap-6 pt-16">
        <SideBar />
        <article 
          className="w-full min-h-96 bg-black-main-two rounded-3xl mb-0 relative z-50 border border-black-one" 
          style={{ 
            boxShadow: "0 24px 80px hsla(0, 0%, 0%, 0.25)" 
          }}
        >
          <article className="w-full h-full p-4 min-h-full">
            <NavBar handleTitle={handleTitle} />
            <AboutPage title={titlePage} />
          </article>
        </article>
      </div>
    </main>
  );
}

export default App
