import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useStyles from "./styles";
export default function ConfirmButton(props) {
  const { buttonClass, text, disabled, title } = props;
  const [open, setOpen] = React.useState(false);
  var classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSuccess = () => {
    setOpen(false);
    props.onClick();
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        className={buttonClass}
        disabled={disabled}
      >
        {title}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <div className={classes.root}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>{text}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={handleSuccess} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
