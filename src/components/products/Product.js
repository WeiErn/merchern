import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  title: {
    fontSize: 18,
  },
  subheader: {
    fontSize: 18,
    color: 'black',
  },
  media: {
    height: 0,
    // paddingTop: '56.25%', // 16:9
    paddingTop: '100%',
    transform: 'rotate(90deg)',
  },
  actions: {
    display: 'flex',
  },
});

class RecipeReviewCard extends React.Component {

  render() {
    const { classes, product } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          classes={{
            title: classes.title,
            subheader: classes.subheader
          }}
          title={product.product}
          subheader={product.price}
        />
        <CardMedia
          className={classes.media}
          image={product.images[0]}
          title={product.product}
        />
        <CardContent>
          <Typography component="p">
            {product.desc}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);