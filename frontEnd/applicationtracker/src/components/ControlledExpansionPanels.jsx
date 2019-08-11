import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SimpleTable from './SimpleTable';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20 + 'px'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Potential Positions</Typography>
          <Typography className={classes.secondaryHeading}>Still More To Research</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SimpleTable version="Potential"/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Applications In Progress</Typography>
          <Typography className={classes.secondaryHeading}>
            Putting On Some Finishing Touches
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SimpleTable version="Progress"/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Completed Applications</Typography>
          <Typography className={classes.secondaryHeading}>
            Waiting For A Reply
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SimpleTable version="Completed"/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>In Interview Process</Typography>
          <Typography className={classes.secondaryHeading}>
            Hope For The Best
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SimpleTable version="Interview"/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Denied</Typography>
          <Typography className={classes.secondaryHeading}>
            Their Loss
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SimpleTable version="Offered"/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Offered</Typography>
          <Typography className={classes.secondaryHeading}>
            Decisions To Make
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SimpleTable version="Offered"/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
