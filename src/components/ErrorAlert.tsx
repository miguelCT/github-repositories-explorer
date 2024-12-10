import React, { type FC } from 'react';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';

type ErrorAlertProps = {
    message?: string;
    onRetry?: () => void;
};
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
