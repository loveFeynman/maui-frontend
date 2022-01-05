import { makeStyles } from "@material-ui/styles";

const drawerWidth = 246;

export default makeStyles((theme) => ({
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    backgroundColor: "#EDEDF9",
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: "#EDEDF9",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    border: "none",
    position: "relative",
    paddingRight: 20,
    zIndex: "10",
    "@media (max-width:600px)": {
      width: "100vw",
      height: 490,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  drawerClose: {
    display: "none",
  },
  toolbar: {
    ...theme.mixins.toolbar,
    fontSize: 30,
    display: "flex",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EDEDF9",
    "@media (max-width:600px)": {
      marginLeft: 40,
      justifyContent: "flex-start",
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: "#EDEDF9",
  },
  sidebarList: {
    backgroundColor: "#EDEDF9",
  },
  mobileBackButton: {
    marginTop: 30,
    backgroundColor: "#EDEDF9",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    display: "flex",
    flexDirection: "column",
  },
}));
