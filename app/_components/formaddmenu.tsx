import * as React from 'react';
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import NotesIcon from '@mui/icons-material/Notes';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';

const questionTypes = [
    { value: 10, label: 'ラジオボタン', icon: <RadioButtonCheckedIcon /> },
    { value: 20, label: 'チェックボックス', icon: <CheckBoxIcon /> },
    { value: 30, label: 'スライダー', icon: <LinearScaleIcon /> },
    { value: 40, label: 'テキストボックス', icon: <NotesIcon /> },
    { value: 50, label: '二択評価', icon: <ThumbsUpDownIcon /> },
    { value: 60, label: '星評価', icon: <StarOutlineIcon /> },
];

export default function Menu() {
    const [selectedType, setSelectedType] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedType(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <br />
            <FormControl fullWidth>
                <InputLabel id="question-type-label">質問の種類</InputLabel>
                <Select
                    labelId="question-type-label"
                    id="question-type-select"
                    value={selectedType}
                    label="質問の種類"
                    onChange={handleChange}
                    renderValue={(value) => {
                        const selected = questionTypes.find((type) => type.value === parseInt(value, 10));
                        return (
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                {selected?.icon}
                                <Box sx={{ ml: 1 }}>{selected?.label}</Box>
                            </Box>
                        );
                    }}
                >
                    {questionTypes.map((type) => (
                        <MenuItem key={type.value} value={type.value}>
                            <ListItemIcon>{type.icon}</ListItemIcon>
                            <ListItemText primary={type.label} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
