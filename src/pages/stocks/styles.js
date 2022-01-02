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
  maintable: {
    minWidth: 1079,
    height: "100%",
    width: "100%",
  },
  tablehead: {
    width: "100%",
    borderBottom: "1px solid #D2D2D2",
    display: "flex",
    justifyContent: "flex-start",
    paddingTop: 30,
    padding: "20px",
    fontSize: 12,
    textAlign: "center",
    height: 63,
  },
  mainstock: {
    width: "100%",
    height: "100%",
    borderRadius: 17,
    overflowX: "scroll",
    background: "#EDEDF9",
    boxShadow:
      "-9px -13px 37px rgba(255, 255, 255, 0.8), 9px 17px 37px rgba(0, 0, 0, 0.13)",
    alignItems: "center",
  },
}));
