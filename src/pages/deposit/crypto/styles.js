import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  boxtitle: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: 600,
  },
  CHROME_EXTENSION: {
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
  connectButton: {
    width: 300,
    height: 50,
    borderRadius: 12,
    background: "rgb(244, 244, 245)",
    marginTop: 20,
    textAlign: "center",
  },
  popupBody: {
    width: 384,
    height: 100,
    borderRadius: 16,
    background: "white",
    textAlign: "center",
  },
  paper: {
    position: "absolute",
    width: "fit-content",
    backgroundColor: "#EDEDF9",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    "@media (max-width:800px)": {
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
  confirmbutton: {
    margin: 10,
    width: "30%",
    height: 50,
    borderRadius: 16,
    boxShadow: "4px 7px 12px rgba(0, 0, 0, 0.1)",
    background: "linear-gradient(96.31deg, #A3D8F5 3.54%, #62B8E8 77.74%)",
    "@media (max-width:600px)": {
      width: "100%",
    },
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
  tabBody: {
    backgroundColor:
      "linear-gradient(160.71deg, #EFF0FB 9.07%, #E1DEF1 92.22%)",
    borderRadius: "10px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    boxShadow:
      "-9px -13px 37px rgba(255, 255, 255, 0.8), 9px 17px 37px rgba(0, 0, 0, 0.13)",
    border: "1px solid #FFFFFF",
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    "@media (max-width:600px)": {},
  },
}));
