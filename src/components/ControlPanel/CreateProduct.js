import React , {useState} from 'react'
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/Select";
import OutlinedInput from '@material-ui/core/OutlinedInput';



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


function Selector() {
    return (
        <Select
            // value={quantity}
            // onChange={handleChange}
            displayEmpty
            // className={classes.selectEmpty}
            inputProps={{ 'aria-label': 'Without label' }}
        >
            <MenuItem value={1}></MenuItem>
        </Select>
    );
}


const CreateProduct = () => {
    const classes = useStyles()
    const [productData, setProductData] = useState([])
    const [type, setType] = useState('calculator')


    const handleChange = (event) => {
        setType(event.target.value);
    };

    return (
        <Container component="main" maxWidth="xs" style={{
            position: 'absolute',
            top: '70%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Creeaza un nou produs
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="denumireProdus"
                                name="denumireProdus"
                                variant="outlined"
                                required
                                fullWidth
                                id="denumireProdus"
                                label="Denumire Produs"
                                autoFocus
                                onChange={e => setProductData({ ...productData, [e.target.name]: e.target.value })}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="pret"
                                label="Pret"
                                name="pret"
                                onChange={e => setProductData({ ...productData, [e.target.name]:  e.target.value })}
                                autoComplete="pret"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="cpu"
                                label="Cpu"
                                name="cpu"
                                onChange={e => setProductData({ ...productData, [e.target.name]: e.target.value })}
                                autoComplete="cpu"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="videoCard"
                                label="Card Video"
                                name="videoCard"
                                onChange={e => setProductData({ ...productData, [e.target.name]: e.target.value })}
                                autoComplete="videoCard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="ram"
                                label="Ram"
                                id="ram"
                                onChange={e => setProductData({ ...productData, [e.target.name]: e.target.value })}
                                autoComplete="ram"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="internalMemory"
                                label="Memorie interna"
                                name="internalMemory"
                                onChange={e => setProductData({ ...productData, [e.target.name]:  e.target.value })}
                                autoComplete="internalMemory"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="camera"
                                label="Camera"
                                name="camera"
                                onChange={e => setProductData({ ...productData, [e.target.name]:  e.target.value })}
                                autoComplete="camera"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="batteryLife"
                                label="Viata Baterie"
                                name="batteryLife"
                                onChange={e => setProductData({ ...productData, [e.target.name]:  e.target.value })}
                                autoComplete="batteryLife"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="display"
                                label="Display"
                                name="display"
                                onChange={e => setProductData({ ...productData, [e.target.name]:  e.target.value })}
                                autoComplete="display"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl className={classes.textField} fullWidth variant="outlined" labelId='Categorie'>
                                <OutlinedInput id='Categorie'>Categorie</OutlinedInput>
                                <Select
                                    // value={type}
                                    onChange={e => console.log(e.target.value)}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    id="categorie"
                                    required
                                    labelId='Categorie'
                                    name="categorie"

                                    // onChange={e => setProductData({ ...productData, [e.target.name]: e.target.value })}
                                >
                                    <MenuItem value={'calculator'} label='calculator'>Calculator</MenuItem>
                                    <MenuItem value={'laptop'} label='laptop'>Laptop</MenuItem>
                                    <MenuItem value={'mobile'} label='mobile'>Mobile</MenuItem>
                                </Select>
                            </FormControl>

                            {/*<FormControl>*/}
                            {/*    <InputLabel id="demo-simple-select-filled-label">Categorie</InputLabel>*/}
                            {/*    <Select*/}
                            {/*        variant="outlined" className={classes.textField} fullWidth onChange={handleChange}*/}
                            {/*        labelId="demo-simple-select-filled-label"*/}
                            {/*        id="demo-simple-select-filled"*/}
                            {/*        value={type}*/}
                            {/*        inputProps={{ 'aria-label': 'Without label' }}*/}
                            {/*    ><MenuItem value={'calculator'} label='calculator'>Calculator</MenuItem>*/}
                            {/*        <MenuItem value={'laptop'} label='laptop'>Laptop</MenuItem>*/}
                            {/*        <MenuItem value={'mobile'} label='mobile'>Mobile</MenuItem>*/}
                            {/*    </Select>*/}
                            {/*</FormControl>*/}
                        </Grid>


                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Creaza
                    </Button>
                </form>
            </div>

        </Container>
    )
}

export default CreateProduct