import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Product from './Product';

const styles = () => ({
  products: {
    margin: 20
  }
});

class ProductList extends React.Component {
  state = {
    spacing: '16',
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.products} justify="center" spacing={Number(spacing)}>
        {[0, 1, 2].map(value => (
          <Grid key={value} item>
            <Product/>
          </Grid>
        ))}
      </Grid>
    );
  }
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductList);