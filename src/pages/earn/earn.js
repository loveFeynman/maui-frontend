import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { OutlinedInput, Checkbox, Button } from "@material-ui/core";

// anchor
import { LCDClient, Dec } from "@terra-money/terra.js";
import { MICRO, BLOCKSPERYEAR, FEE } from "../../constants.js";

import ApexLineChart from "./ApexLineChart";
import ConfirmButton from "../../components/ConfirmButton/confirmButton";
import { toast } from "react-toastify";
import { walletControl } from "../../actions/walletAction";
// styles
import useStyles from "./styles";
import Loading from "../../components/Loading/loading";
import Card from "../../components/Card";
export default function Earn(props) {
  var classes = useStyles();
  const terra = new LCDClient({
    URL: "https://bombay-lcd.terra.dev",
    chainID: "bombay-12",
  });
  const dispatch = useDispatch();
  const isFull = useSelector((state) => state.sidebar.isDefault);
  const key = useSelector((state) => state.user.user.accAddress);
  const totalDepositAmount = useSelector((state) => state.wallet.walletInfo);
  const [anchoraccount, setanchoraccount] = React.useState(0);
  const [period, setperiod] = React.useState(1); ////1:year, 2:month, 3:week, 4: day
  const [checked, setchecked] = React.useState(false);
  const [exceed, setExceed] = React.useState(false);
  const [exceedDeposit, setExceedDeposit] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [withdrawAmount, setWithdrawAmount] = React.useState();
  const [expectedInterest, setExpectedInterest] = React.useState(0);
  const [annualExpectedInterest, setAnnaulExpectedInterest] = React.useState(0);
  const [marketExchangeRate, setMarketExchangeRate] = React.useState(1);
  const [austVal, setAustVal] = React.useState(0);
  const [depositAmount, setDepositAmount] = React.useState();

  useEffect(() => {
    fetchExpectedInterest();
  }, []);
  useEffect(() => {
    setExpectedInterest(
      new Dec(annualExpectedInterest)
        .div(period === 2 ? 12 : period === 3 ? 52 : period === 4 ? 365 : 1)
        .toNumber()
        .toFixed(2),
    );
  }, [period, annualExpectedInterest]);

  const inputDepositAmount = (e) => {
    const depositInput = e.target.value;
    if (Number(depositInput) > Number(totalDepositAmount)) {
      setExceed(true);
    } else {
      setDepositAmount(depositInput);
      setExceed(false);
    }
  };

  const inputWithdrawAmount = (e) => {
    const withdrawInput = e.target.value;
    if (
      Number(withdrawInput) >
      new Dec(austVal).mul(marketExchangeRate).div(MICRO)
    ) {
      setExceedDeposit(true);
    } else {
      setWithdrawAmount(withdrawInput);
      setExceedDeposit(false);
    }
  };

  const fetchExpectedInterest = async () => {
    // aUST balance
    const uaUST = new Promise((resolve, reject) => {
      resolve(
        terra.wasm.contractQuery(
          "terra1ajt556dpzvjwl0kl5tzku3fc3p3knkg9mkv8jl", //terra1hzh9vpxhsk8253se0vv5jj6etdvxu3nv8z07zu
          {
            balance: {
              address: key,
            },
          },
        ),
      );
    });

    const exchangeRate = new Promise((resolve, reject) => {
      resolve(
        terra.wasm.contractQuery(
          "terra15dwd5mj8v59wpj0wvt233mf5efdff808c5tkal", // terra1sepfj7s0aeg5967uxnfk4thzlerrsktkpelm5s
          {
            epoch_state: {
              block_height: undefined,
            },
          },
        ),
      );
    });

    const depositRate = new Promise((resolve, reject) => {
      resolve(
        terra.wasm.contractQuery(
          "terra1qljxd0y3j3gk97025qvl3lgq8ygup4gsksvaxv", // terra1tmnqgvg567ypvsvk6rwsga3srp7e3lg6u0elp8
          {
            epoch_state: {
              block_height: undefined,
            },
          },
        ),
      );
    });

    await Promise.all([uaUST, exchangeRate, depositRate])
      .then((values) => {
        const ustBalance = new Dec(values[0].balance).mul(
          values[1].exchange_rate,
        );

        const annualizedInterestRate = new Dec(values[2].deposit_rate)
          .mul(BLOCKSPERYEAR)
          .sub(FEE);

        const interest = ustBalance
          .mul(annualizedInterestRate)
          .div(MICRO)
          .toNumber();

        setMarketExchangeRate(values[1].exchange_rate);

        console.log("aust", values[0].balance, values[1].exchange_rate);

        setAustVal(values[0].balance);
        setAnnaulExpectedInterest(interest);
        setanchoraccount(
          new Dec(values[0].balance)
            .mul(values[1].exchange_rate)
            .div(MICRO)
            .toFixed(2),
        );
      })
      .catch((error) => {
        console.log(error.message);
        console.log("Interest Information Fetch error");
      });
  };

  // Deposit
  const confirmDeposit = (id) => {
    if (!checked) return;
    setLoading(true);
    // toast.info("Verifying your transaction, please allow few seconds");
    setchecked(false);
    dispatch(
      walletControl({
        data: {
          amount: id === "in" ? depositAmount : withdrawAmount,
          in_out: id,
        },
        fail: () => {
          setLoading(false);
          toast.error("Your deposit was failed. Try it again.");
        },
        success: (e) => {
          fetchExpectedInterest();
          toast.success("Your deposit was successful");
          dispatch({ type: "WALLET_INFO", payload: key });
          setLoading(false);
          setDepositAmount();
          setWithdrawAmount();
        },
      }),
    );
  };

  return (
    <div>
      {isFull && (
        <div className={classes.title}>
          <Button className={classes.earnButton}>Earn</Button>
        </div>
      )}
      {isFull && (
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div style={{ fontSize: 20, marginBottom: 20, width: "50%" }}>
            AVAILABLE: USD
            <span style={{ fontWeight: 600, marginLeft: 10 }}>
              {totalDepositAmount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </div>
          <div style={{ fontSize: 20, marginBottom: 20 }}>
            DEPOSITED: USD
            <span style={{ fontWeight: 600, marginLeft: 10 }}>
              {anchoraccount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </div>
        </div>
      )}
      <div className={classes.context}>
        {loading && (
          <Loading text="Verifying your transaction, please wait a few seconds" />
        )}
        <div className={classes.amount_period}>
          <div>
            <div className={classes.subtext}>
              Enter the amount for an 18% APY{" "}
              <span
                style={{
                  color: "green",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginLeft: 10,
                }}
              >
                deposit
              </span>
            </div>
            <OutlinedInput
              type="number"
              onChange={inputDepositAmount}
              endAdornment={<div>USD</div>}
              className={classes.amount}
              value={depositAmount}
            />
            {exceed && <p style={{ color: "red" }}>Not enough money</p>}
            <div style={{ width: "100%" }}>
              <div className={classes.subtext}>
                <Checkbox
                  style={{ margin: 0, padding: 0 }}
                  checked={checked}
                  onChange={(e) => {
                    setchecked(!checked);
                  }}
                />
                I Agree with{" "}
                <span style={{ textDecoration: "underline" }}>
                  Terms and conditions
                </span>
              </div>
              <div style={{ position: "relative" }}>
                <ConfirmButton
                  buttonClass={
                    checked ? classes.confirmbutton : classes.disabledbutton
                  }
                  text="Please confirm your deposit for an 18% APY"
                  onClick={(e) => confirmDeposit("in")}
                  disabled={!checked}
                  title="Deposit"
                />
              </div>
            </div>

            <div className={classes.subtext}>
              Enter amount you would like to{" "}
              <span
                style={{
                  color: "red",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginLeft: 10,
                }}
              >
                withdraw
              </span>
            </div>
            <OutlinedInput
              type="number"
              onChange={inputWithdrawAmount}
              endAdornment={<div>USD</div>}
              className={classes.amount}
              value={withdrawAmount}
            />
            {exceedDeposit && (
              <p style={{ color: "red" }}>Not enough deposit</p>
            )}
            <div style={{ width: "100%" }}>
              <div className={classes.subtext}>Withdraw</div>
              <ConfirmButton
                buttonClass={
                  checked ? classes.confirmbutton : classes.disabledbutton
                }
                text="Are you agree?"
                onClick={(e) => confirmDeposit("out")}
                disabled={!checked}
                title="Withdraw"
              />
            </div>
          </div>
          <Card
            src="Earn"
            title="18%APY"
            text="Earn on your deposits. Withdraw anytime."
          />
        </div>
      </div>
      <div className={classes.chartArea}>
        <div className={classes.subtitle}>Your Expected Earnings</div>
        <div className={classes.amount_period}>
          <div>
            <div className={classes.subtext}>Choose time period:</div>
            <div className={classes.period}>
              <button
                className={period === 1 ? classes.activebutton : classes.button}
                onClick={(e) => {
                  setperiod(1);
                }}
              >
                Year
              </button>
              <button
                className={period === 2 ? classes.activebutton : classes.button}
                onClick={(e) => {
                  setperiod(2);
                }}
              >
                Month
              </button>
              <button
                className={period === 3 ? classes.activebutton : classes.button}
                onClick={(e) => {
                  setperiod(3);
                }}
              >
                Week
              </button>
              <button
                className={period === 4 ? classes.activebutton : classes.button}
                onClick={(e) => {
                  setperiod(4);
                }}
              >
                Day
              </button>
            </div>
          </div>
          <div>
            <div className={classes.subtext}>Expected Interest:</div>
            <div className={classes.interest}>
              <div style={{ fontWeight: "bold", color: "black" }}>
                {exceed === false ? expectedInterest : "0"}
              </div>
              <div>USD</div>
            </div>
          </div>
        </div>
        <div className={classes.subtext}>
          Expected APY based on your deposit
        </div>
        <ApexLineChart />
      </div>
    </div>
  );
}
