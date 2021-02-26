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
              firstFilter
              values={filterItem}
              deleteFilter={() => props.deleteFilterQuery(index)}
              changeFilterValues={(value) =>
                props.changeFilterValues(value, index)
              }
            />
          );
        } else if (index == 1) {
          return (
            <FilterItem
              key={index}
              secondFilter
              values={filterItem}
              changeQueryTypeVal={(val) => props.changeQueryTypeVal(val)}
              queryTypeVal={props.queryTypeVal}
              deleteFilter={() => props.deleteFilterQuery(index)}
              changeFilterValues={(value) =>
                props.changeFilterValues(value, index)
              }
            />
          );
        } else {
          return (
            <FilterItem
              key={index}
              values={filterItem}
              queryTypeVal={props.queryTypeVal}
              deleteFilter={() => props.deleteFilterQuery(index)}
              changeFilterValues={(value) =>
                props.changeFilterValues(value, index)
              }
            />
          );
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
