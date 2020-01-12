import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Home from '@material-ui/icons/Home';
import Healing from '@material-ui/icons/Healing';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Event from '@material-ui/icons/Event';
import Insurance from './Insurance';
import CalendarPage from './CalendarPage';
import Preop from './Preop';
import Medications from './Medications';
import Login from './Login';
import HomeScreen from './Home';
import { connect } from "react-redux"

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1,
//         width: '100%',
//         backgroundColor: theme.palette.background.paper,
//     },
// }));

export class ScrollableTabsButtonForce extends Component {
    state = {
        value: 0,
    }

    handleChange = (e) => {
        this.setState({
            value: e,
        })
    }
    render(){
        if(this.props.loggedIn){
            return (
                <div>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={this.state.value}
                            onChange={(e, v) => this.handleChange(v)}
                            variant="scrollable"
                            scrollButtons="on"
                            indicatorColor="primary"
                            textColor="primary"
                            aria-label="scrollable force tabs example"
                        >
                            <Tab label="Home" icon={<Home/>} {...a11yProps(0)} />
                            <Tab label="OperativeCare" icon={<Healing/>} {...a11yProps(1)} />
                            <Tab label="Medications" icon={<ShoppingBasket/>} {...a11yProps(2)} />
                            <Tab label="Costs" icon={<AttachMoney/>} {...a11yProps(3)} />
                            <Tab label="Calendar" icon={<Event/>} {...a11yProps(4)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={this.state.value} index={0}>
                        <HomeScreen/>
                    </TabPanel>
                    <TabPanel value={this.state.value} index={1}>
                        <Preop/>
                    </TabPanel>
                    <TabPanel value={this.state.value} index={2}>
                        <Medications/>
                    </TabPanel>
                    <TabPanel value={this.state.value} index={3}>
                        <Insurance/>
                    </TabPanel>
                    <TabPanel value={this.state.value} index={4}>
                        <CalendarPage/>
                    </TabPanel>


                </div>
            );
            } else {
                return (
                    <div>
                        <TabPanel value={this.state.value} index={0}>
                            <Login/>
                        </TabPanel>
                    </div>
                );
                }
            }
}

const mapStatetoProps = (state) => {
    return {
        loggedIn: state.auth.loggedIn
    }

}

export default connect(mapStatetoProps)(ScrollableTabsButtonForce)


