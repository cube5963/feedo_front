"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getSurvey } from "../lib/api/getSurvey";

export default function Home() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  
  interface SurveyData {
    title: string;
    description: string;
    questions: { id: number; title: string; content: string }[];
  }

  const [surveyData, setSurveyData] = useState<SurveyData | null>(null);
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const data = await getSurvey(Number(id));
        setSurveyData(data);
      } catch (error) {
        console.error("Error fetching survey data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!surveyData) {
    return <div>No data found</div>;
  }

  return (
    <div>
      <h1>{surveyData.title}</h1>
      <p>{surveyData.description}</p>
      {/* 質問データを表示 */}
      <div>
        {surveyData.questions.map((question: { id: number; title: string; content: string }) => (
          <div key={question.id}>
            <h2>{question.title}</h2>
            <p>{question.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
