import React from "react";
import ChatBot from "../components/ChatBot";

function About() {

    return (

        <div>
            <div className="text-center">
                <img />
                <h1>About Us</h1>
                <p>ReviveMart is a student-led initiative that aims to make a positive impact on the environment while addressing the ever-changing trends in fashion. We started our journey in Ottawa in 2023 and have since grown into a thriving community-driven platform.</p>
                <p>Our team of passionate students believes in the power of sustainability and the importance of giving clothing a second life. We understand that fashion trends come and go, leading to a surplus of perfectly wearable clothing items that often end up in landfills. ReviveMart provides a solution by creating a space where individuals can donate their gently used clothing and others can find fashionable pieces at affordable prices.</p>
                <p>At ReviveMart, we are dedicated to promoting inclusivity and accessibility. Our audience encompasses people of all ages, backgrounds, races, sexual orientations, religions, and creeds. We believe that sustainable fashion is for everyone, and we strive to create an inclusive and welcoming environment where everyone can find something they love.</p>
                <p>By choosing to shop or donate at ReviveMart, you join us in our mission to reduce textile waste and contribute to a more sustainable future. Together, we can make a difference and redefine the way we consume and think about fashion.</p>
            </div>
            <ChatBot />
        </div>


    );

}

export default About;