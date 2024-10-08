import React, { useState } from "react";
import portfolios from "../../assets/data/portfolioData";
import Modal from "./Modal";


function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loadMore, setLoadMore] = useState(6);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  const loadMoreHandler = () => {
    if (selectedCategory !== "All") return;
    setLoadMore((prev) => prev + 3);
  };

  // Extract unique categories from portfolios
  const categories = [
    "All",
    ...new Set(portfolios.map((portfolio) => portfolio.category)),
  ];

  // Filter portfolios based on the selected category
  const filteredPortfolios = portfolios.filter((portfolio) =>
    selectedCategory === "All" ? true : portfolio.category === selectedCategory
  );

  const openModal = (portfolio) => {
    console.log(portfolio);
    
    setSelectedPortfolio(portfolio);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPortfolio(null);
  };

  return (
    <section id="portfolio">
      <div className="myContainer">
        <div className="flex items-center w-full justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-4xl font-bold">My recent project</h3>
          </div>
          <div className="flex gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-smallTextColor border border-solid border-smallTextColor sm:py-2 sm:px-4 py-1 px-2 rounded-lg ${
                  selectedCategory === category ? "bg-smallTextColor text-white" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap mt-12">
          {filteredPortfolios?.slice(0, loadMore)?.map((portfolio, index) => (
            <div
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              key={index}
              className="group max-w-full sm:w-[48.5%] md:w-[32.2%] lg:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img src={portfolio.imgUrl} alt={portfolio.title} />
              </figure>
              <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => openModal(portfolio)} // Pass the portfolio object to openModal
                    className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-lg font-medium duration-200"
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-lg font-medium duration-200" onClick={loadMoreHandler}>
            Load more
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} portfolio={selectedPortfolio} /> {/* Render the Modal */}
    </section>
  );
}

export default Portfolio;
