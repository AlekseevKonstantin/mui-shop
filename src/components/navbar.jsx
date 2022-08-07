import React from 'react';
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { ColorModeSwitch } from 'components/color-mode-switch';

export const NavbarPanel = ({ productCount, toggleBasket }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography 
                    variant="h5" 
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    MUI Shop
                </Typography>
                <Box>
                    <ColorModeSwitch />
                        <IconButton 
                            color="inherit" 
                            onClick={ toggleBasket }
                        >
                            <Badge 
                                color={ productCount === 0 ? 'error' : 'success' }
                                showZero={ true }
                                badgeContent={ productCount }
                            >
                                <ShoppingCartIcon  />
                            </Badge>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
