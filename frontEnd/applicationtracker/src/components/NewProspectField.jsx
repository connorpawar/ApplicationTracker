import React from 'react';
import { Redirect } from 'react-router';
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

  const [toView, setToView] = React.useState(false);

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

  const handleSubmit = (evt) => {

    fetch('https://connorpawar.com/createApplication', {
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

    setToView(true);
  };

  return (
    <form className={classes.container} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        required
        id="company"
        label="Company"
        value={values.company}
        onChange={handleChange('company')}
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        required
        id="position"
        label="Position"
        value={values.position}
        onChange={handleChange('position')}
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="link"
        label="Link"
        value={values.link}
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
      {toView ? <Redirect to={'/ViewEntries'}/> : null}
    </form>
  );
}
