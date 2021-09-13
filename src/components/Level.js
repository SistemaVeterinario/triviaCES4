import React, { useState, useContext } from "react";
import LoginContext from "../context/Login/loginContext";

const Level = ()=> {
  const loginContext = useContext(LoginContext);
  const {earnings } = loginContext;

    const [earning, setEarnings ]= useState(
        [10000,9000, 8000, 7000, 6000, 5000, 4000, 3000,2000, 1000]);

    return( 
      <div className="content-level">
             {earning ? (
                   earning?.map(e=> (
                        <h4 className={earnings == e ? "btn btn-primary btn-lg" : ""}key={e}>{e}</h4>
                    ))
             ):null}
        </div>
       
    )
}
export default Level;