import React, { useState } from 'react';
import { makeStyles, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, TablePagination } from '@material-ui/core';

const columns = [
    {id:'name',label:'Name',minWidth:170,align:'center'},
    {id:'email',label:'Email',minWidth:170,align:'center'}
];

function createData(name,email){
    return {name,email};
}

const rows = [
    createData('Samwan','samwax2010@gmail.com'),
    createData('Smwangi','swanjohi.mwangi@gmail.com'),
];

const useStyles = makeStyles({

    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export const User = () => {

    const classes = useStyles();
    const [page,setPage] = useState(0);
    const [rowsPerPage,setRowsPerPage] = useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }

    return (

        <>
        <Paper className={classes.root}>
            <TableContainer classes={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) =>(
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                    >
                                        {column.label}
                                    </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
                                            {columns.map((column) => {
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
            rowsPerPageOptions={[10,25,50,100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
        </>
    );
}

export default User;