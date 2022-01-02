import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IconButton, Button } from "@material-ui/core";
// icons
import { Menu as MenuIcon } from "@material-ui/icons";

// styles
import useStyles from "./styles";

// images
import earn from "../../images/earn.png";
import borrow from "../../images/borrow.png";
import stocks from "../../images/stocks.png";
import cards from "../../images/cards.png";

export default function Dashboard(props) {
  var classes = useStyles();
  const dispatch = useDispatch();
  const isFull = useSelector((state) => state.sidebar.isDefault);
  const totalDepositAmount = useSelector((state) => state.wallet.walletInfo);
  const [depositAmount, setDepositAmount] = React.useState(0);
  React.useEffect(() => {
    setDepositAmount(totalDepositAmount);
  }, [totalDepositAmount]);
  return (
    <div>
      {isFull && (
        <div className={classes.title}>
          <div style={{ marginRight: 80 }}>Dashboard</div>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </div>
      )}
      {isFull && (
        <div style={{ fontSize: 30 }}>
          $<span style={{ fontWeight: 600 }}>{depositAmount}</span>USD
        </div>
      )}
      <div>
        <div className={classes.content}>
          <div className={classes.card}>
            <div className={classes.cardtitle}>18%FIXED APY</div>
            <div className={classes.cardtext}>
              <img
                src={earn}
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
                Earn on your deposits. Withdraw anytime.
              </div>
            </div>
            <Button
              className={classes.widgetButton}
              onClick={() =>
                dispatch({
                  type: "LIST_CHANGED",
                  listKey: "Earn",
                })
              }
            >
              EARN
            </Button>
          </div>
          <div className={classes.card}>
            <div className={classes.cardtitle}>
              Borrow instantly
              <br />
              Loan repays itself
            </div>
            <div className={classes.cardtext}>
              <img
                src={borrow}
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
                Borrow up to 50% of your collateral. No repayments. Your yield
                pays off your loan!
              </div>
            </div>
            <Button
              className={classes.widgetButton}
              onClick={() =>
                dispatch({
                  type: "LIST_CHANGED",
                  listKey: "Borrow",
                })
              }
            >
              BORROW
            </Button>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.card}>
            <div className={classes.cardtitle}>
              No Fees. Crypto <br />
              Mastercards
            </div>
            <div className={classes.cardtext}>
              <img
                src={cards}
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
                Crypto or Fiat, for choice
              </div>
            </div>
            <Button
              className={classes.widgetButton}
              onClick={() =>
                dispatch({
                  type: "LIST_CHANGED",
                  listKey: "Cards",
                })
              }
            >
              CARDS
            </Button>
          </div>
          <div className={classes.card}>
            <div className={classes.cardtitle}>Neutral strategy</div>
            <div className={classes.cardtext}>
              <img
                src={stocks}
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
                Delta Neutral Strategy with one click.
              </div>
            </div>
            <Button
              className={classes.widgetButton}
              onClick={() =>
                dispatch({
                  type: "LIST_CHANGED",
                  listKey: "Stocks",
                })
              }
            >
              STOCKS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
