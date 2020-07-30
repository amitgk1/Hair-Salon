import React from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    padding: 20,
    marginLeft: "40%",
    marginTop: "10%",
  },
});

const Homepage = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <React.Fragment>
      <Typography variant="h2">
        Aren't you tired of the quarantine hairstyle?
      </Typography>
      <br />
      <Typography variant="h3">get your appointment today!</Typography>
      <Button
        className={classes.btn}
        variant="contained"
        color="primary"
        onClick={() => props.history.push("/book")}
      >
        take me to book an appointment
      </Button>
    </React.Fragment>
  );
};

export default Homepage;
