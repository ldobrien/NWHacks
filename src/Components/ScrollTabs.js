import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Home from '@material-ui/icons/Home';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Healing from '@material-ui/icons/Healing';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Event from '@material-ui/icons/Event';
import Insurance from './Insurance';
import Calendar from './Calendar';
import Preop from './Preop';
import Personal from './Personal';
import Medications from './Medications';
import { Login } from './Login';
import HomeScreen from './Home';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Home" icon={<Home />} {...a11yProps(0)} />
          <Tab label="OperativeCare" icon={<Healing />} {...a11yProps(1)} />
          <Tab label="Personal" icon={<PersonPinIcon />} {...a11yProps(2)} />
          <Tab label="Medications" icon={<ShoppingBasket />} {...a11yProps(3)} />
          <Tab label="Login" icon={<ThumbDown />} {...a11yProps(4)} />
          <Tab label="Costs" icon={<AttachMoney />} {...a11yProps(5)} />
          <Tab label="Calendar" icon={<Event />} {...a11yProps(6)} /> 
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <HomeScreen />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Preop/>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Personal/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Medications/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Login/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Insurance/>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Calendar/>
      </TabPanel>
      
    </div>
  );
}