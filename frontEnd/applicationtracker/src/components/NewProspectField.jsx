import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DateChoice from './DateChoice'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function NewProspectField() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    Company: '',
    salary: '70000',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        required
        id="company"
        label="Company"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        required
        id="position"
        label="Position"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        required
        id="link"
        label="Link"
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-number"
        label="Salary Offered"
        value={values.salary}
        onChange={handleChange('salary')}
        type="number"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        variant="outlined"
      />
      <DateChoice className={classes} />
      <TextField
        id="outlined-full-width"
        label="Job description"
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
