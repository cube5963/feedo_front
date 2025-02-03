"use client";
import {
    Box,
    Button,
    Typography,
    TextField,
    Paper,
    Container,
    Link,
    IconButton,
    InputAdornment,
} from "@mui/material";
import * as React from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { login } from "../lib/api/login";

const Login = () => {
    const [email, setEmail] = React.useState(""); // emailの状態を管理
    const [paFssword, setPassword] = React.useState(""); // passwordの状態を管理
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    // ログインボタンが押されたときに入力内容を出力
    const handleLogin = async () => {
        await login(email, password);
    };

    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column", // 修正: "fiexDirection" -> "flexDirection"
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
                    {/* Email入力 */}
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        sx={{ marginBottom: 2 }}
                        value={email} // stateをvalueとして渡す
                        onChange={(e) => setEmail(e.target.value)} // 入力が変更された時にstateを更新
                    />
                    {/* Password入力 */}
                    <TextField
                        label="Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        sx={{ marginBottom: 2 }}
                        value={password} // stateをvalueとして渡す
                        onChange={(e) => setPassword(e.target.value)} // 入力が変更された時にstateを更新
                    />
                    {/* ログインボタン */}
                    <Button
                        onClick={handleLogin} // ボタンクリック時にhandleLogin関数を実行
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                            fontSize: { xs: "0.875rem", sm: "1rem" },
                            padding: { xs: "8px", sm: "12px" },
                        }}
                    >
                        ログイン
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
        </Container>
    );
};

export default Login;
