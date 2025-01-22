import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
const HeroSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className='relative h-screen'>
      <div className='absolute inset-0 '>
        <img
          src='src/images/wed_pic1.jpg'
          alt='Hero Image'
          className='w-full h-full object-cover mt-6'
        />
      </div>
      <div className='relative max-w-7xl mx-auto px-4 h-full flex items-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-white max-w-2xl'
        >
          <h1 className='text-5xl md:text-6xl font-bold mb-4 text-blue-500'>
            {t('homePage.title')}
          </h1>
          <p className='text-xl md:text-2xl mb-8'>{t('homePage.subtitle')}</p>
          <div className='flex gap-4'>
            <Button
              className='btn btn-outline btn-primary bg-blue-600 text-white my-3 md:mx-3 text-xl hover:bg-transparent hover:text-white hover:border border-blue-600 animate-bounce hover:animate-none'
              onClick={() => {
                navigate('/about');
              }}
            >
              {t('navigation.About')}
            </Button>
            <Button
              className='btn btn-outline btn-primary my-3 md:mx-3 text-xl hover:bg-transparent hover:text-white hover:border border-blue-600 animate-bounce hover:animate-none'
              onClick={() => {
                navigate('/contact');
              }}
            >
              {t('navigation.Contact us')}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
