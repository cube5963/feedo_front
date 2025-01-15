"use client";
import React, { useState } from 'react';
import {
    Box,
    Drawer,
    AppBar,
    CssBaseline,
    Toolbar,
    List,
    Typography,
    Divider,
    ListItem,
    ListItemButton,
    ListItemText,
    TextField,
    Paper,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Menu from './../_components/formaddmenu'; // Menuコンポーネント

const sidebarItems = [
    { text: '　保存', icon: <SaveIcon /> },
    { text: '　公開', icon: <SendIcon /> },
    { text: '　共有', icon: <ShareIcon /> },
    { text: '　プレビュー', icon: <RemoveRedEyeOutlinedIcon /> },
];

const otherItems = [
    { text: '　質問を追加' },
    { text: '　AIに聞く' },
];

const drawerWidth = 240;

export default function ClippedDrawer() {
    const [openMenu, setOpenMenu] = useState(false); // Menuを開くための状態

    // メニューを開く関数
    const handleMenuOpen = () => {
        setOpenMenu(true);
    };

    // メニューを閉じる関数
    const handleMenuClose = () => {
        setOpenMenu(false);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    zIndex: 1300, // AppBarのz-index
                }}
                style={{
                    backgroundColor: '#000',
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        FEEDO　ヘッダー部分だから後でナビボタン追加する
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {sidebarItems.map((item, index) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    {item.icon}
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {otherItems.map((item, index) => (
                            <ListItem key={item.text} disablePadding>
                                {/* 空白文字のアイテムにはクリックイベントを設定しない */}
                                <ListItemButton onClick={item.text.trim() !== '' ? handleMenuOpen : undefined}>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    marginLeft: `${drawerWidth}px`, // サイドバー分のスペースを確保
                    marginBottom: '64px', // BottomNavigationの高さ分だけ下げる
                }}
            >
                <Toolbar />
                <Box sx={{ textAlign: 'center', mt: 3, mb: 3 }}>
                    <TextField
                        label="Title" // ここは後でformCreateSettingの時に名前設定してそれを持ってくるようにする
                        variant="standard"
                        fullWidth
                    />
                </Box>
                <Paper>
                    <Typography variant="h5" component="div" sx={{ p: 2 }}>
                        ここにコンテンツを入れる
                    </Typography>
                </Paper>
            </Box>

            {/* Menu ダイアログ */}
            <Dialog open={openMenu} onClose={handleMenuClose}>
                <DialogTitle>新規の質問を追加</DialogTitle>
                <DialogContent>
                    <Menu /> {/* Menu コンポーネントをここに表示 */}
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'flex-start', px: 3,py: 2 }}>
                    <Button variant="contained" sx={{ mr: 6 }}>
                        作成
                    </Button>
                    <Button onClick={handleMenuClose} color="primary">
                        閉じる
                    </Button>
                </DialogActions>

            </Dialog>
        </Box>
    );
}
