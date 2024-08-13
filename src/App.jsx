import ButtonGradient from "./assets/svg/ButtonGradient";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-x-hidden overflow-scroll snap-mandatory snap-y h-screen">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
