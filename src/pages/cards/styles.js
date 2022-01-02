import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  title: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
    width: "100%",
  },
  context: {
    height: "100%",
    width: "auto",
    borderRadius: 33,
    background: "linear-gradient(160.71deg, #EFF0FB 9.07%, #E1DEF1 92.22%)",
    border: "1px solid #FFFFFF",
    boxShadow: "9px 17px 37px 0px #00000021 -9px -13px 37px 0px #FFFFFFCC",
    boxSizing: "border-box",
    padding: 10,
    display: "flex",
    flexDirection: "column",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: 600,
    marginLeft: 30,
  },
  cardpart: {
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width:600px)": {
      flexDirection: "column",
    },
  },
  cardtitle: {
    fontSize: 24,
    fontWeight: 600,
    background:
      "-webkit-linear-gradient(95.02deg, #39C6D9 24.33%, #B84ADE 52.44%, #DE1F4D 72.95%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    width: "fit-content",
    height: "fit-content",
    marginBottom: 20,
    marginLeft: 20,
  },
  cardtext: {
    fontSize: 16,
    width: 278,
    height: 180,
    marginLeft: 20,
    "@media (max-width:600px)": {
      width: "100%",
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
    marginTop: 20,
    fontWeight: "bold",
    color: "white",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    padding: 10,
    marginTop: 30,
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
}));
