import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  buttonProgress: {
    color: "black",
    position: "absolute",

    top: "calc(50% - 50px)",
    left: "calc(50% - 50px)",
    height: 100,
    width: 100,
  },
  loadingWrapper: {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    top: 0,
    left: 0,
    zIndex: 1500,
    background: "grey",
    opacity: "0.3",
  },
}));
