import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Dialog, DialogTitle, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  title: { textTransform: "capitalize" },
  description: {
    padding: 20,
  },
});

const Modal = ({ open, onClose, title, description }) => {
  const classes = useStyles();
  return (
    <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title" className={classes.title}>
        {title}
      </DialogTitle>
      <Typography variant="body1" component="p" className={classes.description}>
        {description}
      </Typography>
    </Dialog>
  );
};

export default Modal;
