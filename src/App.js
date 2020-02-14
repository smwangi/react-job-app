import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';

import NavBar from './components/NavBar';

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display:'flex'
  },
  drawerPaper:{
    position:'relative',
    whiteSpace:'nowrap',
    width:drawerWidth,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: '#535454',
    color: '#fff'
  },
  content:{
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container:{
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

function App() {
  const classes = useStyles()

  return (
       <div className={clsx('App',classes.root)}>
        <NavBar/>
      </div> 
  );
}


export default App;
