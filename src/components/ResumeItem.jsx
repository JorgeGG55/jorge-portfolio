import React from "react";

const ResumeItem = ({ year, title, institution, details }) => {
  const hasDetails = Array.isArray(details) && details.length > 0;

  return (
    <div
      className={`bg-gray w-full px-5 sm:px-7 xl:px-8 py-4 sm:py-5 xl:py-6 mb-3 sm:mb-4 rounded-xl flex flex-col items-center lg:items-start gap-1.5 ${
        hasDetails ? "min-h-[180px] sm:min-h-[200px]" : "h-[180px] sm:h-[200px] justify-center"
      }`}
    >
      <span className="text-secondary text-sm sm:text-base">{year}</span>
      <h3 className="text-sm sm:text-base font-bold max-w-[260px] text-center lg:text-start lg:max-w-full leading-tight">
        {title}
      </h3>
      <div className="flex items-center gap-3">
        <span className="w-[6px] h-[6px] rounded-full bg-secondary"></span>
        <p className="text-gray-400 text-sm sm:text-base">{institution}</p>
      </div>

      {hasDetails && (
        <ul className="mt-1.5 space-y-1 sm:space-y-1.5 text-xs sm:text-sm text-white/70 list-none w-full">
          {details.map((item, index) => (
            <li key={index} className="flex gap-2 leading-snug">
              <span className="text-secondary leading-5">›</span>
              <span className="text-left">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResumeItem;
