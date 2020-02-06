import React from 'react';
import PropTypes from "prop-types";
import Typography, { isWidthUp } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/styles';

const styles = ({ spacing, transitions, breakpoints, palette, shape }) => ({

    header:{
        fontWeight:900,
        minWidth:0,
        fontSize: 18
    },
    grow:{
        flexGrow: 1 
    }
});

const Header = ({ classes, screen }) => (
    <>
    <Typography noWrap color={"textSecondary"} className={classes.header}>
        Job App
    </Typography>
    <div className={classes.grow}/>
    {screen  ==="xs" &&  (
        <IconButton>
            <Icon>more_vert</Icon>
        </IconButton>
    )}
    {screen === "sm" &&  (
        <>
        <IconButton>
            <Icon>favourite</Icon>
        </IconButton>
        <IconButton>
            <Icon>more_vert</Icon>
        </IconButton>
        </>
    )}
    {isWidthUp("md",screen) && (
        <>
        <IconButton>
            <Icon>favourite</Icon>
        </IconButton>
        <IconButton>
            <Icon>phone</Icon>
        </IconButton>
        <IconButton>
            <Icon>camera</Icon>
        </IconButton>
        </>
    )}
    </>
);
Header.PropTypes = {
    screen: PropTypes.string,
    classes:PropTypes.shape({}).isRequired
};

Header.defaultProps = {
    screen:null
};

export default withStyles(styles)(Header);