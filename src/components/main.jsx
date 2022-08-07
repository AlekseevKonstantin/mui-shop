import React, { useState, useEffect, useRef } from 'react';
import { Container, TextField, Drawer, useTheme } from '@mui/material';

import { Products } from 'components/products/pruducts';
import { ProductItem } from 'components/products/product-item';
import productList from 'constants/products.json';

import { Basket } from './basket';

const filter = (value, setState) => {
    const list = value 
        ? productList.filter((el) => new RegExp(value, 'i').test(el.title)) 
        : productList;

    setState(list);
}

export const Main = ({ isOpenBasket, toggleBasket, changeOrderCount }) => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [orders, setOrders] = useState([]);

    const theme = useTheme();
    console.log(theme);

    const timer = useRef(null);

    useEffect(() => {
        setProducts(productList);
    }, []);
    
    const handleBuy = (product = {}) => {
        const { id, title, price } = product;

        setOrders((prevValues) => {

            const isExist = prevValues.findIndex((item) => item.id === id);

            if (isExist > -1) {
                return prevValues.reduce((arr, item) => (
                    [...arr, item.id === id ? { ...item, count: item.count + 1 } : item]
                ), []);
            }

            changeOrderCount(prevValues.length + 1);

            return [
                ...prevValues, 
                {
                    id,
                    title,
                    price,
                    count: 1 
                }
            ];
        })
    }

    const handleFilterProducts = (e) => {
        const { value } = e.target;
        
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            filter(value, setProducts)
        }, 400);

        setSearch(value);
    }

    return (
        <Container 
            sx={{
                mt: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}

        >
            <TextField 
                fullWidth
                sx={{
                    width: { xs: '100%', sm: '80%', md: '50%' }
                }}
                label="search"
                value={ search } 
                onChange={ handleFilterProducts } 
                variant="filled"
            />

            <Products products={ products }>
                {(product) => (
                    <ProductItem  {...product} onBuy={ () => handleBuy(product) } />
                )}
            </Products>

            <Drawer
                anchor="right"
                open={ isOpenBasket }
                onClose={ toggleBasket }
            >
                <Basket 
                    orders={ orders } 
                    onClose={ toggleBasket } 
                />
            </Drawer>

        </Container>
    );
}