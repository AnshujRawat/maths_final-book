import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { Page } from '../../types/page';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizPageProps {
  page: Page;
  animationsEnabled: boolean;
}

const QuizPage: React.FC<QuizPageProps> = ({ page, animationsEnabled }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "What is the union of sets A = {1, 2, 3} and B = {3, 4, 5}?",
      options: ["{3}", "{1, 2, 3, 4, 5}", "{1, 2, 4, 5}", "{1, 2, 3}"],
      correctAnswer: 1,
      explanation: "The union A ∪ B contains all elements that are in A or B or both, without repetition."
    },
    {
      id: 2,
      question: "If A ⊆ B and B ⊆ A, what can we conclude?",
      options: ["A ∩ B = ∅", "A = B", "A ∪ B = ∅", "|A| ≠ |B|"],
      correctAnswer: 1,
      explanation: "If A is a subset of B AND B is a subset of A, then A and B contain exactly the same elements, so A = B."
    },
    {
      id: 3,
      question: "What is the cardinality of the power set of {a, b, c}?",
      options: ["3", "6", "8", "9"],
      correctAnswer: 2,
      explanation: "The power set of a set with n elements has 2ⁿ elements. Since |{a,b,c}| = 3, |P({a,b,c})| = 2³ = 8."
    },
    {
      id: 4,
      question: "Which of the following represents the empty set?",
      options: ["{0}", "{∅}", "∅", "{ }"],
      correctAnswer: 2,
      explanation: "The empty set is denoted by ∅ or { }. Note that {∅} contains one element (the empty set itself)."
    },
    {
      id: 5,
      question: "If A = {x | x is an even number between 1 and 10}, what is A?",
      options: ["{2, 4, 6, 8}", "{1, 3, 5, 7, 9}", "{2, 4, 6, 8, 10}", "{0, 2, 4, 6, 8, 10}"],
      correctAnswer: 0,
      explanation: "Even numbers between 1 and 10 (exclusive) are 2, 4, 6, and 8."
    }
  ];

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    if (!submitted) {
      setAnswers(prev => ({
        ...prev,
        [questionId]: answerIndex
      }));
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setShowResults(true);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setShowResults(false);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const score = calculateScore();
  const percentage = Math.round((score / questions.length) * 100);

  const getScoreColor = () => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = () => {
    if (percentage >= 80) return 'Excellent! You have a strong understanding of sets.';
    if (percentage >= 60) return 'Good job! Review the incorrect answers to strengthen your knowledge.';
    return 'Keep studying! Review the concepts and try again.';
  };

  return (
    <div className="h-full space-y-6">
      {/* Header */}
      <div className="text-center border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Chapter Quiz</h1>
        <p className="text-gray-600">Test your understanding of sets and set operations</p>
        
        {showResults && (
          <div className={`mt-4 p-4 rounded-lg ${animationsEnabled ? 'animate-fade-in' : ''} ${
            percentage >= 80 ? 'bg-green-50 border border-green-200' : 
            percentage >= 60 ? 'bg-yellow-50 border border-yellow-200' : 
            'bg-red-50 border border-red-200'
          }`}>
            <div className={`text-2xl font-bold ${getScoreColor()}`}>
              Score: {score}/{questions.length} ({percentage}%)
            </div>
            <div className={`mt-2 ${getScoreColor()}`}>
              {getScoreMessage()}
            </div>
          </div>
        )}
      </div>

      {/* Questions */}
      <div className="space-y-8">
        {questions.map((question, index) => (
          <div key={question.id} className={`bg-white border border-gray-200 rounded-lg p-6 ${animationsEnabled ? 'animate-fade-in' : ''}`}>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">{index + 1}</span>
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {question.question}
                </h3>
                
                <div className="space-y-3">
                  {question.options.map((option, optionIndex) => {
                    const isSelected = answers[question.id] === optionIndex;
                    const isCorrect = optionIndex === question.correctAnswer;
                    const isWrong = submitted && isSelected && !isCorrect;
                    
                    return (
                      <button
                        key={optionIndex}
                        onClick={() => handleAnswerSelect(question.id, optionIndex)}
                        disabled={submitted}
                        className={`w-full text-left p-3 rounded-lg border-2 transition-all ${
                          submitted
                            ? isCorrect
                              ? 'border-green-500 bg-green-50'
                              : isWrong
                              ? 'border-red-500 bg-red-50'
                              : 'border-gray-200 bg-gray-50'
                            : isSelected
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        } ${!submitted ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono">{option}</span>
                          {submitted && (
                            <div>
                              {isCorrect ? (
                                <CheckCircle className="text-green-600" size={20} />
                              ) : isWrong ? (
                                <XCircle className="text-red-600" size={20} />
                              ) : null}
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
                
                {submitted && (
                  <div className={`mt-4 p-3 bg-blue-50 border border-blue-200 rounded ${animationsEnabled ? 'animate-fade-in' : ''}`}>
                    <div className="font-semibold text-blue-800 mb-1">Explanation:</div>
                    <div className="text-blue-700 text-sm">{question.explanation}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex justify-center space-x-4 pt-6 border-t border-gray-200">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={Object.keys(answers).length < questions.length}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-semibold"
          >
            Submit Quiz ({Object.keys(answers).length}/{questions.length} answered)
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold flex items-center space-x-2"
          >
            <RotateCcw size={20} />
            <span>Try Again</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizPage;