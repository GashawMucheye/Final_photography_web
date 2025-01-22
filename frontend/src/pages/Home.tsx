import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
// import { FaArrowUp } from 'react-icons/fa';
import { IoIosArrowDropup } from 'react-icons/io';

import { useEffect, useState } from 'react';
import { useTheme } from '../context-Api/theme-provider';
import Accessibility from '@/components/Accessibility';
import Testimonials from '@/components/Testimonials';
// import UploadTestimonial from '@/components/UploadTestimonial';
import Services from './Services';
import HeroSection from '@/components/HeroSection';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [showArrow, setShowArrow] = useState<boolean>(false);
  const { theme } = useTheme();
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowArrow(window.scrollY > 1000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);
  const { t } = useTranslation();

  return (
    <section className='min-h-screen'>
      <Accessibility />
      <HeroSection />
      <About />
      <hr />
      <Gallery />
      <hr />
      <Testimonials />
      <hr />
      <Services />
      <hr />
      <Contact />
      {/* 
      <hr />
      <UploadTestimonial /> */}
      {/* <hr /> */}
      <WhatsAppButton />
      <motion.a
        whileHover={{ scale: 1.2, color: 'steelblue', cursor: 'pointer' }}
        className=' bg-blue-600 fixed bottom-[70px] right-[8px] rounded-md animate-bounce  '
      >
        {showArrow && (
          <div
            onClick={scrollToTop}
            className={`${
              theme === 'dark' ? 'text-white p-3' : 'text-black p-3'
            } hover:text-white`}
            title={t('homePage.scroll')}
          >
            {/* <FaArrowUp size={24} /> */}
            <IoIosArrowDropup size={30} />
          </div>
        )}
      </motion.a>
    </section>
  );
};
export default Home;
