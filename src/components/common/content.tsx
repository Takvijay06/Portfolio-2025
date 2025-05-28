import React, { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }) => {
  return <div className="mx-auto w-full max-w-7xl">{children}</div>;
};

export default Content;
