import React from "react";
import footer from "../../images/footer.png";
// styles
import useStyles from "./styles";

export default function Footer(props) {
  var classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={footer} alt="footer" style={{ width: 161, heigth: 129 }} />
    </div>
  );
}
