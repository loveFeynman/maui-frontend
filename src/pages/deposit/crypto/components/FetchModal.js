import React, { useState, useEffect } from "react";
import useStyles from "../styles";
import { OutlinedInput, Button } from "@material-ui/core";
import { LCDClient, Dec, MsgSend } from "@terra-money/terra.js";
import { useWallet } from "@terra-money/wallet-provider";
import { MICRO } from "../../../../constants";
import { toast } from "react-toastify";
import Loading from "../../../../components/Loading/loading";
import { getWalletInfo } from "../../../../actions/walletAction";
import { useDispatch } from "react-redux";
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    alignItems: "center",
  };
}

export default function FetchModal(props) {
  const [modalStyle] = React.useState(getModalStyle);
  const [amount, setAmount] = useState();
  const [balance, setBalance] = useState(0);
  const [exceed, setExceed] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const classes = useStyles();
  const { userWallet, to } = props;
  const from = userWallet?.terraAddress;
  const { sign } = useWallet();
  const dispatch = useDispatch();

  const terra = new LCDClient({
    URL: "https://bombay-lcd.terra.dev",
    chainID: "bombay-12",
  });

  const fetchBalance = async () => {
    console.log(terra);
    const currentBalance = await terra.bank.balance(from);
    console.log("current balance", currentBalance);
    const balance = new Dec(currentBalance[0]._coins.uusd.amount)
      .div(1000000)
      .toNumber()
      .toFixed(2);
    setBalance(balance);
    setLoading(false);
  };

  const fetchCrypto = async () => {
    setLoading(true);
    try {
      console.log("amount", amount);
      const pool_contract = new MsgSend(from, to, {
        uusd: new Dec(amount).mul(MICRO).toNumber(),
      });

      // Sign transaction
      const result = await sign({
        msgs: [pool_contract],
        feeDenoms: ["uusd"],
        gasPrices: "0.15uusd",
      });

      const tx = result.result;

      await terra.tx.broadcast(tx);
      await fetchBalance();
      toast.success("Transaction success");
      dispatch(getWalletInfo(to));
    } catch (error) {
      setLoading(false);
      toast.error("Transaction fails");
    }
  };

  const inputAmount = (e) => {
    const depositAmount = e.target.value;
    setAmount(depositAmount);
    if (Number(depositAmount) > Number(balance)) setExceed(true);
    else setExceed(false);
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <div>
      {isLoading && <Loading />}
      <div style={modalStyle} className={classes.paper}>
        <h1>Fetch Crypto from your account</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 20,
            justifyContent: "center",
          }}
        >
          maxAmount-
          <div style={{ fontWeight: 600, fontSize: 40 }}>{balance}$</div>
        </div>
        <div className={classes.boxtitle}>Enter amount</div>
        <OutlinedInput
          type="number"
          endAdornment={<div>USD</div>}
          onChange={inputAmount}
          className={classes.amount}
        />

        <Button className={classes.confirmbutton} onClick={fetchCrypto}>
          Fetch
        </Button>
        {exceed && (
          <p style={{ color: "red", marginTop: 0 }}>Not enough money</p>
        )}
      </div>
    </div>
  );
}
