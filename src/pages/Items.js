import React from "react";
import SearchBar from "../components/SearchBar";
import ChatBot from "../components/ChatBot";


function Items(){

    
    const tutors = [
        { name: 'Jeans', course: 'Pants', amount: '300+ in stock' },
        { name: 'Khakis', course: 'Pants', amount: '300+ in stock' },
        { name: 'Dress Pants', course: 'Pants', amount: '300+ in stock' },
        { name: 'Sweat Pants', course: 'Pants', amount: '300+ in stock'},
        { name: 'Cargo', course: 'Pants', amount: '300+ in stock' },
        { name: 'Athletic', course: 'Pants', amount: '300+ in stock' },

        { name: 'Graphic Tees', course: 'T-Shirts', amount: '300+ in stock' },
        { name: 'Dress Shirt', course: 'T-Shirts', amount: '300+ in stock' },
        { name: 'Collared Shirt', course: 'T-Shirts', amount: '300+ in stock' },
        
        { name: 'Long Sleeve', course: 'Long Sleeve', amount: '300+ in stock' },
        { name: 'Hoodies', course: 'Long Sleeve', amount: '300+ in stock' },
        { name: 'Crewneck', course: 'Long Sleeve', amount: '300+ in stock' },
        { name: 'Collared Shirt', course: 'Long Sleeve', amount: '300+ in stock' },

        { name: 'Casual Shorts', course: 'Shorts / Skirt', amount: '300+ in stock' },
        { name: 'Dress Shorts', course: 'Shorts / Skirt', amount: '300+ in stock' },
        { name: 'Short Skirts', course: 'Shorts / Skirt', amount: '300+ in stock' },
        { name: 'Long Skirts', course: 'Shorts / Skirt', amount: '300+ in stock' },

        { name: 'Hats', course: 'Accessories', amount: '300+ in stock' },
        { name: 'Bags', course: 'Accessories', amount: '300+ in stock' },
        { name: 'Shoes', course: 'Accessories', amount: '300+ in stock' },
    ];
    
    const courses = ['Pants', 'Shorts / Skirt', 'T-Shirts', 'Long Sleeve', 'Accessories'];
    
    
    
    return (
        <div>
        <h1>Items List</h1>
        <SearchBar courses={courses} tutors = {tutors} />
        {/* Render the list of tutors */}
        <ChatBot />
        </div>
    );
    

}

export default Items;