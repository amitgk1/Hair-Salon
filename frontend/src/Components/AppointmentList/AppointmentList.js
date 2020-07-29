import React from "react";
import { List, ListSubheader } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppointmentListItem from "./AppointmentListItem/AppointmentListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const AppointmentList = ({ appointments }) => {
  const classes = useStyles();
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          My Appointments
        </ListSubheader>
      }
      className={classes.root}
    >
      {appointments.map((appointment, index) => (
        <AppointmentListItem key={index} {...appointment} />
      ))}
    </List>
  );
};

export default AppointmentList;
