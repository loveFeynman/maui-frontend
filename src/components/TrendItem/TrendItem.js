import React from "react";
import { Grid, Avatar } from "@material-ui/core";

// icons
import { ArrowForwardIos as NextIcon } from "@material-ui/icons";

// styles
import useStyles from "./styles";

// logo
import logo from "../../images/logo";

// components
import { Typography } from "../Wrappers/Wrappers";

export default function TrendItem({ color = "primary", ...props }) {
  const classes = useStyles();
  const { img, title, subTitle } = props.data;

  return (
    <Grid container item xs={12} className={classes.container}>
      <Grid item xs={2}>
        <Avatar className={classes.avatar} alt={img} src={logo[img]} />
      </Grid>
      <Grid item xs={5}>
        <Typography className={classes.title}>{title}</Typography>
        <span className={classes.subTitle} variant="string">
          {subTitle}
        </span>
      </Grid>
      <Grid
        item
        xs={5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NextIcon className={classes.next} />
      </Grid>
    </Grid>
  );
}
