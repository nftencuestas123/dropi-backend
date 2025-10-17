import React from "react";

type HeaderProps = {
  title?: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => (
  <header style={{
    width: '100%',
    background: '#0596E2',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '2rem',
    letterSpacing: '2px'
  }}>
    {title ? title : "AlmiDrop · Tu app de ventas, tendencias y administración"}
  </header>
);

export default Header;
