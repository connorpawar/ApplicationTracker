import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyAppBar from './AppBar';
import ControlledExpansionPanels from './ControlledExpansionPanels';
import FlowGraph from './charts/FlowGraph';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20 + 'px'
    },
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default function ViewEntries() {

    const classes = useStyles();

    return (
        <div>
            <MyAppBar />
            <ControlledExpansionPanels />
            <Card className={classes.card}>
                <CardContent className={classes.root}>
                    <FlowGraph/>
                </CardContent>
            </Card>
        </div>
    );
}
