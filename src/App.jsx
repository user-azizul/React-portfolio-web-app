import Aos from "aos";
import React, { useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Components/ui/Hero";
import Service from "./Components/ui/Service";
import Portfolio from "./Components/ui/Portfolio";
import Contact from "./Components/ui/Contact";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Service />
        <Portfolio />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
