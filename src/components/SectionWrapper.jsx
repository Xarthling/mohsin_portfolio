import React from "react";

const SectionWrapper = ({ id, children, className = "" }) => (
  <section id={id} className={`section mx-auto   ${className}`}>{children}</section>
);

export default SectionWrapper;
