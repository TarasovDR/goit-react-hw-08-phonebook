import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { getIsLoggedIn } from 'redux/selectors/auth-selectors';

export default function Navigation() {
  const [value, setValue] = React.useState(2);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Paper square>
      <Tabs
        aria-label="disabled tabs example"
        indicatorColor="primary"
        onChange={handleChange}
        textColor="primary"
        value={value}
      >
        <NavLink
          activeClassName="activeNavLink"
          className="navLink"
          exact
          to="/"
        >
          <Tab label="Home" />
        </NavLink>

        {isLoggedIn && (
          <NavLink
            activeClassName="activeNavLink"
            className="navLink"
            exact
            to="/contacts"
          >
            <Tab label="Contacts" />
          </NavLink>
        )}
      </Tabs>
    </Paper>
  );
}
