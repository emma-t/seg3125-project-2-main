import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
import LangContext from '../LangContext';
import { useContext } from 'react';
import logo from "../images/logo.png";

const langs = {
  English: { title: 'English' },
  Français: { title: 'Français' }
}

function PageNavbar() {
  const { t } = useTranslation();

  const { lang } = useContext(LangContext);

  function changeLang(l) {
    if (lang !== l) {
      i18n.changeLanguage(l);
    }
  }
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <div className='title'><Navbar.Brand as={NavLink} to="/"><img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />ReviveMart</Navbar.Brand></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="donate-link">
            <Nav.Link as={NavLink} to="/donate" style={{ color:"white"}}>{t('Navbar.Donate')}</Nav.Link>
            </div>
            <Nav.Link as={NavLink} to="/items">{t('Navbar.Items')}</Nav.Link>
            <Nav.Link as={NavLink} to="/analytics">{t('Navbar.Analytics')}</Nav.Link>
            <Nav.Link as={NavLink} to="/about">{t('Navbar.AboutUs')}</Nav.Link>
            <Nav.Link as={NavLink} to="/faq-reviews">{t('Navbar.FAQReviews')}</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">{t('Navbar.Contact')}</Nav.Link>
          </Nav>
          <Nav className="justify-content-end"> {/* Add this line to move the NavDropdown to the right */}
            <NavDropdown title={lang} id="basic-nav-dropdown" style={{ border: '1px solid white', borderRadius: '8px', backgroundColor: "white"}}>
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
