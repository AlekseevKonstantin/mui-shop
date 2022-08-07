import { useContext } from 'react';
import { ColorModeServicesContext } from 'contexts/theme-provider';

export const useToggleModeServices = () => {
    const toggleMode = useContext(ColorModeServicesContext);

    if (toggleMode === undefined) {
        throw new Error('You must use useToggleModeServices with ToggleColorModeServicesContext');
    }

    return toggleMode;
}