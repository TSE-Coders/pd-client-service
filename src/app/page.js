
'use client'
import {  useState } from 'react'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { ChevronLeft } from '@mui/icons-material';
import { Notifications } from '@mui/icons-material';
import { Menu } from '@mui/icons-material';
import { RadioButtonChecked } from '@mui/icons-material';
import { mainListItems, secondaryListItems } from '@/components/sidebar/listItems';
import { ListPlayers } from '@/components/players/listPlayers';
import { ListPods } from '@/components/pod/listPods';
import { blueGrey, grey } from '@mui/material/colors';
import { CurrentPlayer } from '@/components/players/currentPlayer'

// Footer

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        TSE-coders
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
// Styling theme

const grayBlue = createTheme({
  palette: {
    primary: {
      light: blueGrey[200],
      main: blueGrey[500],
      dark: blueGrey[700],
    },
    secondary: {
      light: grey[200],
      main: grey[500],
      dark: grey[700],
    },
  },
});

// Side panel behavior

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const drawerWidth = 240;

// Navigation bar behavior
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


// Dashboard rendering


export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={grayBlue}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* navbar */}
        <AppBar position="absolute" open={open}>
          <Toolbar sx={{ pr: '24px'}}>
            <RadioButtonChecked edge="start" color="inherit" aria-label="open drawer" onClick={toggleDrawer} sx={{marginRight: '36px',  ...(open && { display: 'none' })}}>
              <Menu />
            </RadioButtonChecked>
            <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>PodRace</Typography>
            <RadioButtonChecked color="inherit"><Badge badgeContent={4} color="secondary">
                <Notifications />
              </Badge>
            </RadioButtonChecked>
          </Toolbar>
        </AppBar>

        {/* Drawer */}
        <Drawer variant="permanent" open={open}>
          <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1] }}>
            <RadioButtonChecked onClick={toggleDrawer}>
              <ChevronLeft/>
            </RadioButtonChecked>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>

        {/* main */}
        <Box component="main"  sx={ { backgroundColor: (theme) => theme.palette.mode === 'light'? theme.palette.grey[100] : theme.palette.grey[900], flexGrow: 1, height: '100vh', overflow: 'auto'}}> 
          
          {/* main.marquee */}
          
          <Container maxWidth="lg" sx={{ mt: 11, mb: 4 }}>

          

            <CurrentPlayer/>
          </Container>
          
          {/* dashboard starts */}

          {/* Main.Players */}
          <Container maxWidth="lg" sx={{ mt: 5, mb: 4 }}>

            <Grid container spacing={3}>

              {/* List Players */}
              <Grid item xs={6}>
                <Paper sx={{ display: 'flex', flexDirection: 'column' }}>
                  <ListPlayers />
                </Paper>
              </Grid>
              {/* ----------- */}

              {/* Top Players */}
              <Grid item xs={6}>
                <Paper sx={{ display: 'flex', flexDirection: 'column' }}>
                  <ListPlayers />
                </Paper>
              </Grid>
              {/* ----------- */}

            </Grid>
          </Container>

                    {/* main. */}
          <Container maxWidth="lg" sx={{ mt: 5, mb: 4 }}>

            <Grid container spacing={3}>

              {/* List Pods */}
              <Grid item xs={6}>
                <Paper sx={{ display: 'flex', flexDirection: 'column' }}>
                  <ListPods />
                </Paper>
              </Grid>
              {/* ----------- */}

              {/* Top Pods */}
              <Grid item xs={6}>
                <Paper sx={{ display: 'flex', flexDirection: 'column' }}>
                  <ListPods />
                </Paper>
              </Grid>
              {/* ----------- */}

            </Grid>
          </Container>
            
            
            
          {/* Footer */}
            <Copyright sx={{ pt: 4 }} />
          
        </Box>
      </Box>
    </ThemeProvider>
  );
}

















              {/* Chart */}
              {/* <Grid item xs={12} md={8} lg={9}>
                <Paper sx={{ p: 2,display: 'flex', flexDirection: 'column', height: 240}}>
                  <Chart />
                </Paper>
              </Grid> */}



              {/* Recent Deposits */}
              {/* <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid> */}