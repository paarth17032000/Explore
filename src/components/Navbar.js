import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
// import Button from '@material-ui/core/Button';

const useStyles= makeStyles({
    appbar: {
        width: '100%',
    },
    root: {
        backgroundColor: '#222f3e'
    }
})

export default function ButtonAppBar() {
    const classes = useStyles()
  return (
    <Box maxwidth="xl" sx={{ flexGrow: 1 }} className={classes.root} maxWidth="sm">
      <AppBar elevation={0} className={classes.appbar} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}