import * as React from 'react';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from "../assets/logo.svg"
import { landingPageNavbarData, loginNavbarData } from '../utils/data';



function Navbar({isLoggedIn}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [pages,setPages]=useState([]);
React.useEffect(()=>{
  isLoggedIn?setPages(loginNavbarData):setPages(landingPageNavbarData);
},[])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{background:'none',boxShadow:'none'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          <Box sx={{  display: { xs: 'block', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color:"black"}} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem  key={page} onClick={handleCloseNavMenu} sx={{paddingLeft:12}}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <img src={Logo} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} style={{height:"120px",width:"120px"}}/>
          <Box sx={{ flexGrow: 1, display:{xs:'none',md:'flex'},justifyContent:'center',fontFamily: 'Roboto' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#6F6C84', display: 'block' ,marginLeft:6,letterSpacing:2}}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0,position:'fixed',top:40,right:40 }}>
            <Button variant='outlined' sx={{color:'#9E465B',borderColor:'#9E465B',letterSpacing:2}}>
              <Link style={{textDecoration:'none',color:'inherit'}} to='/login'>Log In</Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
