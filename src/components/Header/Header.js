import React from "react";
import { useDispatch } from "react-redux";
import { Avatar } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import helpicon from "../../images/help.png";
import telegram from "../../images/telegramletter.png";
// styles
import useStyles from "./styles";

// components
import { Button } from "../Wrappers";

export default function Header() {
  var classes = useStyles();
  const now = new Date().toString().split(" ");
  const nowString = `${now[0]} ${now[2]} ${now[1]} ${now[3]}`;
  const dispatch = useDispatch();
  return (
    <div className={classes.root}>
      <div className={classes.text}>{nowString}</div>
      <div className={classes.rightpart}>
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
        <Avatar alt="help" src={helpicon} className={classes.avatarSize} />
        <Avatar alt="telegram" src={telegram} className={classes.avatarSize} />
        <ExitToAppIcon className={classes.avatarSize} />
      </div>
    </div>
  );
}
