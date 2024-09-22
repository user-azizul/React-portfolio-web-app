import React from "react";
import heroImg from "../../assets/images/hero.svg";
import CountUp from "react-countup";

function Hero() {
  return (
    <section className="pt-0" id="about">
      <div className="myContainer pt-14">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Hero Left Content */}
          <div className="w-full md:w-1/2 sm:text-start">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-semibold text-base"
            >
              Hello, welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-extrabold text-2xl sm:text-3xl md:text-4xl leading-8 sm:leading-9 md:leading-10 mt-4"
            >
              I'm Azizul Haque <br />
              Software Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex flex-col sm:flex-row flex-wrap  gap-4 mt-6"
            >
              <a href="#contact">
                <button
                  className="bg-primaryColor text-white font-medium flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-lg"
                  type="button"
                >
                  <i className="ri-mail-line"></i> Hire Me
                </button>
              </a>
              <a href="#portfolio">
                <button
                  className="text-smallTextColor font-semibold text-base border-b border-smallTextColor"
                  type="button"
                >
                  See Portfolio
                </button>
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 mt-8 sm:pl-10 sm:pr-5 text-smallTextColor font-medium text-sm leading-7 px-4 sm:px-0"
            >
              <span>
                <i className="ri-apps-2-line"></i>
              </span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae aliquam unde consectetur quisquam numquam sequi,
              deserunt quis quasi officia iste.
            </p>
            <div className="flex items-center gap-6 mt-8">
              <span className="text-smallTextColor text-sm">Follow me:</span>
              <span>
                <a className="text-smallTextColor text-lg" href="#youtube">
                  <i className="ri-youtube-line"></i>
                </a>
              </span>
              <span>
                <a className="text-smallTextColor text-lg" href="#github">
                  <i className="ri-github-line"></i>
                </a>
              </span>
              <span>
                <a className="text-smallTextColor text-lg" href="#facebook">
                  <i className="ri-facebook-line"></i>
                </a>
              </span>
              <span>
                <a className="text-smallTextColor text-lg" href="#linkedin">
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
            </div>
          </div>

          {/* Hero Right Image */}
          <div className="w-full md:w-1/3 mt-8 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img
                src={heroImg}
                alt="Hero Illustration"
                className="w-full h-auto"
              />
            </figure>
          </div>

          {/* Experience and Stats */}
          <div className="w-full md:w-1/5 flex justify-between text-center mt-8 md:mt-0 flex-wrap gap-3 md:flex-col md:justify-end md:text-end">
            <div className="mb-8">
              <h2 className="text-headingColor font-bold text-2xl sm:text-3xl">
                <CountUp start={0} end={6} duration={2} suffix="+" />
              </h2>
              <p className="text-headingColor font-semibold text-base sm:text-lg">
                Years of Experience
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-headingColor font-bold text-2xl sm:text-3xl">
                <CountUp start={50} end={100} duration={2} suffix="%" />
              </h2>
              <p className="text-headingColor font-semibold text-base sm:text-lg">
                Success Rate
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-headingColor font-bold text-2xl sm:text-3xl">
                <CountUp start={100} end={150} duration={2} suffix="+" />
              </h2>
              <p className="text-headingColor font-semibold text-base sm:text-lg">
                Happy Clients
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-headingColor font-bold text-2xl sm:text-3xl">
                <CountUp start={200} end={249} duration={2} suffix="+" />
              </h2>
              <p className="text-headingColor font-semibold text-base sm:text-lg">
                Projects Completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
