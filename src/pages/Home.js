import React from "react";
import { Link } from "react-router-dom";
import ChatBot from "../components/ChatBot";
import introImage from "../images/Open Peeps - Standing.png";
import shopImage from "../images/Open Peeps - Sitting.png";

function Home() {

  return (
    <div className="text-center">

      <div className="intro">
        <img src={introImage} alt="Person standing and smiling in a blue shirt and black pants" />
        <div className="intro-content">
          <h1>Eco-friendly treasures await you.</h1>
          <p>ReviveMart is your one-stop destination for donating clothing and shopping for pre-loved items. We believe in promoting sustainability and giving a new life to gently used clothing. Whether you're looking to declutter your wardrobe or find unique and affordable fashion pieces, ReviveMart has you covered.</p>
        </div>
      </div>

      <div className="donate">
        <h2>Donate Your Clothing</h2>
        <p>Make a positive impact by donating your clothing to ReviveMart. We accept clean, gently used clothing items that are in good condition. Your donations will be sorted, curated, and made available for others to purchase. By donating, you not only contribute to reducing textile waste but also support sustainable fashion and help someone find their next favorite outfit.</p>
        <Link to="/donate" className="btn" role="button">
          <b>DONATE</b>
        </Link>
      </div>

      <div className="shop">
          <h2>Shop Pre-Loved Items</h2>
          <p>Discover a wide selection of pre-loved clothing and accessories at affordable prices. Our inventory is constantly updated with unique and stylish items for men, women, and children. By shopping at ReviveMart, you can embrace sustainable fashion and make a conscious choice towards a more eco-friendly lifestyle. Each purchase you make contributes to reducing fashion waste.</p>
          <Link to="/items" className="btn" role="button">
            <b>EXPLORE</b>
          </Link>
          <img src={shopImage} alt="Person standing and smiling in a blue shirt and black pants" />
      </div>

      <ChatBot />
    </div>

  );

}

export default Home;