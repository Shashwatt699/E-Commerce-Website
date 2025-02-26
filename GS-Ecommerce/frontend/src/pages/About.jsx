import React from 'react'
import Title from './../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from './../components/NewsletterBox';

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt possimus, voluptatibus dignissimos rerum, suscipit cumque eligendi vero delectus ab dolor quidem tempora exercitationem veritatis dolorum esse doloribus sint libero quisquam? Impedit architecto tempora tempore qui?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed neque aliquid fugiat obcaecati consectetur alias voluptatum consequuntur illum? Iusto vero eum, ipsam atque consectetur est minima, incidunt praesentium explicabo error eius reiciendis culpa officiis laborum accusamus id deserunt ratione? Nulla!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi id dolorem cumque doloribus, voluptatem asperiores eius eligendi ut aspernatur accusamus quam enim non soluta incidunt similique eveniet, facilis debitis maiores?</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, dolores? Blanditiis, placeat id.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, dolores? Blanditiis, placeat id.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About