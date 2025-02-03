import React from "react";

interface MaxWidthWrapperProps {
  children: React.ReactNode;
}

const MaxWidthWrapper = ({ children }: MaxWidthWrapperProps) => {
  return (
    <div className="flex mx-auto max-w-3xl p-4 border-x border-b border-gray-200 ">
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
