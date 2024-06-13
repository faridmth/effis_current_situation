import React from 'react';

const ActiveViirs = () => {
  const items = [
    { shape: 'square', color: '#FF00FF', text: '<=6 heures (VIIRS Suomi)' },
    { shape: 'square', color: '#FFC0CB', text: '>6 et <=12 heures (VIIRS Suomi)' },
    { shape: 'square', color: '#FF0000', text: '>12 et <=24 heures (VIIRS Suomi)' },
    { shape: 'square', color: '#0000FF', text: '7 derniers jours (VIIRS Suomi)' },
    { shape: 'square', color: '#008000', text: '30 derniers jours (VIIRS Suomi)' },
    { shape: 'square', color: '#FFA500', text: 'Saison des feux (VIIRS Suomi)' },
    { shape: 'diamond', color: '#FF1493', text: '<=6 heures (VIIRS Noaa)' },
    { shape: 'diamond', color: '#D2691E', text: '>6 et <=12 heures (VIIRS Noaa)' },
    { shape: 'diamond', color: '#8B0000', text: '>12 et <=24 heures (VIIRS Noaa)' },
    { shape: 'diamond', color: '#1E90FF', text: '7 derniers jours (VIIRS Noaa)' },
    { shape: 'diamond', color: '#2E8B57', text: '30 derniers jours (VIIRS Noaa)' },
    { shape: 'diamond', color: '#00FF00', text: 'Saison des feux (VIIRS Noaa)' },
  ];

  const renderShape = (shape, color) => {
    switch (shape) {
      case 'square':
        return <div style={{ width: '12px', height: '12px', backgroundColor: color }}></div>;
      case 'diamond':
        return (
          <div style={{
            width: '8px',
            height: '8px',
            backgroundColor: color,
            transform: 'rotate(45deg)'
          }}></div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>
        <p style={{margin:'8px 0px'}}><b>Feux actifs VIIRS</b></p>
      {items.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
          <div style={{ width: '10px', height: '10px', marginRight: '8px' }}>
            {renderShape(item.shape, item.color)}
          </div>
          <span style={{whiteSpace:'nowrap',fontSize:'12px'}}>{item.text}</span>
        </div>
      ))}
    </div>
  );
};

export default ActiveViirs;
