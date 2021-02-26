import React, { useState } from "react";
import { connect } from "react-redux";

import classes from "./Table.module.css";

import data from "../../Assets/MOCK_DATA.json";
import { COLUMNS } from "../../Assets/columns";

const Table = (props) => {
  let nwData = [];

  if (props.filterQueries.length > 0) {
    if (props.queryTypeVal === 1) {
      nwData = [...data];
      props.filterQueries.map((query) => {
        let temp;
        if (query.item !== "" && query.operator !== "" && query.value !== "") {
          switch (query.item) {
            case "name":
              temp = nwData.filter((item) => {
                if (item.name.toLowerCase().includes(query.value.toLowerCase()))
                  return item;
              });
              nwData = [...temp];
              break;
            case "screen_name":
              temp = nwData.filter((item) => {
                if (
                  item.screen_name
                    .toLowerCase()
                    .includes(query.value.toLowerCase())
                )
                  return item;
              });
              nwData = [...temp];
              break;
            case "followers_count":
              if (query.operator === "GTE") {
                temp = nwData.filter((item) => {
                  if (item.followers_count >= query.value) return item;
                });
                nwData = [...temp];
              } else {
                temp = nwData.filter((item) => {
                  if (item.followers_count <= query.value) return item;
                });
                nwData = [...temp];
              }
              break;
            case "following_count":
              if (query.operator === "GTE") {
                temp = nwData.filter((item) => {
                  if (item.following_count >= query.value) return item;
                });
                nwData = [...temp];
              } else {
                temp = nwData.filter((item) => {
                  if (item.following_count <= query.value) return item;
                });
                nwData = [...temp];
              }
              break;
            case "location":
              temp = nwData.filter((item) => {
                if (
                  item.location
                    .toLowerCase()
                    .includes(query.value.toLowerCase())
                )
                  return item;
              });
              nwData = [...temp];
              break;
            case "verified":
              temp = nwData.filter((item) => {
                let val = item.verified ? "true" : "false";
                if (val === query.value) return item;
              });
              nwData = [...temp];
              break;
          }
        }
        console.log(nwData);
      });
    } else {
      props.filterQueries.map((query) => {
        let temp;
        if (query.item !== "" && query.operator !== "" && query.value !== "") {
          switch (query.item) {
            case "name":
              temp = data.filter((item) => {
                if (item.name.toLowerCase().includes(query.value.toLowerCase()))
                  return item;
              });
              nwData = [...new Set([...nwData, ...temp])];
              break;
            case "screen_name":
              temp = data.filter((item) => {
                if (
                  item.screen_name
                    .toLowerCase()
                    .includes(query.value.toLowerCase())
                )
                  return item;
              });
              nwData = [...new Set([...nwData, ...temp])];
              break;
            case "followers_count":
              if (query.operator === "GTE") {
                temp = data.filter((item) => {
                  if (item.followers_count >= query.value) return item;
                });
                nwData = [...new Set([...nwData, ...temp])];
              } else {
                temp = data.filter((item) => {
                  if (item.followers_count <= query.value) return item;
                });
                nwData = [...new Set([...nwData, ...temp])];
              }
              break;
            case "following_count":
              if (query.operator === "GTE") {
                temp = data.filter((item) => {
                  if (item.following_count >= query.value) return item;
                });
                nwData = [...new Set([...nwData, ...temp])];
              } else {
                temp = data.filter((item) => {
                  if (item.following_count <= query.value) return item;
                });
                nwData = [...new Set([...nwData, ...temp])];
              }
              break;
            case "location":
              temp = data.filter((item) => {
                if (
                  item.location
                    .toLowerCase()
                    .includes(query.value.toLowerCase())
                )
                  return item;
              });
              nwData = [...new Set([...nwData, ...temp])];
              break;
            case "verified":
              temp = data.filter((item) => {
                let val = item.verified ? "true" : "false";
                if (val === query.value) return item;
              });
              nwData = [...new Set([...nwData, ...temp])];
              break;
          }
        }
      });
    }
  }

  let dataValue = null;
  if (props.filterQueries.length === 0) {
    dataValue = data;
  } else {
    dataValue = nwData;
  }

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
          {dataValue.map((row, id) => (
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
