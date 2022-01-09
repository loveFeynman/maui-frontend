import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Tabs, Tab } from "@material-ui/core";

import Fiat from "./Fiat/fiat";
import Crypto from "./crypto/crypto";
// styles
import useStyles from "./styles";

export default function Deposit(props) {
  var classes = useStyles();
  const isFull = useSelector((state) => state.sidebar.isDefault);
  const totalDepositAmount = useSelector((state) => state.wallet.walletInfo);
  const [depositAmount, setDepositAmount] = useState(totalDepositAmount);

  const [value, setValue] = useState(1);
  const tabChange = (event, newValue) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    setDepositAmount(totalDepositAmount);
  });
  return (
    <div>
      {isFull && (
        <div className={classes.title}>
          <div>Deposit</div>
        </div>
      )}
      {isFull && (
        <div style={{ fontSize: 30, marginBottom: 20 }}>
          USD
          <span style={{ fontWeight: 600, marginLeft: 10 }}>
            {depositAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </div>
      )}
      <div>
        <div className={classes.tabbar}>
          <Tabs value={value} onChange={tabChange}>
            <Tab label="Crypto" className={value ? "" : classes.tap} id={0} />
            <Tab label="Fiat" className={value ? classes.tap : ""} id={1} />
          </Tabs>
        </div>
        <div hidden={value !== 0} id={0}>
          {value === 0 && <Crypto />}
        </div>

        <div hidden={value !== 1} id={1}>
          {value === 1 && <Fiat />}
        </div>
      </div>
    </div>
  );
}
