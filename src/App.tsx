import { CircularProgress } from '@mui/material';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));

function App() {
    return (
        <Router>
            <Suspense fallback={<CircularProgress />}>
                <Routes>
                    {['/', '/folder/:id'].map((item, i) => (
                        <Route path={item} element={<Home />} key={i} />
                    ))}
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
