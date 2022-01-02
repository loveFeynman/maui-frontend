import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
  root: {
    width: 391,
    height: 934,
    "@media (max-width:600)": {
      width: "100vw",
    },
  },
  mainChartSelectRoot: {
    height: 36,
    width: 90, ////////////112
  },
  mainChartSelect: {
    padding: 0,
    paddingLeft: 10,
    fontSize: 14,
  },
  title: {
    marginLeft: 40,
    marginRight: 27,
    marginBottom: 28,
    marginTop: 20,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  subtitle: {
    marginLeft: 40,
    marginRight: 27,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  watchLists: {
    marginTop: 25,
    textAlign: "-webkit-center",
  },
}));
