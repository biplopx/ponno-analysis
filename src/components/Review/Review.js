import React from 'react';

const Review = (props) => {
  // console.log(props)
  const { name, review, img, rating } = props.review;
  return (
    <div className='bg-white-000 border border-blue-600 p-6 rounded-lg font-mono'>
      <img className='w-24 h-24 block mx-auto rounded-full' src={img} alt="" />
      <h1 className='text-2xl text-center font-bold my-6'>{name}</h1>
      <blockquote>
        <p className='text-lg' title={review}>"{review.length <= 258 ? review : review.slice(0, 257) + "..."}"</p>
      </blockquote>
      <h4 className='text-lg mt-4 font-bold'>Rating: {rating} </h4>
    </div>
  );
};

export default Review;