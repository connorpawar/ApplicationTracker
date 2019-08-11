import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import NewProspectField from './NewProspectField';
import MyAppBar from './AppBar';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        margin: 30,
    },
    buttonStyle: {
        float: 'right',
        margin: 30,
    }
});
export default function NewEntry() {
    const classes = useStyles();
    return (
        <div>
            <MyAppBar />
            <Card className={classes.card}>
                <CardContent>
                    <NewProspectField />
                    <Button variant="contained" color="primary" className={classes.buttonStyle}>
                        Add Application Info
                     </Button>
                </CardContent>
            </Card>
        </div>
    );
}
