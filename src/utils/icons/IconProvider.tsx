import React from "react";
import { IconContext } from "react-icons";

type icons = {
  children: React.ReactNode;
  size: string;
  color: string;
};

export default function IconProvider({ children, color, size }: icons) {
  return (
    <IconContext.Provider value={{ color: color, size: size }}>
      {children}
    </IconContext.Provider>
  );
}
