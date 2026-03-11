import React from "react";

const Tag = ({ children, className = "" }) => (
  <span className={`px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900 text-xs font-medium text-indigo-600 dark:text-indigo-300  ${className}`}>
    {children}
  </span>
);

export default Tag;
