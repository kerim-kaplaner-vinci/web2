import React from 'react';
import './Header.css'; // Ajoutez cette ligne pour importer le CSS

interface HeaderProps {
  logoUrl: string;
  children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  return (
    <header>
      <img src={props.logoUrl} alt="Logo" className='logo' />
      {props.children}
    </header>
  );
};

export default Header;
