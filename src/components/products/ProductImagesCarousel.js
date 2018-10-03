import React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import classnames from 'classnames';

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '100%',
    transform: 'rotate(90deg)',
  },
  prev: {

  },
  next: {
    right: 0,
    borderRadius: '3px 0 0 3px'
  },
  style: {
    maxHeight: 100,
    transform: 'rotate(90deg) translate(0, -100%)',
    transformOrigin: 'top left',
    position: 'relative',
    marginRight: '5px',
  },
  arrows: {
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    width: 'auto',
    padding: '5px',
    fontWeight: 'bold',
    fontSize: '30px',
    color: 'rgb(59, 59, 63)',
    transition: '0.6s ease',
    borderRadius: '0 3px 3px 0',
    marginTop: '-22px'
  },
  carousel: {
    position: 'relative'
  },
  images: {
    marginTop: 30,
    transform: 'translate(20%, 0)',
    left: '50%',
    textAlign: 'center',
    height: '100%',
    width: '80%',
    boxSizing: 'border-box'
  }
});

const ProductImagesCarousel = (props) => {
  const { classes } = props;

  const imageList = [
    '/images/ctci-front.jpg',
    '/images/ctci-back.jpg'
  ];

  const imageRow = imageList.map(image => {
    return (
      <img src={image} className={classes.style}/>
    )
  });

  return (
    <div>
        <CardMedia
          className={classes.media}
          // image={product.images[0]}
          image='/images/ctci-front.jpg'
          // title={product.product}
          title='ctci'
        />

        <div className={classes.carousel}>
          <a className={classnames(classes.arrows, classes.prev)}>&#10094;</a>
          <div className={classes.images}>
            {imageRow}
          </div>
          <a className={classnames(classes.arrows, classes.next)} >&#10095;</a>
        </div>
    </div>
  )
};

export default withStyles(styles)(ProductImagesCarousel)