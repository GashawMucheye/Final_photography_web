import { useTranslation } from 'react-i18next';
import { Button } from '../components/ui/button';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import { useNavigate } from 'react-router-dom';
import WhatsAppButton from '@/components/WhatsAppButton';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useTheme } from '../context-Api/theme-provider';
import Accessibility from '@/components/Accessibility';

const Home = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
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
  }, []);

  return (
    <section className="min-h-screen">
      <Accessibility />
      <div
        className={`bg-[url('./images/image.png')] bg-center md:bg-left-top  bg-cover min-h-[500px] md:min-h-[800px] md:mb-18  flex gap-3 flex-col items-center justify-center mt-[.5em] object-contain`}
      >
        <div>
          <h1 className="text-2xl text-center"> {t('homePage.welcome')}</h1>
          <p className="text-center">{t('homePage.description')}</p>
        </div>
        <div className="flex flex-col md:flex-row">
          <Button
            className="btn btn-outline btn-primary my-3 md:mx-3 hover:bg-transparent hover:text-white hover:border border-blue-600 animate-bounce hover:animate-none"
            onClick={() => {
              navigate('/about');
            }}
          >
            {t('navigation.About')}
          </Button>
          <Button
            className="btn btn-outline btn-primary my-3 md:mx-3 hover:bg-transparent hover:text-white hover:border border-blue-600 animate-bounce  hover:animate-none"
            onClick={() => {
              navigate('/contact');
            }}
          >
            {t('navigation.Contact us')}
          </Button>
        </div>
      </div>
      <About />
      <Gallery />
      <Contact />
      <WhatsAppButton />
      <motion.a
        whileHover={{ scale: 1.2, color: 'steelblue', cursor: 'pointer' }}
        // className={`fixed bottom-[70px] left-[10px] bg-blue-700 rounded-md animate-bounce  hover:opacity-15 ${
        //   i18n.language === 'he' ? 'bg-red-500' : ''
        // }`}
        className={`${
          i18n.language === 'he'
            ? 'bg-blue-700 fixed bottom-[70px] right-[8px] rounded-md animate-bounce  '
            : 'fixed bottom-[75px] left-[8px] bg-blue-700 rounded-md animate-bounce '
        }`}
      >
        {showArrow && (
          <div
            onClick={scrollToTop}
            className={`${
              theme === 'dark' ? 'text-white p-3' : 'text-black p-3'
            } hover:text-white`}
          >
            <FaArrowUp size={24} />
          </div>
        )}
      </motion.a>
    </section>
  );
};
export default Home;
