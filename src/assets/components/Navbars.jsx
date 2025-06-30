


import React, { useState,useEffect } from 'react';
import {
  AppBar, Toolbar, Box, Typography, IconButton, InputBase,
  Menu, MenuItem, Grid, Button, Divider, Drawer, List, ListItem, ListItemText,
  Collapse, useMediaQuery, Stack
} from '@mui/material';
import {
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
  AccountCircle as AccountCircleIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Menu as MenuIcon,
  ExpandLess,
  ExpandMore
} from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useTheme } from '@mui/material/styles';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useLocation } from 'react-router-dom';

const categories = [
  { label:'HOME', submenu:[], likes:'/'},
  { label: 'PERFUMES', submenu: ['Women', 'Men', 'Shop'], likes: '' },
  { label: 'BRANDS', submenu: [], likes: '/product' },
  { label: 'SKINCARE', submenu: [], likes: '' },
  { label: 'MAKEUP', submenu: [], likes: '' },
  { label: 'HAIRCARE', submenu: [], likes: '' },
  { label: 'AROMATHERAPY', submenu: [], likes: '' },
  { label: 'CANDLES', submenu: [], likes: '' },
  { label: 'GIFTS', submenu: [], likes: '' }
];

export default function Navbars() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMobile)

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileSubmenus, setMobileSubmenus] = useState({});

  const handleOpenMenu = (event, label) => {
    setAnchorEl(event.currentTarget);
    console.log(anchorEl)
    setSelectedMenu(label);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setSelectedMenu(null);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const toggleMobileSubmenu = (label) => {
    setMobileSubmenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const handleClick = (event, value) => {
    if (value === "PERFUMES") {
      setAnchorEl(event.currentTarget);
      console.log(anchorEl)
      setSelectedMenu(value);
    }
  }


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const location = useLocation();
const isHomePage = location.pathname === '/';


  return (
    <>
    
    
  <AppBar position="sticky" sx={{ bgcolor: '#4b215f', height: 30 }}>
    <Toolbar sx={{ minHeight: '30px !important', justifyContent: "space-between" }}>
      <Typography variant="caption" color="#fff">
        🔥 Only 11 days left until VALENTINE'S DAY! 🔥
      </Typography>
      {!isMobile && (
        <Box display="flex" gap={2}>
          <Typography variant="caption" color="#fff">Help & Information</Typography>
          <Typography variant="caption" color="#fff">Connect with us</Typography>
        </Box>
      )}
    </Toolbar>
  </AppBar>




        <AppBar position="sticky" color="default" elevation={0}>
          <Toolbar sx={{ justifyContent: "space-between", gap: 2,bgcolor:'#ecd4fa' }}>

            {isMobile ? (
              <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            ) : (
              <Typography variant="h6" sx={{ color: '#4b215f', fontWeight: 'bold' }}>
                PerfumeShop.com
              </Typography>
            )}
            {!isMobile && (
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  bgcolor: '#f1f1f1',
                  px: 2,
                  borderRadius: 1,
                  flexGrow: 1,
                  maxWidth: isMobile ? '100%' : 500
                }}
              >
                <InputBase placeholder="Hey, what are you looking for?" sx={{ flex: 1 }} />
                <IconButton><SearchIcon /></IconButton>
              </Box>
            )}


            <Box display="flex" gap={2}>
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose} 
                >
                  <MenuItem component='a' href='/login'  >Login</MenuItem>
                  <MenuItem component='a' href='/signup' >Signup</MenuItem>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>

                </Menu>
              </div>
              <IconButton><FavoriteBorderIcon /></IconButton>
              <IconButton>
                <ShoppingCartIcon />
                {!isMobile && (<Typography variant="caption">2 items</Typography>)}

              </IconButton>
            </Box>



          </Toolbar>
        </AppBar>

      
        {!isMobile && (
          <AppBar position="sticky" color="default" elevation={1}>
            <Toolbar sx={{ gap: 2, justifyContent: 'center',bgcolor:'#f5edfa' }}>
              {categories.map((cat) => (
                <Button
                  key={cat.label}
                  onClick={(e) => handleClick(e, cat.label)}
                  color="secondary"
                  sx={{
                     fontWeight:'bold',
                    textTransform: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      bottom: 0,
                      height: '2px',
                      width: '100%',
                      backgroundColor: '#000',
                      transform: 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.3s ease-in-out',
                    },
                    '&:hover::after': {
                      transform: 'scaleX(1)',
                    }
                  }} href={cat.likes}
                >
                  {cat.label}
                </Button>
              ))}
            </Toolbar>



          </AppBar>
        )}
        {isMobile && (
          <AppBar position="static" color="default" elevation={0}>
            <Toolbar>
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  bgcolor: "",
                  px: 2,
                  borderRadius: 1,
                  flexGrow: 1,
                  maxWidth: isMobile ? '100%' : 500
                }}
              >
                <InputBase placeholder="Hey, what are you looking for?" sx={{ flex: 1 }} />
                <IconButton><SearchIcon /></IconButton>
              </Box>
            </Toolbar>
          </AppBar>


        )}


        <Box
          onMouseEnter={(e) => handleOpenMenu(e, 'PERFUMES')}
          onMouseLeave={handleCloseMenu}
          sx={{ display: 'inline-block' }}
        >


          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl && selectedMenu === 'PERFUMES')}
            onClose={handleCloseMenu}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            MenuListProps={{ disablePadding: true }}
            PaperProps={{
              sx: {
                pointerEvents: 'auto',
                mt: 1,
              },
            }}
          >
            <Box px={3} py={2} sx={{ width: "auto" }} className="bg-purple-50" component=''  >
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography variant="subtitle1" color="secondary" >WOMEN</Typography>
                  <MenuItem>Perfume</MenuItem>
                  <MenuItem>Bath & Body</MenuItem>
                  <MenuItem>Gift Sets</MenuItem>
                  <MenuItem>Unboxed/Testers</MenuItem>
                  <MenuItem>Perfume Samples</MenuItem>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle1" color="secondary" >MEN</Typography>
                  <MenuItem>Cologne</MenuItem>
                  <MenuItem>Bath & Body</MenuItem>
                  <MenuItem>Aftershave</MenuItem>
                  <MenuItem>Gift Sets</MenuItem>
                  <MenuItem>Cologne Samples</MenuItem>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle1" color="secondary">SHOP</Typography>
                  <MenuItem>Best Sellers</MenuItem>
                  <MenuItem>New Arrivals</MenuItem>
                  <MenuItem>Mini Perfumes</MenuItem>
                  <MenuItem>50% OFF Specials</MenuItem>
                  <MenuItem>Celebrity Scents</MenuItem>
                </Grid>
              </Grid>
              <Divider sx={{ my: 2 }} />
              <Button variant="outlined" fullWidth color="secondary" >SHOP ALL</Button>
            </Box>
          </Menu>
        </Box>


        
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 260, p: 2 }}>
            <Typography variant="h6" mb={2}>Menu</Typography>
            <List>
              {categories.map((cat) => (
                <React.Fragment key={cat.label}>
                  <ListItem button onClick={() => toggleMobileSubmenu(cat.label)}>
                    <ListItemText primary={cat.label} />
                    {cat.submenu.length > 0 ? (
                      mobileSubmenus[cat.label] ? <ExpandLess /> : <ExpandMore />
                    ) : null}
                  </ListItem>
                  <Collapse in={mobileSubmenus[cat.label]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ pl: 2 }}>
                      {cat.submenu.map((item) => (
                        <ListItem key={item} button>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </React.Fragment>
              ))}
            </List>
          </Box>
        </Drawer>
     
      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          zIndex: 9999,
          width: '100%'
        }}

      >
      {
        isHomePage && (<Stack spacing={2} direction="row" justifyContent="space-between" p={4}  >
          <IconButton
            color="success"
            onClick={() => window.open('https://wa.me/yourphonenumber', '_blank')}
            sx={{ bgcolor: 'green', boxShadow: 3, color: 'white',  '&:hover': {
                      bgcolor:'white' ,color:'green'
                    }  }}
            size='large'
          >
            <WhatsAppIcon />
          </IconButton>


          <IconButton
            color="secondary"
            onClick={scrollToTop}
            sx={{ bgcolor: '#4b215f', boxShadow: 3, color: 'white', '&:hover':{bgcolor:'white',color:'#4b215f'} }}
            size='large'
          >
            <ArrowUpwardIcon />
          </IconButton>
        </Stack>
      )}
        
      </Box>
    </>
  );
}

