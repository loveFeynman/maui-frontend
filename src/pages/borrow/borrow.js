import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  IconButton,
  Button,
  Tabs,
  Tab,
  OutlinedInput,
  Checkbox,
} from "@material-ui/core";
// icons
import { Menu as MenuIcon } from "@material-ui/icons";

import CustomSlider from "./slider";
// styles
import useStyles from "./styles";

export default function Earn(props) {
  var classes = useStyles();
  const isFull = useSelector((state) => state.sidebar.isDefault);
  const account = useSelector((state) => state.user.account);
  const [value, setValue] = useState(0);
  const tabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      {isFull && (
        <div className={classes.title}>
          <div>Borrow</div>
          <IconButton aria-label="delete">
            <MenuIcon />
          </IconButton>
        </div>
      )}
      <div className={classes.header}>
        {isFull && (
          <div style={{ fontSize: 30, marginBottom: 20 }}>
            $<span style={{ fontWeight: 600 }}>{account}</span>USD
          </div>
        )}
        <div
          style={{
            width: 312,
            height: 45,
            border: "1px solid #D2D2D2",
            borderRadius: 46,
            textAlign: "center",
            paddingTop: 5,
            alignItems: "center",
            fontSize: 16,
          }}
        >
          You can borrow up to{" "}
          <span style={{ fontSize: 24, fontWeight: 600 }}>$1,616</span>
        </div>
      </div>
      <div className={classes.tabbar}>
        <Tabs value={value} onChange={tabChange}>
          <Tab
            label="Borrow"
            className={value === 0 ? classes.tap : ""}
            id={0}
          />
          <Tab
            label="Withdraw"
            className={value === 1 ? classes.tap : ""}
            id={1}
          />
          <Tab
            label="Repay"
            className={value === 2 ? classes.tap : ""}
            id={2}
          />
        </Tabs>
      </div>
      <div hidden={value !== 0} id={0}></div>
      {value === 0 && (
        <div className={classes.tabBody}>
          <div className={classes.subtitle}>
            Get access up to 50% of your collateral with no repayments!
          </div>
          <div className={classes.firstpart}>
            <div>
              <div className={classes.subtext}>Enter the amount to borrow</div>
              <OutlinedInput
                type="number"
                onChange={(e) => {}}
                endAdornment={<div>USD</div>}
                className={classes.amount}
              />
              <div className={classes.subtext}>
                <Checkbox style={{ margin: 0, padding: 0 }} />I Agree with{" "}
                <span style={{ textDecoration: "underline" }}>
                  Terms and conditions
                </span>
              </div>
              <Button
                variant="contained"
                color="primary"
                className={classes.confirmbutton}
              >
                CONFIRM
              </Button>
            </div>
            <div className={classes.smallblock}>
              <div className={classes.duration}>
                <div>Duration:</div>
                <div style={{ color: "#63B8E8" }}>365 Days</div>
              </div>
              <div className={classes.duration}>
                <div>
                  Maturity
                  <br />
                  Date:
                </div>
                <div style={{ color: "#63B8E8" }}>
                  <br />
                  03.12.2023
                </div>
              </div>
            </div>
          </div>
          <div className={classes.chartblock}>
            <div className={classes.slider}>
              <CustomSlider title="Collateral:" value="5000" />
              <CustomSlider title="Borrowed:" value="2500" />
              <CustomSlider title="APY:" value="18%" />
            </div>
            <div className={classes.chart}></div>
          </div>
        </div>
      )}
      <div hidden={value !== 1} id={1}></div>
    </div>
  );
}
