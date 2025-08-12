import React from 'react';
import { ExternalLink, BookOpen, Globe, Users } from 'lucide-react';
import { Page } from '../../types/page';

interface ReferencesPageProps {
  page: Page;
  animationsEnabled: boolean;
}

const ReferencesPage: React.FC<ReferencesPageProps> = ({ page, animationsEnabled }) => {
  const references = [
    {
      category: "Textbooks",
      icon: BookOpen,
      items: [
        "Rosen, K. H. (2018). Discrete Mathematics and Its Applications (8th ed.). McGraw-Hill Education.",
        "Johnsonbaugh, R. (2017). Discrete Mathematics (8th ed.). Pearson.",
        "Grimaldi, R. P. (2013). Discrete and Combinatorial Mathematics (5th ed.). Pearson."
      ]
    },
    {
      category: "Online Resources",
      icon: Globe,
      items: [
        "Khan Academy - Discrete Mathematics: https://www.khanacademy.org/math/discrete-math",
        "MIT OpenCourseWare - Mathematics for Computer Science",
        "Wolfram MathWorld - Set Theory: https://mathworld.wolfram.com/SetTheory.html"
      ]
    },
    {
      category: "Academic Papers",
      icon: Users,
      items: [
        "Cantor, G. (1874). \"Über eine Eigenschaft des Inbegriffes aller reellen algebraischen Zahlen\"",
        "Zermelo, E. (1908). \"Untersuchungen über die Grundlagen der Mengenlehre\"",
        "Fraenkel, A. (1922). \"Zu den Grundlagen der Cantor-Zermeloschen Mengenlehre\""
      ]
    }
  ];

  const credits = [
    "Interactive diagrams created using SVG and React",
    "Animations powered by Tailwind CSS transitions",
    "Icons provided by Lucide React",
    "Mathematical notation rendered using Unicode symbols",
    "Created using AI-assisted development tools"
  ];

  return (
    <div className="h-full space-y-8">
      {/* Header */}
      <div className="text-center border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">References & Credits</h1>
        <p className="text-gray-600">Sources and acknowledgments for this digital textbook</p>
      </div>

      {/* References Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {references.map((section, index) => {
          const Icon = section.icon;
          return (
            <div 
              key={index} 
              className={`bg-white border border-gray-200 rounded-lg p-6 ${animationsEnabled ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: animationsEnabled ? `${index * 200}ms` : '0ms' }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{section.category}</h3>
              </div>
              
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-gray-700 leading-relaxed">
                    {item.includes('http') ? (
                      <a 
                        href={item.split(': ')[1]} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center"
                      >
                        <span>{item.split(': ')[0]}</span>
                        <ExternalLink size={12} className="ml-1" />
                      </a>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Credits Section */}
      <div className={`bg-gray-50 border border-gray-200 rounded-lg p-6 ${animationsEnabled ? 'animate-fade-in' : ''}`}>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Technical Credits</h3>
        <ul className="space-y-2">
          {credits.map((credit, index) => (
            <li key={index} className="text-gray-700 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
              {credit}
            </li>
          ))}
        </ul>
      </div>

      {/* License Section */}
      <div className={`bg-blue-50 border border-blue-200 rounded-lg p-6 ${animationsEnabled ? 'animate-fade-in' : ''}`}>
        <h3 className="text-xl font-bold text-blue-800 mb-4">License & Usage</h3>
        <div className="space-y-3 text-blue-700">
          <p>
            This interactive digital textbook is created for educational purposes and is free to use for learning.
          </p>
          <p>
            The content is based on standard discrete mathematics curriculum and widely accepted mathematical principles.
          </p>
          <p>
            For commercial use or redistribution, please ensure compliance with relevant educational content licenses.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm border-t border-gray-200 pt-6">
        <p>© 2024 Interactive Sets Textbook - Created for educational purposes</p>
        <p className="mt-1">Generated using advanced AI tools and modern web technologies</p>
      </div>
    </div>
  );
};

export default ReferencesPage;