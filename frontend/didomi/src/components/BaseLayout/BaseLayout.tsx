import React, { ReactNode, useEffect } from 'react';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';

import Menu from '../../components/Menu/Menu';



interface BaseLayoutProps {
  children?: ReactNode
}



const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }),
);



/**
 * Component to act as the base layout (Side menu + content area) of the subsequent pages.
 */
function BaseLayout({ children }: BaseLayoutProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Menu />
      </Drawer>
      <main className={classes.content}>
        {children}
      </main>
    </div>
  );
}

BaseLayout.displayName = 'BaseLayout';

export default BaseLayout;
