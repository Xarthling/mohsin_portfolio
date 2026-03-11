import React from "react";

const Divider = ({ className = "" }) => (
  <hr className={`my-12 border-t-2 border-gradient-to-r from-cyan-400 to-emerald-400 opacity-40 ${className}`} />
);

export default Divider;
