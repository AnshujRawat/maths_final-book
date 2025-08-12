import React, { useState } from 'react';

interface InteractiveVennProps {
  setA: number[];
  setB: number[];
  operation?: 'union' | 'intersection' | 'difference' | 'complement';
  animationsEnabled: boolean;
}

const InteractiveVenn: React.FC<InteractiveVennProps> = ({
  setA,
  setB,
  operation,
  animationsEnabled
}) => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const calculateResults = () => {
    const union = [...new Set([...setA, ...setB])];
    const intersection = setA.filter(x => setB.includes(x));
    const differenceAB = setA.filter(x => !setB.includes(x));
    const differenceBA = setB.filter(x => !setA.includes(x));
    
    return { union, intersection, differenceAB, differenceBA };
  };

  const results = calculateResults();

  const handleMouseEnter = (region: string, event: React.MouseEvent) => {
    setHoveredRegion(region);
    setShowTooltip(true);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseLeave = () => {
    setHoveredRegion(null);
    setShowTooltip(false);
  };

  const getTooltipContent = () => {
    switch (hoveredRegion) {
      case 'union':
        return `A ∪ B = {${results.union.join(', ')}}`;
      case 'intersection':
        return `A ∩ B = {${results.intersection.join(', ')}}`;
      case 'differenceAB':
        return `A - B = {${results.differenceAB.join(', ')}}`;
      case 'differenceBA':
        return `B - A = {${results.differenceBA.join(', ')}}`;
      case 'onlyA':
        return `Only in A: {${results.differenceAB.join(', ')}}`;
      case 'onlyB':
        return `Only in B: {${results.differenceBA.join(', ')}}`;
      case 'both':
        return `In both: {${results.intersection.join(', ')}}`;
      default:
        return '';
    }
  };

  const getHighlightClass = (region: string) => {
    if (!operation) return '';
    
    const baseClass = animationsEnabled ? 'transition-all duration-300' : '';
    
    switch (operation) {
      case 'union':
        return region === 'onlyA' || region === 'onlyB' || region === 'both' 
          ? `${baseClass} fill-blue-400 stroke-blue-600` 
          : `${baseClass} fill-gray-100 stroke-gray-300`;
      case 'intersection':
        return region === 'both' 
          ? `${baseClass} fill-green-400 stroke-green-600` 
          : `${baseClass} fill-gray-100 stroke-gray-300`;
      case 'difference':
        return region === 'onlyA' 
          ? `${baseClass} fill-red-400 stroke-red-600` 
          : `${baseClass} fill-gray-100 stroke-gray-300`;
      default:
        return `${baseClass} fill-blue-200 stroke-blue-400`;
    }
  };

  return (
    <div className="relative">
      <svg width="400" height="300" viewBox="0 0 400 300" className="border rounded">
        {/* Background */}
        <rect width="400" height="300" fill="#f8fafc" />
        
        {/* Universal Set Border */}
        <rect x="20" y="20" width="360" height="260" fill="none" stroke="#64748b" strokeWidth="2" rx="8" />
        <text x="30" y="40" className="text-sm font-medium fill-gray-600">U</text>
        
        {/* Set A Circle */}
        <circle
          cx="150"
          cy="150"
          r="80"
          className={hoveredRegion === 'onlyA' || hoveredRegion === 'both' || !hoveredRegion 
            ? getHighlightClass('onlyA')
            : 'fill-blue-100 stroke-blue-300 transition-all duration-300'}
          strokeWidth="2"
          onMouseEnter={(e) => handleMouseEnter('onlyA', e)}
          onMouseLeave={handleMouseLeave}
        />
        
        {/* Set B Circle */}
        <circle
          cx="250"
          cy="150"
          r="80"
          className={hoveredRegion === 'onlyB' || hoveredRegion === 'both' || !hoveredRegion 
            ? getHighlightClass('onlyB')
            : 'fill-red-100 stroke-red-300 transition-all duration-300'}
          strokeWidth="2"
          fillOpacity="0.7"
          onMouseEnter={(e) => handleMouseEnter('onlyB', e)}
          onMouseLeave={handleMouseLeave}
        />
        
        {/* Labels */}
        <text x="120" y="120" className="text-lg font-bold fill-blue-700">A</text>
        <text x="280" y="120" className="text-lg font-bold fill-red-700">B</text>
        
        {/* Set elements */}
        {results.differenceAB.map((item, index) => (
          <text
            key={`a-${item}`}
            x={110 + (index % 3) * 15}
            y={140 + Math.floor(index / 3) * 20}
            className="text-sm font-medium fill-blue-800"
          >
            {item}
          </text>
        ))}
        
        {results.intersection.map((item, index) => (
          <text
            key={`intersection-${item}`}
            x={190 + (index % 2) * 20}
            y={140 + Math.floor(index / 2) * 20}
            className="text-sm font-medium fill-purple-800"
          >
            {item}
          </text>
        ))}
        
        {results.differenceBA.map((item, index) => (
          <text
            key={`b-${item}`}
            x={270 + (index % 3) * 15}
            y={140 + Math.floor(index / 3) * 20}
            className="text-sm font-medium fill-red-800"
          >
            {item}
          </text>
        ))}
        
        {/* Interactive regions for tooltips */}
        <circle
          cx="150"
          cy="150"
          r="80"
          fill="transparent"
          className="cursor-pointer"
          onMouseEnter={(e) => handleMouseEnter('onlyA', e)}
          onMouseLeave={handleMouseLeave}
        />
        <circle
          cx="250"
          cy="150"
          r="80"
          fill="transparent"
          className="cursor-pointer"
          onMouseEnter={(e) => handleMouseEnter('onlyB', e)}
          onMouseLeave={handleMouseLeave}
        />
      </svg>
      
      {/* Set Information */}
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div className="bg-blue-50 p-3 rounded">
          <div className="font-semibold text-blue-800">Set A</div>
          <div className="text-blue-700">A = {`{${setA.join(', ')}}`}</div>
        </div>
        <div className="bg-red-50 p-3 rounded">
          <div className="font-semibold text-red-800">Set B</div>
          <div className="text-red-700">B = {`{${setB.join(', ')}}`}</div>
        </div>
      </div>
      
      {/* Results */}
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="font-medium">Union (A ∪ B):</span>
          <span className="font-mono">{`{${results.union.join(', ')}}`}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Intersection (A ∩ B):</span>
          <span className="font-mono">{`{${results.intersection.join(', ')}}`}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Difference (A - B):</span>
          <span className="font-mono">{`{${results.differenceAB.join(', ')}}`}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Difference (B - A):</span>
          <span className="font-mono">{`{${results.differenceBA.join(', ')}}`}</span>
        </div>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div
          className="fixed z-50 bg-gray-900 text-white px-3 py-2 rounded shadow-lg text-sm pointer-events-none"
          style={{
            left: tooltipPosition.x + 10,
            top: tooltipPosition.y - 40,
          }}
        >
          {getTooltipContent()}
        </div>
      )}
    </div>
  );
};

export default InteractiveVenn;