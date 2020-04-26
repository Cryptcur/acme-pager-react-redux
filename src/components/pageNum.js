import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const PageNum = ({ count, match, location, rows }) => {
  console.log("PAGENUM!!!!!", rows);
  let {
    params: { page }
  } = match;
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
    <nav>
      <Link to={currentPage - 1 >= 0 && `${currentPage - 1}`}>Prev</Link>
      {links.map((link, idx) => (
        <Link to={`/${idx}`}>{`${link + 1}`}</Link>
      ))}
      <Link to={currentPage + 1 < pageCount && `${currentPage + 1}`}>Next</Link>
    </nav>
  );
};

const mapStateToProps = ({ count, rows }) => {
  return { count, rows };
};

export default connect(mapStateToProps)(PageNum);
