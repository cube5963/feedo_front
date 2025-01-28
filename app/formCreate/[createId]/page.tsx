"use client";
import React from "react";

import { Box, Drawer, List, ListItem, ListItemText, AppBar, Tabs, Tab, Paper, TextField, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

const FormBuilderPage = () => {
    const [activeTab, setActiveTab] = useState(0);

    interface TabChangeEvent extends React.ChangeEvent<{}> {}

    const handleTabChange = (event: TabChangeEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            {/* Drawer */}
            <Drawer
                variant="permanent"
                sx={{ 
                    marginTop: 8,
                    width: 240, 
                    flexShrink: 0, 
                    [`& .MuiDrawer-paper`]: 
                    { width: 240, boxSizing: "border-box" } }}
            >
                <Toolbar />
                <List>
                    {[
                        { text: "保存", action: () => console.log("保存 clicked") },
                        { text: "共有", action: () => console.log("共有 clicked") },
                        { text: "プレビュー", action: () => console.log("プレビュー clicked") },
                        { text: "新規の質問追加", action: () => console.log("新規の質問追加 clicked") },
                    ].map((item, index) => (
                        <ListItem key={index} onClick={item.action}>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            {/* Main Content */}
            <Box sx={{ flexGrow: 1, ml: 0 }}>
                {/* Tabs */}
                <AppBar position="static" color="default">
                    <Tabs 
                    value={activeTab} 
                    onChange={handleTabChange} 
                    indicatorColor="primary" 
                    textColor="primary"
                    sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                    >
                        <Tab label="作成" sx={{ flex: 1, textAlign: "center" }} />
                        <Tab label="統計" sx={{ flex: 1, textAlign: "center" }} />
                        <Tab label="設定" sx={{ flex: 1, textAlign: "center" }} />
                    </Tabs>
                </AppBar>

                {/* Main Section */}
                <Box sx={{ p: 3 }}>
                    {activeTab === 0 && (
                        <Paper elevation={3} sx={{ p: 3 }}>
                            <Typography variant="h6" gutterBottom>
                                フォームのタイトルと説明
                            </Typography>
                            <TextField fullWidth label="タイトル" variant="outlined" margin="normal" />
                            <TextField
                                fullWidth
                                label="説明"
                                variant="outlined"
                                margin="normal"
                                multiline
                                rows={4}
                            />
                        </Paper>
                    )}
                    {activeTab === 1 && <Typography>統計情報を表示するセクション</Typography>}
                    {activeTab === 2 && <Typography>設定項目を表示するセクション</Typography>}
                </Box>
            </Box>
        </Box>
    );
};

export default FormBuilderPage;