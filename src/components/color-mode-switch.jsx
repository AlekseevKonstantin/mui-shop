import React from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { IconButton } from '@mui/material';

import { useToggleModeServices } from 'hooks/use-toggle-mode-services';
import { useToggleMode } from 'hooks/use-toggle-mode';

export const ColorModeSwitch = () => {
    const toggleColorMode = useToggleModeServices();
    const mode = useToggleMode();

    return (
        <IconButton sx={{ ml: 1 }} onClick={ toggleColorMode } color="inherit">
            { mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon /> }
        </IconButton>
    );
}
