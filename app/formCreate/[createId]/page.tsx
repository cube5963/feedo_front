"use client";
import React, { useState } from "react";
import { Box, Drawer, List, ListItem, ListItemText, AppBar, Tabs, Tab, Paper, TextField, Toolbar, Typography, ListItemButton } from "@mui/material";
import { Save, Share, Visibility, AddCircle } from "@mui/icons-material"; // アイコンのインポート
import Form from "../../_components/form";

const FormBuilderPage = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [formState, setFormState] = useState({ title: "", description: "" });

    const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setActiveTab(newValue);
    };

    const drawerItems = [
        { text: "保存", icon: <Save />, action: () => alert("フォームが保存されました") },
        { text: "共有", icon: <Share />, action: () => alert("押されたときにモーダルにしてリンクを表示させる") },
        { text: "プレビュー", icon: <Visibility />, action: () => alert("押されたときにViewページに飛ばす") },
        { text: "新規の質問追加", icon: <AddCircle />, action: () => alert("新しい質問が追加されました") },
    ];

    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            {/* Drawer */}
            <Drawer
                variant="permanent"
                sx={{
                    flexShrink: 0,
                    width: 240,
                    [`& .MuiDrawer-paper`]: {
                        width: 240,
                        boxSizing: "border-box",
                        marginTop: 10, // paper部分の位置を調整
                    },
                }}
            >
                <Toolbar />
                <List>
                    {drawerItems.map((item, index) => (
                        <ListItem key={index} onClick={item.action}>
                            <ListItemButton sx={{ m: 0, p: 2 }}>
                                {item.icon}
                                <ListItemText primary={item.text} sx={{ ml: 2 }} />
                            </ListItemButton>
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
                        <div>
                            <Paper elevation={3} sx={{ p: 3 }}>
                                <TextField
                                    fullWidth
                                    label="フォームタイトル"
                                    variant="outlined"
                                    margin="normal"
                                    value={formState.title}
                                    onChange={(e) => setFormState({ ...formState, title: e.target.value })}
                                />
                                <TextField
                                    fullWidth
                                    label="フォームの説明"
                                    variant="outlined"
                                    margin="normal"
                                    multiline
                                    rows={4}
                                    value={formState.description}
                                    onChange={(e) => setFormState({ ...formState, description: e.target.value })}
                                />
                            </Paper>
                            <Form />
                        </div>
                    )}
                    {activeTab === 1 && <Typography>統計情報を表示するセクション</Typography>}
                    {activeTab === 2 && <Typography>設定項目を表示するセクション</Typography>}
                </Box>
            </Box>
        </Box>
    );
};

export default FormBuilderPage;
