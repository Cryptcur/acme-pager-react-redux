import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const PageNum = ({ count, location }) => {
  const pageCount = Math.ceil(count / 50);
  const currentPage = parseInt(location.pathname.slice(1));
  //   console.log("PAGECOUNT!!!", page);
  const links = [];
  for (let i = 0; i < pageCount; i++) {
    links.push(i);
  }
  console.log(links);
  //   console.log("PAGENUM!!!!!", page);
  return (
    <nav className="nav-bar">
      <Link to={currentPage - 1 >= 0 && `${currentPage - 1}`}>Prev</Link>
      {links.map((link, idx) => (
        <Link to={`/${idx}`}>{`${link + 1}`}</Link>
      ))}
      <Link to={currentPage + 1 < pageCount && `${currentPage + 1}`}>Next</Link>
    </nav>
  );
};

const mapStateToProps = ({ count }) => {
  return { count };
};

export default connect(mapStateToProps)(PageNum);
