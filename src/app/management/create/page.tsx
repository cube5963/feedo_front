"use client";
import React, { useState } from "react";
import { Box, Drawer, List, ListItem, ListItemText, Paper, TextField, Toolbar, ListItemButton } from "@mui/material";
import { Save, Share, Visibility, AddCircle } from "@mui/icons-material";
import FormComponent from "../../_components/form";

interface Question {
    id: number;
    title: string;
    type: string;
    content: string;
}

const FormBuilderPage = () => {
    const [formState, setFormState] = useState({ title: "", description: "" });
    const [questions, setQuestions] = useState<Question[]>([]);

    const addNewForm = () => {
        setQuestions([
            ...questions,
            {
                id: Date.now(),
                title: "",
                type: "",
                content: "[]"
            }
        ]);
    };

    const updateForm = (id: number, updatedData: Question) => {
        setQuestions(questions.map((q) => (q.id === id ? updatedData : q)));
    };

    const deleteForm = (id: number) => {
        setQuestions(questions.filter((q) => q.id !== id));
    };

    const saveForm = () => {
        const formData = {
            title: formState.title,
            description: formState.description,
            userId: "testuser",
            questions: questions.map((q) => ({
                title: q.title,
                type: q.type,
                content: q.content
            }))
        };
        console.log(JSON.stringify(formData, null, 2));
    };

    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            {/* サイドメニュー */}
            <Drawer
                variant="permanent"
                sx={{
                    flexShrink: 0,
                    width: 240,
                    [`& .MuiDrawer-paper`]: {
                        width: 240,
                        boxSizing: "border-box",
                        marginTop: 10,
                    },
                }}
            >
                <Toolbar />
                <List>
                    <ListItem onClick={saveForm}>
                        <ListItemButton sx={{ p: 2 }}>
                            <Save />
                            <ListItemText primary="保存" sx={{ ml: 2 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem onClick={() => alert("共有")}>
                        <ListItemButton sx={{ p: 2 }}>
                            <Share />
                            <ListItemText primary="共有" sx={{ ml: 2 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem onClick={() => alert("プレビュー")}>
                        <ListItemButton sx={{ p: 2 }}>
                            <Visibility />
                            <ListItemText primary="プレビュー" sx={{ ml: 2 }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem onClick={addNewForm}>
                        <ListItemButton sx={{ p: 2 }}>
                            <AddCircle />
                            <ListItemText primary="質問追加" sx={{ ml: 2 }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>

            {/* メイン画面 */}
            <Box sx={{ flexGrow: 1, ml: 0, p: 3 }}>
                <Paper elevation={3} sx={{ p: 3 }}>
                    <TextField
                        fullWidth
                        label="フォームタイトル"
                        variant="outlined"
                        margin="normal"
                        value={formState.title}
                        onChange={(e) => setFormState({ ...formState, title: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        label="フォームの説明"
                        variant="outlined"
                        margin="normal"
                        multiline
                        rows={4}
                        value={formState.description}
                        onChange={(e) => setFormState({ ...formState, description: e.target.value })}
                    />
                </Paper>

                {questions.map((form, index) => (
                    <FormComponent
                        key={`${form.id}-${index}`}  // 修正：form.id を使用
                        id={form.id}
                        data={form}
                        onDelete={() => deleteForm(form.id)}
                        onUpdate={updateForm}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default FormBuilderPage;