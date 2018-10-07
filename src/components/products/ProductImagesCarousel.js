import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import classnames from 'classnames';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '100%',
    transform: 'rotate(90deg)',
  },
  next: {
    right: 0,
    borderRadius: '3px 0 0 3px'
  },
  thumbnail: {
    border: '2px solid transparent',
    height: 0,
    paddingTop: '100%',
    transform: 'rotate(90deg)'
  },
  arrows: {
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    width: 'auto',
    padding: '5px',
    fontWeight: 'bold',
    transition: '0.6s ease',
    borderRadius: '0 3px 3px 0',
    marginTop: '-22px'
  },
  carousel: {
    margin: '20px 0',
    position: 'relative',
  },
  images: {
    // textAlign: 'center',
    // boxSizing: 'border-box'
    // left: '-50%',
    // position: 'absolute'
  },
  selected: {
    border: '2px solid rgb(128, 130, 132)',
  },
  hovered: {
    border: '2px solid rgb(170, 173, 175)'
  }
});

class ProductImagesCarousel extends Component {

  state = {
    selectedId: '1',
    hoveredId: null,
  };

  goTo = (number, len) => {
    let resultId = parseFloat(this.state.selectedId) + number;
    let nextId;

    if (resultId > len) {
      nextId = 1
    } else if (resultId === 0) {
      nextId = len
    } else {
      nextId = resultId
    }

    this.setState({
      selectedId: nextId.toString()
    })
  };

  handleClick = e => {
    this.setState({
      selectedId: e.target.id
    });
  };

  handleMouseEnter = e => {
    this.setState({
      hoveredId: e.target.id
    });
  };

  handleMouseLeave = () => {
    this.setState({
      hoveredId: null
    })
  };

  render = () => {
    const {classes, images} = this.props;

    const imageRow = images.map(image => {
      return (
        <Grid item xs={3} style={{margin: '0 10px'}}>
          <CardMedia
            key={image.id}
            id={image.id}
            image={image.url}
            alt={image.alt}
            onClick={this.handleClick}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            className={classnames(classes.thumbnail, {
              [classes.selected]: (this.state.selectedId === image.id),
              [classes.hovered]: (this.state.hoveredId === image.id)
            })} />
        </Grid>
      )
    });

    const selectedImage = images.find(imageObj => {
      return imageObj.id === this.state.selectedId
    });

    const selectedImageUrl = selectedImage['url'];

    return (
      <div>
        <CardMedia
          className={classes.media}
          image={selectedImageUrl}
        />

        <Grid container className={classes.carousel}>
          <Grid item xs={1}>
            <a className={classnames(classes.arrows, classes.prev)}
               onClick={() => {this.goTo(-1, images.length)}}>
              <ArrowBackIosIcon />
            </a>
          </Grid>
          <Grid item xs={10} className={classes.images}>
            <Grid container wrap='nowrap' justify='center'
                  >
            {imageRow}
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <a className={classnames(classes.arrows, classes.next)}
               onClick={() => {this.goTo(1, images.length)}}>
              <ArrowForwardIosIcon />
            </a>
          </Grid>
        </Grid>
      </div>
    )
  }
};

export default withStyles(styles)(ProductImagesCarousel)