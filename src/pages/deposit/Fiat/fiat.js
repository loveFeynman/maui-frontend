import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  NativeSelect,
} from "@material-ui/core";
import {
  CheckBoxOutlineBlank as CheckBoxOutlineBlankIcon,
  CheckBox as CheckBoxIcon,
} from "@material-ui/icons";

import bank from "../../../images/bank.png";
// styles
import useStyles from "./styles";
const currencies = [
  {
    value: "USD",
    label: "$ USD",
  },
  {
    value: "EUR",
    label: "€ EUR",
  },
  {
    value: "BTC",
    label: "฿ BTC",
  },
  {
    value: "JPY",
    label: "¥ JPY",
  },
];
export default function Fiat(props) {
  var classes = useStyles();
  const [currency, setCurrency] = useState("USD");
  const [fee, setfee] = useState(0);
  const [feecheck, setfeecheck] = useState(true);
  const [amount, setamount] = useState(0);
  useEffect(() => {
    if (feecheck) setfee(amount / 50);
    else setfee(0);
  }, [feecheck, amount]);
  const currencyChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <div className={classes.tabBody}>
      <div className={classes.firstpart}>
        <div className={classes.boxtitle}>
          Select currency and payment method
        </div>
        <NativeSelect
          value={currency}
          onChange={currencyChange}
          className={classes.select}
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </NativeSelect>
        <div className={classes.boxtitle}>Bank transfer</div>
        <div value={currency + " - 2%"} className={classes.transfer}>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <img src={bank} alt="bank" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: 20,
                marginTop: "-5px",
              }}
            >
              <div style={{ fontSize: 16 }}>{currency}</div>
              <div style={{ fontSize: 14, color: "#1652F0" }}>+2% Fee</div>
            </div>
          </div>
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="large" />}
            checkedIcon={<CheckBoxIcon fontSize="large" background="white" />}
            onChange={(e) => {
              setfeecheck(!feecheck);
            }}
            checked={feecheck}
          />
        </div>
        <div className={classes.boxtitle}>Enter amount</div>
        <Input
          value={amount}
          onChange={(e) => {
            setamount(e.target.value);
          }}
          endAdornment={
            <InputAdornment position="end">{currency}</InputAdornment>
          }
          className={classes.select}
        />
        <div className={classes.pricetext}>
          <span
            style={{
              color: "blue",
              fontWeight: "bold",
              marginRight: "10px",
            }}
          >
            Fee
          </span>
          <span style={{ fontWeight: "bold" }}>{fee}</span>
        </div>
        <div className={classes.pricetext}>
          <span
            style={{
              color: "blue",
              fontWeight: "bold",
              marginRight: "10px",
            }}
          >
            You will get
          </span>
          <span style={{ fontWeight: "bold" }}>{amount - fee}</span>
        </div>
        <FormControlLabel
          className={classes.checkbox}
          control={<Checkbox defaultChecked name="gilad" />}
          label="I Agree with Terms and conditions"
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.confirmbutton}
        >
          CONFIRM
        </Button>
      </div>
      <div className={classes.secondpart}>
        <div className={classes.boxtitle} style={{ fontWeight: "bold" }}>
          Important
        </div>
        <div className={classes.description}>
          Lorem ipsum doior sit amet, consectetur adipiscing slit. Phansellus ut
          ipsum aliquet, sodales magna sed, vulputate tortor. Quisque rutrnm
          ipsum in dolor faucibus pretuim. integer eros enim tincidunt at
          maximus vitae, euismod sod lorem. Vivamus non aliquam dul.
        </div>

        <div className={classes.boxtitle} style={{ fontWeight: "bold" }}>
          Important
        </div>
        <div className={classes.description}>
          Lorem ipsum doior sit amet, consectetur adipiscing slit. Phansellus ut
          ipsum aliquet, sodales magna sed, vulputate tortor. Quisque rutrnm
          ipsum in dolor faucibus pretuim. integer eros enim tincidunt at
          maximus vitae, euismod sod lorem. Vivamus non aliquam dul.
        </div>
      </div>
    </div>
  );
}
