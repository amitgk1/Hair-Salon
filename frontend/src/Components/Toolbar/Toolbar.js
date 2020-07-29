import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from "../../hair-salon-logo.png";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const CustomToolbar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button
            className={classes.menuButton}
            onClick={() => props.history.push("/")}
          >
            <img src={logo} alt="logo" width={50} />
          </Button>
          <Typography variant="h6" className={classes.title}>
            Amit's Hair Salon
          </Typography>
          <Button color="inherit" onClick={() => props.history.push("/book")}>
            Book an appointments
          </Button>
          <Button
            color="inherit"
            onClick={() => props.history.push("/myappointments")}
          >
            My appointments
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(CustomToolbar);
