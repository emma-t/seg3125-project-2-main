import React from 'react';
import { useTranslation } from 'react-i18next';
import shopImage from "../images/Open Peeps - Sitting.png";

function Footer() {

  const {t} = useTranslation();

  return (
    <footer style={footerStyle}>
      <div className='footer'>
        <img src={shopImage} alt="Person standing and smiling in a blue shirt and black pants" />
        <p>{t('Footer.Phone')}: (613) 613-6133</p>
        <p>{t('Footer.Email')}: contact@revivemart.com</p>
      </div>
      <p>© {new Date().getFullYear()} ReviveMart. {t('Footer.Rights')}</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#4AD66D',
  padding: '10px',
  textAlign: 'center',
};

export default Footer;
