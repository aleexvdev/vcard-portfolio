import { SideBar } from "./components/SideBar"

function App() {
  return (
    <main className="w-full h-full min-h-screen mx-auto max-w-[1250px] relative overflow-hidden top-0">
      <div className="w-full h-full flex items-center justify-center pt-16">
        <SideBar />
      </div>
    </main>
  );
}

export default App
