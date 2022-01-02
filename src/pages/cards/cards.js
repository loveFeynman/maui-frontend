import React from "react";
import { useSelector } from "react-redux";
import { IconButton, Button } from "@material-ui/core";
// icons
import { Menu as MenuIcon } from "@material-ui/icons";

import firstcard from "../../images/MauiCard1.png";
import secondcard from "../../images/MauiCard2.png";
// styles
import useStyles from "./styles";

export default function Earn(props) {
  const isFull = useSelector((state) => state.sidebar.isDefault);
  const account = useSelector((state) => state.user.account);

  var classes = useStyles();
  return (
    <div>
      {isFull && (
        <div className={classes.title}>
          <div>Cards</div>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </div>
      )}
      {isFull && (
        <div style={{ fontSize: 30, marginBottom: 20 }}>
          $<span style={{ fontWeight: 600 }}>{account}</span>USD
        </div>
      )}
      <div className={classes.context}>
        <div className={classes.subtitle}>The future of finance!</div>
        <div className={classes.cardpart}>
          <div className={classes.card}>
            <img
              src={firstcard}
              alt="card1"
              style={{ width: "100%", height: "100%" }}
            />
            <div className={classes.cardtitle}>eCard</div>
            <div className={classes.cardtext}>
              Make deposits and receive 15% per yield, that's better return than
              most Hedge Funds and Superannuations across the globe. Borrow up
              to 25% of your collateral instantly and you will receive 10%
              return per year.
            </div>
            <Button className={classes.confirmbutton}>eCard</Button>
          </div>
          <div className={classes.card}>
            <img
              src={secondcard}
              alt="card2"
              style={{ width: "100%", height: "100%" }}
            />
            <div className={classes.cardtitle}>Titanium Card</div>
            <div className={classes.cardtext}>
              Be one of the first cardholders of our titanium card and make
              history. The durability and aesthetics of our titanium card are
              well known. You could even compound it to your deposits to
              increase your yields. That's the future of finance!
            </div>
            <Button className={classes.confirmbutton}>Titanium Card</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
