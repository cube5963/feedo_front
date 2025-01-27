import {
    Button,
    Container,
    Box,
    TextField,
    Typography,
    Paper,
    Link,
} from "@mui/material";

const SignUp = () => {
    const handleSignUp = (): void => {
        /*　
        ここにボタンを押したときの処理を書く。
        記入欄がすべて埋まってないならconsole.logでエラーを出す。
        すでにEmail, Passwordが登録されている場合は、既に登録されています。をだす。
        */
    }

    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
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
                        Sign Up
                    </Typography>
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Password確認用"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        sx={{ marginBottom: 2 }}
                    />
                    <Button
                        //onClick={/*handleSignup*/}
                        //disabled={/*loading*/}
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ marginBottom: 2 }}
                    >
                        Sign Up
                    </Button>
                </Paper>
                <Link
                    href="/login"
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
                        すでにアカウントをお持ちですか？
                    </Button>
                </Link>
            </Box>
        </Container>
    );
};

export default SignUp;