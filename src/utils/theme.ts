import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {},
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained',
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
            },
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    '&': {
                        backgroundColor: grey['200'],
                    },
                },
            },
        },
    },
});

export default theme;
