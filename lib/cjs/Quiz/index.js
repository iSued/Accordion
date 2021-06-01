"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./index.css");
const index_1 = __importDefault(require("./FeedBack/index"));
const QuizPage = ({ Data, useQuiz }) => {
    const { quizState, registerResults, isCompleted } = useQuiz(Data);
    const [timer, setTimer] = react_1.useState({
        class: "timer",
        time: 0,
    });
    const [actualQuestion, setActualQuestion] = react_1.useState(0);
    const [defaultFeedback, setDefaultFeedback] = react_1.useState("");
    const [customFeedback, setCustomFeedback] = react_1.useState("");
    const resultsArray = [];
    const results = react_1.useRef(resultsArray);
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
            return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("div", { className: timer.class, style: {
                        transition: timer.class === "timer loaded"
                            ? ` ${timer.time}s all ease-out`
                            : ` 0.2s all ease-out`,
                    } }),
                react_1.default.createElement("div", { className: "questionContainer" },
                    react_1.default.createElement("h4", { className: "questionTitle" }, quizState.questions[actualQuestion].question)),
                customFeedback.length ? (react_1.default.createElement("div", null,
                    react_1.default.createElement("h1", null, customFeedback))) : defaultFeedback.length ? (react_1.default.createElement("div", null,
                    react_1.default.createElement("h1", null, defaultFeedback))) : (quizState.questions[actualQuestion].answers.map((el) => {
                    return (react_1.default.createElement("div", { className: "option", onClick: () => {
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
            return react_1.default.createElement("h1", null, "no options for this quiz");
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, isCompleted ? (react_1.default.createElement(index_1.default, { goodTest: true })) : isCompleted === false ? (react_1.default.createElement(index_1.default, { goodTest: false })) : (react_1.default.createElement("div", null, handleQuizRender()))));
};
exports.default = QuizPage;
