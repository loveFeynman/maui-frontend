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
  tap: {
    WebkitTextFillColor: "#1652F0",
    fontSize: 16,
    fontWeight: 600,
    width: 100,
  },
}));
