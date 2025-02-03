"use client";
import { Translator } from '../../_components/translation';
import { DeeplLanguages } from 'deepl';
import { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  OutlinedInput,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  Paper,
  Typography,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import Check from "../../_components/check";
import Text from "../../_components/teext";
import Radio from "../../_components/radio";
import Ster from "../../_components/steer";
import Slider from "../../_components/slideer";
import Nbutton from "../../_components/nbuttoon";

const formContent = {
  title: 'アンケートのデモ版についてのアンケート',
  description: 'アンケートのデモ版についてのアンケートを行っています！ぜひ回答お願いします！',
  questions: [
    { id: 1, component: <Check /> },
    { id: 2, component: <Text /> },
    { id: 3, component: <Radio /> },
    { id: 4, component: <Ster /> },
    { id: 5, component: <Slider /> },
    { id: 6, component: <Nbutton /> },
  ],
};

export default function Home() {
  const [myText, setMyText] = useState(formContent);
  const [open, setOpen] = useState(false);
  const [targetLanguage, setTargetLanguage] = useState<string>('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    setTargetLanguage(event.target.value);
  };

  const handleTranslate = async () => {
    if (targetLanguage) {
      try {
        const [titleResult, descriptionResult] = await Promise.all([
          Translator(myText.title, targetLanguage as DeeplLanguages),
          Translator(myText.description, targetLanguage as DeeplLanguages),
        ]);

        setMyText((prev) => ({
          ...prev,
          title: titleResult.text,
          description: descriptionResult.text,
        }));
      } catch (error) {
        console.error('Translation error:', error);
      }
    }
    handleClose();
  };

  return (
    <Container>
      <Box>
        <Box display="flex" alignItems="center">
          <IconButton color="primary" onClick={handleOpen}>
            <LanguageIcon />
          </IconButton>
          <Typography variant="body1" ml={1}>Language</Typography>
        </Box>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Select Language</DialogTitle>
        <DialogContent>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="language-select-label">Language</InputLabel>
            <Select
              labelId="language-select-label"
              value={targetLanguage}
              onChange={handleLanguageChange}
              input={<OutlinedInput label="言語" />}
            >
              <MenuItem value="EN-US">English</MenuItem>
              <MenuItem value="FR">Français</MenuItem>
              <MenuItem value="DE">Deutsch</MenuItem>
              <MenuItem value="ES">Español</MenuItem>
              <MenuItem value="IT">Italiano</MenuItem>
              <MenuItem value="PT-PT">Português</MenuItem>
              <MenuItem value="RU">Русский</MenuItem>
              <MenuItem value="ZH-CN">中文(简体)</MenuItem>
              <MenuItem value="ZH-TW">中文(繁体)</MenuItem>
              <MenuItem value="JA">日本語</MenuItem>
              <MenuItem value="KO">한국어</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleTranslate}>Translate</Button>
        </DialogActions>
      </Dialog>

      <Box mt={4}>
        <Paper sx={{ m: 2, p: 2 }}>
          <Typography variant="h6">{myText.title}</Typography>
        </Paper>
        <Paper sx={{ m: 2, p: 2 }}>
          <Typography variant="body1">{myText.description}</Typography>
        </Paper>
        {myText.questions?.map((question) => (
          <Box key={question.id}>
            {question.component}
          </Box>
        ))}
      </Box>
    </Container>
  );
}
