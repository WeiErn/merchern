import React, { Component, Fragment } from 'react'
import Filter from './Filter'
import ProductList from './ProductList'
import Grid from '@material-ui/core/Grid';

const styles = {
  flexGrow: 1,
  padding: 20,
  top: 60,
  position: 'absolute'
};

class Content extends Component {

  render() {
    return (
      <Grid container style={styles}>
        <Filter/>
        <ProductList/>
      </Grid>
    )
  }
}

export default Content