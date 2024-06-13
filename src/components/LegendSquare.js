import React from 'react';

const LegendSquare = ({ label, color }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        className='square'
        style={{ backgroundColor: color, width: '20px', height: '12px', marginRight: '8px' }}
      ></div>
      <p style={{ margin: 0, whiteSpace: "nowrap" }}>{label}</p>
</div>
  );
};

export default LegendSquare;
