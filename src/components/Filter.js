// import React, { Component } from 'react'
// import { MenuItem,
//   Button,
//   Popper,
//   Grow,
//   ClickAwayListener,
//   MenuList,
//   Grid,
//   Paper} from '@material-ui/core'
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
//
// const styles = theme => ({
//
// });
//
// class Filter extends Component {
//   state = {
//     open: false,
//   };
//
//   handleToggle = () => {
//     this.setState(state => ({ open: !state.open }));
//   };
//
//   handleClose = event => {
//     if (this.anchorEl.contains(event.target)) {
//       return;
//     }
//
//     this.setState({ open: false });
//   };
//
//   render() {
//     const { classes } = this.props;
//     const { open } = this.state;
//
//     return (
//       <Grid container justify="flex-end">
//         <Grid item xs={2}>
//           <Button
//             buttonRef={node => {
//               this.anchorEl = node;
//             }}
//             aria-owns={open ? 'menu-list-grow' : null}
//             aria-haspopup="true"
//             onClick={this.handleToggle}
//           >
//             Filter
//           </Button>
//           <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
//             {({ TransitionProps, placement }) => (
//               <Grow
//                 {...TransitionProps}
//                 id="menu-list-grow"
//                 style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
//               >
//                 <Paper>
//                   <ClickAwayListener onClickAway={this.handleClose}>
//                     <MenuList>
//                       <MenuItem onClick={this.handleClose}>Profile</MenuItem>
//                       <MenuItem onClick={this.handleClose}>My account</MenuItem>
//                       <MenuItem onClick={this.handleClose}>Logout</MenuItem>
//                     </MenuList>
//                   </ClickAwayListener>
//                 </Paper>
//               </Grow>
//             )}
//           </Popper>
//         </Grid>
//       </Grid>
//     );
//   }
// }
//
// Filter.propTypes = {
//   classes: PropTypes.object.isRequired
// };
//
// export default withStyles(styles)(Filter);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import { ClickAwayListener, MenuItem, MenuList } from '@material-ui/core'

const styles = theme => ({
  typography: {
    padding: theme.spacing.unit * 2,
  },
});

class Filter extends React.Component {
  state = {
    anchorEl: null,
    open: false,
  };

  handleClick = event => {
    const { currentTarget } = event;
    this.setState(state => ({
      anchorEl: currentTarget,
      open: !state.open,
    }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, open } = this.state;
    const id = open ? 'simple-popper' : null;

    return (
      <Grid container justify="flex-end">
        <Grid item xs={2}>
        <Button
          buttonRef={node => {
            this.anchorEl = node;
          }}
          aria-describedby={id} variant="contained" onClick={this.handleClick}>
          Filter
        </Button>
        <Popper id={id} open={open} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <ClickAwayListener onClickAway={this.handleClose}>
                  <MenuList>
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Fade>
          )}
        </Popper>
        </Grid>
      </Grid>
    );
  }
}

Filter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Filter);