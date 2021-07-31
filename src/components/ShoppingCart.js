import React , { useState, useEffect } from "react";

import { connect } from 'react-redux'

import TopBar from "./TopBar";
import Footer from './Footer'

import {totalPrice} from "../utils/getTotalPrice";


import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Axios from "axios";
import {url} from "../utils/api";
import {images} from "../images/images";

const useRowStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            borderBottom: 'unset',
            height: '100px',
        },
    },

    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));

const useTableStyles = makeStyles({
    root: {
        width: '60%',
        marginLeft: '10%',
        marginTop: '30px',
    },
    head: {
        backgroundColor: '#bfbfbf',
    },
    row: {
        fontSize: '32px',
    },
    cell: {
        fontSize: '18px',
        fontWeight: 'bold'
    }

});

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const [quantity, setQuantity] = useState(1)
    const classes = useRowStyles();


    const handleChange = (event) => {
        setQuantity(event.target.value);
    };

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row" >
                    <div className='componenta-produs-cart'>
                        <img src={row.image} alt="prod" style={{width: '150px', height: '100px'}}/>
                        <div className='div-with-p-div'>
                            <p className='titlu-produs-cart'>{row.title}</p>
                            <div className='descriere-produs-cart'>
                                <p>Disponibil in stoc</p>
                                <p>Garantie inclusa: 20 luni</p>
                            </div>
                        </div>
                    </div>

                </TableCell>
                <TableCell >
                    <Select
                        value={quantity}
                        onChange={handleChange}
                        displayEmpty
                        className={classes.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value={1}>1</MenuItem>
                    </Select>
                </TableCell>
                <TableCell style={{fontWeight: 'bold'}}>{row.price}</TableCell>
                <TableCell style={{fontWeight: 'bold'}}>{row.price}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Descriere:
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>CPU</TableCell>
                                        <TableCell>Video Card</TableCell>
                                        <TableCell>Ram</TableCell>
                                        <TableCell>Internal Memory</TableCell>
                                        <TableCell>Camera</TableCell>
                                        <TableCell>Battery Life</TableCell>
                                        <TableCell>Display</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow >
                                        <TableCell component="th" scope="row">
                                            {row.cpu}
                                        </TableCell>
                                        <TableCell>{row.videoCard}</TableCell>
                                        <TableCell>{row.ram}</TableCell>
                                        <TableCell>
                                            {row.internalMemory}
                                        </TableCell>
                                        {row.camera === '' ? <TableCell>--</TableCell> : <TableCell>{row.camera}</TableCell>}
                                        {row.batteryLife === '' ? <TableCell>--</TableCell> : <TableCell>{row.batteryLife}</TableCell>}
                                        {row.display === '' ? <TableCell>--</TableCell> : <TableCell>{row.display}</TableCell>}

                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const ShoppingCart = ({history}) => {
    const [items, setItems] = useState([])
    const [userData, setUserData] = useState(0)
    const classes = useTableStyles()


    useEffect(() => {
        const getCart = () => {
            let localData = JSON.parse(localStorage.getItem('user'))

            Axios.post(url.cart, {userId: localData.id})
                .then((res) => {
                    for(let i=0;i<res.data.length;i++) {
                        if (res.data[i].type === 'computer') {
                            res.data[i]['image'] = images.computer
                        }
                        if (res.data[i].type === 'laptop') {
                            res.data[i]['image'] = images.laptop
                        }
                        if (res.data[i].type === 'mobile') {
                            res.data[i]['image'] = images.mobile
                        }
                    }
                    setItems(res.data)
                })
                .catch((err) => {
                    alert(err)
                    console.log(err)
                })

        }
        getCart();
    }, [])

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('user'))
        setUserData(localData)
    }, [])


    return (
        <div>
            <TopBar history={history} userData={userData}/>
            <div className='cart-title'>Cosul tau de cumparaturi:</div>

            <div className='cart-sumar'>
                <TableContainer component={Paper} className={classes.root}>
                    <Table aria-label="collapsible table">
                        <TableHead className={classes.head}>
                            <TableRow className={classes.row}>
                                <TableCell />
                                <TableCell className={classes.cell}>Produs</TableCell>
                                <TableCell className={classes.cell} >Cantitate</TableCell>
                                <TableCell className={classes.cell} >Pret Unitar</TableCell>
                                <TableCell className={classes.cell} >Pret Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items?.map((row) => (
                                <Row key={row.title} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <div className='sumar-comanda'>
                    <div>Sumar Comanda</div>
                    <div>Cost Produse:</div>
                    <div>{totalPrice(items)}</div>
                </div>
            </div>


            {/*<button onClick={() => console.log(items)}> show local storage</button>*/}
            <Footer />
        </div>
    )
}



export default ShoppingCart