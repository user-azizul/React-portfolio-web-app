import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#12141e] pt-12">
      <div className="myContainer">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-2xl leading-10 text-white font-[600] mb-5 md:text-3xl">
              Do you want to make beautiful products?
            </h2>
            <a href="#contact">
              <button
                className="bg-primaryColor text-white font-medium inline-flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-lg"
                type="button"
              >
                <i className="ri-mail-line"></i> Hire Me
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quia
              suscipit autem voluptatem inventore optio a aut magnam maxime
              alias?
            </p>
            <div className="flex items-center gap-4 flex-wrap mt-5">
         
              <span className="text-gray-300 text-base font-semibold">Follow me:</span>
              <span className="w-9 h-9 bg-[#2b2d33] p-1 rounded-xl cursor-pointer text-center">
                <a className="text-gray-300 text-lg" href="#youtube">
                  <i className="ri-youtube-line"></i>
                </a>
              </span>
            <span className="w-9 h-9 bg-[#2b2d33] p-1 rounded-xl cursor-pointer text-center">
                <a className="text-gray-300 text-lg" href="#github">
                  <i className="ri-github-line"></i>
                </a>
              </span>
            <span className="w-9 h-9 bg-[#2b2d33] p-1 rounded-xl cursor-pointer text-center">
                <a className="text-gray-300 text-lg" href="#facebook">
                  <i className="ri-facebook-line"></i>
                </a>
              </span>
            <span className="w-9 h-9 bg-[#2b2d33] p-1 rounded-xl cursor-pointer text-center">
                <a className="text-gray-300 text-lg" href="#linkedin">
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
           
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1b1e29] py-5 mt-14">
        <div className="myContainer">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="w-9 h-9 rounded-full bg-[#2b2d33] text-white font-medium text-lg flex items-center justify-center">A</span>
                <div className="leading-5"> 
                  <h2 className="text-gray-200 font-medium text-lg "> Azizul</h2>
                  <p className="text-gray-400 text-sm font-medium">Personal</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm "> Copyright {year} by Azizul - All right reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
