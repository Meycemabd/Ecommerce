import React from 'react';

export default function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '20px', userSelect: 'none', cursor: 'default' }}>
      <span
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: '600',
          fontSize: '22px',
          color: '#1A73E8',
          userSelect: 'none',
        }}
      >
        EYOU.ADMIN
      </span>
    </div>
  );
}
