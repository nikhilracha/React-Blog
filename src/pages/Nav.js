import React from 'react';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import News from './components/News';

const Nav = (props) => {
    console.log("props", props);
    return (
        <>
            <div className="nav">
                <Button
                    variant="contained"
                    onClick={() => props.history.push('/')}
                    size="large"
                    startIcon={<HomeIcon />}
                >
                    Home
                </Button>
                <News />
            </div>
        </>
    );

}




export default Nav;