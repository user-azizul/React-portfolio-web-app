import React from "react";
import frontend from "../../assets/images/front-end.png";
import backend from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appImg from "../../assets/images/apps.png";

function Service() {
  return (
    <section id="service">
      <div className="myContainer lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor mb-5 font-extrabold text-3xl md:text-4xl">
            What I Do
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto leading-7 text-headingColor font-medium text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            deserunt corrupti nihil mollitia rem vel quia quibusdam eligendi ex!
            Esse ab laudantium maiores illum inventore nobis dolore expedita
            sapiente minima.
          </p>
        </div>
        <div className="flex flex-col justify-center py-6 md:py-12">
          <div className="w-full px-4 sm:px-2 sm:max-w-xl sm:mx-auto">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* Vertical line running through the middle */}
              <div className="hidden sm:block absolute w-1 bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>

              {/* Left card */}
              <div className="mt-8 md:mt-0 sm:mb-12 text-center sm:text-start">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-duration="1500"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer transition ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-bold mb-3 group-hover:text-white group-hover:font-semibold text-lg md:text-xl">
                          Frontend Development
                        </h3>
                        <p className="text-[14px] md:text-[15px] group-hover:text-white leading-7 text-smallTextColor">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Provident officia laborum reiciendis quod id a officiis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontend} alt="Frontend Development" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* Right card */}
              <div className="mt-8 md:mt-0 sm:mb-12 text-center sm:text-start">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-duration="1500"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer transition ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-bold mb-3 group-hover:text-white group-hover:font-semibold text-lg md:text-xl">
                          Backend Development
                        </h3>
                        <p className="text-[14px] md:text-[15px] group-hover:text-white leading-7 text-smallTextColor">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Provident officia laborum reiciendis quod id a officiis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={backend} alt="Backend Development" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* Left card */}
              <div className="mt-8 md:mt-0 sm:mb-12 text-center sm:text-start">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-duration="1500"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer transition ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-bold mb-3 group-hover:text-white group-hover:font-semibold text-lg md:text-xl">
                          UI/UX Design
                        </h3>
                        <p className="text-[14px] md:text-[15px] group-hover:text-white leading-7 text-smallTextColor">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Provident officia laborum reiciendis quod id a officiis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={uiImg} alt="UI/UX Design" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* Right card */}
              <div className="mt-8 md:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row text-center sm:text-start">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-duration="1500"
                        className="bg-white p-4  rounded shadow group hover:bg-primaryColor cursor-pointer transition ease-in duration-150"
                      >
                        <h3 className="text-primaryColor font-bold mb-3 group-hover:text-white group-hover:font-semibold text-lg md:text-xl">
                          App Development
                        </h3>
                        <p className="text-[14px] md:text-[15px] group-hover:text-white leading-7 text-smallTextColor">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Provident officia laborum reiciendis quod id a officiis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={appImg} alt="App Development" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
