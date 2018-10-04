import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import ProductImagesCarousel from './ProductImagesCarousel';
import LocalOfferTwoToneIcon from '@material-ui/icons/LocalOfferTwoTone';
import StoreMallDirectoryTwoToneIcon from '@material-ui/icons/StoreMallDirectoryTwoTone';
import CategoryTwoToneIcon from '@material-ui/icons/CategoryTwoTone';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    flexGrow: 1,
    justify: 'center'
  },
  overall: {
    position: 'absolute',
    top: '110px',
    margin: '20px'
    // [theme.breakpoints.down('sm')]: {
    //   top: '90px'
    // },
    // [theme.breakpoints.up('md')]: {
    //   top: '90px'
    // }
  },
  media: {
    height: 0,
    // paddingTop: '56.25%', // 16:9
    paddingTop: '100%',
    transform: 'rotate(90deg)',
  },
  title: {
    fontSize: 25,
    marginBottom: '10px'
  },
  subheading: {
    display: 'inline-block',
    width: '80%',
    lineHeight: 2,
    fontSize: 20
  },
  icon: {
    marginRight: '10px',
    marginTop: '8px'
  },
  info: {
    display: 'flex',
    alignContent: 'flex-start'
  }
});

class ProductDetails extends Component {

  render = () => {
    const { classes, product } = this.props;
    console.log(product)
    return (
      <Grid container className={classes.overall} justify="center" spacing={32}>
        <Grid item xs={4}>
          <ProductImagesCarousel images={product.images}/>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="title" component="h1" className={classes.title}>
            {product.product}
          </Typography>
          <div className={classes.info}>
            <LocalOfferTwoToneIcon className={classes.icon}/>
            <Typography variant="subheading" className={classes.subheading}>
              {product.price}
            </Typography>
          </div>
          <div className={classes.info}>
            <StoreMallDirectoryTwoToneIcon className={classes.icon}/>
            <Typography variant="subheading" className={classes.subheading}>
              {product.condition}
            </Typography>
          </div>
          <div className={classes.info}>
            <CategoryTwoToneIcon className={classes.icon}/>
            <Typography variant="subheading" className={classes.subheading}>
              {product.category}
            </Typography>
          </div>
          <hr/>
          <div className={classes.info}>
            <InfoTwoToneIcon className={classes.icon}/>
            <Typography variant="body1" className={classes.subheading}>
              {product.desc}
            </Typography>
          </div>
        </Grid>
      </Grid>
    )
  }
};

const mapStateToProps = (state, props) => {
  let product;
  if (props.location.state) {
    product = props.location.state
  } else {
    product = state.products.find(product => product.id === props.match.params.id)
  }
  return { product }
};

export default withStyles(styles)(connect(mapStateToProps)(ProductDetails))