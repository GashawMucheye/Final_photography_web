import { motion } from 'framer-motion';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const About: FC = () => {
  const { t } = useTranslation();

  // max-w-5xl
  return (
    <div className=" mx-auto rounded-md shadow-lg overflow-hidden lg:flex lg:items-center my-10 container border border-red-700 min-h-screen">
      <div className="lg:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1495580621852-5de0cc907d2f?q=80&w=2039&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with the photographer's image
          // src="src/image.png" // Replace with the photographer's image
          className="w-full"
          alt={t('aboutSection.aboutImageAlt')}
        />
      </div>
      <div className="p-8 lg:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {t('aboutSection.aboutTitle')}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 * 0.1 }}
          className="text-gray-700 mb-4"
        >
          {t('aboutSection.aboutDescription1')}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 * 0.1 }}
          className="text-gray-700 mb-4"
        >
          {t('aboutSection.aboutDescription2')}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 * 0.1 }}
          className="text-gray-700 mb-4"
        >
          {t('aboutSection.aboutDescription3')}
        </motion.p>
      </div>
    </div>
  );
};

export default About;
