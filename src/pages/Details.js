import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    cardMedia: {
        height: 450
    },
    ud: {
        textDecoration: 'underline'
    }
});


const Details = (props) => {
    const classes = useStyles();
    console.log("in details", props.history.location.post);
    const post = props.history.location.post;
    return (
        <>
            {post ?
                <div>
                    <Grid container>
                        <Card>
                            <div >
                                <Grid item xs={12}>
                                    <CardMedia className={classes.cardMedia} image={post.image} />
                                </Grid>
                                <CardContent>
                                    <Typography component="h2" variant="h5">
                                        {post.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {post.date}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        Author: {post.author}
                                    </Typography>
                                    <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                                        Source : <a style={{ color: 'grey' }} target="_blank" href={post.source}>{post.source}</a>
                                    </Typography>
                                    <Typography className={classes.ud} align='justify' variant="subtitle2" paragraph>
                                        Summary: {post.summary}
                                    </Typography>
                                    <Typography align='justify' variant="subtitle1" paragraph>
                                        {post.description}
                                    </Typography>
                                </CardContent>
                            </div>


                        </Card>
                    </Grid>
                </div>
                :
                <Typography variant="subtitle1" paragraph>
                    Some thing is wrong please head back to Home
                </Typography>
            }

        </>
    );

}




export default Details;
