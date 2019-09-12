import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function OptionsCompleted(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleInterview() {
    fetch('http://localhost:8000/moveToInterviewing/' + props.app_id, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    }})
    .then(response => response.json())
    .then(JSONresponse => JSONresponse)
    .catch(error => console.log(error));

    props.remover(props.company);

    setAnchorEl(null);
  }

  function handleDenied() {
    fetch('http://localhost:8000/moveToDenied/' + props.app_id, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    }})
    .then(response => response.json())
    .then(JSONresponse => JSONresponse)
    .catch(error => console.log(error));

    props.remover(props.company);

    setAnchorEl(null);
  }

  function handleDelete() {
    fetch('http://localhost:8000/deleteApplication/' + props.app_id, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    }})
    .then(response => response.json())
    .then(JSONresponse => JSONresponse)
    .catch(error => console.log(error));

    props.remover(props.company);

    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleInterview}>Interview</MenuItem>
        <MenuItem onClick={handleClose}>Denied</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </div>
  );
}
