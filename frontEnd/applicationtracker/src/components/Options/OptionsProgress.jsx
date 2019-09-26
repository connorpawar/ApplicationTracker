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

export default function OptionsProgress(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleCompleted() {
    fetch('http://connorpawar.com:8000/moveToCompleted/' + props.app_id, {
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
    fetch('http://connorpawar.com:8000/deleteApplication/' + props.app_id, {
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

  function handleClose() {
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
        <MenuItem onClick={handleCompleted}>Completed</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </div>
  );
}
