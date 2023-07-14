import React from 'react';
import ChatBot from "../components/ChatBot";

function FAQReviews() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3 className="mt-4">FAQ <i className="bi bi-patch-question-fill"></i></h3>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Q: How can I donate my clothing to ReviveMart?
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={{ backgroundColor: '#f2f2f2' }}>A: Donating your clothing is easy! Simply book a time to visit our store and drop off your gently used items at the designated donation area. Our friendly staff will assist you in the process and ensure your donation goes towards helping others and the environment.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  Q: What types of clothing items does ReviveMart accept for donations?
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={{ backgroundColor: '#f2f2f2' }}>A: We accept a wide range of clothing items, including shirts, pants, dresses, jackets, shoes, accessories, and more. As long as the items are clean, in good condition, and suitable for reuse, we welcome your donations.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Q: Can I shop for clothing at ReviveMart even if I haven't made a donation?
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={{ backgroundColor: '#f2f2f2' }}>A: Absolutely! Our store is open to everyone, regardless of whether you've made a donation or not. You can explore our collection of affordable and fashionable clothing items without any obligation to donate.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  Q: How does ReviveMart ensure the quality and condition of the clothing items available for purchase?
                </button>
              </h2>
              <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={{ backgroundColor: '#f2f2f2' }}>A: We have a dedicated team that carefully inspects and sorts all donated items. Only items in good condition, free from significant damage or wear, are made available for sale. We prioritize offering high-quality clothing to our customers.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                  Q: Are the prices at ReviveMart lower than traditional retail stores?
                </button>
              </h2>
              <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={{ backgroundColor: '#f2f2f2' }}>A: Yes! Our goal is to provide affordable clothing options to our customers. Since the clothing items at ReviveMart are donated, we can offer them at lower prices compared to traditional retail stores. You'll find great deals and stylish pieces without breaking the bank.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                  Q: Can I volunteer at ReviveMart to support your cause?
                </button>
              </h2>
              <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix"
                data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={{ backgroundColor: '#f2f2f2' }}>A: Absolutely! We greatly appreciate the support of volunteers. If you're interested in joining our team and contributing to our mission, please reach out to us through our contact page. We would love to hear from you and discuss how you can get involved.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <h3 className="mt-4">Reviews <i className="bi bi-megaphone-fill"></i></h3>
          <div id="scrollspyHeading1">Tim N.</div>
          <p>"ReviveMart is a fantastic store in Ottawa! I donated my old clothes and found great new additions to my wardrobe. The store is well-organized, and the prices are affordable. Love supporting their mission!"</p>
          <div id="scrollspyHeading2">Zak M.</div>
          <p>"Visited ReviveMart in Ottawa and loved it! Great selection of clothes, friendly staff, and a commitment to sustainability. Will definitely shop here again."</p>
          <div id="scrollspyHeading3">Cedric D.</div>
          <p>"ReviveMart is a hidden gem! I donated my clothes and discovered some amazing finds. The staff is helpful, and I love their dedication to the environment. Highly recommend!"</p>
          <div id="scrollspyHeading4">Angela J.</div>
          <p>"ReviveMart is my go-to store in Ottawa. I can donate my old clothes and find stylish items at affordable prices. It's a win-win for fashion and sustainability!"</p>
        </div>
      </div>
      <ChatBot />
    </div>
  );
}

export default FAQReviews;
