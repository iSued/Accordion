import React from "react";
import "./index.css";
declare type QuizData = {
    quiId: string;
    points: number;
    goal: number;
    result: {
        questionId: string;
        answerIndex: number | null;
        correct: boolean;
    }[];
    showFeedbacks: boolean;
    feedbacks: {
        wrong: string;
        correct: string;
    };
    questions: {
        id: string;
        index: number;
        question: string;
        timeAmount: number;
        default_feedback: {
            wrong: string;
            correct: string;
        };
        answers: {
            index: number;
            text: string;
            correct: boolean;
            feedback?: string;
        }[];
    }[];
};
declare const QuizPage: React.FC<{
    Data: QuizData;
    useQuiz: (quizData: QuizData) => {
        quizState: QuizData;
        isCompleted: boolean | null;
        registerResults: (results?: {
            questionId: string;
            answerIndex: number | null;
            correct: boolean;
        }[]) => void;
    };
}>;
export default QuizPage;
