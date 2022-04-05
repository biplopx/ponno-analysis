import React from 'react';

const Blogs = () => {
  return (
    <section className='py-5 px-5'>
      <h1 className='text-center text-3xl font-bold mb-5'>Blogs</h1>
      <div className="container mx-auto">
        <div className='border border-blue-500 lg:w-3/4 mx-auto rounded p-7'>
          <h2 className='text-2xl font-bold mb-5'>1. What is context api?</h2>
          <p>In React.js the context api is a way to passing or sharing data like components sate. It's alternative of prop-drilling in react components. Use prop-drilling we can send data a to z layer buy passing data first layer to last layer. To share data prop-drilling techquine is hard and long process. To slove this problem we have react context api. you can share data efficiently to any were using context api. </p>
        </div>
        <div className='border border-blue-500 lg:w-3/4 mx-auto rounded p-7 mt-5'>
          <h2 className='text-2xl font-bold mb-5'>2. What is semantic tag?</h2>
          <p>We know that HTML has many tags that are used to display the content of a webpage. HTML can usually be divided into two parts, one is non-semantic tag and the other is semantic tag. Tags that do not make sense of what kind of content or website is being provided are usually called non-semantic tags. And the tags that help you understand what kind of content is being delivered to the web page and what kind of content that helps developers and search engines to understand easily are usually called semantic tags.
            <h5 className='text-lg font-bold'>Examples of semantic tag:</h5>
            <ul className='list-disc list-inside'>
              <li>header</li>
              <li>footer</li>
              <li>nav</li>
              <li>article</li>
              <li>aside</li>
            </ul>
          </p>
        </div>
        <div className='border border-blue-500 lg:w-3/4 mx-auto rounded p-7 mt-5'>
          <h2 className='text-2xl font-bold mb-5'>3. Block Vs Inline block element</h2>
          <p>Every HTML tag have default display behavior depending what type of html tag or element it is. In html we have two display value block and line element. A block level element start with new and grap all available spaces to display there content. that mean a block level element that start with new line and display content full with of available spaces. like p, div, li, nav etc </p>
          <p>Inline block level element does not start new line. An inline element only takes up as much width as necessary. Example: span, a, button</p>
        </div>

      </div>
    </section>
  );
};

export default Blogs;