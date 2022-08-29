//Redux - это модуль, который хранит и передает глобальный state приложения, позволяет связать несвязанные 
//компоненты и не допустить лишний рендер
//redux toolkit - это вспомогательный модуль для redux упрощает использование чистого redux.
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

//С - как и в useState д б значение по умолчанию:
const initialState = {
  countryId: "",
  numberOf: "",
  theme: "light",
};

//createAction - объявляет действие(функцию), которую мы будем использовать для изменения  redux state 
export const setCountryId = createAction("setCountryId");
export const setNumberOf = createAction("setNumberOf");
export const setTheme = createAction("setTheme");
//reducer - способ управления состоянием приложения
//чистая функция, которая вычисляет следующее состояние дерева на основании его предыдущего(initialState) состояния и применяемого действия(createAction)
//в качестве аргументов принимает 
//state  это наш initialState и action - этоcreateAction
//в него нужно обернуть все наше приложение index.js
const reducer = createReducer(initialState, {
  [setCountryId]: (state, action) => {
    state.countryId = action.payload;
  },
  [setNumberOf]: (state, action) => {
    state.numberOf = action.payload;
  },
  [setTheme]: (state, action) => {
    state.theme = action.payload;
  },
});
//configureStore  создает хранилище в котором содержится состояние приложения, которое мы можем контролировать через action
export const store = configureStore({
  reducer,
});