import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import OptionsPotential from './Options/OptionsPotential';
import OptionsProgress from './Options/OptionsProgress';
import OptionsCompleted from './Options/OptionsCompleted';
import OptionsInterview from './Options/OptionsInterview';
import OptionsOffered from './Options/OptionsOffered';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

export default function SimpleTable(props) {

  var options;

  const [rows, setRows] = useState([
    {   
        company: 'Paycom',
        position: 'Software Developer I',
        salary: 70000,
        description: 'Empty',
        link: 'Empty'
    }]);

  const classes = useStyles();

  useEffect((progress) => {

    if(props.version === 'Potential'){
      fetch('http://localhost:8000/getPotential/1')
      .then(response => response.json())
      .then(JSONresponse => setRows(JSONresponse))
      .catch(error => console.log(error));
    }else if(props.version === 'Progress'){
      fetch('http://localhost:8000/getInProgress/1')
      .then(response => response.json())
      .then(JSONresponse => setRows(JSONresponse))
      .catch(error => console.log(error));
    }else if(props.version === 'Completed'){
      fetch('http://localhost:8000/getCompleted/1')
      .then(response => response.json())
      .then(JSONresponse => setRows(JSONresponse))
      .catch(error => console.log(error));
    }else if(props.version === 'Interview'){
      fetch('http://localhost:8000/getInterviewing/1')
      .then(response => response.json())
      .then(JSONresponse => setRows(JSONresponse))
      .catch(error => console.log(error));
    }else if(props.version === 'Denied'){
      fetch('http://localhost:8000/getDenied/1')
      .then(response => response.json())
      .then(JSONresponse => setRows(JSONresponse))
      .catch(error => console.log(error));
    }else{
      fetch('http://localhost:8000/getOffered/1')
      .then(response => response.json())
      .then(JSONresponse => setRows(JSONresponse))
      .catch(error => console.log(error));
    }
  }, []);

  if(props.version === 'Potential'){
    options = <OptionsPotential/>
  }else if(props.version === 'Progress'){
    options = <OptionsProgress/>
  }else if(props.version === 'Completed'){
    options = <OptionsCompleted/>
  }else if(props.version === 'Interview'){
    options = <OptionsInterview/>
  }else if(props.version === 'Denied'){
    options = <OptionsOffered/>
  }else{
    options = <OptionsOffered/>
  }

  return (
    <div className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Options</TableCell>
            <TableCell align="left">Company</TableCell>
            <TableCell align="left">Position</TableCell>
            <TableCell align="left">Salary</TableCell>
            <TableCell align="left">Job Description</TableCell>
            <TableCell align="left">Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.company}>
            <TableCell component="th" scope="row">
                {options}
            </TableCell>
              <TableCell align="left">{row.company}</TableCell>
              <TableCell align="left">{row.position}</TableCell>
              <TableCell align="left">{row.salary}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left"><a href={row.link}>{row.link}</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
  );
}
