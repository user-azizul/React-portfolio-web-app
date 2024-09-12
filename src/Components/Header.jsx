import React from "react";
import "../App.css"; // Ensure you import your CSS

function Header() {
  return (
    <header className="w-full h-20 flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
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
        </div>
      </div>
    </header>
  );
}

export default Header;
