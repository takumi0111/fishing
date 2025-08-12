import React from 'react';

interface SafetyListProps {
  items: string[];
  variant?: 'default' | 'safety';
}

export default function SafetyList({ 
  items, 
  variant = 'default' 
}: SafetyListProps): React.JSX.Element {
  return (
    <ul className="safety-list">
      {items.map((item, index) => (
        <li key={index} className="safety-list-item">
          <span className="safety-list-bullet">•</span>
          <span className={`safety-list-text ${variant === 'safety' ? 'safety-list-text-safety' : ''}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
