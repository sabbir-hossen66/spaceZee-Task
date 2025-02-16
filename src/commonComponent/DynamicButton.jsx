import React from "react";

export const DynamicButton = ({ text, bgColor = "bg-black", textColor = "text-white", icon: Icon, extraClasses = "" }) => {
  return (
    <button className={`px-6 py-3  rounded-md flex items-center gap-2 cursor-pointer ${bgColor} ${textColor} ${extraClasses}`}>
      {text}
      {Icon && <Icon />} {/* If icon exists, render it */}
    </button>
  );
};