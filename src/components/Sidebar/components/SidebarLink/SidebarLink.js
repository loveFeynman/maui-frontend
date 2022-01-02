import React from "react";
import { ListItem } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

// styles
import useStyles from "./styles";

export default function SidebarLink({ label }) {
  var classes = useStyles();
  const dispatch = useDispatch();
  const sidebarState = useSelector((state) => state.sidebar.listlabel);

  return (
    <ListItem
      className={
        label === sidebarState ? classes.activeLink : classes.externalLink
      }
      button={true}
      onClick={(e) => {
        dispatch({
          type: "LIST_CHANGED",
          listKey: label,
        });
      }}
    >
      {label}
    </ListItem>
  );
}
