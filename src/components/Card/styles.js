import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  widgetImg: {
    width: 167,
    height: 139,
  },
  widgetButton: {
    width: 296,
    height: 50,
    borderRadius: 16,
    background: "linear-gradient(96.31deg, #A3D8F5 3.54%, #62B8E8 77.74%)",
    boxShadow: "4px 7px 12px rgba(0, 0, 0, 0.1)",
    color: "white",
    fontSize: 16,
    fontWeight: 600,
  },
  card: {
    height: 355,
    width: 344,
    position: "relative",
    borderRadius: 26,
    padding: 24,
    background: "linear-gradient(160.71deg, #EFF0FB 9.07%, #E1DEF1 92.22%)",
    boxShadow: "-9px -13px 37px 0px #FFFFFFCC",
    border: "1px solid #FFFFFF66",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    margin: 20,
  },
  cardtitle: {
    fontSize: 24,
    height: "fit-content",
    textAlign: "center",
    fontWeight: 600,
    background:
      "-webkit-linear-gradient(95.02deg, #39C6D9 24.33%, #B84ADE 52.44%, #DE1F4D 72.95%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  cardtext: {
    display: "flex",
    // flexDirection: "row",
    justifyContent: "space-between",
  },
  banner: {
    fontSize: 20,
    color: "red",
    position: "absolute",
    left: 0,
    top: 50,
    background: "black",
    transform: "rotate(-45deg)",
    animation: `$flickerAnimation 2s infinite`,
    borderRadius: 10,
  },
  "@keyframes flickerAnimation": {
    "0%": { opacity: 0.8 },
    "50%": { opacity: 0 },
    "100%": { opacity: 0.8 },
  },
}));
