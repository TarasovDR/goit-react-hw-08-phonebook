import React from 'react';
import { NavLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function AuthNav() {
  const [value, setValue] = React.useState(2);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square variant="outlined">
      <Tabs
        aria-label="disabled tabs example"
        indicatorColor="primary"
        onChange={handleChange}
        textColor="primary"
        value={value}
      >
        <NavLink
          activeClassName="activeLink"
          className="link"
          exact
          to="/register"
        >
          <Tab label="Register" />
        </NavLink>

        <NavLink
          activeClassName="activeLink"
          className="link"
          exact
          to="/login"
        >
          <Tab label="Login" />
        </NavLink>
      </Tabs>
    </Paper>
  );
}
