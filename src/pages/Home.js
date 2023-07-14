import React from "react";
import { Link } from "react-router-dom";
import ChatBot from "../components/ChatBot";

function Home(){

    return(
        <div>

        <div className="text-center">
      <h1>Welcome to ReviveMart</h1>
      <p>ReviveMart is your one-stop destination for donating clothing and shopping for pre-loved items. We believe in promoting sustainability and giving a new life to gently used clothing.</p>
      <p>Whether you're looking to declutter your wardrobe or find unique and affordable fashion pieces, ReviveMart has you covered.</p>

      <div className="donate-section">
        <h2>Donate Your Clothing</h2>
        <p>Make a positive impact by donating your clothing to ReviveMart. We accept clean, gently used clothing items that are in good condition. Your donations will be sorted, curated, and made available for others to purchase.</p>
        <p>By donating, you not only contribute to reducing textile waste but also support sustainable fashion and help someone find their next favorite outfit.</p>
        <Link to="/donate" className="btn btn-primary mx-auto" role="button" style={{ width: '60%' }}>
            <b>Donate Now!</b>
        </Link>
      </div>

      <div className="shop-section">
        <h2>Shop Pre-Loved Items</h2>
        <p>Discover a wide selection of pre-loved clothing and accessories at affordable prices. Our inventory is constantly updated with unique and stylish items for men, women, and children.</p>
        <p>By shopping at ReviveMart, you can embrace sustainable fashion and make a conscious choice towards a more eco-friendly lifestyle. Each purchase you make contributes to reducing fashion waste.</p>
        <Link to="/items" className="btn btn-primary mx-auto" role="button" style={{ width: '60%' }}>
            <b>Explore Now!</b>
        </Link>
      </div>

        
    </div>
    <ChatBot />
    </div>

    );

}

export default Home;