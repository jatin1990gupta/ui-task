import React, { useState } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/action";

import classes from "./FilterComp.module.css";

import FilterItem from "./FilterItem/FilterItem";

const FilterComp = (props) => {
  const items = (
    <div>
      {props.filterQueries.map((filterItem, index) => {
        if (index == 0) {
          return (
            <FilterItem
              key={index}
              index={index}
              firstFilter
              values={filterItem}
            />
          );
        } else if (index == 1) {
          return (
            <FilterItem
              key={index}
              index={index}
              secondFilter
              values={filterItem}
            />
          );
        } else {
          return <FilterItem key={index} index={index} values={filterItem} />;
        }
      })}
    </div>
  );

  return (
    <div className={classes.FilterComp}>
      {items}
      <p
        className={classes.AddFilter}
        onClick={() => {
          props.addFilterQuery();
        }}
      >
        + Add Filter
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    queryTypeVal: state.queryTypeVal,
    filterQueries: state.filterQueries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeQueryTypeVal: (val) => dispatch(actions.changeQueryTypeVal(val)),
    addFilterQuery: () => dispatch(actions.addFilterItem()),
    deleteFilterQuery: (index) => dispatch(actions.deleteFilter(index)),
    changeFilterValues: (value, index) =>
      dispatch(actions.changeFilterValues(value, index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterComp);
