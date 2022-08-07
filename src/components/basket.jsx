import React from 'react';
import { Box, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import ClearIcon from '@mui/icons-material/Clear';

export const Basket = ({ orders = [], onClose }) => {
    return (
        <List sx={{
            width: '400px'
        }}>
            <ListItem
                sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Box 
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexGrow: 1
                    }}
                >
                    <ListItemIcon>
                        <ShoppingCartIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Basket"/>
                </Box>
                <IconButton onClick={ onClose }>
                    <ClearIcon />
                </IconButton>
            </ListItem>
            <Divider />

            {
                orders.map((order) => {
                    const { id, title, price, count } = order;

                    return (
                        <ListItem 
                            key={id}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    overflow: 'hidden'
                                }}
                            >
                                <Typography 
                                    variant="subtitle2" 
                                    component="div"
                                    noWrap={ true }
                                    sx={{
                                        maxWidth: '75%',
                                        overflow: 'hidden',
                                    }}
                                >
                                    { title }
                                </Typography>

                                <ClearIcon fontSize="10px" />
                                
                                <Typography 
                                    variant="body2" 
                                    component="div"
                                >
                                    { count }
                                </Typography>
                            </Box>

                            <Typography 
                                variant="body2" 
                                component="div"
                                sx={{

                                }}
                            >
                                { parseFloat(price) * parseInt(count) }
                            </Typography>
                        </ListItem>
                    );
                })
            }
        </List>
    )
}