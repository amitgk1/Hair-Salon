import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  ExpandLess,
  ExpandMore,
  Palette,
  Straighten,
  Person,
  CalendarToday,
} from "@material-ui/icons";
import haircutIcon from "../../../Images/Haircut-icon.png";

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "capitalize",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const icons = {
  "haircut appointment": (
    <img src={haircutIcon} width={30} alt="haircut icon" />
  ),
  "hair color appointment": <Palette />,
  "hair straightening appointment": <Straighten />,
};

const AppointmentListItem = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>{icons[props.title]}</ListItemIcon>
        <ListItemText primary={props.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {["startDate", "endDate", "name"].map((prop, index) => (
            <ListItem key={index} button className={classes.nested}>
              <ListItemIcon>
                {prop.includes("Date") ? <CalendarToday /> : <Person />}
              </ListItemIcon>
              <ListItemText primary={`${prop}: ${props[prop]}`} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </div>
  );
};

export default AppointmentListItem;
