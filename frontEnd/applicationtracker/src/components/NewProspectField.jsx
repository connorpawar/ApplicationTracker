import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
  buttonStyle: {
    float: 'right',
    margin: 30,
}
}));

export default function NewProspectField() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    user_id: 1,
    current_tab: 0,
    prev_tab: 0,
    company: '',
    position: '',
    description: '',
    link: '',
    salary: 0
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  // this.company = application.company;
  // this.position = application.position;
  // this.description = application.description;
  // this.salary = application.salary;
  // this.link = application.link;
  // this.current_tab = application.current_tab;
  // this.prev_tab = application.prev_tab;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    fetch('http://localhost:8000/createApplication', {
                method: 'POST',
                headers:{
                  'Content-Type': 'application/json'
                },
                body:JSON.stringify(values)
            }).then((res) => res.json())
            .then((data) =>  console.log(data))
            .catch((err)=>console.log(err))

    setValues({
              user_id: 1,
              current_tab: 0,
              prev_tab: 0,
              company: '',
              position: '',
              description: '',
              link: '',
              salary: 0
    });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        required
        id="company"
        label="Company"
        onChange={handleChange('company')}
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        required
        id="position"
        label="Position"
        onChange={handleChange('position')}
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="link"
        label="Link"
        onChange={handleChange('link')}
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
      <TextField
        id="outlined-full-width"
        label="Job description"
        onChange={handleChange('description')}
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="contained" color="primary" type="submit" className={classes.buttonStyle}>
        Add Application Info
      </Button>
    </form>
  );
}
