import * as actionTypes from "./actionTypes";

export const changeQueryTypeVal = (value) => {
  return {
    type: actionTypes.CHANGE_QUERY_TYPE_VAL,
    value: value,
  };
};

export const addFilterItem = () => {
  return {
    type: actionTypes.ADD_FILTER_ITEM,
  };
};

export const deleteFilter = (index) => {
  return {
    type: actionTypes.DELETE_FILTER_ITEM,
    index: index,
  };
};

export const changeFilterValues = (value, index) => {
  return {
    type: actionTypes.CHANGE_FILTER_VALUES,
    value: value,
    index: index,
  };
};
