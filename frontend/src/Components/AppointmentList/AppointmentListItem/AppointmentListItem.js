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
import haircutIcon from "../../../Haircut-icon.png";

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "capitalize",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const AppointmentListItem = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  let icon = null;
  if (props.title.includes("haircut")) {
    icon = <img src={haircutIcon} width={30} alt="haircut icon" />;
  } else if (props.title.includes("color")) {
    icon = <Palette />;
  } else {
    icon = <Straighten />;
  }
  return (
    <div className={classes.root}>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
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
