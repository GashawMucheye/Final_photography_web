import React, { useState, useEffect } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Import star icons
import axios from 'axios';
import { useTranslation } from 'react-i18next';

interface Testimonial {
  name: string;
  content: string;
  rating: number;
  imageUrl: string;
}

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const [testimonialData, setTestimonialData] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const fetchTestimonial = async (): Promise<void> => {
      try {
        setLoading(true);
        const { data } = await axios.get<Testimonial[]>(
          'http://localhost:3000/api/testimonials'
        );
        setTestimonialData(data);
      } catch (error) {
        setError('Failed to load testimonials. Please try again later.');
        if (axios.isAxiosError(error)) {
          console.error('Error fetching testimonials:', error.message);
        } else {
          console.error('An unknown error occurred:', error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonial();
  }, []);

  if (loading) {
    return (
      <div className='text-center'>
        <span className='loading loading-dots loading-lg'></span>{' '}
        {/* Improved loading spinner */}
      </div>
    );
  }

  if (error) {
    return (
      <div className='text-center'>
        <p className='text-red-500 font-semibold'>{error}</p>
      </div>
    );
  }

  // // Autoplay effect

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialData.length) % testimonialData.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating); // Whole stars
    const halfStar = rating % 1 >= 0.5; // Half star
    const emptyStars = 5 - Math.ceil(rating); // Empty stars

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} color='#fbbf24' />
        ))}
        {halfStar && <FaStarHalfAlt color='#fbbf24' />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} color='#fbbf24' />
        ))}
      </>
    );
  };

  return (
    <div className='container mx-auto px-4 py-16 rounded-lg'>
      {t('testimonialSection.testimonials')}
      <h2 className='text-4xl font-bold text-center mb-12 text-gradient'>
        {/* What Our Customers Say */}
        {t('testimonialSection.quote')}
      </h2>
      <div className='relative rounded-3xl shadow-2xl overflow-hidden'>
        <div className='flex overflow-hidden'>
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full transition-transform duration-1000 ease-in-out transform ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              <div className='bg-gray-200 p-8 rounded-3xl shadow-2xl flex flex-col items-center transition-all duration-500 hover:scale-105 hover:shadow-3xl'>
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className='w-24 h-24 rounded-full border-4 border-blue-500 mb-6 shadow-md transition-transform duration-300 transform hover:scale-110'
                />
                <h3 className='text-2xl font-semibold text-center text-gray-800 mb-4'>
                  {testimonial.name}
                </h3>
                <p className='text-gray-600 text-center italic mb-4'>
                  "{testimonial.content}"
                </p>
                {/* Render stars based on rating */}
                <div className='flex justify-center mb-6'>
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors'
          onClick={handlePrev}
        >
          &lt;
        </button>
        <button
          className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors'
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
