import React from "react";


const Modal = ({ isOpen, onClose, portfolio }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-headingColor bg-opacity-40 z-[2] flex items-center justify-center">
      <div className="bg-white p-5 rounded-lg max-w-[90%] md:max-w-[600px] z-20 relative">
      <button
          className="absolute top-0 right-0 p-1 rounded-lg text-red-600 transition-colors"
          onClick={onClose}
        >
       
          <i className="ri-close-line text-2xl"></i>
        </button>
        <h2 className="text-xl font-bold mt-4">{portfolio.title}</h2>
        <div>
          <figure>
            <img src={portfolio.imgUrl} alt={portfolio.title} className="mt-4 w-full h-auto" />
          </figure>
        </div>
        <div className="flex items-center mt-5 gap-3 flex-wrap">
            <h4 className="text-headingColor text-lg font-medium">
                Technologies:
            </h4>
            {portfolio.technologies.map((item,index)=>(
                <span className="bg-gray-200 py-1 px-2 rounded-md text-sm leading-0" key={index}>{item}</span>
            ))}
        </div>
        <div className=" mt-6">
          <button className="text-white bg-headingColor hover:bg-smallTextColor px-4 py-2  text-sm rounded-lg font-medium duration-200">
          Hire me
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default Modal;
