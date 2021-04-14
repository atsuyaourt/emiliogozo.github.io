import React from 'react';
import './Footer.css';
import { Fade } from 'react-reveal';
import emoji from 'react-easy-emoji';

const Footer = () => (
  <Fade bottom duration={1000} distance="5px">
    <div className="footer-div">
      <p className="footer-text">{emoji('© Emilio Gozo')}</p>
    </div>
  </Fade>
);

export default Footer;
