import React from "react";
import { useSelector } from "react-redux";

// styles
import useStyles from "./styles";
import Card from "../../components/Card";
export default function Dashboard(props) {
  var classes = useStyles();
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
        </div>
      )}
      {isFull && (
        <div style={{ fontSize: 30 }}>
          USD
          <span style={{ fontWeight: 600, marginLeft: 10 }}>
            {depositAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </span>
        </div>
      )}
      <div>
        <div className={classes.content}>
          <Card
            src="Earn"
            title="18%APY"
            text="Earn on your deposits. Withdraw anytime."
          />
          <Card
            src="Borrow"
            title="Borrow instantly"
            title2="Loan repays itself"
            text="Borrow up to 50% of your collateral. No repayments. Your yield pays off your loan!"
            active={true}
          />
        </div>
        <div className={classes.content}>
          <Card
            src="Cards"
            title="No Fees. Crypto"
            title2="Mastercards"
            text=" Crypto or Fiat, for choice"
            active={true}
          />
          <Card
            src="Stocks"
            title="Neutral strategy"
            text="Delta Neutral Strategy with one click."
            active={true}
          />
        </div>
      </div>
    </div>
  );
}
