import React from "react";

const Scrollbar = ({ children, gridClass }) => {
  return (
    <div className="w-full relative overflow-hidden max-h-[30rem]">
      <div
        className={`overflow-y-auto max-h-[30rem] custom-scrollbar grid ${gridClass} gap-[30px]`}
      >
        {children}
      </div>
    </div>
  );
};

export default Scrollbar;
