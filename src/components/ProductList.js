import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Product from './Product';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class ProductList extends React.Component {
  state = {
    spacing: '16',
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <div style={{padding: 20, top: 20}}>
        <Grid container className={classes.root} spacing={24}>
          <Grid item xs={12}>
            <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
              {[0, 1, 2].map(value => (
                <Grid key={value} item>
                  <Product/>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductList);