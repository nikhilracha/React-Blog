import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const News = () => {
    const classes = useStyles();
    const [articles, setArticles] = React.useState([]);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [isError, setError] = React.useState("");


    const Element = (data) => {
        return (
            <Card variant="outlined" className={classes.cd}>
                <CardContent>
                    <Typography variant="body2" className={classes.title} color="textSecondary" gutterBottom>
                        {data.data.title}
                    </Typography>
                    <Typography variant="caption" display="block" className={classes.title} color="textSecondary" gutterBottom>
                        Author: {data.data.author}
                    </Typography>
                </CardContent>
            </Card>
        )
    }

    const getNews = () => {
        fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=a3d42a1bc6734edea0e1d5c5146d8681')
            .then(res => res.json())
            .then(json => {
                // setState(json);
                setError(json.status);
                setArticles(json.articles);
                setIsLoaded(true);
            });
    }

    React.useEffect(() => {
        getNews();
        setInterval(() => {
            getNews();
        }, 5000)
    }, [])



    return (
        <>
            <div className={classes.outer}>
                <Paper className={classes.pap} variant="outlined">
                    <Button
                        variant="contained"
                        size="large"
                    // startIcon={<HomeIcon />}
                    >
                        News from Google News 📰
                    </Button>
                    <Divider />
                    <div className={classes.inner}>
                        <GridList cellHeight={150} className={classes.gridList} cols={1}>
                            {isLoaded
                                ?
                                isError == "ok"
                                    ?
                                    articles.map((u, i) => (
                                        <GridListTile key={u.title} cols={1}>
                                            <Element data={u} />
                                        </GridListTile>
                                    ))
                                    :
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Error with network API
                                </Typography>
                                :
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Loading
                        </Typography>
                            }
                        </GridList>
                    </div>
                </Paper>
            </div>
        </>
    );

}

const useStyles = makeStyles({
    inner: {
        margin: 10,
    },
    pap: {
        // backgroundColor: '#d9d9d9'
    },
    cd: {
        height: 130,
        // display: 'flex',
        // flexWrap: 'wrap',
        // justifyContent: 'space-around',
        // overflow: 'hidden',
        //backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 320,
        height: 350,
    },
});




export default News;