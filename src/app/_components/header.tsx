import {
    AppBar,
    Container,
    Link,
} from '@mui/material';
const Header = () => {
    return (
        <header>
            <Container>
                <AppBar
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '1rem',
                        backgroundColor: 'black',
                        zIndex: 9999,
                    }}
                >
                    <Link href="/" sx={{ color: 'white', textDecoration: 'none' }}>
                        <h1>FEEDO</h1>
                    </Link>
                </AppBar>
            </Container>
        </header>
    );
};
export default Header;