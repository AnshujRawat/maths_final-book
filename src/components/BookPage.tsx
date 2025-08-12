import React from 'react';
import { Page } from '../types/page';
import CoverPage from './pages/CoverPage';
import TableOfContents from './pages/TableOfContents';
import ContentPage from './pages/ContentPage';
import QuizPage from './pages/QuizPage';
import ReferencesPage from './pages/ReferencesPage';

interface BookPageProps {
  page: Page;
  pageNumber: number;
  animationsEnabled: boolean;
  onNavigate: (pageNum: number) => void;
}

const BookPage: React.FC<BookPageProps> = ({ page, pageNumber, animationsEnabled, onNavigate }) => {
  const getPageComponent = () => {
    switch (page.type) {
      case 'cover':
        return <CoverPage page={page} animationsEnabled={animationsEnabled} />;
      case 'toc':
        return <TableOfContents page={page} onNavigate={onNavigate} animationsEnabled={animationsEnabled} />;
      case 'quiz':
        return <QuizPage page={page} animationsEnabled={animationsEnabled} />;
      case 'references':
        return <ReferencesPage page={page} animationsEnabled={animationsEnabled} />;
      default:
        return <ContentPage page={page} animationsEnabled={animationsEnabled} />;
    }
  };

  return (
    <div className={`h-full bg-white rounded-lg shadow-lg p-8 overflow-y-auto ${animationsEnabled ? 'animate-fade-in' : ''}`}>
      {getPageComponent()}
      
      {/* Page number footer */}
      <div className="mt-8 pt-4 border-t border-gray-200 text-center text-gray-500 text-sm">
        Page {pageNumber}
      </div>
    </div>
  );
};

export default BookPage;