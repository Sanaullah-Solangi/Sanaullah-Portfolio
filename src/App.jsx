import Header from "./components/common/Header";
import { Button } from "./components/ui/button";
import About from "./layouts/About";
import Hero from "./layouts/Hero";

function App() {
  return (
    <>
      <Header />
      <div class="main-container max-w-[1470px] ">
        <Hero />
        <About />
      </div>
      <style jsx global>{`
        .main-container {
          margin-inline: auto;
          margin-top: 4rem;
        }
      `}</style>
    </>
  );
}

export default App;
