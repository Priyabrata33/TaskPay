import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { NavLink} from 'react-router-dom';


const pages = ['HOME', 'SERVICES', 'ABOUT US', 'BLOG', 'CONTACT US', 'REGISTER'];

function ResponsiveAppBar() {
    
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


    
  return (
    <AppBar position="fixed" sx={{ bgcolor: "#FFFFFF", fontFamily: 'Montserrat, sans-serif' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <NavLink to="/home" style={{ textDecoration: 'none' }}>
              <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                      mx: 4,
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 700,
                      color: 'Black',
                      textDecoration: 'none',
                      fontSize: '1.4rem'
                  }}
                  >
                  <span style={{ color: '#FFA500' }}>TASK</span>
                  <span style={{ color: '#000000' }}>PAY</span>
              </Typography>
            </NavLink>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, textAlign: 'right' }}>
              
                <IconButton
                    size="small"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="black"
                    sx={{
                      padding: 0,
                      size: '30px'
                    }}
                >
                    <MenuIcon />
                </IconButton>
                
                <Menu id="menu-appbar" anchorEl={anchorElNav}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }} keepMounted transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      padding: 0,
                    display: { xs: 'block', md: 'none' },
                    }}
                >
                    {pages.map((page) => (
                      <NavLink key={page} to={`/${page.toLowerCase().replace(' ', '-')}`} style={{ textDecoration: 'none' , color: 'black' }}>  
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography
                        sx={{

                            fontSize: '.7rem',
                            '&:hover': {
                                 color: '#FFA500',         // Orange color on hover
                                 backgroundColor: 'none',
                            },
                        }}
                        >
                        {page}
                        </Typography>
                      </MenuItem>
                      </NavLink>
                    ))}
                </Menu>
                </Box>


          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}

          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  sx={{
                      mr: 2,
                      display: { xs: 'flex', md: 'none' },
                      flexGrow: 1,
                      fontFamily: 'Montserrat, sans-serif',
                      justifyContent: 'center',
                      fontWeight: 700,
                      textDecoration: 'none',
                  }}
                  >
                  <span style={{ color: '#FFA500' }}>TASK</span>
                  <span style={{ color: '#000000' }}>PAY</span>
              </Typography>
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                {pages.map((page) => (
                  <NavLink key={page} to={`/${page.toLowerCase().replace(' ', '-')}`} style={{ textDecoration: 'none' }}>
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{
                        mx: 1,
                        my: 0.5,
                        color: 'black',
                        display: 'block',
                        '&:hover': { color: '#FFA500', backgroundColor: 'transparent' },
                        ...(page === 'REGISTER' && {
                            '&:hover':{color: '#FFA500'},
                          backgroundColor: '#f19433',
                          color:'white',
                          borderRadius: '20px',
                          padding: '5px 10px',
                          marginRight: '30px',
                          marginLeft: '0px',
                        }),
                      }}
                    >
                      {page}
                    </Button>
                  </NavLink>
                ))}
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;