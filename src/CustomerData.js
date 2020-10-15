import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';

import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  table: {
    minWidth: 700,
  },
}));

let selectedRow= {};


function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (

    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(id, email, first, last, company, country) {
  return { id, email, first, last, company, country };
}
const rows = [
  createData(10001, 'isidro_von@hotmail.com', 'Torrey', 'Veum', 'Hilll', 'Switzerland'),
  createData(10002, 'frederique19@hotmail.com', 'Micah', 'Sanford', 'Stokes-Reichel', 'Republic of Korea'),
  createData(10002, 'fredy54@gmail.com', 'Hollis', 'Swift', 'Rodriguez, Cartwright and Kuhn', 'Tunisia'),
  createData(10004, 'braxton29@hotmail.com', 'Perry', 'Leffler', 'Sipes', 'Feeney and Hansen', 'Chad'),
  createData(10005, "turner59@gmail.com", "Janelle", "Hagenes", "Lesch and Daughters", "Swaziland"),
  createData(10006, "halie47@yahoo.com", "Charity", "Bradtke", "Gorczany-Monahan", "Lebanon"),
  createData(10007, "loren_yundt@gmail.com", "Dejah", "Kshlerin", "Williamson-Hickle", "Egypt"),
  createData(10008, "kenton_macejkovic80@hotmail.com", "Ellen", "Schaefer", "Tillman-Harris", "Israel"),
  createData(10009, "pascale5@yahoo.com", "Sven", "Funk", "Dare Group", "Macao"),
  createData(10010, "frank34@yahoo.com", "Ryleigh", "Cole", "Zieme and Daughters", "Congo"),
  createData(10011, "harry65@hotmail.com", "Cooper", "Grimes", "Brakus-Rath", "Reunion"),
  createData(10012, "kiana.schowalter@gmail.com", "Esteban", "Homenick", "Bode-Botsford", "Guadeloupe"),
  createData(10013, "josh_batz60@gmail.com", "Lucinda", "Waters", "Ratke LLC", "Lebanon"),
  createData(10014, "zula36@hotmail.com", "Jarvis", "Grimes", "Durgan, Sporer and Bogan", "Ghana"),
  createData(10015, "romaine21@gmail.com", "Jordon", "Turcotte", "Green-Haag", "Serbia"),
];
let displayRows = rows;


const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function CustomPaginationActionsTable() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [custName, setName] = React.useState('');
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const handleChange = (event) => {
    console.log(event.target.value, custName);
    setName(event.target.value);
    if (event.target.value === '') {
      displayRows = rows;
    } else {

      let returnRow = [];
      const filteredRows = rows.filter((row, index) => {
        let currentIndex = -1;
        let rowValues = Object.values(row);
        rowValues.forEach((value) => {
          if (event.target.value !== '' &&
            typeof (value) !== "number" && value.toLowerCase().includes(event.target.value)
            && currentIndex !== index) {
            currentIndex = index;
            console.log('row->', row, index);
            returnRow.push(row);
            return true;
          }
        });
        return;
      });
      displayRows = returnRow;
    }
    return;
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    console.log(event.first, event.last);
    setAnchorEl(event.first + " " + event.last + " ");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <>
    <h1 style={{textAlign: 'center'}}>Customer Details</h1>

    <form className={classes.root} noValidate autoComplete="off">
  <TextField id="standard-basic" label="Customer Id" variant="outlined"/>
  <TextField id="filled-basic" label="First Name" variant="outlined"/>
  <TextField id="outlined-basic" label="Last Name" variant="outlined" />
  <TextField
        id="fromdate"
        label="From Date"
        type="date"
        defaultValue="2020-05-24"
        className={classes.textField}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="todate"
        label="To Date"
        type="date"
        defaultValue="2020-05-24"
        className={classes.textField}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
  <Button variant="contained" color="primary">
        Filter
      </Button>
      <Button variant="contained" >
        Clear
      </Button>
</form>
      <form>
        <FormControl>
          <InputLabel>Search Customer</InputLabel>
          <Input value={custName} onChange={handleChange} />
        </FormControl>
        <br></br>

      </form>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Customer Id</StyledTableCell>
              <StyledTableCell align="left">Email&nbsp;</StyledTableCell>
              <StyledTableCell align="left">First Name&nbsp;</StyledTableCell>
              <StyledTableCell align="left">Last Name&nbsp;</StyledTableCell>
              <StyledTableCell align="left">Company&nbsp;</StyledTableCell>
              <StyledTableCell align="left">Country&nbsp;</StyledTableCell>
              <StyledTableCell align="left">Action&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? displayRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : displayRows
            ).map((row, index) => (

              <StyledTableRow key={index} >
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="left">{row.email}</StyledTableCell>
                <StyledTableCell align="left">{row.first}</StyledTableCell>
                <StyledTableCell align="left">{row.last}</StyledTableCell>
                <StyledTableCell align="left">{row.company}</StyledTableCell>
                <StyledTableCell align="left">{row.country}</StyledTableCell>
                <StyledTableCell ><Button onClick={() => handleClick(row)} variant="outlined" color="primary">Click</Button></StyledTableCell>
              </StyledTableRow>

            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right/*  */',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Typography className={classes.typography}> Processing Customer : {anchorEl}</Typography>
      </Popover>

    </>
  );
}
