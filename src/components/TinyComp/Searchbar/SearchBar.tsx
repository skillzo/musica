import React from "react";

interface search {
  type: string;
  placeholder: string;
  value?: string;
}

export default function SearchBar({ type, placeholder, value }: search) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className="bg-inherit  px-4  py-2 rounded-xl outline-none w-full border border-[#0000] focus:border focus:border-slate-700"
    />
  );
}
