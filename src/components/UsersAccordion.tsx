import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { type PropsWithChildren, type FC } from 'react';
import { type User } from 'utils/types';

type UsersAccordionProps = {
    userName: User['username'];
};

const UsersAccordion: FC<PropsWithChildren<UsersAccordionProps>> = ({
    userName,
    children,
}) => {
    return (
        <Accordion
            sx={{
                '& + &': {
                    mt: 2,
                },
            }}
            slotProps={{
                transition: {
                    unmountOnExit: true,
                },
            }}
        >
            <AccordionSummary>{userName}</AccordionSummary>
            <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
    );
};

export default UsersAccordion;
