import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import ChatBot from "../components/ChatBot";
import introImage from "../images/Open Peeps - Standing.png";


function Home() {

  const {t} = useTranslation();

  return (
    <div className="text-center">

      <div className="intro">
        <img src={introImage} alt="Person standing and smiling in a blue shirt and black pants" />
        <div className="intro-content">
          <h1>{t('Home.title')}</h1>
          <p>{t('Home.description')}</p>
        </div>
      </div>

      <div className="donate">
        <h2>{t('Home.donatetitle')}</h2>
        <p>{t('Home.donate')}</p>
        <Link to="/donate" className="btn" role="button">
          <b>{t('Home.donatebtn')}</b>
        </Link>
      </div>

      <div className="shop">
          <h2>{t('Home.shoptitle')}</h2>
          <p>{t('Home.shop')}</p>
          <Link to="/items" className="btn" role="button">
            <b>{t('Home.shopbtn')}</b>
          </Link>
      </div>

      <div className="analytics-home">
        <h2>{t('Home.analyticstitle')}</h2>
        <p>{t('Home.analytics')}</p>
        <Link to="/analytics" className="btn" role="button">
            <b>{t('Home.analyticsbtn')}</b>
          </Link>
      </div>
      

      <ChatBot />
    </div>

  );

}

export default Home;