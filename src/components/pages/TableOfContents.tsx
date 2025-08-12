import React from 'react';
import { BookOpen, Target, Layers, Calculator, CheckCircle, Users, Hash, FileText } from 'lucide-react';
import { Page } from '../../types/page';

interface TableOfContentsProps {
  page: Page;
  onNavigate: (pageNum: number) => void;
  animationsEnabled: boolean;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ page, onNavigate, animationsEnabled }) => {
  const contents = [
    { title: 'Introduction to Sets', pages: '3-5', icon: BookOpen, pageNum: 2, color: 'text-blue-600' },
    { title: 'Types of Sets', pages: '6-9', icon: Target, pageNum: 5, color: 'text-green-600' },
    { title: 'Representation of Sets', pages: '10-12', icon: Layers, pageNum: 9, color: 'text-purple-600' },
    { title: 'Operations on Sets', pages: '13-20', icon: Calculator, pageNum: 12, color: 'text-red-600' },
    { title: 'Equal vs Equivalent Sets', pages: '21-22', icon: CheckCircle, pageNum: 20, color: 'text-orange-600' },
    { title: 'Subsets & Power Sets', pages: '23-25', icon: Users, pageNum: 22, color: 'text-indigo-600' },
    { title: 'Cardinality', pages: '26-27', icon: Hash, pageNum: 25, color: 'text-pink-600' },
    { title: 'Summary & Quiz', pages: '28-29', icon: FileText, pageNum: 27, color: 'text-gray-600' },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Table of Contents</h1>
        <p className="text-gray-600">Navigate through the chapters by clicking on any topic</p>
      </div>

      {/* Contents Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        {contents.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`group cursor-pointer bg-white border-2 border-gray-100 rounded-lg p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-300 ${
                animationsEnabled ? 'hover:scale-105' : ''
              }`}
              onClick={() => onNavigate(item.pageNum)}
              style={{ animationDelay: animationsEnabled ? `${index * 100}ms` : '0ms' }}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-gray-50 ${item.color} group-hover:bg-gray-100 transition-colors`}>
                  <Icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">Pages {item.pages}</p>
                  <div className="mt-2 text-xs text-gray-400">
                    Click to jump to this section
                  </div>
                </div>
                <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
                  →
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Help */}
      <div className="mt-8 bg-blue-50 rounded-lg p-4">
        <h3 className="font-semibold text-blue-800 mb-2">Navigation Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-700">
          <div>• Use arrow keys ← → to navigate</div>
          <div>• Press Home to return to cover</div>
          <div>• Press End to go to references</div>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;