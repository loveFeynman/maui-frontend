import React from "react";

// styles
import useStyles from "./styles";

// components
import { Typography } from "../Wrappers";

export default function PageTitle(props) {
  var classes = useStyles();

  return (
    <div style={props.style} className={classes.pageTitleContainer}>
      <div>
        <Typography
          className={classes.typo}
          variant={props.variant || "h1"}
          size={props.size || "sm"}
        >
          {props.title}
        </Typography>
      </div>
      <div>{props.button && props.button}</div>
    </div>
  );
}
