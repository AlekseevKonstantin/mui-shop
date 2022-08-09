import React from 'react';
import { Grid } from '@mui/material';

export const Products = ({ products = [], children }) => {

    return (
        <Grid 
            container 
            spacing={ 2 } 
            sx={{ padding: '32px 0' }}
        >
            {
                products.map((item) => (
                    <Grid 
                        xs={ 12 }
                        sm={ 4 }
                        item 
                        key={item.id}
                    >
                        { children(item) }
                    </Grid>
                ))
            }
        </Grid>
    )
}
