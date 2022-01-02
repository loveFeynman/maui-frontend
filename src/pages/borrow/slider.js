import Slider from "@material-ui/core/Slider";
import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 195,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 16,
  },
  rounded: {
    background: "#EBEBF8",
    width: 73,
    height: 26,
    borderRadius: 8,
    boxShadow:
      "inset -4px -6px 10px rgba(255, 255, 255, 0.6), inset 2px 4px 10px rgba(0, 0, 0, 0.13)",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: "#63B8E8",
    height: 8,
  },
  thumb: {
    height: 18,
    width: 18,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
    background: "#BBBBBB",
  },
})(Slider);

const CustomSlider = (props) => {
  const classes = useStyles();
  const { title, value } = props;
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.title}>{title}</div>
        <div className={classes.rounded}>{value}</div>
      </div>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={20}
      />
    </div>
  );
};
export default CustomSlider;
