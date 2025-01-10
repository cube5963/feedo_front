
import React from "react";
import { Typography, Box } from "@mui/material";

// Footer Component
const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                textAlign: "center",
                backgroundColor: "#f5f5f5",
                mt: "auto",
            }}
        >
            <Typography variant="body2" color="textSecondary">
                © 2025 FEEDO. All rights reserved.
            </Typography>
        </Box>
    );
};
export default Footer;