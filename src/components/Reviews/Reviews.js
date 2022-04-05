import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <section className='py-6 px-4 font-serif'>
      <h2 className='text-3xl text-center font-bold mb-6'>Reviews</h2>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-x-5 md:gap-x-5 lg:gap-y-6'>
          {
            reviews.map(review => <Review key={review.id} review={review}></Review>)
          }
        </div>
      </div>

    </section>
  );
};

export default Reviews;