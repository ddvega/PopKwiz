// Temporary NavBar: to be changed
// reference: https://ansonlowzf.com/how-to-build-a-material-ui-navbar/

import * as React from 'react';
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Container } from '@material-ui/core';
import Home from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useAuth } from '../store/users/AuthContext';

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navDisplayFlex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  linkText: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: 'white',
  },
});

export const Navbar = () => {
  const classes = useStyles();
  const { currentUser } = useAuth();

  // navbar will changed depending on the loggedStatus of user
  const loggedStatus = { title: 'login', path: '/login' };

  const navLinks = [
    { title: 'browse', path: '/browse' },
    { title: 'about', path: '/about' },
    loggedStatus,
  ];

  if (currentUser) {
    loggedStatus.title = 'logout';
    loggedStatus.path = '/logout';

    navLinks.unshift(
      { title: 'create', path: '/quiz/create' },
    );
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
          <Link className={classes.linkText} to="/">
            <Home color="inherit" fontSize="large" />
          </Link>
          <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
            {navLinks.map(({ title, path }) => (
              <Link to={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
