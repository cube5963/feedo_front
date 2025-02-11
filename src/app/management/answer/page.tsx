"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAnswer } from "../../lib/api/getAnswer";
import BasicPie from "../../_components/piechart";

interface Response {
    id: number;
    data: string[];
}

interface Question {
    id: number;
    title: string;
    responses: Response[];
}

interface SurveyData {
    id: number;
    title: string;
    description: string;
    questions: Question[];
}

export default function Home() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const [surveyData, setSurveyData] = useState<SurveyData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAnswer(Number(id));
                setSurveyData(data);
            } catch (error) {
                console.error("Error fetching answer data:", error);
            }
        };

        fetchData();
    }, [id]);

    if (!surveyData) return <div>Loading...</div>;

    return (
        <div>
            <h1>{surveyData.title}</h1>
            <p>{surveyData.description}</p>
            {surveyData.questions.map((question) => {
                const labels = Array.from(new Set(question.responses.flatMap((response) => response.data.flatMap(item => item.replace(/\[|\]|"/g, '').split(',').map(subItem => subItem.trim())))));
                const values = labels.map(label => question.responses.flatMap((response) => response.data.flatMap(item => item.replace(/\[|\]|"/g, '').split(',').map(subItem => subItem.trim()))).filter(item => item === label).length);
                const sortedData = labels.map((label, index) => ({ label, value: values[index] })).sort((a, b) => b.value - a.value || a.label.localeCompare(b.label));

                return (
                    <div key={question.id}>
                        <h2>{question.title}</h2>
                        <BasicPie
                            data={{
                                title: question.title,
                                label: sortedData.map(item => item.label),
                                value: sortedData.map(item => item.value),
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
}