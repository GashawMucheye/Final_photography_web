import { useState, useEffect, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FaWheelchair, FaPlus, FaMinus, FaAdjust } from 'react-icons/fa';

const Accessibility: FC = () => {
  const { t } = useTranslation();
  const [fontSize, setFontSize] = useState<number>(16); // Default font size
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [showOptions, setShowOptions] = useState<boolean>(false); // Show or hide options

  // Increase font size
  const increaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 2, 24)); // Limit max font size
  };

  // Decrease font size
  const decreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 2, 12)); // Limit min font size
  };

  // Toggle high contrast mode
  const toggleHighContrast = () => {
    setHighContrast((prev) => !prev);
  };

  // Apply font size changes
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  // Apply or remove high contrast class
  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);

  return (
    <div className="fixed bottom-[25.5rem] left-0 z-50">
      {/* Wheelchair Icon to toggle options */}
      <button
        onClick={() => setShowOptions((prev) => !prev)}
        className="bg-blue-500 text-white p-3 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
        aria-label={t('accessibility.toggleOptions')}
      >
        <FaWheelchair size={24} />
      </button>

      {/* Accessibility Options (hidden or shown based on state) */}
      {showOptions && (
        <div className="mt-3 bg-gray-100 p-3 shadow-md rounded-md">
          <button
            onClick={increaseFontSize}
            className="flex items-center px-3 py-1 m-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            aria-label={t('accessibility.increaseFont')}
          >
            <div className="mr-2">
              <FaPlus />
            </div>

            {t('accessibility.fontIncrease')}
          </button>
          <button
            onClick={decreaseFontSize}
            className="flex items-center px-3 py-1 m-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            aria-label={t('accessibility.decreaseFont')}
          >
            <div className="mr-2">
              <FaMinus />
            </div>

            {t('accessibility.fontDecrease')}
          </button>
          <button
            onClick={toggleHighContrast}
            className="flex items-center px-3 py-1 m-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            aria-label={t('accessibility.toggleContrast')}
          >
            <div className="mr-2">
              <FaAdjust />
            </div>

            {t('accessibility.highContrast')}
          </button>
        </div>
      )}
    </div>
  );
};

export default Accessibility;
