import {
    Link,
    Button,
    TextField,
    Typography,
    Box,
    Container,
    Card,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Tools from '../../_components/tools';
const Store = () => {
    const form = { title: "フォームタイトル", description: "フォームの説明" };
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    padding: '1rem',
                }}
            >
                <Tools />
            </Box>
            <Box>
                <TextField
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    sx={{ marginBottom: 2 }}
                    InputProps={{
                        startAdornment: (
                            <SearchIcon />
                        ),
                    }}
                />
                {/* 名前を検索欄に入れたら最近使用したものから順番に表示 */}
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2,
                    maxWidth: 2000,
                    margin: 'auto',
                }}>
                <Typography
                    variant="h4"
                    sx={{ marginBottom: 2 }}
                >
                    作成したフォーム一覧
                </Typography>
                <Link
                    href="/formCreate/[CreateId]"
                >
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ marginBottom: 2 }}
                    >
                        新しいフォームを作成
                    </Button>
                </Link>
                {/* 
                        ここに作成したフォームの一覧が表示される 
                        画面のサイズにもよるけど横の数は最大で3つまで
                        DBからデータ取得してmap使って表示できたはず
                    */}
                <Card
                    sx={{
                        padding: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 'auto',
                        maxWidth: 350,
                    }}>
                    <Typography
                        variant="h5"
                        sx={{ marginBottom: 2 }}
                    >
                        {form.title}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ marginBottom: 2 }}
                    >
                        説明：{form.description}
                    </Typography>
                    <Link
                        href="/formStore/[StoreId]/form/[FormId]"
                        sx={{ color: 'black', textDecoration: 'none' }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                        >
                            作成したフォームを見る
                        </Button>
                    </Link>
                </Card>
            </Box>
        </Container>
    );
};
export default Store;