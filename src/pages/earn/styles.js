import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  title: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  context: {
    width: "100%",
    // height: 745,
    borderRadius: 33,
    background: "linear-gradient(160.71deg, #EFF0FB 9.07%, #E1DEF1 92.22%)",
    border: "1px solid #FFFFFF",
    boxShadow: "9px 17px 37px 0px #00000021 -9px -13px 37px 0px #FFFFFFCC",
    boxSizing: "border-box",
    padding: 30,
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
  subtitle: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: 600,
  },
  amount_period: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20,
    "@media (max-width:600px)": {
      flexDirection: "column",
    },
  },
  subtext: {
    marginLeft: 18,
    marginTop: 26,
    marginBottom: 16,
    fontSize: 16,
    letterSpacing: "0.015em",
  },
  amount: {
    backgroundColor: "white",
    width: 270,
    height: 50,
    borderRadius: "13px",
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
  period: {
    width: 250,
    height: 50,
    borderRadius: 13,
    boxShadow:
      "inset -4px -6px 10px rgba(255, 255, 255, 0.6), inset 2px 4px 10px rgba(0, 0, 0, 0.13)",
    background: "white",
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
  button: {
    width: "25%",
    height: 50,
    border: "none",
    borderRadius: 11,
    background: "transparent",
    cursor: "pointer",
    color: "#7887A0",
  },
  activebutton: {
    width: "25%",
    height: 40,
    border: "none",
    borderRadius: 11,
    cursor: "pointer",
    background: "white",
    boxShadow:
      "-2px -4px 4px rgba(255, 255, 255, 0.4), 2px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  interest: {
    width: 237,
    height: 50,
    borderRadius: 12,
    marginRight: 40,
    background: "#E7EDF4",
    boxShadow:
      "-6px -8px 15px rgba(255, 255, 255, 0.7), 4px 6px 15px rgba(0, 0, 0, 0.13)",
    border: "none",
    display: "flex",
    justifyContent: "space-between",
    fontSize: 16,
    alignItems: "center",
    padding: 18,
    "@media (max-width:600px)": {
      width: "100%",
      marginRight: 0,
    },
  },
  confirmbutton: {
    width: "100%",
    height: 50,
    borderRadius: 16,
    boxShadow: "4px 7px 12px rgba(0, 0, 0, 0.1)",
    background: "linear-gradient(96.31deg, #A3D8F5 3.54%, #62B8E8 77.74%)",
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
  disabledbutton: {
    width: "100%",
    height: 50,
    borderRadius: 16,
    boxShadow: "4px 7px 12px rgba(0, 0, 0, 0.1)",
    background: "grey",
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
  buttonProgress: {
    color: "#7887A0",
    position: "absolute",
    top: 30,
    right: 30,
    "@media (max-width:600px)": {
      top: 10,
      right: 10,
    },
  },
}));
