import React from 'react';

interface SafetyCardProps {
  variant: 'blue' | 'green' | 'yellow' | 'purple' | 'red' | 'orange' | 'gray';
  icon: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function SafetyCard({ 
  variant, 
  icon, 
  title, 
  children, 
  className = '' 
}: SafetyCardProps): React.JSX.Element {
  const variantClasses = {
    blue: 'safety-card safety-card-blue',
    green: 'safety-card safety-card-green',
    yellow: 'safety-card safety-card-yellow',
    purple: 'safety-card safety-card-purple',
    red: 'safety-card safety-card-red',
    orange: 'safety-card safety-card-orange',
    gray: 'safety-card safety-card-gray'
  };

  const titleClasses = {
    blue: 'safety-card-title safety-card-title-blue',
    green: 'safety-card-title safety-card-title-green',
    yellow: 'safety-card-title safety-card-title-yellow',
    purple: 'safety-card-title safety-card-title-purple',
    red: 'safety-card-title safety-card-title-red',
    orange: 'safety-card-title safety-card-title-orange',
    gray: 'safety-card-title safety-card-title-gray'
  };

  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      <h3 className={titleClasses[variant]}>
        <span className="safety-card-icon">{icon}</span>
        {title}
      </h3>
      {children}
    </div>
  );
}
