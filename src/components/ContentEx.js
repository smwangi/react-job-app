import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const styles = ({ breakpoints }) => ({
    root:{
        padding:16
    }
});

const ContentEx = ({ classes }) => (
    <div className={classes.root}>

    </div>
);

export default withStyles(styles)(ContentEx);