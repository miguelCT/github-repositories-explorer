import UserList from 'pages/UserList';
import { Container, Typography } from '@mui/material';

const App = () => {
    return (
        <Container maxWidth="lg">
            <h1>Repositories explorer</h1>
            <UserList />
        </Container>
    );
};

export default App;
