import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Details from './Details';
import Main from './Main';
import Grid from '@material-ui/core/Grid';
import Nav from './Nav';

const MainContainer = () => {
    return (
        <>
            <div className="flex-container">
                <Router>
                    <Grid container spacing={3}>
                        <Grid item xs={9}>
                            <Switch>
                                <Route render={(props) => <Details {...props} title="Details" />} path="/details" />
                                <Route render={(props) => <Main {...props} title="Home" />} path="/" />
                            </Switch>
                        </Grid>
                        <Grid item xs={3}>
                            <Route render={(props) => <Nav {...props} title="Navigation" />} />
                        </Grid>
                    </Grid>
                </Router>
            </div>
        </>
    );

}




export default MainContainer;