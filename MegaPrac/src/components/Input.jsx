import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();

  return (
    <div className="w-full max-w-xs">
      {label && (
        <label className="inline-block mb-2 text-sm font-medium text-white/80" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={`w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 border border-white/20
        focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200
        hover:bg-white/20 ${className}`}
        ref={ref}
        {...props}
      />
    </div>
  );
});

export default Input;
