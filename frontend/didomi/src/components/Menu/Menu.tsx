import React from 'react';
import { NavLink } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



const Menu = () => (
  <List>
    <ListItem component={NavLink} button to='/'>
      <ListItemText>Home</ListItemText>
    </ListItem>

    <ListItem component={NavLink} button to='/give-consent'>
      <ListItemText>Give Consent</ListItemText>
    </ListItem>

    <ListItem component={NavLink} button to='/consents'>
      <ListItemText>Collected Consents</ListItemText>
    </ListItem>
  </List>
);

export default Menu;
