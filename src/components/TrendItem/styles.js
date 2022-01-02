import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
  container: {
    width: 338,
    height: 74,
    display: "flex",
    // height: 'max-content',
    boxShadow:
      "-6px -8px 15px rgba(255, 255, 255, 0.7), 4px 6px 15px rgba(0, 0, 0, 0.13)",
    // boxShadow: '0px 3px 11px 0px #e8eafc, 0 3px 3px -2px #b2b2b21a, 0 1px 8px 0 #9a9a9a1a',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    background: "linear-gradient(160.71deg, #EFF0FB 9.07%, #E1DEF1 92.22%)",
    border: "1px solid #FFFFFF99",
    marginBottom: 22,
  },
  avatar: {
    marginLeft: 17,
    width: 45,
    height: 45,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: "black",
  },
  title: {
    color: "black",
  },
  subTitle: {
    color: "grey",
    fontSize: 10,
  },
  trendingRate: {
    color: "rgb(66,210,78)",
  },
  next: {
    cursor: "pointer",
  },
}));
