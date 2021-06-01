import React, { useState, useRef } from "react";
import "./index.css";
import Feedback from "./FeedBack/index";
const QuizPage = ({ Data, useQuiz }) => {
    const { quizState, registerResults, isCompleted } = useQuiz(Data);
    const [timer, setTimer] = useState({
        class: "timer",
        time: 0,
    });
    const [actualQuestion, setActualQuestion] = useState(0);
    const [defaultFeedback, setDefaultFeedback] = useState("");
    const [customFeedback, setCustomFeedback] = useState("");
    const resultsArray = [];
    const results = useRef(resultsArray);
    const handleTimer = (timer, time) => {
        if (timer) {
            setTimer({
                class: "timer loaded",
                time: time,
            });
        }
        else {
            setTimer({
                class: "timer ",
                time: 0,
            });
        }
    };
    const handleQuizRender = () => {
        if (quizState.questions.length) {
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { className: timer.class, style: {
                        transition: timer.class === "timer loaded"
                            ? ` ${timer.time}s all ease-out`
                            : ` 0.2s all ease-out`,
                    } }),
                React.createElement("div", { className: "questionContainer" },
                    React.createElement("h4", { className: "questionTitle" }, quizState.questions[actualQuestion].question)),
                customFeedback.length ? (React.createElement("div", null,
                    React.createElement("h1", null, customFeedback))) : defaultFeedback.length ? (React.createElement("div", null,
                    React.createElement("h1", null, defaultFeedback))) : (quizState.questions[actualQuestion].answers.map((el) => {
                    return (React.createElement("div", { className: "option", onClick: () => {
                            handleTimer(false, 0);
                            results.current.push({
                                questionId: quizState.questions[actualQuestion].id,
                                answerIndex: el.index,
                                correct: el.correct,
                            });
                            if (quizState.showFeedbacks) {
                                if (el.feedback) {
                                    setCustomFeedback(el.feedback);
                                }
                                else {
                                    if (el.correct) {
                                        setDefaultFeedback(quizState.questions[actualQuestion]
                                            .default_feedback.correct);
                                    }
                                    if (!el.correct) {
                                        setDefaultFeedback(quizState.questions[actualQuestion]
                                            .default_feedback.wrong);
                                    }
                                }
                            }
                            if (quizState.showFeedbacks) {
                                if (actualQuestion < quizState.questions.length - 1)
                                    setTimeout(() => {
                                        setActualQuestion(actualQuestion + 1);
                                        setDefaultFeedback("");
                                        setCustomFeedback("");
                                    }, 2000);
                                else {
                                    setTimeout(() => {
                                        setDefaultFeedback("");
                                        setCustomFeedback("");
                                        registerResults(results.current);
                                    }, 2000);
                                }
                            }
                            else {
                                if (actualQuestion < quizState.questions.length - 1) {
                                    setActualQuestion(actualQuestion + 1);
                                    setDefaultFeedback("");
                                    setCustomFeedback("");
                                }
                                else {
                                    setDefaultFeedback("");
                                    setCustomFeedback("");
                                    registerResults(results.current);
                                }
                            }
                        } }, el.text));
                }))));
        }
        else {
            return React.createElement("h1", null, "no options for this quiz");
        }
    };
    return (React.createElement(React.Fragment, null, isCompleted ? (React.createElement(Feedback, { goodTest: true })) : isCompleted === false ? (React.createElement(Feedback, { goodTest: false })) : (React.createElement("div", null, handleQuizRender()))));
};
export default QuizPage;
