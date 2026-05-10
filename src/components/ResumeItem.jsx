import React from "react";

const ResumeItem = ({ year, title, institution, details }) => {
  const hasDetails = Array.isArray(details) && details.length > 0;

  return (
    <div
      className={`bg-gray w-full px-8 py-6 mb-4 rounded-xl flex flex-col items-center lg:items-start gap-2 ${
        hasDetails ? "min-h-[200px]" : "h-[200px] justify-center"
      }`}
    >
      <span className="text-secondary">{year}</span>
      <h3 className="text-base font-bold max-w-[260px] text-center lg:text-start lg:max-w-full">
        {title}
      </h3>
      <div className="flex items-center gap-3">
        <span className="w-[6px] h-[6px] rounded-full bg-secondary"></span>
        <p className="text-gray-400">{institution}</p>
      </div>

      {hasDetails && (
        <ul className="mt-2 space-y-1.5 text-sm text-white/70 list-none w-full">
          {details.map((item, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-secondary leading-6">›</span>
              <span className="text-left">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResumeItem;
