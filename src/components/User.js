import React, { useState, useEffect } from 'react';
import { makeStyles, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, TablePagination } from '@material-ui/core';
import Axios from 'axios';
import { AuthContext } from "../App";
//import Card from './Card';

const columns = [
    { id: 'username', label: 'Name', minWidth: 170, align: 'center' },
    { id: 'email', label: 'Email', minWidth: 170, align: 'center' }
];

// function createData(name,email){
//     return {name,email};
// }

// const rowsZ = [
//     createData('Samwan','samwax2010@gmail.com'),
//     createData('Smwangi','swanjohi.mwangi@gmail.com'),
// ];

const useStyles = makeStyles({

    root: {
        width: '100%',
    },
    container: {
        maxHeight: 540,
    },
    loader: {
        alignSelf: 'center',
        width: '100%',
        textAlign: 'center'
    }
});

const USERS_API_URL = "http://172.17.0.3:8080/api/test/users";

const initialState = {
    users: [],
    isFetching: false,
    hasError: false,
};

const reducer = (state, action) => {
    //console.log(action.payload);
    switch (action.type) {
        case "FETCH_USERS_REQUEST":
            return {
                ...state,
                isFetching: true,
                hasError: false
            };
        case "FETCH_USERS_SUCCESS":
            return {
                ...state,
                hasError: false,
                isFetching: false,
                users: action.payload
            };
        case "FETCH_USERS_ERROR":
            return {
                ...state,
                hasError: true,
                isFetching: false
            };
        default:
            return state;
    }
};

export const User = () => {

    const { state: authState } = React.useContext(AuthContext);
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const options = {
        headers: { 'Content-Type': 'application/json; charset=utf-8', 'Accept': 'application/json', Authorization: `Bearer ${authState.token}` }
    };

    useEffect(() => {
        dispatch({
            type: "FETCH_USERS_REQUEST"
        });
        Axios.get(USERS_API_URL, options)
            .then(response => {
                if (response.status === 200) {
                    return response.data;
                } else {
                    throw response;
                }
            })
            .then(jsonResponse => {
                dispatch({
                    type: "FETCH_USERS_SUCCESS",
                    payload: jsonResponse
                });
            })
            .catch(error => {
                dispatch({
                    type: "FETCH_USERS_FAILURE"
                });
            });
    }, [authState.accessToken]);

    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    return (

        <>
            {state.isFetching ? (
                <span className="loader">LOADING...</span>
            ) : (state.hasError ? (
                <span className="error">AN ERROR HAS OCCURRED</span>
            ) : (

                    <Paper className={classes.root}>
                        <TableContainer className={classes.container}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {state.users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                                {
                                                    columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                                            </TableCell>
                                                        )
                                                    })}
                                            </TableRow>
                                        )
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 50, 100]}
                            component="div"
                            count={state.users.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Paper>
                ))}
        </>
    );
}

export default User;