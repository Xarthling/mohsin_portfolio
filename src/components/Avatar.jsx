import React from "react";

const Avatar = ({ src, alt, className = "" }) => (
  <div className={`w-20 h-20 rounded-full border-4 border-white/20 dark:border-gray-800/40 bg-white/40 dark:bg-gray-900/40 shadow-lg flex items-center justify-center glass-effect ${className}`}>
    <img src={src} alt={alt} className="w-16 h-16 rounded-full object-cover" />
  </div>
);

export default Avatar;
