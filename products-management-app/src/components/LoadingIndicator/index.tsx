import React from 'react';

// Style
import './index.css';

interface LoadingIndicatorProps { }

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = () => {
  return (
    <div className='spinner-container'>
      <div className='loading-indicator' />
    </div>
  );
};
