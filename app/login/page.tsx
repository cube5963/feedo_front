"use client";
import {
    Box,
    Button,
    Typography,
    TextField,
    Paper,
    Container,
    Link,
} from "@mui/material";

const Login = () => {




    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    fiexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2,
                    maxWidth: 400,
                    margin: "auto",
                }}>
                <Paper
                    sx={{
                        padding: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <Typography
                        variant="h4"
                        sx={{ marginBottom: 2 }}
                    >
                        Login
                    </Typography>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        type="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        sx={{ marginBottom: 2 }}
                    />
                    <Button
                        onClick={() => {
                            window.location.href = "/formStore/[storeId]";
                        }}
                        //disabled={/*loading*/}
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                            fontSize: { xs: "0.875rem", sm: "1rem" },
                            padding: { xs: "8px", sm: "12px" },
                        }}
                    >
                        {/*loading ? "Loading..." : "Login with Google"*/}ログイン{/*ここのログイン方法はあとで教えて*/}
                    </Button>
                </Paper>
            </Box>
            <Link 
            href="/signup"
            sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: 2,
            }}
            >
                <Button
                    variant="text"
                    color="primary"
                    sx={{
                        marginTop: 2, 
                    }}
                >
                    アカウントをお持ちでない方はこちら
                </Button>   
            </Link>
        </Container >
    );
};
export default Login;