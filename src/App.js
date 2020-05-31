import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core';

import Login from './components/Login/Login';
import Home from './components/Home';


export const AuthContext = React.createContext(null);

const drawerWidth = 240;

const initialState ={
  isAuthenticated: false,
  user: null,
  token: null
};

//Takes in 2 parameters and returns new state based on action
const reducer = (state,action) => {

  switch(action.type){
    case "LOGIN":
      localStorage.setItem("user",JSON.stringify(action.payload.username));
      localStorage.setItem("token",JSON.stringify(action.payload.accessToken));
      return{
        ...state,
        isAuthenticated:true,
        user: action.payload.username,
        token: action.payload.accessToken
      };
      
    case "LOGOUT":
      localStorage.clear();
      return{
        ...state,
        isAuthenticated:false,
        user:null
      }
      
    default:
      return state;
  };

};

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
  const classes = useStyles();
  const [state,dispatch] = React.useReducer(reducer,initialState);

  return (
    <AuthContext.Provider value={{state,dispatch}}>
     
       <div className={clsx('App',classes.root)}>
        
        {!state.isAuthenticated ? <Login/> : <Home/>}
      </div> 
      </AuthContext.Provider>
  );
}


export default App;
