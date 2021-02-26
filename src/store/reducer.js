import * as actionTypes from "./actionTypes";
import { updateOject } from "./utility";

const initialState = {
  queryTypeVal: 1,
  filterQueries: [],
};

const changeQueryTypeVal = (state, action) => {
  return updateOject(state, { queryTypeVal: action.value });
};

const addFilterItem = (state, action) => {
  return updateOject(state, {
    filterQueries: [
      ...state.filterQueries,
      {
        item: "",
        operator: "",
        value: "",
      },
    ],
  });
};

const deleteFilterItem = (state, action) => {
  const filters = state.filterQueries;
  filters.splice(action.index, 1);

  return updateOject(state, {
    filterQueries: [...filters],
  });
};

const changeFilterValues = (state, action) => {
  let nwQuery = [...state.filterQueries];
  nwQuery[action.index] = action.value;

  return updateOject(state, {
    filterQueries: nwQuery,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_QUERY_TYPE_VAL:
      return changeQueryTypeVal(state, action);
    case actionTypes.ADD_FILTER_ITEM:
      return addFilterItem(state, action);
    case actionTypes.DELETE_FILTER_ITEM:
      return deleteFilterItem(state, action);
    case actionTypes.CHANGE_FILTER_VALUES:
      return changeFilterValues(state, action);
    default:
      return state;
  }
};

export default reducer;
