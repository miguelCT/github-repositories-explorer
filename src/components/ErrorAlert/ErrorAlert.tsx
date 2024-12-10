import RefreshIcon from '@mui/icons-material/Refresh';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { type FC } from 'react';

export type ErrorAlertProps = {
    /**
     * The error message to display. If no message is provided, the alert is hidden.
     */
    message?: string;
    /**
     * A callback to call when the retry button is clicked. If no callback is
     * provided, the retry button is not shown.
     */
    onRetry?: () => void;
};
/**
 * A component that displays an error alert with an optional retry button.
 */
const ErrorAlert: FC<ErrorAlertProps> = ({ message, onRetry }) => {
    return (
        <Collapse in={!!message}>
            <Alert
                severity="error"
                action={
                    onRetry && (
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={onRetry}
                        >
                            <RefreshIcon fontSize="inherit" />
                        </IconButton>
                    )
                }
                sx={{ mb: 2 }}
            >
                Oops, something went wrong: {message}
            </Alert>
        </Collapse>
    );
};

export default ErrorAlert;
