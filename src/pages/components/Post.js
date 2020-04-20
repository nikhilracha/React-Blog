import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { Link } from "react-router-dom";


const useStyles = makeStyles({
    heading: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    card: {
        display: 'flex',
        width: 500
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },

});

const Post = (props) => {
    const classes = useStyles();
    const { post } = props;

    return (
        <Grid item xs={12} md={6}>
            <Card className={classes.card}>
                <div className={classes.cardDetails}>
                    <CardContent>
                        <Typography className={classes.heading} component="h6" variant="h6">
                            {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {post.date}
                        </Typography>
                        <div className={classes.summary}>
                            <Typography align='justify' variant="subtitle2" paragraph>
                                {post.summary}
                            </Typography>
                        </div>
                        <Link to={{
                            pathname: "/details",
                            post: post
                        }}>
                            <Typography variant="subtitle1" color="primary">
                                Continue reading...
                            </Typography>
                        </Link>
                    </CardContent>
                </div>
                <Hidden xsDown>
                    <CardMedia className={classes.cardMedia} image={post.image} />
                </Hidden>
            </Card>
        </Grid>
    );
}

export default Post;

Post.propTypes = {
    post: PropTypes.object,
};