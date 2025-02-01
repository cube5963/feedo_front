"use client";
import React, { useState } from "react";
import { Box, Drawer, List, ListItem, ListItemText, AppBar, Tabs, Tab, Paper, TextField, Toolbar, Typography, ListItemButton, Link } from "@mui/material";
import { Save, Share, Visibility, AddCircle } from "@mui/icons-material"; // アイコンのインポート
import Form from "../../_components/form"; // Formコンポーネント
import Raadio from "../../_components/radio"; // Radioコンポーネント
import Cheeck from "../../_components/check"; // Checkコンポーネント
import Slideer from "../../_components/slideer"; // Sliderコンポーネント
import Nbuttoon from "../../_components/nbuttoon"; // Nbuttonコンポーネント
import Teext from "../../_components/teext"; // Textコンポーネント

const FormBuilderPage = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [formState, setFormState] = useState({ title: "", description: "" });
    const [forms, setForms] = useState<any[]>([]); // 追加されたフォームを保持する状態

    const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setActiveTab(newValue);
    };

    const drawerItems = [
        { text: "保存", icon: <Save />, action: () => alert("フォームが保存されました") },
        { text: "共有", icon: <Share />, action: () => alert("押されたときにモーダルにしてリンクを表示させる") },
        { text: "プレビュー", icon: <Visibility />, action: () => alert("押されたときにViewページに飛ばす") },
        { text: "新規の質問追加", icon: <AddCircle />, action: () => addNewForm() }, // 新しい質問追加のアクション
    ];

    const addNewForm = () => {
        setForms((prevForms) => [...prevForms, { id: Date.now() }]); // 新しいフォームを追加
    };

    const deleteForm = (id: number) => {
        setForms((prevForms) => prevForms.filter((form) => form.id !== id)); // 特定のフォームを削除
    };



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
                            {/* 動的に追加されたフォームを表示 */}
                            {forms.map((form, index) => (
                                <div key={index}><Form key={form.id} onDelete={() => deleteForm(form.id)} /></div>
                            ))}
                        </div>
                    )}
                    {activeTab === 1 && (//統計場面の場合
                        <div>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Link href="/" underline="hover">
                                    <Typography variant="h6">前の質問へ</Typography>
                                </Link>
                                <Link href="/" underline="hover">
                                    <Typography variant="h6">次の質問へ</Typography>
                                </Link>
                            </Box>
                            <Box sx={{ display: "flex"}}>
                                <Paper sx={{ p: 2, marginTop: 2, width: "100%" }}>
                                    <Typography variant="body1">質問内容をここにたくさんたくさん</Typography>
                                </Paper>
                            </Box>
                            <Box sx={{ display: "flex", marginTop: 2 }}>{/* Radio,Check,nButtonの場合 */}
                                <Paper sx={{ p: 2, marginTop: 2, width: "100%" }}>
                                    <Typography variant="body1">選択肢1</Typography>
                                </Paper>
                            </Box>
                            <Box sx={{ display: "flex", marginTop: 2 }}>{/* Starの場合*/}
                                <Paper sx={{ p: 2, marginTop: 2, width: "100%" }}>
                                    <Typography variant="body1">選択肢1</Typography>
                                </Paper>
                            </Box>
                        </div>
                    )}
                    {activeTab === 2 && <Typography>設定項目を表示するセクション</Typography>}
                </Box>
            </Box>
        </Box>

    );
};

export default FormBuilderPage;
