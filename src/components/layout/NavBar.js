import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import { Typography, AppBar, Toolbar } from '@material-ui/core'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
    fontFamily: 'Roboto',
    backgroundColor: 'rgba(255,255,255,1)',
    // position: 'static'
  }
});

const NavBar = (props) => {

  const { classes } = props;

  return (
    <AppBar color="default" className={classes.root}>
      <Toolbar>
        <Typography variant="headline">
          Merchandise
        </Typography>
      </Toolbar>
    </AppBar>
  )
};

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);