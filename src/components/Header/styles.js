import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    width: 1194,
    height: 90,
    backgroundColor: "#EDEDF9",
    fontSize: "16px",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width:600px)": {
      width: "100%",
    },
  },
  text: {
    marginLeft: "5%",
    fontSize: 16,
  },
  headerButton: {
    height: 50,
    width: 178,
    borderRadius: 10,
    backgroundImage: "linear-gradient(96.31deg, #A3D8F5 3.54%, #62B8E8 77.74%)",
    position: "relative",
    boxShadow: "4px 7px 12px 0px #0000001A",
    background: "#9E9E9E",
  },
  rightpart: {
    display: "flex",
    justifyContent: "space-around",
    width: 365,
    alignItems: "center",
    marginRight: 20,
  },
  avatarSize: {
    width: 28,
    height: 28,
  },
}));
