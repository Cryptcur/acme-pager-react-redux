import React from "react";
import { connect } from "react-redux";

const Table = ({ rows }) => {
  //   console.log("IN TABLE!!!!", match);
  return (
    <table className="table">
      <thead className="thead">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {!rows ? (
          <div>...Loading Employees</div>
        ) : (
          rows.map(employee => (
            <tr>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.title}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

const mapStateToProps = ({ rows, count }) => {
  return {
    rows,
    count
  };
};

export default connect(mapStateToProps)(Table);
