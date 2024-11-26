import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
interface Image {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const images: Image[] = [
  {
    id: 1,
    src: 'https://media.istockphoto.com/id/2177249500/photo/girl-and-guy-against-the-background-of-a-night-wedding-arch.jpg?s=612x612&w=0&k=20&c=8M9tbenLDgP6Kw1ozHt_ic6SNwbldUZxgURGq922lkM=',
    alt: 'Wedding 1',
    category: 'Wedding',
  },
  {
    id: 2,
    src: 'https://media.istockphoto.com/id/1300492809/photo/a-bridal-couple-is-dancing-at-the-wedding-night.jpg?s=612x612&w=is&k=20&c=KnHlr3cMM_9plOlC7XUKW5g_cENrvG6DtPXxXjRo3bU=',
    alt: 'Wedding Image 2',
    category: 'Wedding',
  },
  {
    id: 3,
    src: 'https://media.istockphoto.com/id/1603930963/photo/the-first-wedding-dance-of-the-bride-and-groom.jpg?s=612x612&w=0&k=20&c=wuSsa03CZ1g3zZX905Or_KmzLg-YHG38Yp2AA8vI-a0=',
    alt: 'Bar Mitzvah 1',
    category: 'Bar Mitzvah',
  },
  {
    id: 4,
    src: 'https://media.istockphoto.com/id/825401936/photo/bar-mitzvah-in-jerusalem.jpg?s=612x612&w=0&k=20&c=S__IxdPeULMFpI8I7XLdVR9LoU1XW_fFGY7SzPUB4W0=',
    alt: 'Bar Mitzvah Image 2',
    category: 'Bar Mitzvah',
  },
  {
    id: 5,
    src: 'https://media.istockphoto.com/id/543221516/photo/brit-milah-and-circumcision-ceremony.jpg?s=612x612&w=0&k=20&c=ZHCB3zPccZnJ5vgVpB5l7QQjwfBWlcY4KSr0rPNvmc4=',
    alt: 'Brit Milah 1',
    category: 'Brit Milah',
  },
  {
    id: 6,
    src: 'https://media.istockphoto.com/id/543221538/photo/brit-milah-and-circumcision-ceremony.jpg?s=612x612&w=0&k=20&c=bAbHCstHMkD2yS0Cki4k77AON1u97hIzA9FgYGy313Q=',
    alt: 'Brit Milah Image 2',
    category: 'Brit Milah',
  },
];

// const categories = ['All', 'Wedding', 'Bar Mitzvah', 'Brit Milah'];

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const categories: string[] = [
    'All',
    `${t('gallerySection.Wedding')}`,
    `${t('gallerySection.BarMitzvah')}`,
    `${t('gallerySection.BritMilah')}`,
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredImages =
    selectedCategory === 'All'
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <div className="container mx-auto p-4 min-h-screen my-12 border border-red-700">
      <h1 className="font-semibold text-center hover:animate-ping cursor-pointer underline">
        {t('gallerySection.Gallery')}
      </h1>
      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mt-3">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center mt-5">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white font-bold text-lg">{image.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* No Images Message */}
      {filteredImages.length === 0 && (
        <p className="text-center text-gray-500 mt-8">
          No images available for the selected category.
        </p>
      )}
    </div>
  );
};

export default Gallery;
