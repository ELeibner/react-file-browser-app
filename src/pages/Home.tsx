import { Alert, Box, Container, CssBaseline } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ItemList } from '../components';
import { Header } from '../components/Header';
import { useData } from '../hooks';

export default function Home() {
    const { id } = useParams();
    const data = useData(!!id ? Number(id) : 0); //set default to 0 when route is '/'

    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm" data-testid="container">
                <Box
                    sx={{
                        background: '#8080802e',
                        borderRadius: '16px'
                    }}
                    data-testid="box"
                >
                    {!!data.error && (
                        <Alert severity="error" data-testid="error-message">
                            {'Something went wrong, please try again.'}
                        </Alert>
                    )}
                    <Header />
                    <ItemList {...data} />
                </Box>
            </Container>
        </>
    );
}
