import { Container } from '@mui/material';
import UserList from 'pages/UserList';

const App = () => {
    return (
        <Container maxWidth="lg">
            <h1>Repositories explorer</h1>
            <UserList />
        </Container>
    );
};

export default App;
