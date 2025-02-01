import React, { useId } from "react";

const Input = React.forwardRef(
  ({ label, type = "text", className = "", ...props }, ref) => {
    const id = useId();
    return (
      <div className="w-full">
        {label && (
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <input
          type={type}
          className={`px-4 py-3 w-full rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${className}`}
          ref={ref}
          {...props}
          id={id}
          placeholder={
            label && !props.placeholder
              ? `Enter ${label.toLowerCase()}`
              : props.placeholder
          }
        />
      </div>
    );
  }
);

export default Input;
