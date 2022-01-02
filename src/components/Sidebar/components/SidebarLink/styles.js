import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  externalLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    borderRadius: "14px",
    height: 50,
    width: 180,
    marginLeft: 35,
    marginTop: 40,
    padding: "13px, 45px, 13px, 45px",
    boxShadow: "4px 6px 15px 0px #00000021",
    fontSize: 16,
    fontWeight: "600",
    "@media (max-width:600px)": {
      marginTop: 20,
    },
  },
  activeLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    borderRadius: "14px",
    height: 50,
    width: 180,
    marginLeft: 35,
    marginTop: 40,
    boxShadow: "2px 4px 10px 0px #00000021 inset",
    fontSize: 16,
    fontWeight: "600",
    color: "#63B8E8",
    "@media (max-width:600px)": {
      marginTop: 20,
    },
  },
}));
