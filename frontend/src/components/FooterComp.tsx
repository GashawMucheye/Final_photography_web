import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
const FooterComp: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4  text-gray-200 text-center">
      <div className="flex justify-center space-x-4">
        <a
          href="https://he-il.facebook.com/login/device-based/regular/login"
          target="_blank"
        >
          <FaFacebook className="text-blue-600" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <FaInstagram className="text-red-400" />
        </a>
      </div>
      <p>&copy;{t('copyRighter')}</p>
    </div>
  );
};

export default FooterComp;
