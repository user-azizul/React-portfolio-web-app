import React from "react";

function Contact() {
  return (
    <section id="contact" className="pb-16">
      <div className="myContainer">
        <h2 className="text-headingColor font-bold text-4xl mb-8">
          {" "}
          Get in touch
        </h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58321.8822102849!2d91.06185048379272!3d23.991622665072118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375405bd30bb4f23%3A0x1b3b2e1fce26f623!2sBrahmanbaria%2C%20Bangladesh!5e0!3m2!1sen!2ssa!4v1726907801847!5m2!1sen!2ssa"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px8 py-8">
          <form className="w-full">
            <div className="mb-5">
                <input type="text" placeholder="Enter you name" className="w-full p-3 focus:outline-none rounded-md" />
            </div>
            <div className="mb-5">
                <input type="text" placeholder="Enter you email" className="w-full p-3 focus:outline-none rounded-md" />
            </div>
            <div className="mb-5">
                <input type="text" placeholder="Enter you subject" className="w-full p-3 focus:outline-none rounded-md" />
            </div>
            <div className="mb-5">
                <textarea rows={3} type="text" placeholder="Enter you massage" className="w-full p-3 focus:outline-none rounded-md" />
            </div>
            <button className="w-full p-3 focus:outline-one bg-smallTextColor rounded-md text-white text-center hover:bg-headingColor ease-linear duration-150"> Send Massage</button>
            </form></div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
