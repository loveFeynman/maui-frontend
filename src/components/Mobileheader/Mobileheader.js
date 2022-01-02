import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
// styles
import useStyles from "./styles";

// components
import { Button } from "../Wrappers";
import Maui from "../../images/MAUI.png";
import eye from "../../images/eye.png";
import { useLayoutDispatch, toggleSidebar } from "../../context/LayoutContext";
export default function Header() {
  var classes = useStyles();
  const dispatch = useDispatch();
  var layoutDispatch = useLayoutDispatch();
  const title = useSelector((state) => state.sidebar.listlabel);
  return (
    <div className={classes.root}>
      <div className={classes.maui}>
        <img src={Maui} alt="maui" style={{ width: 65, height: 24 }} />
        <IconButton
          aria-label="delete"
          onClick={() => {
            toggleSidebar(layoutDispatch);
          }}
        >
          <MenuIcon />
        </IconButton>
      </div>
      <div className={classes.title}>{title}</div>
      <div className={classes.deposit}>
        <div className={classes.balance}>
          <div>Your balance:</div>
          <div>
            <img
              src={eye}
              alt="eye"
              // style={{ width: 17, height: 13, color: "white" }}
            />
          </div>
        </div>
        <div style={{ color: "white", marginTop: 4 }}>
          ${" "}
          <span style={{ fontSize: 24 }}>
            <span style={{ fontWeight: "bold" }}>3,234.08</span> USD
          </span>
        </div>
        <Button
          onClick={(e) => {
            dispatch({
              type: "LIST_CHANGED",
              listKey: "Deposit",
            });
          }}
          className={classes.depositbutton}
          // color="primary"
          // variant="contained"
        >
          DEPOSIT
        </Button>
      </div>
    </div>
  );
}
