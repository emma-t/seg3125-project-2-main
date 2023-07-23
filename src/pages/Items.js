import React from "react";
import SearchBar from "../components/SearchBar";
import ChatBot from "../components/ChatBot";

function Items(){

    const tutors = [
        { image:'https://www.realmenrealstyle.com/wp-content/uploads/2021/07/mens-jeans.jpg', name: 'Jeans', course: 'Pants', amount: '300+ in stock' },
        { image: 'https://media.gq.com/photos/6442d34dbf18820471f56f7c/1:1/w_320,c_limit/Layer_2_art.jpg', name: 'Khakis', course: 'Pants', amount: '300+ in stock' },
        { image: 'https://www.justcourtshirts.ca/wp-content/uploads/2021/10/plain-blue-dress-pant-88004076.jpg', name: 'Dress Pants', course: 'Pants', amount: '300+ in stock' },
        { image: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/449879/item/goods_08_449879.jpg?width=494', name: 'Sweat Pants', course: 'Pants', amount: '300+ in stock'},
        { image: 'https://www.boutiqueonmainstreet.co.nz/cdn/shop/products/DOCK-CARGO-PANT-KHAKI-FRONT-v2_672x896_5abd82ba-fb70-485c-b992-f1bc986d5a2f_1200x1200.jpg?v=1630020741', name: 'Cargo', course: 'Pants', amount: '300+ in stock' },
        { image: 'https://i5.walmartimages.com/asr/9151b71b-44a4-4505-83d0-5b6bdbe06ad0.ac95c925f4de2fdef6c206a7c9a9d41c.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff', name: 'Athletic', course: 'Pants', amount: '300+ in stock' },

        { image: 'https://media.boohoo.com/i/boohoo/pzz61066_khaki_xl?w=900&qlt=default&fmt.jp2.qlt=70&fmt=auto&sm=fit', name: 'Graphic Tees', course: 'T-Shirts', amount: '300+ in stock' },
        { image: 'https://images.tailorstore.com/YToyOntzOjU6IndpZHRoIjtpOjE2MDA7czo2OiJoZWlnaHQiO2I6MDt9/images/catalog/13140-crowley-light-blue-men-s-shirt-17f271-folded-tailor-store.jpg', name: 'Dress Shirt', course: 'T-Shirts', amount: '300+ in stock' },
        { image: 'https://i5.walmartimages.com/asr/2294576a-daa1-42eb-9cfa-c05a07a89d93.8ed29128d153ab514d4e4876f089af75.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff', name: 'Collared Shirt', course: 'T-Shirts', amount: '300+ in stock' },
        
        { image: 'https://i5.walmartimages.com/asr/9eb28e44-8c83-4e60-a6cd-f0727d32c64b.53042e216de214a4f9d1d2f75ba36e99.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff', name: 'Long Sleeve', course: 'Long Sleeve', amount: '300+ in stock' },
        { image: 'https://imagescdn.simons.ca/images/1533-5212-41-A1_2/eco-friendly-minimalist-hoodie.jpg?__=132', name: 'Hoodies', course: 'Long Sleeve', amount: '300+ in stock' },
        { image: 'https://cdn11.bigcommerce.com/s-ce94a/images/stencil/1280x1280/products/2407/32858/g180-gildan-crew-neck-blankclothing.ca-white__92636.1676591968.jpg?c=2&imbypass=on', name: 'Crewneck', course: 'Long Sleeve', amount: '300+ in stock' },
        { image: 'https://n.nordstrommedia.com/id/sr3/1fa3a768-e1d1-412c-9d4d-07ce392cba9b.jpeg?h=365&w=240&dpr=2', name: 'Collared Shirt', course: 'Long Sleeve', amount: '300+ in stock' },

        { image: 'https://m.media-amazon.com/images/I/61iVQiusBlL._AC_UY1100_.jpg', name: 'Casual Shorts', course: 'Shorts / Skirt', amount: '300+ in stock' },
        { image: 'https://price-buckland.ca/media/catalog/product/cache/298712fe8a396d934ee4dca7dada7e45/i/m/img_6664.jpg', name: 'Dress Shorts', course: 'Shorts / Skirt', amount: '300+ in stock' },
        { image: 'https://imagescdn.simons.ca/images/6652-15248644-1-A1_2/ruffled-mini-skirt.jpg?__=12', name: 'Short Skirts', course: 'Shorts / Skirt', amount: '300+ in stock' },
        { image: 'https://i.etsystatic.com/15507519/r/il/3bb7cd/3459666003/il_fullxfull.3459666003_etc6.jpg', name: 'Long Skirts', course: 'Shorts / Skirt', amount: '300+ in stock' },

        { image: 'https://media.gq.com/photos/5a04f9a398002d2e253679f5/master/pass/fall-hats-gq-style-0816-01-1.jpg', name: 'Hats', course: 'Accessories', amount: '300+ in stock' },
        { image: 'https://cdn.thewirecutter.com/wp-content/media/2022/09/totebags-2048px-3945.jpg?auto=webp&quality=75&crop=2:1&width=1024', name: 'Bags', course: 'Accessories', amount: '300+ in stock' },
        { image: 'https://hips.hearstapps.com/hmg-prod/images/cushioned-shoes-15408-1632754154.jpg', name: 'Shoes', course: 'Accessories', amount: '300+ in stock' },
    ];
    
    const courses = ['Pants', 'Shorts / Skirt', 'T-Shirts', 'Long Sleeve', 'Accessories'];
    
    return (
        <div className="items">
        <h1>Items List</h1>
        <div className="items-search">
        <SearchBar courses={courses} tutors = {tutors} />
        </div>
        {/* Render the list of tutors */}
        <ChatBot />
        </div>
    );
    

}

export default Items;