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
    // transition: theme.transitions.create(['margin', 'width'], {
    //   easing: theme.transitions.easing.easeOut,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
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
    // width: drawerWidth,
    // flexShrink: 1,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // drawerHeader: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   padding: theme.spacing(0, 1),
  //   // necessary for content to be below app bar
  //   ...theme.mixins.toolbar,
  //   justifyContent: 'flex-start',
  // },
  drawerHeader: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3,8),
    backgroundColor: '#FFFFFF'
    // transition: theme.transitions.create('margin', {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
    // marginRight: -drawerWidth,
  },
  contentShift: {
    // transition: theme.transitions.create('margin', {
    //   easing: theme.transitions.easing.easeOut,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
    // marginRight: 0,
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
      flexGrow: 1,
      padding: theme.spacing(8)
  },
  heroTitle: {
    fontSize: '14px',
    fontWeight: 800,
    color: '#FD9835'
  },
  heroMain: {
    fontSize: '44px',
    fontWeight: 700,
    color: '#020202',
    marginTop: theme.spacing(1.5)
  },
  heroPara: {
    fontSize: '16px',
    color: '#020202',
    marginTop: theme.spacing(5)
  },
  heroBtn: {
    fontSize: '14px',
    fontWeight: 700,
    marginTop: theme.spacing(7),
    padding: theme.spacing(1.5,2.5), 
    border: '1px solid #2F3643',
    backgroundColor: '#FD9835',
    color: '#FFFFFF',
    borderRadius: '12px',
    cursor: 'pointer'
  },
  heroImg: {
    width: '100%', 
    height: 'auto'
  },
  howItWorks: {
    padding: theme.spacing(8,0),
    '& > *' : {
      padding: theme.spacing(8)
    }
  },
  howBoxHead: {
    marginTop: theme.spacing(9.5)
  },
  howBox: {
    height: '341px',
    widht: '320px',
    border: '2px solid #020202',
    borderRadius: '24px',
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
        <Box className={classes.hero}>
            <Box>
                <Grid container spacing={5}>
                    <Grid item md={6} xs={12}>
                        <Box>
                          <Typography className={classes.heroTitle}>
                            POLLING SITE
                          </Typography>
                          <Typography className={classes.heroMain}>
                            Let’s decide the winner by polling  
                          </Typography>
                          <Typography paragraph className={classes.heroPara}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                          </Typography>
                          <button className={classes.heroBtn}>
                            Create a Poll
                          </button>
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box display='flex' justifyContent='center' alignItems='center'>
                          <img className={classes.heroImg} src={'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'} alt="img" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
        <Box className={classes.howItWorks}>
          <Box>
            <Typography className={classes.heroTitle}>
              HOW IT WORKS
            </Typography>
            <Typography className={classes.heroMain}>
              Simple Process to Create
            </Typography>
            <Grid container spacing={5} className={classes.howBoxHead}>
              <Grid item md={4} xs={12}>
                <Box className={classes.howBox}>abcd</Box>
              </Grid>
              <Grid item md={4} xs={12}>
              <Box className={classes.howBox}>efgh</Box>
              </Grid>
              <Grid item md={4} xs={12}>
              <Box className={classes.howBox}>ijkl</Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

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
                {['Home', 'How to use', 'Features', 'Contact Us'].map((text, index) => (
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
