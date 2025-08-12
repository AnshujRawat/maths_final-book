import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home, Settings } from 'lucide-react';
import BookPage from './components/BookPage';
import Navigation from './components/Navigation';
import { pages } from './data/pages';
import { useKeyNavigation } from './hooks/useKeyNavigation';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  const nextPage = useCallback(() => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(prev => prev + 1);
    }
  }, [currentPage]);

  const prevPage = useCallback(() => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  }, [currentPage]);

  const goToPage = useCallback((pageNum: number) => {
    if (pageNum >= 0 && pageNum < pages.length) {
      setCurrentPage(pageNum);
    }
  }, []);

  useKeyNavigation(nextPage, prevPage, () => goToPage(0), () => goToPage(pages.length - 1));

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-100 to-blue-50 relative ${animationsEnabled ? 'transition-all duration-500' : ''}`}>
      {/* Math symbols background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 text-6xl font-mono">∪</div>
        <div className="absolute top-32 right-20 text-4xl font-mono">∩</div>
        <div className="absolute bottom-20 left-32 text-5xl font-mono">⊂</div>
        <div className="absolute bottom-40 right-40 text-3xl font-mono">∅</div>
        <div className="absolute top-64 left-1/3 text-4xl font-mono">∈</div>
        <div className="absolute bottom-64 right-1/4 text-5xl font-mono">⊆</div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-gray-700">Enable Animations</label>
                <button
                  onClick={() => setAnimationsEnabled(!animationsEnabled)}
                  className={`w-12 h-6 rounded-full ${animationsEnabled ? 'bg-blue-500' : 'bg-gray-300'} relative transition-colors`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${animationsEnabled ? 'translate-x-6' : 'translate-x-0.5'}`} />
                </button>
              </div>
              <div className="text-sm text-gray-600">
                <p><kbd>←</kbd> <kbd>→</kbd> Navigate pages</p>
                <p><kbd>Home</kbd> Go to cover</p>
                <p><kbd>End</kbd> Go to references</p>
              </div>
            </div>
            <button
              onClick={() => setShowSettings(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => goToPage(0)}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
              title="Go to Cover"
            >
              <Home size={20} />
              <span className="font-semibold">Sets Book</span>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">
              Page {currentPage + 1} of {pages.length}
            </span>
            <button
              onClick={() => setShowSettings(true)}
              className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
              title="Settings"
            >
              <Settings size={20} />
            </button>
          </div>
        </header>

        {/* Book Content */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full h-full relative">
            <BookPage
              page={pages[currentPage]}
              pageNumber={currentPage + 1}
              animationsEnabled={animationsEnabled}
              onNavigate={goToPage}
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white border-t p-4">
          <Navigation
            currentPage={currentPage}
            totalPages={pages.length}
            onPrevious={prevPage}
            onNext={nextPage}
            onGoToPage={goToPage}
            animationsEnabled={animationsEnabled}
          />
        </div>
      </div>
    </div>
  );
}

export default App;