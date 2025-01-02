import { motion } from 'framer-motion';
// import { Camera, Users, Clock, Image } from 'lucide-react';

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const Services = () => {
  const { t } = useTranslation();
  const packages = [
    {
      // name: "Essential",
      name: t('serviceSection.packages.essential.name'),
      price: '$999',
      features: [
        // '4 Hours Coverage',
        t('serviceSection.packages.essential.hours'),
        // '200+ Digital Photos',
        t('serviceSection.packages.essential.digital'),
        // 'Online Gallery',
        t('serviceSection.packages.essential.online'),
        // 'Basic Retouching',
        t('serviceSection.packages.essential.basic'),
      ],
    },
    {
      name: t('serviceSection.packages.premium.name'),
      price: '$1,999',
      features: [
        '8 Hours Coverage',
        '400+ Digital Photos',
        'Online Gallery',
        'Advanced Retouching',
        'Second Photographer',
        'Engagement Session',
        '4 Hours Coverage',
      ],
    },
    {
      name: t('serviceSection.packages.luxury.name'),
      price: '$2,999',
      features: [
        'Full Day Coverage',
        '600+ Digital Photos',
        'Online Gallery',
        'Premium Retouching',
        'Two Photographers',
        'Engagement Session',
        'Premium Photo Album',
        'Canvas Wall Art',
        '4 Hours Coverage',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('serviceSection.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('serviceSection.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="rounded-lg shadow-lg overflow-hidden border border-gray-200"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-indigo-600 mb-6">
                    {pkg.price}
                  </div>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg
                          className="h-5 w-5 text-indigo-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Book Now</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
