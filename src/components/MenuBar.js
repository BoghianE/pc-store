import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import AppsIcon from '@material-ui/icons/Apps';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import LaptopIcon from '@material-ui/icons/Laptop';
import MobileScreenShareIcon from '@material-ui/icons/MobileScreenShare';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '50%',
        margin: '0 16%',
        backgroundColor: '#fff',
    },
}));


const MenuBar = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent" shadow='none'>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    style={{marginLeft: '17%'}}
                >
                    <Tab label="Toate" icon={<AppsIcon />}  onClick={e => props.filterProducts(' ')}/>
                    <Tab label="Computer" icon={<DesktopWindowsIcon />}  onClick={e => props.filterProducts('computer')}/>
                    <Tab label="Laptop" icon={<LaptopIcon />}  onClick={e => props.filterProducts('laptop')}/>
                    <Tab label="Mobile" icon={<MobileScreenShareIcon />}  onClick={e => props.filterProducts('mobile')}/>

                </Tabs>
            </AppBar>
        </div>
    )
}

export default MenuBar