import React, { useEffect, useRef } from 'react';
import { Page } from '../types/page';
import ContentPage from './pages/ContentPage';
import CoverPage from './pages/CoverPage';
import QuizPage from './pages/QuizPage';
import ReferencesPage from './pages/ReferencesPage';
import TableOfContents from './pages/TableOfContents';

interface BookPageProps {
  page: Page;
  pageNumber: number;
  animationsEnabled: boolean;
  onNavigate: (pageNum: number) => void;
}

const BookPage: React.FC<BookPageProps> = ({ page, pageNumber, animationsEnabled, onNavigate }) => {
  const prevPageNumber = useRef(pageNumber);
  const [flipDirection, setFlipDirection] = React.useState<'none' | 'left' | 'right'>('none');
  const [displayedPage, setDisplayedPage] = React.useState(page);
  const [displayedPageNumber, setDisplayedPageNumber] = React.useState(pageNumber);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animationsEnabled) {
      setFlipDirection('none');
      setDisplayedPage(page);
      setDisplayedPageNumber(pageNumber);
      prevPageNumber.current = pageNumber;
      return;
    }
    if (pageNumber > prevPageNumber.current) {
      setFlipDirection('right');
    } else if (pageNumber < prevPageNumber.current) {
      setFlipDirection('left');
    } else {
      setFlipDirection('none');
      setDisplayedPage(page);
      setDisplayedPageNumber(pageNumber);
    }
    prevPageNumber.current = pageNumber;
    // Only update displayed page after animation
    if (pageNumber !== displayedPageNumber) {
      const timeout = setTimeout(() => {
        setDisplayedPage(page);
        setDisplayedPageNumber(pageNumber);
        setFlipDirection('none');
      }, 1000);
      return () => clearTimeout(timeout);
    }
    // Remove flip after animation if not changing page
    const timeout = setTimeout(() => setFlipDirection('none'), 1000);
    return () => clearTimeout(timeout);
  }, [pageNumber, animationsEnabled, page, displayedPageNumber]);

  const getPageComponent = () => {
    switch (displayedPage.type) {
      case 'cover':
        return <CoverPage page={displayedPage} animationsEnabled={animationsEnabled} />;
      case 'toc':
        return <TableOfContents page={displayedPage} onNavigate={onNavigate} animationsEnabled={animationsEnabled} />;
      case 'quiz':
        return <QuizPage page={displayedPage} animationsEnabled={animationsEnabled} />;
      case 'references':
        return <ReferencesPage page={displayedPage} animationsEnabled={animationsEnabled} />;
      default:
        return <ContentPage page={displayedPage} animationsEnabled={animationsEnabled} />;
    }
  };

  return (
    <div
      ref={containerRef}
  className={`w-full min-h-[60vh] h-auto max-h-[90vh] max-w-[98vw] sm:max-w-[90vw] md:max-w-[70vw] lg:max-w-[55vw] xl:max-w-[40vw] mx-auto bg-white rounded-[8px] sm:rounded-[12px] md:rounded-[18px] shadow-md p-1 sm:p-2 md:p-4 overflow-y-auto smooth-scrollbar ${animationsEnabled ? (flipDirection === 'right' ? 'page-flip-right' : flipDirection === 'left' ? 'page-flip-left' : 'animate-fade-in') : ''}`}
      style={{ perspective: animationsEnabled ? 1200 : undefined, minHeight: 0 }}
    >
      {getPageComponent()}
      {/* Page number footer */}
      <div className="mt-4 sm:mt-8 pt-2 sm:pt-4 border-t border-gray-200 text-center text-gray-500 text-xs sm:text-sm">
        Page {displayedPageNumber}
      </div>
    </div>
  );
};

export default BookPage;