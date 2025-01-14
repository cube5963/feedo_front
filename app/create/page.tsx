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
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Menu from './../_components/formaddmenu'; // Menuコンポーネント

const actions = [
    { icon: <InsertDriveFileIcon />, name: '新規の質問を追加', action: 'openMenu' },
    { icon: <SaveIcon />, name: '保存' },
    { icon: <SendIcon />, name: '公開' },
    { icon: <ShareIcon />, name: '共有' },
];

const drawerWidth = 240;

export default function ClippedDrawer() {
    const [openMenu, setOpenMenu] = useState(false); // Menuを開くための状態

    const handleMenuOpen = () => {
        setOpenMenu(true);
    };

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
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={text} />
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

            {/* SpeedDial ボタン */}
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={action.action === 'openMenu' ? handleMenuOpen : undefined} // '新規の質問を追加' の場合のみ Menu を開く
                    />
                ))}
            </SpeedDial>

            {/* Menu ダイアログ */}
            <Dialog open={openMenu} onClose={handleMenuClose}>
                <DialogTitle>新規の質問を追加</DialogTitle>
                <DialogContent>
                    <Menu /> {/* Menu コンポーネントをここに表示 */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleMenuClose} color="primary">
                        閉じる
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
