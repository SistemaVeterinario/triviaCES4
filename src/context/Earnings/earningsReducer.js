import {
    ADD_EARNINGS,
  } from '../../types';
  
  export default (state, action) => {
      switch (action.type) {
          case ADD_EARNINGS:
              return {
                  ...state,
                  earning: action.payload
              }
          default:
              return state;
      }
  }