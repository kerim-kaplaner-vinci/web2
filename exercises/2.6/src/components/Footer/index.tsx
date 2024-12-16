import React from 'react';
import './Footer.css'; // Ajoutez cette ligne pour importer le CSS

interface FooterProps {
  logoUrl: string;
  children: React.ReactNode;
}

const Footer = (props: FooterProps) => {
  return (
    <footer>
      <img src={props.logoUrl} alt="Logo" className='logo' />
      {props.children}
    </footer>
  );
};

export default Footer;
