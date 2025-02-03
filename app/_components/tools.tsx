//設定アイコンとか、ユーザーアイコンとかいい感じにまとまってるやつ
//あるじゃん？それをコンポーネントにしてページに八つけたいときに使うやつ

import {
    IconButton,
    Avatar,
    Container,
    Box,
    Link,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const Tools = () => {
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    padding: '0rem',
                    justifyContent: 'right',
                }}
            >
                <Link
                    href="/settings"
                >
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </Link>
                <Link
                    href="/[accountId]"
                >
                    <Avatar>
                        {/* 
                        ユーザーアイコン 
                        プロフィールページで設定した画像を使えるようにする。
                     */}
                    </Avatar>
                </Link>
            </Box>
        </Container >
    );
}
export default Tools;