import React, { useId } from "react";

function Select({ options, label, className = "", ...props }, ref) {
  const id = useId();

  return (
    <div className="w-full">
      {label && <label htmlFor={id} className=""></label>}
      <select
        id={id}
        {...props}
        ref={ref}
        className={`px-3 py-2 rounded-ld bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className} `}>
        {options?.map((option) => (
            <option key={option} value={option}>
                {option}
            </option>
        ) )}
        {/* {options.map} if there is no value in options , the lop will crash 
           therefore, optionally loop 
        */}

      </select>
    </div>
  );
}

export default React.forwardRef(Select);
