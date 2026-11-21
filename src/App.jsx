import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Eras from "./sections/Eras";
import Features from "./sections/Features";
import Audience from "./sections/Audience";
import Quality from "./sections/Quality";
import Team from "./sections/Team";
import GetApp from "./sections/GetApp";
import useScrollReveal from "./hooks/useScrollReveal";

export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Eras />
        <Features />
        <Audience />
        <Quality />
        <Team />
        <GetApp />
      </main>
      <Footer />
    </>
  );
}
