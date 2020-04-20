import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <>
            <div>
                <Toolbar className={classes.toolbar}>
                    <Typography
                        component="subtitle1"
                        variant="subtitle1"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        Copyright © nikhilracha.com/blogs
                    </Typography>
                </Toolbar>
            </div>
        </>
    );

}




export default Footer;