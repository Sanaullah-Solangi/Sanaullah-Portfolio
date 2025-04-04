import Header from "./components/common/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Services from "./pages/Services";

function App() {
  const aboutSection = document.getElementById("about");
  window.addEventListener("scroll", (e) => {
    console.log("about Section =>", aboutSection);
  });
  return (
    <>
      <Header />
      <div class="main-container">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
