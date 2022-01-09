import React from "react";
import { useDispatch, useSelector } from "react-redux";
// styles
import useStyles from "./styles";

// components
import { Button } from "../Wrappers";
import { getUserAccount } from "../../actions/userAction";

export default function Header() {
  var classes = useStyles();
  const walletAddress = useSelector((state) => state.user.walletAddress);
  const now = new Date().toString().split(" ");
  const nowString = `${now[0]} ${now[2]} ${now[1]} ${now[3]}`;
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (walletAddress) {
      dispatch(getUserAccount({ data: { walletAddress } }));
    }
  }, [walletAddress]);
  return (
    <div className={classes.root}>
      <div className={classes.text}>{nowString}</div>
      <Button
        onClick={(e) => {
          dispatch({
            type: "LIST_CHANGED",
            listKey: "Deposit",
          });
        }}
        className={classes.headerButton}
        color="primary"
        variant="contained"
      >
        DEPOSIT
      </Button>
    </div>
  );
}
