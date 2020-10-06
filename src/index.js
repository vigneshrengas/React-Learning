import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

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

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

let selectedRow= {};
function createData(customerId, customerName, customerBank, currency) {
	return { customerId, customerName, customerBank, currency };
}


let rows = [
	createData(1, 'Ragul', 'ABC Bank', 'INR'),
	createData(2, 'Vignesh', 'XYZ Bank', 'USD'),
	createData(3, 'Vickky', 'QWE Bank', 'EUR'),
	createData(4, 'Vignesh', 'ABC Bank', 'INR'),
	createData(5, 'Ravi', 'QWE Bank', 'USD'),
];

let displayRows = rows;

export default function BasicTable() {
	const classes = useStyles();

	//const [name, setRow] = React.useState('check');
	const [custName, setName] = React.useState('');

	// const onclickFunc = (event) =>{
	// 	setRow(event.target.value);
	// 	 return console.log(event.target.value, name);
	//  }

	const edit = (data) => {
		// Do whatever you want
		selectedRow = data;
		return console.log(data,selectedRow);

	}
	const handleChange = (event) => {
		console.log(event.target.value, custName);
		setName(event.target.value);
		if ( event.target.value === '' ) {
			displayRows = rows;
		} else {

			let returnRow = [];
			const filteredRows = rows.filter(row => {
				let rowValues = Object.values(row);
					rowValues.forEach( (value, index) => {
					if ( event.target.value!== '' &&
					typeof(value) !== "number" &&  value.toLowerCase().includes(event.target.value)) {
						console.log('row->', row);
						returnRow.push(row);
						return;
					} 
				});
			});
			displayRows = returnRow;
		}
		return;
	};

	const UpdateCustomerInfo = (data) => {
		console.log('sele', data);
	}

	return (
		<>
			<form>
				<FormControl>
					<InputLabel>Search Name</InputLabel>
					<Input value={custName} onChange={handleChange} />
				</FormControl>
				<br></br>
				<FormControl>
					<InputLabel htmlFor="my-input">Customer Name</InputLabel>
					
					<Input value={selectedRow ? selectedRow.customerName : ''} id="my-input" aria-describedby="my-helper-text" />
					<Button variant="contained" color="primary" onChange={UpdateCustomerInfo(selectedRow)}>
						Update
					</Button>
				</FormControl>
			</form>
		

			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell align="right">Customer Id</StyledTableCell>
							<StyledTableCell align="right">Customer Name&nbsp;</StyledTableCell>
							<StyledTableCell align="right">Customer Bank&nbsp;</StyledTableCell>
							<StyledTableCell align="right">Currency&nbsp;</StyledTableCell>
							<StyledTableCell align="left">Button&nbsp;</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{displayRows.map((row, index) => (
							<StyledTableRow key={index} >
								<StyledTableCell component="th" scope="row">
									{row.customerId}
								</StyledTableCell>
								<StyledTableCell align="right">{row.customerName}</StyledTableCell>
								<StyledTableCell align="right">{row.customerBank}</StyledTableCell>
								<StyledTableCell align="right">{row.currency}</StyledTableCell>
								<StyledTableCell ><Button onClick={() => edit(row)} variant="outlined" color="primary">Click</Button></StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}

ReactDOM.render(
	<BasicTable />,
	document.getElementById('root')
);



