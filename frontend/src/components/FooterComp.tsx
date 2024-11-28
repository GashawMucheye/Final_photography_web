import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
const FooterComp: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4  text-gray-200 text-center ">
      <div className="flex justify-center items-center space-x-4">
        <a
          href="https://he-il.facebook.com/login/device-based/regular/login"
          target="_blank"
          className="text-blue-600 mx-3"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          className="text-red-400"
        >
          <FaInstagram />
        </a>
      </div>
      <p>&copy;{t('copyRighter')}</p>
    </div>
  );
};

export default FooterComp;
