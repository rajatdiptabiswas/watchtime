import { useState } from 'react';

interface SelectDropdownProps {
  options: Array<any>;
  selectedOption: any;
  updateSelectedOption: (option: any) => void;
}

export default function SelectDropdown({
  options,
  selectedOption,
  updateSelectedOption,
}: SelectDropdownProps) {
  // TODO: fix dropdown styling
  return (
    <div className="flex shadow-md">
      <select
        value={selectedOption}
        className="appearance-none border-gray-200 border-2 bg-transparent rounded-l text-gray-50 px-4 pl-6 py-2"
        onChange={(event) => updateSelectedOption(event.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option} className="">
            {typeof option === 'string' ? option.toLowerCase() : option}
          </option>
        ))}
      </select>
      <div className="border-gray-200 border-2 border-l-0 rounded-r">
        <svg
          className="w-6 text-gray-100"
          width="100%"
          height="100%"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
}
