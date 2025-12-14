import React from "react";

function LabeledInput(props) {
  const { label, id, ...rest } = props;

  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="block text-sm mb-2 text-gray-600"
      >
        {label}
      </label>

      <input
        id={id}
        {...rest}
        className="
          w-full
          py-3
          pl-4
          text-sm
          rounded-md
          border
          border-gray-300
          focus:outline-none
          focus:ring-2
          focus:ring-primary
        "
      />
    </div>
  );
}

export default LabeledInput;
