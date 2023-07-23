import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import LangContext from '../LangContext'
import { useContext } from 'react';

const langs = {
  English: {title: 'English'},
  French: {title: 'French'}
}

function PageNavbar() {
  const {t} = useTranslation();

  const { lang } = useContext(LangContext);

  function changeLang (l) {
    if (lang !== l) {
      i18n.changeLanguage(l);

    }
  }
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <div className='title'><Navbar.Brand as={NavLink} to="/">ReviveMart</Navbar.Brand></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/donate">{t('Navbar.Donate')}</Nav.Link>
            <Nav.Link as={NavLink} to="/items">{t('Navbar.Items')}</Nav.Link>
            <Nav.Link as={NavLink} to="/analytics">{t('Navbar.Analytics')}</Nav.Link>
            <Nav.Link as={NavLink} to="/about">{t('Navbar.AboutUs')}</Nav.Link>
            <Nav.Link as={NavLink} to="/faq-reviews">{t('Navbar.FAQReviews')}</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">{t('Navbar.Contact')}</Nav.Link>
          
            <NavDropdown title={lang} id="basic-nav-dropdown">
              {Object.keys(langs).map((lang) => (
                <NavDropdown.Item style={{ fontWeight: i18n.resolvedLanguage === lang ? 'bold' : 'normal' }} onClick={() => changeLang(lang)}>
                  {langs[lang].title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNavbar;
