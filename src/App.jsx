import Header from "./components/common/Header";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Header />
      <div class="main-container">
        <Hero />
        <About />
        <Services />
        <Projects />
      </div>
    </>
  );
}

export default App;
