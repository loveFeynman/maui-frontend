import spinner from "../../images/spinner.gif";
import useStyles from "./styles";
export default function Loading() {
  var classes = useStyles();
  return (
    <div className={classes.loadingWrapper}>
      {/* <CircularProgress size={72} className={classes.buttonProgress} /> */}
      <img src={spinner} alt="Loading" className={classes.buttonProgress} />
    </div>
  );
}
