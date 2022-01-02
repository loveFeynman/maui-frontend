import React from "react";
import { useSelector } from "react-redux";
// icons

import Eachstock from "./eachstock";
// styles
import useStyles from "./styles";
import { stockdata } from "./mock";

export default function Earn(props) {
  const isFull = useSelector((state) => state.sidebar.isDefault);
  const account = useSelector((state) => state.user.account);
  var classes = useStyles();
  return (
    <div>
      {isFull && <div className={classes.title}>Stocks</div>}
      {isFull && (
        <div style={{ fontSize: 30, marginBottom: 20 }}>
          $<span style={{ fontWeight: 600 }}>{account}</span>USD
        </div>
      )}
      <div className={classes.mainstock}>
        <div className={classes.maintable}>
          <div className={classes.tablehead}>
            <div style={{ width: "20%" }}>Ticker</div>
            <div style={{ width: "13%" }}>Terraswap Price</div>
            <div style={{ width: "12%" }}>Oracle Price</div>
            <div style={{ width: "12%" }}>Premium</div>
            <div style={{ width: "13%" }}>Min Col Ratio</div>
            <div style={{ width: "30%" }}>Action</div>
          </div>
          {stockdata.map((data, index) => (
            <Eachstock key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
