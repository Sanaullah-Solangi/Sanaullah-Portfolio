import Header from "./components/common/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
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
        <Contact />
      </div>
    </>
  );
}

export default App;
