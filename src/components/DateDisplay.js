import React, { memo } from "react";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";

const DateDisplay = ({ day, month, year }) => (
  <Paper className="container">
    <List>
      <ListItem>
        <ListItemText>Day: {day}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Month: {month}</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Year: {year}</ListItemText>
      </ListItem>
    </List>
  </Paper>
);

DateDisplay.propTypes = {
  apiResponse: PropTypes.string,
};

export default memo(DateDisplay);
