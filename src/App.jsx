import Aos from "aos";
import React, { useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Components/ui/Hero";
import Service from "./Components/ui/Service";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="">
      <Header />
      <main>
        {" "}
        <Hero />
        <Service />
      </main>
      <Footer />
    </div>
  );
}

export default App;
