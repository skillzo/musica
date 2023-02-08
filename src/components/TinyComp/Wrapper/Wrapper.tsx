import React from "react";

interface wrapper {
  children: React.ReactNode;
}

export default function Wrapper({ children }: wrapper) {
  return (
    <div className="px-[1.5em] py-[1em] pb-[10em] h-max lg:w-[95%]">
      {children}
    </div>
  );
}
