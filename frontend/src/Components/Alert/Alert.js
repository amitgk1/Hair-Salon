import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  title: {
    textTransform: "capitalize",
  },
}));

const DescriptionAlerts = ({ open, onClose, severity, description }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slide direction="right" in={open} mountOnEnter unmountOnExit>
        <Alert severity={severity} onClose={onClose} variant="filled">
          <AlertTitle className={classes.title}>{severity}</AlertTitle>
          {description}
        </Alert>
      </Slide>
    </div>
  );
};

export default DescriptionAlerts;
