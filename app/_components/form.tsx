import React, { useState } from 'react';
import { Paper, CardContent, TextField, Select, MenuItem, FormControl, InputLabel, IconButton, Slider, Checkbox, FormControlLabel, RadioGroup, Radio, Button, Box, Rating } from '@mui/material';
import { Delete as DeleteIcon, ThumbUp as ThumbUpIcon, ThumbDown as ThumbDownIcon } from '@mui/icons-material';

interface FormComponentProps {
    onDelete: () => void; // 親から渡される削除関数
}

const FormComponent: React.FC<FormComponentProps> = ({ onDelete }) => {
    const [questionType, setQuestionType] = useState('');
    const [questionText, setQuestionText] = useState('');
    const [sliderValue, setSliderValue] = useState(50);
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [radioValue, setRadioValue] = useState('');
    const [starValue, setStarValue] = useState(0);
    const [nButtonValue, setNButtonValue] = useState('');
    const [optionCount, setOptionCount] = useState(1);

    const handleDelete = () => {
        onDelete(); // 親から渡された削除関数を呼び出す
    };

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setSliderValue(newValue as number);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckboxValue(event.target.checked);
    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue(event.target.value);
    };

    const handleStarChange = (newValue: number) => {
        setStarValue(newValue);
    };

    const handleNButtonChange = (value: string) => {
        setNButtonValue(value);
    };

    const handleOptionCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const count = Math.min(10, Math.max(1, parseInt(event.target.value, 10)));
        setOptionCount(count);
    };

    return (
        <Paper sx={{ marginTop: 2, marginBottom: 2, padding: 2 }}>
            <CardContent>
                <Box display="flex" justifyContent="space-between" marginBottom={2}>
                    <TextField
                        label="質問内容"
                        value={questionText}
                        onChange={(e) => setQuestionText(e.target.value)}
                        fullWidth
                    />
                    <IconButton onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                </Box>

                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                    <InputLabel>質問構成を選択</InputLabel>
                    <Select
                        value={questionType}
                        onChange={(e) => setQuestionType(e.target.value)}
                        label="質問を選択"
                    >
                        <MenuItem value="radio">ラジオボタン</MenuItem>
                        <MenuItem value="checkbox">チェックボックス</MenuItem>
                        <MenuItem value="slider">スライダー</MenuItem>
                        <MenuItem value="star">スター</MenuItem>
                        <MenuItem value="nbutton">二択ボタン</MenuItem>
                        <MenuItem value="textbox">テキストボックス</MenuItem>
                    </Select>
                </FormControl>

                {(questionType === 'radio' || questionType === 'checkbox') && (
                    <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
                        <TextField
                            type="number"
                            label="選択肢の個数"
                            value={optionCount}
                            onChange={handleOptionCountChange}
                            fullWidth
                            inputProps={{ min: 1, max: 10 }}
                        />
                    </Box>
                )}

                {questionType === 'radio' && (
                    <RadioGroup value={radioValue} onChange={handleRadioChange}>
                        {Array.from({ length: optionCount }).map((_, index) => (
                            <FormControlLabel
                                key={index}
                                value={`option${index + 1}`}
                                control={<Radio disabled />}
                                label={
                                <TextField 
                                variant="outlined" 
                                label={`オプション ${index + 1}`}
                                />
                            }
                            />
                        ))}
                    </RadioGroup>
                )}

                {questionType === 'checkbox' && (
                    <Box>
                        {Array.from({ length: optionCount }).map((_, index) => (
                            <FormControlLabel
                                key={index}
                                control={<Checkbox disabled checked={checkboxValue} onChange={handleCheckboxChange} />}
                                label={<TextField variant="outlined" label={`オプション ${index + 1}`} />}
                            />
                        ))}
                    </Box>
                )}

                {questionType === 'slider' && (
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <TextField
                            label="Min"
                            variant="outlined"
                        />
                        <Slider
                            value={sliderValue}
                            onChange={handleSliderChange}
                            min={0}
                            max={100}
                            valueLabelDisplay="auto"
                            disabled
                            sx={{ flexGrow: 1, marginLeft: 2, marginRight: 2 }}
                        />
                        <TextField
                            label="Max"
                            variant="outlined"

                        />
                    </Box>
                )}

                {questionType === 'star' && (
                    <Box display="flex" justifyContent="center" marginBottom={2}>
                        <Rating
                            value={starValue}
                            onChange={(event, newValue) => handleStarChange(newValue as number)}
                            max={5}
                            size="large" // スターの大きさを大きく設定
                            disabled
                        />
                    </Box>
                )}

                {questionType === 'nbutton' && (
                    <Box display="flex" justifyContent="center" gap={3} marginBottom={2}>
                        <Button
                            onClick={() => handleNButtonChange('like')}
                            variant="contained"
                            color="primary"
                            disabled
                            sx={{
                                minWidth: 100,
                                height: 100,
                                borderRadius: 4,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#4caf50',
                            }}
                        >
                            <ThumbUpIcon />
                        </Button>
                        <Button
                            onClick={() => handleNButtonChange('dislike')}
                            variant="contained"
                            color="secondary"
                            disabled
                            sx={{
                                minWidth: 100,
                                height: 100,
                                borderRadius: 4,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#f44336',
                            }}
                        >
                            <ThumbDownIcon />
                        </Button>
                    </Box>
                )}

                {questionType === 'textbox' && (
                    <TextField
                        label="ここに記入してください"
                        fullWidth
                        multiline
                        rows={4}
                        disabled
                    />
                )}
            </CardContent>
        </Paper>
    );
};

export default FormComponent;
