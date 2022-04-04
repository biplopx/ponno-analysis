import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';

const Home = () => {
  return (
    <>    <section className='font-mono px-4'>
      <div className='container mx-auto py-5'>
        <div className='grid grid-cols-1 flex-col-reverse lg:grid-cols-2 md:grid-cols-2 items-center lg:gap-x-4'>
          <div className='order-2 lg:order-1 md:order-1'>
            <h1 className='mb-5 font-bold text-3xl lg:text-6xl'><span className='text-violet-500'>Razer</span> Your Next gen <span className='text-blue-600'>Gaming Laptop</span></h1>
            <p>Razer has finally brought a laptop that is truly is made for gamers. From the design to the intricate choice of components has made this laptop be the number one choice for any gamer. From sleek design a to the battery life this is the best portable gaming laptop in its generation. Nothing can compare to the raw performance that this laptop provides. It is incomparable to any other gaming laptop.</p>
            <button type="button" className="py-3 px-4 mt-5 bg-indigo-500 text-white text-lg font-semibold rounded-md shadow focus:outline-none">
              <a href="https://www.startech.com.bd/razer-blade-15-base-model-rtx-3060-i7-10th-gen-gaming-laptop" rel="noreferrer" target="_blank">Buy Now</a>
            </button>
          </div>
          <div className='order-1 lg:order-2 md:order-2 mx-auto'>
            <img src="https://www.startech.com.bd/image/cache/catalog/laptop/razer/blade-15-base-model-core-i7-10th-gen/blade-15-base-model-core-i7-10th-gen-500x500.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
      <CustomerReview></CustomerReview>
    </>

  );
};

export default Home;