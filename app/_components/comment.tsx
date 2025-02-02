import {
    Box,
    Typography,
    Card,
    CardContent,
}from '@mui/material';

const Comment = () => {
    const comments = [
        { text: "よかったです" },
        { text: "ふつうです" },
        { text: "わるかったです" },
    ];
    return (
        <div>
            <Box>
            {comments.map((comment, index) => (
                <Card key={index} sx={{ marginTop: 2 }}>
                    <CardContent>
                        <Typography variant="body2" component="p">
                            {comment.text}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
        </div>       
    );
}
export default Comment;