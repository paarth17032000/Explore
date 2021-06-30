import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Hidden, Button, Box, Container, Grid } from '@material-ui/core';
import Logo from '../../assests/images/logo.png'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#FFFFFF',
    height: '88px',
    display: 'flex',
    justifyContent: 'center'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    '& > *': {
        margin: theme.spacing(1),
      },
    color: '#020202',
    fontSize: '14px',
    fontWeight: 600
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  links: {
      '& > *': {
        margin: theme.spacing(0,3),
        textDecoration: 'none',
        color: '#020202',
        fontSize: '14px',
        fontWeight: 600
      }
  },
  login: {
    padding: theme.spacing(1.5,2.5),
    borderRadius: '12px',
    outline: 'none',
    backgroundColor: '#FFFFFF',
    fontSize: '14px',
    border: '1px solid #020202',
    cursor: 'pointer',
    fontWeight: 700
  },
  signup: {
    padding: theme.spacing(1.5,2.5),
    borderRadius: '12px',
    color: '#FFFFFF',
    backgroundColor: '#FD9835',
    border: '1px solid #020202',
    fontSize: '14px',
    cursor: 'pointer',
    fontWeight: 700
  },
  hero: {
      backgroundColor: 'red'
  }
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        elevation={0}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
            <Box className={classes.title}>
                <img src={Logo} alt="alt" />
                <Typography variant="h6" color="primary" noWrap className={classes.title}>
                    Poll Booth
                </Typography>
            </Box>

            <Hidden smDown>
                <Box className={classes.links}>
                    <Typography component={Link} to='/'>Home</Typography>
                    <Typography component={Link} to='/'>How to use</Typography>
                    <Typography component={Link} to='/'>Features</Typography>
                    <Typography component={Link} to='/'>Contact us</Typography>
                    <Link
                    to='/login' 
                    >
                        <button 
                        className={classes.login}
                        >
                            Log in
                        </button>
                    </Link>
                    <Link
                    to='/signup'
                    >
                        <button
                        className={classes.signup}
                        >
                            Sign up
                        </button>
                    </Link>
                </Box>
            </Hidden>
          
          {/* <Button color="inherit">Login</Button> */}
            <Hidden mdUp>
                <IconButton
                    color="primary"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerOpen}
                    className={clsx(open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
            </Hidden>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Container>
            <Box className={classes.hero}>
                <Grid container>
                    <Grid item md={6} xs={12}>
                        abcd
                    </Grid>
                    <Grid item md={6} xs={12}>
                        efgh
                    </Grid>
                </Grid>
            </Box>
            <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua
            </Typography>
        </Container>
      </main>
        <Hidden mdUp>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
                </div>
                <Divider />
                <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
            </Drawer>
        </Hidden>
    </div>
  );
}
