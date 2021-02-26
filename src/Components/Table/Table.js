import React, { useState } from "react";
import { connect } from "react-redux";

import classes from "./Table.module.css";

import MOCK_DATA from "../../Assets/MOCK_DATA.json";
import { COLUMNS } from "../../Assets/columns";

const Table = (props) => {
  const [data, setData] = useState(MOCK_DATA);

  return (
    <div>
      <table className={classes.filterTable}>
        <thead>
          <tr>
            {COLUMNS.map((head, index) => (
              <th key={index}>{head.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, id) => (
            <tr key={id}>
              {Object.entries(row).map((item, index) => {
                if (item[1] === true) {
                  return <td key={index}>✓</td>;
                } else if (item[1] === false) {
                  return <td key={index}>✖</td>;
                } else {
                  return <td key={index}>{item[1]}</td>;
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filterQueries: state.filterQueries,
    queryTypeVal: state.queryTypeVal,
  };
};

export default connect(mapStateToProps)(Table);
