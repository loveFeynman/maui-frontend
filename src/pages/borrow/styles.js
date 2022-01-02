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
  tabbar: {
    display: "flex",
    maxWidth: "fit-content",
    borderRadius: "12px 12px 0px 0px",
    background: "#EDEDF9",
    // width: 201,
    height: 47,
    padding: "0px !important",
    border: "1px solid #EDEDF9",
    boxShadow: "-4px -2px 10px 0px #FFFFFF99",
  },
  tabBody: {
    backgroundColor:
      "linear-gradient(160.71deg, #EFF0FB 9.07%, #E1DEF1 92.22%)",
    borderRadius: "10px",
    padding: "30px",

    boxShadow:
      "-9px -13px 37px rgba(255, 255, 255, 0.8), 9px 17px 37px rgba(0, 0, 0, 0.13)",
    border: "1px solid #FFFFFF",
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
  },
  tap: {
    WebkitTextFillColor: "#1652F0",
    fontSize: 16,
    fontWeight: 600,
    width: 100,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: 600,
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
    width: "120%",
    height: 50,
    borderRadius: "13px",
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
  smallblock: {
    width: "30%",
    height: 140,
    borderRadius: 14,
    background: "#EBEBF8",
    boxShadow:
      "-9px -13px 37px rgba(255, 255, 255, 0.8), 9px 17px 37px rgba(0, 0, 0, 0.13)",
    alignSelf: "flex-end",
    padding: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    fontSize: 16,
    "@media (max-width:600px)": {
      alignSelf: "center",
      marginTop: 20,
      width: "100%",
    },
  },
  duration: {
    display: "flex",
    justifyContent: "space-between",
  },
  chartblock: {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px 0px 0px 0",
    "@media (max-width:600px)": {
      flexDirection: "column",
    },
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
  chart: {
    width: 399,
    height: 300,
    borderRadius: 18,
    background: "#EBEBF8",
    boxShadow:
      "-9px -13px 37px rgba(255, 255, 255, 0.8), 9px 17px 37px rgba(0, 0, 0, 0.13)",
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width:600px)": {
      flexDirection: "column",
    },
  },
  firstpart: {
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width:600px)": {
      flexDirection: "column",
    },
  },
  confirmbutton: {
    width: "120%",
    height: 50,
    borderRadius: 16,
    boxShadow: "4px 7px 12px rgba(0, 0, 0, 0.1)",
    background: "linear-gradient(96.31deg, #A3D8F5 3.54%, #62B8E8 77.74%)",
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
}));
