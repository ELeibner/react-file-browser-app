import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Grid } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

export function Header() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const isRoot = pathname.endsWith('/0') || pathname.endsWith('/');

    return (
        <Grid
            container
            sx={{ padding: '16px 24px 0px 24px', alignItems: 'center' }}
        >
            <Grid item>
                {!isRoot && (
                    <ArrowBackIcon
                        key={'arrow-back'}
                        onClick={() => navigate(-1)}
                        style={{ cursor: 'pointer' }}
                        data-testid="arrow-back-icon"
                    />
                )}
            </Grid>
        </Grid>
    );
}
