import React from "react";

interface wrapper {
  children: React.ReactNode;
}

export default function Wrapper({ children }: wrapper) {
  return <div className="wrapper">{children}</div>;
}
