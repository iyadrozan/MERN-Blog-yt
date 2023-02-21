import React from "react";
import { Link } from "react-router-dom";
import "./link.scss";

const DLink = ({ title, to }) => {
  return (
    <Link className="Dlink" to={to}>
      {title}
    </Link>
  );
};

export default DLink;
