import React from "react";
import frontend from "../../assets/images/front-end.png";
import backend from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appImg from "../../assets/images/apps.png";

function Service() {
  return (
    <section id="services">
      <div className="myContainer lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor mb-5 font-extrabold text-4xl">
            What I Do
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto leading-7 text-headingColor font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            deserunt corrupti nihil mollitia rem vel quia quibusdam eligendi ex!
            Esse ab laudantium maiores illum inventore nobis dolore expedita
            sapiente minima.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* Vertical line running through the middle */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>

              {/* Service Cards */}
              {[
                {
                  title: "Frontend Development",
                  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officia laborum reiciendis quod id a officiis.",
                  imgSrc: frontend,
                  direction: "right",
                },
                {
                  title: "Backend Development",
                  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officia laborum reiciendis quod id a officiis.",
                  imgSrc: backend,
                  direction: "left",
                },
                {
                  title: "UI/UX Design",
                  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officia laborum reiciendis quod id a officiis.",
                  imgSrc: uiImg,
                  direction: "right",
                },
                {
                  title: "App Development",
                  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officia laborum reiciendis quod id a officiis.",
                  imgSrc: appImg,
                  direction: "left",
                },
              ].map((service, index) => (
                <div key={index} className="mt-6 sm:mt-0 sm:mb-12">
                  <div className={`flex items-center flex-col sm:flex-row ${service.direction === "left" ? "flex-row-reverse" : ""}`}>
                    <div className={`flex justify-${service.direction === "left" ? "end" : "start"} w-full mx-auto items-center`}>
                      <div className={`w-full sm:w-1/2 ${service.direction === "left" ? "sm:pl-8" : "sm:pr-8"}`}>
                        <div
                          data-aos={`fade-${service.direction}`}
                          data-duration="1500"
                          className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150"
                        >
                          <h3 className="text-primaryColor font-bold mb-3 group-hover:text-white group-hover:font-semibold text-xl">
                            {service.title}
                          </h3>
                          <p className="text-[15px] group-hover:text-white leading-7 text-smallTextColor">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                      <figure>
                        <img src={service.imgSrc} alt={`${service.title} icon`} />
                      </figure>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
