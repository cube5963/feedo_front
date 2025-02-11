import React, { useState, useEffect } from 'react';

// Define the Question interface
interface Question {
    id: number;
    title: string;
    type: string;
    content: string;
}
import { Paper, CardContent, TextField, Select, MenuItem, FormControl, InputLabel, IconButton, Slider, Checkbox, FormControlLabel, RadioGroup, Radio, Button, Box, Rating } from '@mui/material';
import { Delete as DeleteIcon, ThumbUp as ThumbUpIcon, ThumbDown as ThumbDownIcon } from '@mui/icons-material';

interface FormComponentProps {
    id: number; // 追加: id プロパティ
    data: Question; // 追加: data プロパティ
    onDelete: () => void; // 親から渡される削除関数
    onUpdate: (id: number, updatedData: Question) => void; // 追加: onUpdate プロパティ
}

const FormComponent: React.FC<FormComponentProps> = ({ id, data, onDelete, onUpdate }) => {
    const [questionType, setQuestionType] = useState(data.type);
    const [questionText, setQuestionText] = useState(data.title);
    const [sliderValue, setSliderValue] = useState(50);
    const [checkboxValue, setCheckboxValue] = useState(false);
    const [radioValue, setRadioValue] = useState('');
    const [starValue, setStarValue] = useState(0);
    const [nButtonValue, setNButtonValue] = useState('');
    const [optionCount, setOptionCount] = useState(1);
    const [options, setOptions] = useState<string[]>([]);

    useEffect(() => {
        // Update options based on question type
        if (questionType === 'RADIO' || questionType === 'CHECKBOX') {
            setOptions(Array.from({ length: optionCount }, (_, i) => options[i] || ''));
        } else if (questionType === 'SLIDER') {
            const parsedContent = JSON.parse(data.content);
            const max = parsedContent[0] !== undefined ? parsedContent[0].toString() : '100';
            const min = parsedContent[1] !== undefined ? parsedContent[1].toString() : '0';
            const step = parsedContent[2] !== undefined ? parsedContent[2].toString() : '1';
            setOptions([max, min, step]);
        } else if (questionType === 'STAR_RATING') {
            const max = JSON.parse(data.content)[0] !== undefined ? JSON.parse(data.content)[0].toString() : '5';
            setOptions([max]);
            setOptionCount(parseInt(max));
        } else if (questionType === 'TWO_CHOICE' || questionType === 'TEXTBOX') {
            setOptions(['']);
        } else {
            setOptions([]);
        }
    }, [questionType, optionCount, data.content]);

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

    const handleStarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value);
        setStarValue(newValue);
        handleOptionChange(0, event.target.value);
    };

    const handleNButtonChange = (value: string) => {
        setNButtonValue(value);
    };

    const handleOptionCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const count = Math.min(10, Math.max(1, parseInt(event.target.value, 10)));
        setOptionCount(count); // Ensure count is a number
    };

    const handleOptionChange = (index: number, value: string) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
        handleUpdate(newOptions);
    };

    const handleUpdate = (updatedOptions = options) => {
        onUpdate(id, { id, title: questionText, type: questionType, content: JSON.stringify(updatedOptions) }); // 更新関数を呼び出す
    };

    return (
        <Paper sx={{ marginTop: 2, marginBottom: 2, padding: 2 }}>
            <CardContent>
                <Box display="flex" justifyContent="space-between" marginBottom={2}>
                    <TextField
                        label="質問内容"
                        value={questionText}
                        onChange={(e) => setQuestionText(e.target.value)}
                        onBlur={() => handleUpdate()}
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
                        onBlur={() => handleUpdate()}
                        label="質問を選択"
                    >
                        <MenuItem value="RADIO">ラジオボタン</MenuItem>
                        <MenuItem value="CHECKBOX">チェックボックス</MenuItem>
                        <MenuItem value="SLIDER">スライダー</MenuItem>
                        <MenuItem value="STAR_RATING">スター</MenuItem>
                        <MenuItem value="TWO_CHOICE">二択ボタン</MenuItem>
                        <MenuItem value="TEXTBOX">テキストボックス</MenuItem>
                    </Select>
                </FormControl>

                {(questionType === 'RADIO' || questionType === 'CHECKBOX') && (
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

                {(questionType === 'SLIDER') && (
                    <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
                        <TextField
                            type="number"
                            label="最大値"
                            value={options[0] || ''}
                            onChange={(e) => handleOptionChange(0, e.target.value)}
                            onBlur={() => handleUpdate()}
                            fullWidth
                        />
                        <TextField
                            type="number"
                            label="最小値"
                            value={options[1] || ''}
                            onChange={(e) => handleOptionChange(1, e.target.value)}
                            onBlur={() => handleUpdate()}
                            fullWidth
                        />
                        <TextField
                            type="number"
                            label="ステップ"
                            value={options[2] || ''}
                            onChange={(e) => handleOptionChange(2, e.target.value)}
                            onBlur={() => handleUpdate()}
                            fullWidth
                        />
                    </Box>
                )}

                {questionType === 'RADIO' && (
                    <RadioGroup value={radioValue} onChange={handleRadioChange}>
                        {Array.from({ length: Number(optionCount) }).map((_, index) => (
                            <FormControlLabel
                                key={index}
                                value={`option${index + 1}`}
                                control={<Radio disabled />}
                                label={
                                    <TextField
                                        variant="outlined"
                                        label={`オプション ${index + 1}`}
                                        value={options[index] || ''}
                                        onChange={(e) => handleOptionChange(index, e.target.value)}
                                        onBlur={() => handleUpdate()}
                                    />
                                }
                            />
                        ))}
                    </RadioGroup>
                )}

                {questionType === 'CHECKBOX' && (
                    <Box>
                        {Array.from({ length: Number(optionCount) }).map((_, index) => (
                            <FormControlLabel
                                key={index}
                                control={<Checkbox disabled checked={checkboxValue} onChange={handleCheckboxChange} />}
                                label={<TextField variant="outlined" label={`オプション ${index + 1}`} value={options[index] || ''} onChange={(e) => handleOptionChange(index, e.target.value)} onBlur={() => handleUpdate()} />}
                            />
                        ))}
                    </Box>
                )}

                {questionType === 'SLIDER' && (
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <TextField
                            label="Min"
                            variant="outlined"
                            value={options[1] || ''}
                            disabled
                        />
                        <Slider
                            value={sliderValue}
                            onChange={handleSliderChange}
                            min={parseInt(options[1]) || 0}
                            max={parseInt(options[0]) || 100}
                            step={parseInt(options[2]) || 1}
                            valueLabelDisplay="auto"
                            disabled
                            sx={{ flexGrow: 1, marginLeft: 2, marginRight: 2 }}
                        />
                        <TextField
                            label="Max"
                            variant="outlined"
                            value={options[0] || ''}
                            disabled
                        />
                    </Box>
                )}

                {questionType === 'STAR_RATING' && (
                    <Box display="flex" justifyContent="center" marginBottom={2}>
                        <TextField
                            type="number"
                            label="最大値"
                            value={options[0] || ''}
                            onChange={(e) => handleOptionChange(0, e.target.value)}
                            onBlur={() => handleUpdate()}
                            fullWidth
                        />
                    </Box>
                )}

                {questionType === 'STAR_RATING' && (
                    <Box display="flex" justifyContent="center" marginBottom={2}>
                        <Rating
                            value={starValue}
                            onChange={(event, newValue) => handleStarChange({ target: { value: newValue?.toString() || '0' } } as React.ChangeEvent<HTMLInputElement>)}
                            max={parseInt(options[0]) || 5}
                            size="large" // スターの大きさを大きく設定
                            disabled
                        />
                    </Box>
                )}

                {questionType === 'TWO_CHOICE' && (
                    <Box>
                        <TextField
                            label="二択ボタン"
                            variant="outlined"
                            value={options[0] || ''}
                            onChange={(e) => handleOptionChange(0, e.target.value)}
                            onBlur={() => handleUpdate()}
                            fullWidth
                        />
                    </Box>
                )}

                {questionType === 'TEXTBOX' && (
                    <Box>
                        <TextField
                            label="テキストボックス"
                            variant="outlined"
                            value={options[0] || ''}
                            onChange={(e) => handleOptionChange(0, e.target.value)}
                            onBlur={() => handleUpdate()}
                            fullWidth
                        />
                    </Box>
                )}
            </CardContent>
        </Paper>
    );
};

export default FormComponent;