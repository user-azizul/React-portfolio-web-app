import React from "react";
import heroImg from "../../assets/images/hero.svg";
import CountUp from "react-countup";

function Hero() {
  return (
    <section className="pt-0" id="about">
      <div className="myContainer pt-14 ">
        <div className="flex sm:flex-col md:flex-row items-center justify-center">
          {/* hero left content */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className=" text-headingColor font-semibold text-base"
            >
              {" "}
              Hello welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-extrabold text-3xl sm:text-4xl leading-9 sm:leading-10 mt-5"
            >
              {" "}
              I'm Azizul Haque <br />
              Software Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-deley="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button
                  className="bg-primaryColor text-white font-medium flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-lg"
                  type="button"
                >
                  <i className="ri-mail-line"></i> Hire Me
                </button>
              </a>
              <a href="#contact">
                <button
                  className="text-smallTextColor font-semibold text-base border-b border-solid border-smallTextColor"
                  type="button"
                >
                  See Portfolio
                </button>
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 mt-10 text-smallTextColor font-medium text-sm leading-7 "
            >
              <span>
                <i class="ri-apps-2-line"></i>
              </span>{" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae aliquam unde consectetur quisquam numquam sequi,
              deserunt quis quasi officia iste.
            </p>
            <div
              className="flex items-center gap-9 mt-10
            "
            >
              <span
                className="
              text-smallTextColor text-sm "
              >
                Follow me:
              </span>

              <span>
                <a
                  className="
              text-smallTextColor text-lg "
                  href="#youtube"
                >
                  <i class="ri-youtube-line"></i>
                </a>
              </span>
              <span>
                <a
                  className="
              text-smallTextColor text-lg "
                  href="#youtube"
                >
                  <i class="ri-github-line"></i>
                </a>
              </span>
              <span>
                <a
                  className="
              text-smallTextColor text-lg "
                  href="#youtube"
                >
                  <i class="ri-facebook-line"></i>
                </a>
              </span>
              <span>
                <a
                  className="
              text-smallTextColor text-lg "
                  href="#youtube"
                >
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>
            </div>
          </div>

          {/* hero left end */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img src={heroImg} alt="" />
            </figure>
          </div>
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-warp gap-3 md:mt-0 mad:flex-col md:justify-end md:text-end">
          
          <h2 className="text-headingColor font-bold text-3xl">
            <CountUp start={0} end={6} duration={2}suffix="+" />
            <h4>Year of experience</h4>
          </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
