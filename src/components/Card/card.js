import React from "react";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
// styles
import useStyles from "./styles";
import Earn from "../../images/earn.png";
import Borrow from "../../images/borrow.png";
import Stocks from "../../images/stocks.png";
import Cards from "../../images/cards.png";
const imgs = {
  Earn: Earn,
  Borrow: Borrow,
  Stocks: Stocks,
  Cards: Cards,
};
export default function Card({ title, src, text, title2, active }) {
  var classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div className={classes.card}>
      {active && <div className={classes.banner}>Comming Soon</div>}
      <div className={classes.cardtitle}>{title}</div>
      <div className={classes.cardtitle}>{title2}</div>
      <div className={classes.cardtext}>
        <img
          src={imgs[src]}
          alt=""
          className={classes.widgetImg}
          loading="lazy"
        />
        <div
          style={{
            fontSize: 14,
            textAlign: "-webkit-center",
            padding: 10,
          }}
        >
          {text}
        </div>
      </div>
      <Button
        className={classes.widgetButton}
        onClick={() =>
          dispatch({
            type: "LIST_CHANGED",
            listKey: src,
          })
        }
      >
        {src}
      </Button>
    </div>
  );
}
