import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';
import MainFeaturedPost from './components/MainFeaturedPost';
import Post from './components/Post';


const Main = (props) => {

    const mainFeaturedPost = {
        title: 'Welcome Readers to my Blog',
        description:
            "This blog contains all categories of articles for all types of ages. Sometimes it could be a article about politics or sometimes it might be just about a cute dog. But everything begins with you.",
        //image: 'https://source.unsplash.com/random',
        image: 'https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
        imgText: 'main image description',
    };
    const featuredPosts = [
        {
            "title": "Airbnb reports layoffs contractors and cancels summer internships",
            "author": "Megan Rose Dickey",
            "date": "April 17 2020",
            "summary": "Airbnb  has ended its contracts with contingent workers early and postponed summer internships, Protocol reports. Contractors at Airbnb serve as property inspectors, home consultants and more.",
            "description": " Airbnb  will also reportedly delay hiring undergraduate students until next year. TechCrunch has since heard from an incoming intern that he was notified yesterday and that he’s now scrambling to find a new internship. 'I’m devastated about the decision, both because I turned down many competitive offers in favor of Airbnb and because they made the decision so late that it will be incredibly difficult to find new opportunities in such a short time frame,' Ray Iyer, a computer science major at Stanford, told TechCrunch . :I’m relying on social media resources like LinkedIn to directly source opportunities, and this has led to some promising leads. Nonetheless, with the state of the virus and the fact that most internships will have to be remote, very few companies are hiring right now. I am graduating next year, and this summer was an opportunity to get my foot in the door and alleviate the stress of full-time recruiting in these uncertain times. I’m definitely going to put in my best effort to find a suitable replacement opportunity.",
            "image": "https://techcrunch.com/wp-content/uploads/2019/03/GettyImages-974037824.jpg?w=1390&crop=1",
            "source": "https://techcrunch.com/2020/04/17/airbnb-lays-off-contractors-and-cancels-summer-internships/"
        },

        {
            "title": "India mandates approvals on chinese investments to avoid takeover COVID19",
            "author": "Manish Singh",
            "date": "April 18 2020",
            "summary": "Chinese investors, who have poured about $6 billion into Indian startups in the last two years, will be subjected to tougher scrutiny for their future investments in the world’s second largest internet market.",
            "description": " The nation’s Department of Promotion of Industry and Internal Trade said it was taking this measure to “curb the opportunistic takeover” of Indian firms that are grappling with challenges due to the coronavirus crises.'The government has reviewed the extant foreign direct investment policy for curbing opportunistic takeovers/acquisitions of Indian companies due to the current COVID-19 pandemic,” the trade ministry said in a note.The new rule will also be applicable to “the transfer of ownership of any existing or future foreign direct investment in an entity in India, directly or indirectly,” it added. Prior to this move, the Indian government, like most others, only intervened in deals occurring in atomic energy, defense, and space industries that it currently prohibits. Watchdogs in several markets also typically intervene in major foreign investments that pose competitive disadvantage to other local players in a category.“There has been a growing concern across the globe that Chinese companies are buying cheap, distressed asset. Government may be thinking that if this is allowed to continue, it may raise some security concerns,” Bangalore-based lawyer Nikhil Narendran told TechCrunch. India appears to be following efforts from other countries such as Australia and Germany that have either tightened their foreign direct investment policies in recent weeks or are exploring similar options, he said.",
            "image": "https://techcrunch.com/wp-content/uploads/2020/04/GettyImages-1179154114-2-1.jpg?w=1390&crop=1",
            "source": "https://techcrunch.com/2020/04/18/to-avoid-hostile-takeovers-amid-covid-19-india-mandates-approvals-on-chinese-investments/"
        },
        {
            "title": "The New Apple SE : Why the iPhone SE has many things going for it",
            "author": "Nandagopal Rajan ",
            "date": "April 19 2020",
            "summary": "Finally, Apple did launch a successor to the iPhone SE. And it is still called the iPhone SE, maybe add a ‘2020’ to avoid confusion. Yes, it’s a bit foolhardy to predict what Apple would do.",
            "description": "The iPhone SE has a lot going for it. To start with is the $399 price point. While the general perception is that this is meant for emerging markets like India, it could actually have a lot more impact on Apple’s core markets like US, Europe and Australia. In all these markets, Apple dominates and the Android is relegated to a Number 2 spot, almost a working-class phone. A $399 phone offers Apple a chance to eat into that Android market share too. Remember, in all these markets the iPhone SE will be sold mostly as a carrier offering with just a monthly rental and hence be much more affordable. In other markets, it will still be the most affordable Apple iPhone, though in India that is still an expensive price tag. A budget phone in the US, the iPhone SE will be an expensive mid-run device in India. But it is still a new iPhone with the latest processor and the aspirational value of Apple. That could still make it an option for those considering a purchase around the Rs 40,000 price point. This could come at the cost of OnePlus and some Samsung phones. But the Android phone will offer more bang for the buck in terms of the camera for instance. There is another interesting angle that is going in favour of the iPhone SE, it’s size. There aren’t a lot of phones left that offer a 4.7-inch display. While everyone wants a large screen, there are a lot of people who are not keen to use a screen this large. Let’s take the care of teenagers for instance. A cheaper iPhone that is easier to grip might make a good first phone for a lot of them. I have a feeling that by reviving this size, Apple could be on to something. The size might not be a really big volume play on its own, but Apple will now surely own this space.",
            "image": "https://images.indianexpress.com/2020/04/iPhone-SE-2020-1.jpg",
            "source": "https://indianexpress.com/article/technology/opinion-technology/apple-blog-iphone-se-2020-6369623/"
        },
        {
            "title": "Dogs: Our best friends in sickness and in health",
            "author": "Maria Cohut, Ph.D.",
            "date": "August 26 2018",
            "summary": "Many studies have suggested that having dogs as pets is associated with better physical health, as reviews of the existing literature show. These findings persist.",
            "description": "Just last year, Medical News Today reported on a study that showed that owning a dog reduces a person’s risk of premature death by up to a third. Also, researchers at the University of Harvard in Cambridge, MA, suggest that dog owners have a lower risk of heart disease. Why is that? It is difficult to establish a causal relationship between owning a dog and enjoying better health. However, the benefits may appear thanks to a series of factors related to lifestyle adjustments that people tend to make after they decide to adopt a canine friend. The most prominent such lifestyle factor is physical activity. There is no way around it: if you own a dog, you have to commit to twice daily walks — and sometimes even more. According to a paper published in The Journal of Physical Activity and Health, dog owners are more likely to walk for leisure purposes than both non-pet owners and people who own pet cats. The results were based on studying a cohort of 41,514 participants from California, some of whom owned dogs, some of whom owned cats, and some of whom did not have any pets. Moreover, several recent studies — including one from the University of Missouri in Columbia and another from Glasgow Caledonian University in the United Kingdom — found that adults aged 60 and over enjoy better health thanks to the “enforced” exercise they get by walking their dogs.",
            "image": "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
            "source": "https://www.medicalnewstoday.com/articles/322868"
        }
    ]
    // const featuredPosts = [
    //     {
    //         title: 'Featured post',
    //         date: 'Nov 12',
    //         description:
    //             'This is a wider card with supporting text below as a natural lead-in to additional content.',
    //         image: 'https://source.unsplash.com/random',
    //         imageText: 'Image Text',
    //     },
    //     {
    //         title: 'Post title',
    //         date: 'Nov 11',
    //         description:
    //             'This is a wider card with supporting text below as a natural lead-in to additional content.',
    //         image: 'https://source.unsplash.com/random',
    //         imageText: 'Image Text',
    //     },
    //     {
    //         title: 'Post title',
    //         date: 'Nov 11',
    //         description:
    //             'This is a wider card with supporting text below as a natural lead-in to additional content.',
    //         image: 'https://source.unsplash.com/random',
    //         imageText: 'Image Text',
    //     },
    //     {
    //         title: 'Post title',
    //         date: 'Nov 11',
    //         description:
    //             'This is a wider card with supporting text below as a natural lead-in to additional content.',
    //         image: 'https://source.unsplash.com/random',
    //         imageText: 'Image Text',
    //     },
    //     {
    //         title: 'Post title',
    //         date: 'Nov 11',
    //         description:
    //             'This is a wider card with supporting text below as a natural lead-in to additional content.',
    //         image: 'https://source.unsplash.com/random',
    //         imageText: 'Image Text',
    //     },
    //     {
    //         title: 'Post title',
    //         date: 'Nov 11',
    //         description:
    //             'This is a wider card with supporting text below as a natural lead-in to additional content.',
    //         image: 'https://source.unsplash.com/random',
    //         imageText: 'Image Text',
    //     },

    // ];
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <MainFeaturedPost post={mainFeaturedPost} />
                <Grid container>
                    <GridList cellHeight={260} className={classes.gridList} cols={2}>
                        {featuredPosts.map((u, i) =>
                            (
                                <GridListTile key={u.title} cols={1}>
                                    <Post key={u.title} post={u} />
                                </GridListTile>
                            ))
                        }
                    </GridList>
                </Grid>
            </div>
        </>
    );

}

const useStyles = makeStyles({
    gridList: {
        height: 500,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    card: {
        width: 200
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});




export default Main;
