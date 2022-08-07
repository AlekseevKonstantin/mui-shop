import { useContext } from 'react';
import { ColorModeContext } from 'contexts/theme-provider';

export const useToggleMode = () => {
    const mode = useContext(ColorModeContext);

    if (mode === undefined) {
        throw new Error('You must use useToggleMode with ToggleColorModeContext');
    }

    return mode;
}