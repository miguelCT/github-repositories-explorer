import { Container } from '@mui/material';
import Users from './Users';

const App = () => {
    return (
        <Container maxWidth="lg">
            <h1>Repositories explorer</h1>
            <Users />
        </Container>
    );
};

export default App;
