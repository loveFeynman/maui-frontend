import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    width: `100vw`,
    // height: 90,
    backgroundColor: "#EDEDF9",
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: "0.015em",
  },
  maui: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 30,
    alignItems: "center",
  },
  deposit: {
    width: "100%",
    height: 171,
    borderRadius: 19,
    background: "#00000099",
    border: "1px solid",
    borderImageSource:
      "linear-gradient(132.43deg, #FFFFFF 22.02%, #000000 52.32%, #FFFFFF 83.9%)",
    padding: "18px 24px 24px 24px",
    marginTop: 23,
  },
  balance: {
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    fontSize: 16,
  },
  depositbutton: {
    width: "100%",
    height: 50,
    borderRadius: 16,
    background: "linear-gradient(96.31deg, #A3D8F5 3.54%, #62B8E8 77.74%)",
    marginTop: 15,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
}));
