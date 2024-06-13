import React from 'react';

const ActiveModis = () => {
    const items = [
        { symbol: '▼', label: '<=6 heures (MODIS Aqua)', color: '#8a2be2' },
        { symbol: '▼', label: '>6 & <=12 heures (MODIS Aqua)', color: '#ff0000' },
        { symbol: '▼', label: '>12 & <=24 heures (MODIS Aqua)', color: '#ff8c00' },
        { symbol: '▼', label: 'Derniers 7 jours (MODIS Aqua)', color: '#0000ff' },
        { symbol: '▼', label: 'Derniers 30 jours (MODIS Aqua)', color: '#a52a2a' },
        { symbol: '▼', label: 'Saison des feux (MODIS Aqua)', color: '#008000' },
        { symbol: '▲', label: '<=6 heures (MODIS Terra)', color: '#8a2be2' },
        { symbol: '▲', label: '>6 & <=12 heures (MODIS Terra)', color: '#ff0000' },
        { symbol: '▲', label: '>12 & <=24 heures (MODIS Terra)', color: '#ff8c00' },
        { symbol: '▲', label: 'Derniers 7 jours (MODIS Terra)', color: '#0000ff' },
        { symbol: '▲', label: 'Derniers 30 jours (MODIS Terra)', color: '#a52a2a' },
        { symbol: '▲', label: 'Saison des feux (MODIS Terra)', color: '#008000' },
      ];

  return (
    <div>
        <p style={{margin:'8px 0px'}}><b>Feux actifs MODIS</b></p>
      {items.map((item, index) => (
        <div key={index} >
          <span style={{ color: item.color }}>{item.symbol}</span> <span style={{fontSize:'12px'}}>{item.label} </span>
        </div>
      ))}
    </div>
  );
};


export default ActiveModis
