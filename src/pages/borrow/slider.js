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
  slider: {
    width: 228,
    height: 300,
    background: "#EBEBF8",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
    boxShadow:
      "-9px -13px 37px rgba(255, 255, 255, 0.8), 9px 17px 37px rgba(0, 0, 0, 0.13)",
    "@media (max-width:600px)": {
      alignSelf: "center",
      width: "100%",
    },
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
  // const { title, value } = props;
  const [collateral, setcollateral] = React.useState(50);
  const [borrowed, setborrowed] = React.useState(50);
  const [apy, setapy] = React.useState(50);
  React.useEffect(() => {
    props.onChange(collateral, borrowed, apy);
  }, [collateral, borrowed, apy]);
  return (
    <div>
      <div className={classes.slider}>
        <div className={classes.root}>
          <div className={classes.header}>
            <div className={classes.title}>Collateral</div>
            <div className={classes.rounded}>{collateral * 1000}</div>
          </div>
          <PrettoSlider
            value={collateral}
            onChange={(e, value) => {
              setcollateral(value);
              if (value < borrowed) setborrowed(value);
            }}
          />
        </div>
        <div className={classes.root}>
          <div className={classes.header}>
            <div className={classes.title}>Borrowed</div>
            <div className={classes.rounded}>{borrowed * 500}</div>
          </div>
          <PrettoSlider
            value={borrowed}
            onChange={(e, value) => {
              if (value <= collateral) setborrowed(value);
            }}
          />
        </div>
        <div className={classes.root}>
          <div className={classes.header}>
            <div className={classes.title}>APY</div>
            <div className={classes.rounded}>{apy / 2}%</div>
          </div>
          <PrettoSlider
            value={apy}
            onChange={(e, value) => {
              setapy(value);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default CustomSlider;
