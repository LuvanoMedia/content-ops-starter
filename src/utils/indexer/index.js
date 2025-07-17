import React, { useState } from 'react';

export default function Home() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div
      style={{
        backgroundColor: '#000000',
        color: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}
    >
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '2rem' }}>
        Luvano Media
      </h1>

      <button
        onClick={() => setShowContact(!showContact)}
        style={{
          padding: '1rem 2rem',
          border: '2px solid white',
          borderRadius: '5px',
          backgroundColor: 'transparent',
          color: '#ffffff',
          fontSize: '1.25rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#ffffff';
          e.target.style.color = '#000000';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = 'transparent';
          e.target.style.color = '#ffffff';
        }}
      >
        Contact Us
      </button>

      {showContact && (
        <div style={{ marginTop: '2rem', fontSize: '1.25rem' }}>
          <p>Email: <a href="mailto:info@luvano.co.za" style={{ color: '#ffffff', textDecoration: 'underline' }}>info@luvano.co.za</a></p>
          <p>Cell: <a href="tel:+27726195277" style={{ color: '#ffffff', textDecoration: 'underline' }}>072 619 5277</a></p>
        </div>
      )}
    </div>
  );
}
