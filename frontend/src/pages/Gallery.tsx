import Accessibility from '@/components/Accessibility';
import i18n from '@/i18n';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
interface Image {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  const images: Image[] = [
    {
      id: 1,
      src: 'https://media.istockphoto.com/id/2177249500/photo/girl-and-guy-against-the-background-of-a-night-wedding-arch.jpg?s=612x612&w=0&k=20&c=8M9tbenLDgP6Kw1ozHt_ic6SNwbldUZxgURGq922lkM=',
      alt: 'Wedding_1',
      category: `${t('gallerySection.Wedding')}`,
    },
    {
      id: 2,
      src: 'src/images/weeding/wid_pic5.jpg',
      alt: 'Wedding_2',
      category: `${t('gallerySection.Wedding')}`,
    },
    {
      id: 3,
      src: 'src/images/barmitsva/bar_pic8.jpg',
      alt: 'Bar Mitzvah 1',
      category: `${t('gallerySection.BarMitzvah')}`,
    },
    {
      id: 4,
      src: 'src/images/barmitsva/bar_pic6.jpg',
      alt: 'Bar Mitzvah Image 2',
      category: `${t('gallerySection.BarMitzvah')}`,
    },
    {
      id: 5,
      src: 'https://media.istockphoto.com/id/543221516/photo/brit-milah-and-circumcision-ceremony.jpg?s=612x612&w=0&k=20&c=ZHCB3zPccZnJ5vgVpB5l7QQjwfBWlcY4KSr0rPNvmc4=',
      alt: 'Brit Milah 1',
      category: `${t('gallerySection.BritMilah')}`,
    },
    {
      id: 6,
      src: 'https://media.istockphoto.com/id/543221538/photo/brit-milah-and-circumcision-ceremony.jpg?s=612x612&w=0&k=20&c=bAbHCstHMkD2yS0Cki4k77AON1u97hIzA9FgYGy313Q=',
      alt: 'Brit Milah Image 2',
      category: `${t('gallerySection.BritMilah')}`,
    },
    {
      id: 7,
      src: 'https://scontent.ftlv6-1.fna.fbcdn.net/v/t39.30808-6/277554587_2976392042672338_8214468683372937835_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=PwYsNEPh5wYQ7kNvgErYW_1&_nc_zt=23&_nc_ht=scontent.ftlv6-1.fna&_nc_gid=A_wTQGyU_YqnSm84QevXgjo&oh=00_AYB0BABWWidHDxI9W3I_LXIRWQs8CVpYPxbEuEd7manVqg&oe=67952417',
      alt: 'weeding_3',
      category: `${t('gallerySection.Wedding')}`,
    },
    {
      id: 8,
      src: 'src/images/barmitsva/bar_pic4.jpg',
      alt: 'BarMitzvah8',
      category: `${t('gallerySection.BarMitzvah')}`,
    },
    {
      id: 9,
      src: 'https://scontent.ftlv6-1.fna.fbcdn.net/v/t39.30808-6/472331759_3715662625411939_2244712874558698711_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SVOVfrdI8SAQ7kNvgEXW8L3&_nc_zt=23&_nc_ht=scontent.ftlv6-1.fna&_nc_gid=Azd4iKGFxizZN98mb1OHcPr&oh=00_AYC_FwSEjtPLUhxTst2OCFvCWLhCA1HEPHGkeVTlgGcqJA&oe=67954399',
      alt: 'weeding_4',
      category: `${t('gallerySection.Wedding')}`,
    },
    {
      id: 10,
      src: 'src/images/weeding/wid_pic2.jpg',
      alt: 'weeding_5',
      category: `${t('gallerySection.Wedding')}`,
    },
    {
      id: 11,
      src: 'src/images/barmitsva/bar_pic1.jpg',
      alt: 'BarMitzvah11',
      category: `${t('gallerySection.BarMitzvah')}`,
    },
    {
      id: 12,
      src: 'src/images/barmitsva/bar_pic2.jpg',
      alt: 'BarMitzvah12',
      category: `${t('gallerySection.BarMitzvah')}`,
    },
    {
      id: 13,
      src: 'src/images/barmitsva/bar_pic3.jpg',
      alt: 'BarMitzvah13',
      category: `${t('gallerySection.BarMitzvah')}`,
    },
    {
      id: 14,
      src: 'src/images/barmitsva/bar_pic9.jpg',
      alt: 'BarMitzvah14',
      category: `${t('gallerySection.BarMitzvah')}`,
    },
  ];
  const categories: string[] = [
    `${t('gallerySection.All')}`,
    `${t('gallerySection.Wedding')}`,
    `${t('gallerySection.BarMitzvah')}`,
    `${t('gallerySection.BritMilah')}`,
  ];
  const [selectedCategory, setSelectedCategory] = useState<string>(
    `${t('gallerySection.All')}`
  );
  useEffect(() => {
    // Update selected category on language change
    setSelectedCategory(t('gallerySection.All'));
  }, [i18n.language]);

  const filteredImages =
    selectedCategory === `${t('gallerySection.All')}`
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <div className='container mx-auto p-4 min-h-screen my-12'>
      <Accessibility />
      <h1 className='font-semibold text-center hover:animate-ping cursor-pointer mb-2'>
        {t('gallerySection.Gallery')}
      </h1>
      <div className='bg-blue-800 w-10 h-[2px] mx-auto mb-8 font-bold'></div>
      {/* Category Buttons */}
      <div className='flex justify-center gap-4 mt-3'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-semibold ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center mt-5'>
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className='relative group overflow-hidden rounded-lg shadow-lg'
          >
            <img
              src={image.src}
              alt={image.alt}
              className={`w-full 
                 h-80 
               object-cover transition-transform duration-300 group-hover:scale-105`}
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
              <p className='text-white font-bold text-lg'>{image.category}</p>
            </div>
          </div>
        ))}
      </div>
      {filteredImages.length === 0 && (
        <p className='text-center text-gray-500 mt-8'>
          No images available for the selected category.
        </p>
      )}
    </div>
  );
};

export default Gallery;
