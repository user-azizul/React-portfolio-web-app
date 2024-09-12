import Aos from "aos";
import React, { useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <main> content</main>
      <Footer />
    </>
  );
}

export default App;
