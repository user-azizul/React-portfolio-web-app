import React, { useState, useRef, useEffect,useCallback } from "react";
import "../App.css"; // Ensure you import your CSS

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const headerRef = useRef(null);



  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to ensure the event listener is only added once
  

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClick = useCallback((e) => {
    e.preventDefault();
    toggleSidebar();
  
    const targetAttr = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetAttr);
    const offset = 80;
  
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  }, [toggleSidebar]);
  

  return (
    <header ref={headerRef} className="w-full h-20 leading-[80px] flex items-center">
      <div className="myContainer w-full">
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-lg font-medium rounded-full flex items-center justify-center">
              A
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-bold">Azizul</h2>
              <p className="text-smallTextColor text-base font-medium">Personal</p>
            </div>
          </div>
          {/* Logo part end here */}

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-10">
              <li><a className="text-smallTextColor font-semibold" href="#service">Service</a></li>
              <li><a className="text-smallTextColor font-semibold" href="#about">About</a></li>
              <li><a className="text-smallTextColor font-semibold" href="#portfolio">Portfolio</a></li>
              <li><a className="text-smallTextColor font-semibold" href="#contact">Contact</a></li>
            </ul>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleSidebar}
              className="text-2xl text-smallTextColor focus:outline-none"
              aria-label="Open Menu"
            >
              <i className="ri-menu-line"></i>
            </button>
          </div>

          {/* Let's Talk Button */}
          <div className="hidden md:flex items-center gap-5">
            <button
              className="flex items-center gap-2 text-smallTextColor font-semibold border border-solid border-smallTextColor py-2 px-4 rounded-lg max-h-10 hover:bg-smallTextColor hover:text-white hover:font-medium ease duration-500"
              aria-label="Let's Talk"
            >
              <i className="ri-send-plane-line"></i> Let's Talk
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-headingColor bg-opacity-75 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <div className="w-64 bg-white h-full p-6 shadow-lg">
          <button
            onClick={toggleSidebar}
            className="text-2xl text-smallTextColor mb-8 focus:outline-none"
            aria-label="Close Menu"
          >
            <i className="ri-close-line"></i>
          </button>
          <nav>
            <ul className="flex flex-col gap-2">
              <li><a onClick={handleClick} className="text-headingColor font-semibold" href="#service">Service</a></li>
              <li><a onClick={handleClick} className="text-headingColor font-semibold" href="#about">About</a></li>
              <li><a onClick={handleClick} className="text-headingColor font-semibold" href="#portfolio">Portfolio</a></li>
              <li><a onClick={handleClick} className="text-headingColor font-semibold" href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
