import React from "react";

interface button {
  children: React.ReactNode;
  yellow: boolean;
}

export default function Button({ children, yellow }: button) {
  return (
    <button className="bg-m-yellow text-slate-700 p-2 rounded-full text-center w-[45%]">
      {children}
    </button>
  );
}
