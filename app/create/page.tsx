import React from 'react';
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
    BottomNavigation,
    BottomNavigationAction,
} from '@mui/material';

const drawerWidth = 240;

export default function ClippedDrawer() {
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
                <Box sx={{ textAlign: 'center', mt: 3 }}>
                    <TextField
                        label="Title" // ここは後でformCreateSettingの時に名前設定してそれを持ってくるようにする
                        variant="standard"
                        fullWidth
                    />
                </Box>
            </Box>
            <BottomNavigation
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`, // サイドバーの分を引いた幅に設定
                    height: '10rem', // 高さを指定
                    position: 'fixed',
                    bottom: 0,
                    left: `${drawerWidth}px`, // サイドバーの隣から表示する
                    zIndex: 1400, // 高いz-indexを設定
                    borderRadius: '12px', // 角を丸くする
                    backgroundColor: '#fafafa', // 背景色を変更
                    padding: '2em', // ボタンの間隔を調整
                    boxShadow: 3, // ボタンに影をつける
                }}
            >
                <BottomNavigationAction label="あああ" icon="📥" />
                <BottomNavigationAction label="いいい" icon="📤" />
                <BottomNavigationAction label="ううう" icon="📜" />
            </BottomNavigation>
        </Box>
    );
}
