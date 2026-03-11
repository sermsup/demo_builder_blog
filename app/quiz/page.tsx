"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function QuizPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [
        {
            question: "Which architectural pattern is best suited for integrating LLMs with private company data?",
            options: [
                "Monolithic Database Architecture",
                "Retrieval-Augmented Generation (RAG)",
                "Zero-shot Prompting Only",
                "Client-side Local Processing"
            ],
            correct: 1
        },
        {
            question: "What is the primary benefit of fine-tuning an LLM over few-shot prompting?",
            options: [
                "It uses significantly less compute during training.",
                "It drastically reduces the cost per token during inference.",
                "It allows the model to deeply learn specialized domain knowledge/tones without expanding the context window.",
                "It prevents the model from ever hallucinating facts."
            ],
            correct: 2
        },
        {
            question: "When streaming a response from an AI model to a frontend client, which web technology is most commonly used?",
            options: [
                "Server-Sent Events (SSE)",
                "GraphQL Mutations",
                "Short Polling",
                "SOAP Protocols"
            ],
            correct: 0
        }
    ];

    const handleNext = () => {
        if (selectedOption !== null && selectedOption === questions[currentQuestion].correct) {
            setScore(score + 1);
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
        } else {
            setIsSubmitted(true);
        }
    };

    return (
        <div className="max-w-3xl mx-auto px-6 lg:px-20 py-16">

            {/* Header */}
            <div className="mb-12 text-center">
                <h1 className="text-3xl font-black mb-2">Module 2 Final Quiz</h1>
                <p className="text-slate-500">Test your knowledge before moving on to the next section.</p>
            </div>

            {!isSubmitted ? (
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none">
                    {/* Progress */}
                    <div className="flex items-center justify-between mb-8 text-sm font-bold text-slate-500">
                        <span>Question {currentQuestion + 1} of {questions.length}</span>
                        <span className="text-primary">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full mb-10 overflow-hidden">
                        <div
                            className="bg-primary h-full transition-all duration-300"
                            style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                        ></div>
                    </div>

                    {/* Question */}
                    <h2 className="text-2xl font-bold mb-8 leading-relaxed">
                        {questions[currentQuestion].question}
                    </h2>

                    {/* Options */}
                    <div className="space-y-4 mb-10">
                        {questions[currentQuestion].options.map((option, i) => (
                            <label
                                key={i}
                                className={`flex items-center p-5 rounded-2xl border-2 cursor-pointer transition-all ${selectedOption === i
                                        ? 'border-primary bg-primary/5'
                                        : 'border-slate-200 dark:border-slate-700 hover:border-primary/50'
                                    }`}
                            >
                                <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${selectedOption === i ? 'border-primary' : 'border-slate-300 dark:border-slate-600'
                                    }`}>
                                    <div className={`w-3 h-3 bg-primary rounded-full transition-opacity ${selectedOption === i ? 'opacity-100' : 'opacity-0'
                                        }`}></div>
                                </div>
                                <input
                                    type="radio"
                                    name="quiz-option"
                                    className="hidden"
                                    onChange={() => setSelectedOption(i)}
                                    checked={selectedOption === i}
                                />
                                <span className="font-medium text-slate-700 dark:text-slate-300">{option}</span>
                            </label>
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        disabled={selectedOption === null}
                        className="w-full py-4 bg-primary text-background-dark font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-105 transition-all text-lg"
                    >
                        {currentQuestion === questions.length - 1 ? 'Submit Results' : 'Next Question'}
                    </button>
                </div>
            ) : (
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 text-center shadow-xl shadow-slate-200/50 dark:shadow-none">
                    {score === questions.length ? (
                        <div className="w-24 h-24 bg-emerald-accent/20 text-emerald-accent rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="material-symbols-outlined text-5xl">workspace_premium</span>
                        </div>
                    ) : (
                        <div className="w-24 h-24 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                            <span className="material-symbols-outlined text-5xl">flag</span>
                        </div>
                    )}

                    <h2 className="text-3xl font-black mb-2">Quiz Completed!</h2>
                    <p className="text-slate-500 mb-8 max-w-sm mx-auto">
                        You scored {score} out of {questions.length} correct.
                    </p>

                    <div className="text-6xl font-black text-primary mb-10">
                        {Math.round((score / questions.length) * 100)}%
                    </div>

                    <div className="flex flex-col gap-4">
                        {score === questions.length ? (
                            <Link href="/certificates/certificate-123" className="w-full py-4 bg-primary text-background-dark font-bold rounded-xl hover:brightness-105 transition-all">
                                Claim Your Certificate
                            </Link>
                        ) : (
                            <button onClick={() => { setIsSubmitted(false); setScore(0); setCurrentQuestion(0); setSelectedOption(null); }} className="w-full py-4 bg-primary text-background-dark font-bold rounded-xl hover:brightness-105 transition-all">
                                Retake Quiz
                            </button>
                        )}
                        <Link href="/dashboard" className="w-full py-4 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                            Back to Dashboard
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
