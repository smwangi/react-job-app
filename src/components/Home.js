import React from 'react';

import NavBar from './NavBar';

// const useStyles = makeStyles(theme => ({
//     content: {
//         flexGrow: 1,
//         height: '100vh',
//         overflow: 'auto',
//     },
//     containter: {
//         paddingTop: theme.spacing(4),
//         paddingBottom: theme.spacing(4)
//     },
// }));

function Home() {
   // const classes = useStyles();
    return (

        <div>
           {/* <NavBar/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}>
                    <Container maxWidth="lg" className={classes.containter}>
                        <Grid container spacing={3}>
                            <Button>S</Button>
                        </Grid>
                    </Container>
                </div>
            </main> */}
           <NavBar/>
        {/* <Link to="/">Home </Link>
      <Link to="/about">About Us </Link> */}
        </div>
    );
}

export default Home; 