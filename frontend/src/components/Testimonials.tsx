import { useEffect, useState } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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

  useEffect(() => {
    const fetchTestimonial = async (): Promise<void> => {
      try {
        setLoading(true);
        const { data } = await axios.get<Testimonial[]>(
          'http://localhost:3000/api/testimonials'
        );
        setTestimonialData(data);
      } catch (error) {
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
      <div className="text-center">
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <section className="max-w-4xl mx-auto p-6 min-h-[400px] mt-[4em]">
        <h3 className="text-center text-2xl font-bold mb-6 text-black">
          {t('testimonialSection.testimonials')}
        </h3>
        <Swiper
          // Install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log('Swiper instance:', swiper)}
          onSlideChange={() => console.log('Slide changed')}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {testimonialData.map((item, idx) => (
            <SwiperSlide className="p-10" key={idx}>
              <div className="bg-green-500 p-4 text-center rounded-md">
                <figure className="mb-4">
                  <img
                    src={item.imageUrl}
                    className="w-16 h-16 mx-auto rounded-full object-cover"
                    alt={item.name}
                  />
                  <figcaption className="mt-2 font-semibold">
                    {item.name}
                  </figcaption>
                </figure>
                <q className="text-center mb-4 text-black">{item.content}</q>
                <div className="flex justify-center text-black">
                  <StarRatings
                    rating={item.rating}
                    starRatedColor="gold"
                    numberOfStars={5}
                    name={`rating-${idx}`}
                    starDimension="20px"
                    starSpacing="2px"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;
