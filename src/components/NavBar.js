import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const NavBar = (props) => {

  const style = {
    // background: 'transparent',
    // boxShadow: 'none',
    fontFamily: 'Roboto',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingRight: '0',
    width: '100%',
    boxSizing: 'border-box',
  };

  return (
    <Fragment>
      <AppBar style={style} position="fixed">
        <Toolbar>
          <Typography variant="title" style={{color: 'white'}}>
            {props.name}
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  )
};

export default NavBar;