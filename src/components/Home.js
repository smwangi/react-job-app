import React from 'react';
import NavBar from '../components/NavBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import { Container, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    containter: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
}));

function Home() {
    const classes = useStyles();
    return (

        <div>
            <NavBar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer}>
                    <Container maxWidth="lg" className={classes.containter}>
                        <Grid container spacing={3}>
                            <Button>S</Button>
                        </Grid>
                    </Container>
                </div>
            </main>
        </div>
    );
}

export default Home; 