import { Container } from '@mui/material';
import Users from '../features/Users';

const RepositoriesExplorer = () => {
    return (
        <Container maxWidth="lg">
            <h1>Repositories explorer</h1>
            <Users />
        </Container>
    );
};

export default RepositoriesExplorer;
