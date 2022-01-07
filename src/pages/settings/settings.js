import React from "react";
// import {  useSelector } from "react-redux";
import { Grid, IconButton } from "@material-ui/core";
// icons
import { Menu as MenuIcon } from "@material-ui/icons";

// styles
import useStyles from "./styles";

export default function Earn(props) {
  // const isFull = useSelector((state) => state.sidebar.isDefault);
  var classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.title}>
          <div>Settings</div>
          <IconButton aria-label="delete">
            <MenuIcon />
          </IconButton>
        </div>
      </Grid>
    </Grid>
  );
}
