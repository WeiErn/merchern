import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = () => {

  const style = {
    fontFamily: 'Roboto',
    backgroundColor: 'rgba(255,255,255,1)',
    boxShadow: 'none'
  };

  return (
    <Fragment>
      <AppBar style={style} position="fixed">
        <Toolbar>
          <Typography variant="title" style={{color: 'black'}}>
            Merchandise
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  )
};

export default NavBar;