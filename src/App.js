import React, { useState } from 'react';
import { ThemeProvider } from './contexts/theme-provider';

import { NavbarPanel } from './components/navbar';
import { Main } from './components/main';
import { Box } from '@mui/material';

const makeAppStyles = (theme) => { 
  const { mode, background, grey } = theme.palette;
  
  return {
    background: mode === 'light' ? background.paper : grey[800],  
}};

function App() {

  const [isOpenBasket, setIsOpenBasket] = useState(false);
  const [orderCount, setOrderCount] = useState(0)

  const toggleBasket = () => {
    setIsOpenBasket((prevValue) => !prevValue);
  }

  const handleChangeOrderCount = (count) => {
    setOrderCount(count)
  }

  return (
    <ThemeProvider>
      <Box sx={makeAppStyles}
      >
        <NavbarPanel 
          toggleBasket={ toggleBasket }
          productCount={ orderCount }
        />
        
        <Main 
          isOpenBasket={ isOpenBasket } 
          toggleBasket={ toggleBasket }
          changeOrderCount={ handleChangeOrderCount }
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
