import React, { useReducer } from "react";
import EarningsContext from "../Earnings/earningsContext";
import EarningsReducer from "../Earnings/earningsReducer";
import {
  ADD_EARNINGS,
} from '../../types';

const EarningState = (props) => {
  const initialState = {
    earning = 0
  };

  const [state, dispatch] = useReducer(EarningsReducer, initialState);

  const plusEarnings = earning => {
    dispatch({
      type: ADD_EARNINGS,
      payload: earning
    })
  }

   return (
    <EarningsContext.Provider 
        value={{
          earning: state.earning,
          plusEarnings
        }}>
     {props.children}
     </EarningsContext.Provider>
  );
};

export default EarningState;
