import spinner from "../../images/spinner.gif";
import useStyles from "./styles";
export default function Loading({ text }) {
  console.log("loading", text);
  var classes = useStyles();
  return (
    <div className={classes.loadingWrapper}>
      <img src={spinner} alt="Loading" className={classes.buttonProgress} />
      <div className={classes.loadingText}>{text}</div>
    </div>
  );
}
