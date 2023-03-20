// Libraries
import React, { memo } from 'react';

// Style
import './index.css';

const LoadingIndicator: React.FC = () => {
  return (
    <div className='spinner-container'>
      <div className='loading-indicator' />
    </div>
  );
};

export default memo(LoadingIndicator);
