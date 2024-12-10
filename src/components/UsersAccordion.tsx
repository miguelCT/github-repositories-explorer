import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { type PropsWithChildren, type FC } from 'react';
import { type UserSearchItem } from 'utils/types';

import ExpandIcon from '@mui/icons-material/ExpandMore';

type UsersAccordionProps = {
    userName: UserSearchItem['login'];
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
            <AccordionSummary expandIcon={<ExpandIcon />}>
                {userName}
            </AccordionSummary>
            <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
    );
};

export default UsersAccordion;
