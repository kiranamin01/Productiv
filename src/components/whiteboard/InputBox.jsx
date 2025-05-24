import React from "react";

const InputBox = ({
  value = "",
  onChange = () => {},
  onKeyDown = () => {},
  placeholder = "Type here...",
  type = "text",
  className = "flex-1 p-2 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-400 focus:border-purple-400 focus:outline-none shadow-sm transition duration-200 text-background font-[Poppins] mr-2 placeholder:text-gray-400",
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default InputBox;
