import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import ProductCard from './ProductCard';


const styles = () => ({
  products: {
    // margin: 20
  }
});

class ProductList extends React.Component {

  render() {
    const { classes, products } = this.props;

    const productList = products.map(product => (
      <Grid key={product.id} item>
        <ProductCard product={product}/>
      </Grid>
    ));

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

const mapStateToProps = state => {
  return {
    products: state.products
  }
};

export default connect(mapStateToProps)(withStyles(styles)(ProductList));