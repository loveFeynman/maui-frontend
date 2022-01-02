import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    width: 400,
    // height: 90,
    backgroundColor: "#EDEDF9",
    fontSize: "16px",
    alignItems: "center",
    // display: "flex",
    // flexDirection: "column",
    justifyContent: "space-between",
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
}));
