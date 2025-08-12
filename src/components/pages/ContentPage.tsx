import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye, EyeOff } from 'lucide-react';
import { Page } from '../../types/page';
import InteractiveVenn from '../InteractiveVenn';

interface ContentPageProps {
  page: Page;
  animationsEnabled: boolean;
}

const ContentPage: React.FC<ContentPageProps> = ({ page, animationsEnabled }) => {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);
  const [revealedExamples, setRevealedExamples] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setExpandedSections(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleExample = (index: number) => {
    setRevealedExamples(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const renderContent = (content: any) => {
    if (typeof content === 'string') {
      return <p className="text-gray-700 leading-relaxed">{content}</p>;
    }

    if (content.type === 'heading') {
      const HeadingTag = `h${content.level}` as keyof JSX.IntrinsicElements;
      return (
        <HeadingTag className={`font-bold text-gray-800 mb-4 ${
          content.level === 1 ? 'text-3xl' : 
          content.level === 2 ? 'text-2xl' : 
          content.level === 3 ? 'text-xl' : 'text-lg'
        }`}>
          {content.text}
        </HeadingTag>
      );
    }

    if (content.type === 'definition') {
      return (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4 rounded-r">
          <div className="font-semibold text-blue-800 mb-2">Definition</div>
          <div className="text-blue-700">{content.text}</div>
        </div>
      );
    }

    if (content.type === 'example') {
      const index = content.index || 0;
      const isRevealed = revealedExamples.includes(index);
      
      return (
        <div className="bg-green-50 border border-green-200 rounded-lg my-4 overflow-hidden">
          <button
            onClick={() => toggleExample(index)}
            className="w-full px-4 py-3 flex items-center justify-between bg-green-100 hover:bg-green-150 transition-colors"
          >
            <span className="font-semibold text-green-800">Example: {content.title}</span>
            {isRevealed ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
          {isRevealed && (
            <div className={`p-4 ${animationsEnabled ? 'animate-fade-in' : ''}`}>
              <div className="text-green-700 space-y-2">
                {content.content.map((item: string, i: number) => (
                  <div key={i}>{item}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    }

    if (content.type === 'venn') {
      return (
        <div className="my-6 bg-gray-50 p-6 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-4">{content.title}</h4>
          <InteractiveVenn
            setA={content.setA}
            setB={content.setB}
            operation={content.operation}
            animationsEnabled={animationsEnabled}
          />
        </div>
      );
    }

    if (content.type === 'list') {
      const ListTag = content.ordered ? 'ol' : 'ul';
      return (
        <ListTag className={`${content.ordered ? 'list-decimal' : 'list-disc'} list-inside space-y-2 text-gray-700 ml-4`}>
          {content.items.map((item: string, i: number) => (
            <li key={i}>{item}</li>
          ))}
        </ListTag>
      );
    }

    if (content.type === 'formula') {
      return (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-4 text-center">
          <div className="font-mono text-lg text-gray-800">{content.formula}</div>
          {content.description && (
            <div className="text-sm text-gray-600 mt-2">{content.description}</div>
          )}
        </div>
      );
    }

    if (content.type === 'collapsible') {
      const index = content.index || 0;
      const isExpanded = expandedSections.includes(index);
      
      return (
        <div className="border border-gray-200 rounded-lg my-4">
          <button
            onClick={() => toggleSection(index)}
            className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors rounded-t-lg"
          >
            <span className="font-semibold text-gray-800">{content.title}</span>
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {isExpanded && (
            <div className={`p-4 space-y-4 ${animationsEnabled ? 'animate-fade-in' : ''}`}>
              {content.content.map((item: any, i: number) => (
                <div key={i}>{renderContent(item)}</div>
              ))}
            </div>
          )}
        </div>
      );
    }

    if (content.type === 'table') {
      return (
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                {content.headers.map((header: string, i: number) => (
                  <th key={i} className="px-4 py-2 text-left font-semibold text-gray-800 border-b">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row: string[], i: number) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-2 text-gray-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="h-full space-y-6">
      {/* Page Title */}
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-4xl font-bold text-gray-800">{page.title}</h1>
        {page.subtitle && (
          <p className="text-xl text-gray-600 mt-2">{page.subtitle}</p>
        )}
      </div>

      {/* Content */}
      <div className="space-y-6">
        {page.content?.map((content, index) => (
          <div key={index} className={animationsEnabled ? 'animate-fade-in' : ''}>
            {renderContent({ ...content, index })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentPage;