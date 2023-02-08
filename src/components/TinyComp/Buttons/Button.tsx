import React from "react";

interface button {
  children: React.ReactNode;
}

export default function Button({ children }: button) {
  return <button className="bg-[]">{children}</button>;
}
