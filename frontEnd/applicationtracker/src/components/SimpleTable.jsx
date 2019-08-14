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
        Company: 'Paycom',
        Position: 'Software Developer I',
        Salary: 70000,
        JobDescription: 'Empty',
        Link: 'Empty'
    }]);

  const classes = useStyles();

  useEffect((progress) => {
    fetch('https://crudpi.io/e38853/appTracker')
      .then(response => response.json())
      .then(JSONresponse => setRows(JSONresponse))
      .catch(error => console.log(error));
  }, []);
  
  if(props.version === 'Potential'){
    options = <OptionsPotential/>
  }else if(props.version === 'Progress'){
    options = <OptionsProgress/>
  }else if(props.version === 'Completed'){
    options = <OptionsCompleted/>
  }else if(props.version === 'Interview'){
    options = <OptionsInterview/>
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
            <TableCell align="left">Date Applied</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.Company}>
            <TableCell component="th" scope="row">
                {options}
            </TableCell>
              <TableCell align="left">{row.Company}</TableCell>
              <TableCell align="left">{row.Position}</TableCell>
              <TableCell align="left">{row.Salary}</TableCell>
              <TableCell align="left">{row.JobDescription}</TableCell>
              <TableCell align="left"><a href={row.Link}>{row.Link}</a></TableCell>
              <TableCell align="left">{row.DateApplied}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
  );
}
