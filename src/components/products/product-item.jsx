import React from 'react';
import { 
    Box, 
    Card, 
    CardMedia, 
    CardContent, 
    CardActions, 
    Typography,
    Button
} from '@mui/material';

export const ProductItem = ({ image, title, description, price, onBuy }) => {
    return (
        <Card 
            sx={{
                height: '100%',
            }}
        >
            <CardMedia
                component="img"
                height="200"
                image={ image }
                alt={ title }
            />
            <CardContent>
                <Typography 
                    variant="subtitle1" 
                    component="div"
                    gutterBottom
                    sx={{
                        overflow: 'hidden',
                        height: '28px'
                    }}
                >
                    { title }
                </Typography>

                <Typography 
                    gutterBottom 
                    variant="body2" 
                    color="text.secondary"
                    sx={{
                        height: '100px',
                        overflow: 'hidden'
                    }}
                >
                    { description }
                </Typography>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}>
                    <Typography>
                        Price: { price }
                    </Typography>
                </Box>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={ onBuy }>Buy</Button>
            </CardActions>
        </Card>
    )
}