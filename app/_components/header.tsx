
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

// Header Component
const Header: React.FC = () => {
    return (
        <AppBar
        position="static"
        style={{ 
            backgroundColor: "#000" 
        }}
        >
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    FEEDO
                </Typography>
                <Button color="inherit">About</Button>
                <Button color="inherit">News</Button>
                <Button color="inherit">Products</Button>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Signin</Button>
            </Toolbar>
        </AppBar>
    );
};
export default Header;