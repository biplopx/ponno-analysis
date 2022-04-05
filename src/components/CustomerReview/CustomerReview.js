import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';

const CustomerReview = () => {
  const [reviews] = useReviews([]);
  const newReviews = reviews.slice(0, 3)
  return (
    <section className='py-6 px-4'>
      <h2 className='text-3xl font-bold text-blue-600 text-center mb-5'>Customer Reviews</h2>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-y-5 lg:grid-cols-3 lg:gap-x-5 md:gap-x-5 lg:gap-y-6'>
          {
            newReviews.map(review => <Review key={review.id} review={review}></Review>)
          }
        </div>
        <button type="button" className="block mx-auto py-3 px-4 mt-5 bg-blue-600 text-white text-md font-semibold rounded-md shadow focus:outline-none">
          <Link to="/reviews">View all</Link>
        </button>
      </div>
    </section>
  );
};

export default CustomerReview;