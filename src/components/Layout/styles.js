import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    width: 1440,
    height: "100%",
    justifyContent: "flex-start",
    backgroundColor: "#EDEDF9",
    margin: "auto",
    "@media (max-width:600px)": {
      width: "100%",
    },
  },

  mainboard: {
    position: "relative",
    width: 1079,
    height: "100%",
    "@media (max-width:600px)": {
      width: "100vw",
      padding: "10px",
      alignItems: "center",
    },
  },
  dashboard: {
    display: "flex",
    justifyContent: "space-around",
    marginLeft: 40,
    "@media (max-width:600px)": {
      flexDirection: "column",
      margin: 0,
      alignItems: "center",
    },
  },
}));
