import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PeopleIcon from '@material-ui/icons/People';
import { ListItemText } from '@material-ui/core';
import { NavLink,Link } from 'react-router-dom';

// component={Link} to={{pathname:'/',state:'flushDeal'}} activeClassName="Mui-selected" exact
const NavLinkMui = React.forwardRef((props, ref) => (
    <NavLink {...props} activeClassName="Mui-selected" ref={ref} />
  ));

  
export const mainListItems = (

    <div>
        <ListItem button component={NavLinkMui} to="/" >
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem component={Link} to="/users">
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>ListSubheader</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
        </ListItem>
    </div>
);