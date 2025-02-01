import React, { useId } from "react";

function Select(
  {
    options, // it is an array
    label,
    className = "",
    ...props
  },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className={`text-sm font-medium text-gray-700 ${className}`}
        >
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-4 py-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-200 border border-gray-300 w-full shadow-sm hover:shadow-md transition-all ease-in-out ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
