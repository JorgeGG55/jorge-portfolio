import React from "react";

const ResumeItem = ({ year, title, institution }) => {
  return (
    <div className="bg-gray w-full h-[200px] px-10 py-6 mb-4 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
      <span className="text-secondary">{year}</span>
      <h3 className="text-base font-bold max-w-[260px] min-h-[60px] text-center lg:text-start lg:max-w-full">
        {title}
      </h3>
      <div className="flex items-center gap-3">
        <span className="w-[6px] h-[6px] rounded-full bg-secondary"></span>
        <p className="text-gray-400">{institution}</p>
      </div>
    </div>
  );
};

export default ResumeItem;
