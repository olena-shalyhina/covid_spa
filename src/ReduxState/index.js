import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  countryId: "",
  numberOf: "",
};

export const setCountryId = createAction("setCountryId");
export const setNumberOf = createAction("setNumberOf");

const reducer = createReducer(initialState, {
  [setCountryId]: (state, action) => {
    state.countryId = action.payload;
  },
  [setNumberOf]: (state, action) => {
    state.numberOf = action.payload;
  }
});
export const store = configureStore({
  reducer,
});