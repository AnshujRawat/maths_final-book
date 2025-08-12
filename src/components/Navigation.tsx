import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';

interface NavigationProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToPage: (pageNum: number) => void;
  animationsEnabled: boolean;
}

const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  onGoToPage,
  animationsEnabled
}) => {
  const [showThumbnails, setShowThumbnails] = useState(false);

  const pageRanges = [
    { start: 0, end: 0, label: 'Cover' },
    { start: 1, end: 1, label: 'Contents' },
    { start: 2, end: 8, label: 'Introduction' },
    { start: 9, end: 15, label: 'Types & Representation' },
    { start: 16, end: 24, label: 'Operations' },
    { start: 25, end: 27, label: 'Properties' },
    { start: 28, end: 28, label: 'Quiz' },
    { start: 29, end: 29, label: 'References' },
  ];

  return (
    <div className="flex items-center justify-between">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={currentPage === 0}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
          ${currentPage === 0 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-blue-600 hover:bg-blue-50 hover:text-blue-800'
          }`}
      >
        <ChevronLeft size={20} />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Page Navigation */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => setShowThumbnails(!showThumbnails)}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          title="Page Navigator"
        >
          <Menu size={20} />
        </button>

        {/* Progress Bar */}
        <div className="hidden sm:flex items-center space-x-2">
          <div className="w-48 bg-gray-200 rounded-full h-2">
            <div
              className={`bg-blue-500 h-2 rounded-full transition-all duration-300`}
              style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
            />
          </div>
          <span className="text-sm text-gray-600 whitespace-nowrap">
            {currentPage + 1} / {totalPages}
          </span>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all
          ${currentPage === totalPages - 1 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-blue-600 hover:bg-blue-50 hover:text-blue-800'
          }`}
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={20} />
      </button>

      {/* Quick Navigation Dropdown */}
      {showThumbnails && (
        <div className="absolute bottom-full right-0 mb-2 bg-white border rounded-lg shadow-lg p-4 w-64">
          <h3 className="font-semibold mb-3">Quick Navigation</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {pageRanges.map((range, index) => (
              <button
                key={index}
                onClick={() => {
                  onGoToPage(range.start);
                  setShowThumbnails(false);
                }}
                className={`w-full text-left px-3 py-2 rounded transition-colors
                  ${currentPage >= range.start && currentPage <= range.end
                    ? 'bg-blue-100 text-blue-800'
                    : 'hover:bg-gray-100'
                  }`}
              >
                <div className="font-medium">{range.label}</div>
                <div className="text-sm text-gray-600">
                  Page{range.start !== range.end ? 's' : ''} {range.start + 1}
                  {range.start !== range.end && `-${range.end + 1}`}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;