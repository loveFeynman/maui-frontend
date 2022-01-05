import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  tabBody: {
    backgroundColor:
      "linear-gradient(160.71deg, #EFF0FB 9.07%, #E1DEF1 92.22%)",
    borderRadius: "10px",
    padding: "20px",
    display: "flex",

    boxShadow:
      "-9px -13px 37px rgba(255, 255, 255, 0.8), 9px 17px 37px rgba(0, 0, 0, 0.13)",
    border: "1px solid #FFFFFF",
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    "@media (max-width:600px)": {
      flexDirection: "column",
    },
  },
  boxtitle: {
    marginTop: "40px",
    marginLeft: "14px",
    marginBottom: "16px",
    fontSize: "16px",
    letter: "1.5%",
  },
  select: {
    backgroundColor: "white",
    width: 384,
    height: 50,
    borderRadius: "13px",
    padding: 20,
    "&:before": {
      borderBottom: "none",
    },
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
  checkbox: {
    fontSize: "18px",
    marginTop: 23,
  },
  pricetext: {
    fontSize: 14,
    marginLeft: 10,
    marginTop: 12,
  },
  transfer: {
    backgroundColor: "white",
    width: 384,
    height: 72,
    borderRadius: "13px",
    padding: 20,
    "&:before": {
      borderBottom: "none",
    },
    "@media (max-width:600px)": {
      width: "100%",
    },
    display: "flex",
    justifyContent: "space-between",
  },
  confirmbutton: {
    "@media (max-width:600px)": {
      width: "100%",
    },
    width: 384,
    height: 50,
    marginTop: "20px",
    borderRadius: 16,
    boxShadow: "4px 7px 12px rgba(0, 0, 0, 0.1)",
    background: "linear-gradient(96.31deg, #A3D8F5 3.54%, #62B8E8 77.74%)",
  },
  disabledbutton: {
    "@media (max-width:600px)": {
      width: "100%",
    },
    height: 50,
    width: 384,
    marginTop: "20px",
    borderRadius: 16,
    boxShadow: "4px 7px 12px rgba(0, 0, 0, 0.1)",
    background: "grey",
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
  firstpart: {
    width: 440,
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
  secondpart: {
    width: 217,
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
}));
