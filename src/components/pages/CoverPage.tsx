import React from 'react';
import { Page } from '../../types/page';

interface CoverPageProps {
  page: Page;
  animationsEnabled: boolean;
}

const CoverPage: React.FC<CoverPageProps> = ({ page, animationsEnabled }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className={`absolute inset-0 ${animationsEnabled ? 'animate-pulse' : ''}`}>
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-100 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-green-100 rounded-full opacity-20"></div>
      </div>

      {/* Main content */}
      <div className={`relative z-10 ${animationsEnabled ? 'animate-fade-in-up' : ''}`}>
        {/* Logo */}
        <div className="mb-8">
          <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto">
            {/* Venn diagram logo */}
            <circle cx="45" cy="60" r="30" fill="none" stroke="#3B82F6" strokeWidth="3" />
            <circle cx="75" cy="60" r="30" fill="none" stroke="#EF4444" strokeWidth="3" />
            <text x="30" y="65" className="text-lg font-bold fill-blue-600">A</text>
            <text x="85" y="65" className="text-lg font-bold fill-red-600">B</text>
            <text x="60" y="45" className="text-xs fill-gray-600">∩</text>
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          SETS
        </h1>
        
        {/* Subtitle */}
        <p className="text-2xl text-gray-600 mb-8">
          Understanding the Foundation of Discrete Mathematics
        </p>

        {/* Mathematical notation decoration */}
        <div className="text-4xl text-gray-400 space-x-8 mb-8">
          <span>∪</span>
          <span>∩</span>
          <span>⊆</span>
          <span>∈</span>
          <span>∅</span>
        </div>

        {/* Author/Description */}
        <div className="text-gray-500 space-y-2">
          <p>An Interactive Digital Textbook</p>
          <p className="text-sm">Complete with animations, examples, and practice exercises</p>
        </div>
      </div>

      {/* Decorative mathematical formulas */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-300 text-sm">
        A ∪ B = {`{x | x ∈ A or x ∈ B}`}
      </div>
    </div>
  );
};

export default CoverPage;