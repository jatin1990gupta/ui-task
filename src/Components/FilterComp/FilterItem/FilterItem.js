import React from "react";

import classes from "./FilterItem.module.css";

import { COLUMNS } from "../../../Assets/columns";

const FilterItem = (props) => {
  let queryTypeSelector;

  if (props.firstFilter) {
    queryTypeSelector = <p>Where</p>;
  } else if (props.secondFilter) {
    queryTypeSelector = (
      <select
        onChange={(e) => {
          props.changeQueryTypeVal(e.target.value);
        }}
        value={props.queryTypeValue}
      >
        <option value="1">AND</option>
        <option value="0">OR</option>
      </select>
    );
  } else {
    queryTypeSelector = props.queryTypeVal == 1 ? "AND" : "OR";
  }

  let validOP = [];
  if (
    props.values.item === "name" ||
    props.values.item === "screen_name" ||
    props.values.item === "location"
  ) {
    validOP = [{ name: "Contains", val: "CONTAINS" }];
  } else if (
    props.values.item === "followers_count" ||
    props.values.item === "following_count"
  ) {
    validOP = [
      { name: ">=", val: "GTE" },
      { name: "<=", val: "LTE" },
    ];
  } else if (props.values.item === "verified") {
    validOP = [{ name: "Equals", val: "EQ" }];
  }

  let operatorPart;
  if (props.values.item !== "") {
    operatorPart = (
      <select
        value={props.values.operator}
        onChange={(e) => {
          props.changeFilterValues({
            ...props.values,
            operator: e.target.value,
          });
        }}
      >
        <option value=""></option>
        {validOP.map((op, index) => {
          return (
            <option key={index} value={op.val}>
              {op.name}
            </option>
          );
        })}
      </select>
    );
  } else {
    operatorPart = <select disabled></select>;
  }

  let valuePart;
  if (props.values.item !== "" && props.values.operator !== "") {
    if (props.values.item === "verified") {
      valuePart = (
        <select
          value={props.values.value}
          onChange={(e) => {
            props.changeFilterValues({
              ...props.values,
              value: e.target.value,
            });
          }}
        >
          <option value=""></option>
          <option value={true}>✓</option>
          <option value={false}>✖</option>
        </select>
      );
    } else if (
      props.values.item === "followers_count" ||
      props.values.item === "following_count"
    ) {
      valuePart = (
        <input
          value={props.values.value}
          onChange={(e) => {
            props.changeFilterValues({
              ...props.values,
              value: e.target.value,
            });
          }}
          type="number"
          placeholder="Value"
        />
      );
    } else {
      valuePart = (
        <input
          value={props.values.value}
          onChange={(e) => {
            props.changeFilterValues({
              ...props.values,
              value: e.target.value,
            });
          }}
          placeholder="Value"
        />
      );
    }
  } else {
    valuePart = <input disabled value="" placeholder="Value" />;
  }

  return (
    <div className={classes.FilterItem}>
      <div className={classes.Col1}>{queryTypeSelector}</div>
      <div className={classes.Col2}>
        <select
          value={props.values.item}
          onChange={(e) => {
            props.changeFilterValues({
              ...props.values,
              item: e.target.value,
            });
          }}
        >
          <option value=""></option>
          {COLUMNS.map((col, index) => (
            <option key={index + 1} value={col.accessor}>
              {col.Header}
            </option>
          ))}
        </select>
      </div>

      <div className={classes.Col3}>{operatorPart}</div>
      <div className={classes.Col4}>{valuePart}</div>
      <div className={classes.DeleteFilter} onClick={props.deleteFilter}>
        <i className="far fa-trash-alt"></i>
      </div>
    </div>
  );
};

export default FilterItem;
