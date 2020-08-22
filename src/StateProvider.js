import React, { createContext, useContext, useReducer } from 'react';

//Preparing the data layout
export const StateContext = createContext();

//Higher order component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Hook which allows us to pull information through data layout
export const useStateValue = () => useContext(StateContext);
