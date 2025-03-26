import Header from "./components/common/Header";
import { Button } from "./components/ui/button";
import Hero from "./layouts/Hero";

function App() {
  return (
    <>
      <Header />
      <div class="main-container mt-[4rem] max-w-[1470px] mx-auto">
        <Hero />
      </div>
    </>
  );
}

export default App;
