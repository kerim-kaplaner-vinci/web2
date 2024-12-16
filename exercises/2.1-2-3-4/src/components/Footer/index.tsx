import React from 'react';

interface FooterProps {
  logoUrl: string;
  children: React.ReactNode;
}

const Footer = (props: FooterProps) => {
  return (
    <footer>
      <img src={props.logoUrl} alt="Logo" />
      {props.children}
    </footer>
  );
};

export default Footer;
