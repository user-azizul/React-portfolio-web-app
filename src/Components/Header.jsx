import React from "react";
import "../App.css"; // Ensure you import your CSS

function Header() {
  return (
    <header className="w-full h-20 leading-[80px] flex items-center">
     
        <div className="myContainer w-full ">
        <div className="flex w-full items-center justify-between">
          {/* logo */}
          <div className="flex items-center gap-2.5">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-lg font-medium rounded-full flex items-center justify-center">
              A
            </span>

            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-bold">Azizul</h2>
              <p className="text-smallTextColor text-base font-medium">
                Personal
              </p>
            </div>
          </div>
          {/* logo part end here */}
          {/* nav start here */}
          <div className="menu">
            <ul className=" flex items-center gap-10">
              <li><a className="text-smallTextColor font-semibold" href="#about">Service</a></li>
              <li><a className="text-smallTextColor font-semibold" href="#about">About</a></li>
              <li><a className="text-smallTextColor font-semibold" href="#about">Portfolio</a></li>

              <li><a className="text-smallTextColor font-semibold" href="#about">Contact</a></li>

            </ul>
          </div> 
          {/* nav end here */}
          {/* menu right start */}
          <div className="flex items-center gap-5">
            <button className="flex items-center gap-2 text-smallTextColor font-semibold border border-solid border-smallTextColor py-2 px-4 rounded-lg max-h-10 hover:bg-smallTextColor hover:text-white hover:font-medium ease duration-500">
              <i className="ri-send-plane-line"></i>Let's Talk
            </button>
          </div>
          </div>
        </div>
      
    </header>
  );
}

export default Header;
