import React from 'react';
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
    products: [
      {
        id: 1,
        product: 'Cracking the Coding Interview',
        price: '$50',
        desc: 'A must have for coding interview preparation.',
        images: [
          '/images/ctci-front.jpg'
        ]
      }
    ]
  };

  render() {
    const { classes } = this.props;
    const { products } = this.state;

    const productList = products.map(product => (
      <Grid key={product.id} item>
        <Product product={product}/>
      </Grid>
    ))

    return (
      <Grid container className={classes.products} justify="center" spacing={16}>
        {productList}
      </Grid>
    );
  }
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductList);