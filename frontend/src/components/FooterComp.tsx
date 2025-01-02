import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import facebook from '/facebook.png';
import instagram from '/instagram.png';
const FooterComp: FC = () => {
  const { t } = useTranslation();
  return (
    <div className='container mx-auto px-4  text-gray-200 text-center '>
      <div className='flex justify-center items-center space-x-4'>
        <a
          href='https://he-il.facebook.com/login/device-based/regular/login'
          target='_blank'
          className='text-blue-600 mx-3'
        >
          <img src={facebook} alt='facebook' width={20} />
        </a>
        <a
          href='https://www.instagram.com/'
          target='_blank'
          className='text-red-400'
        >
          {/* <FaInstagram /> */}
          <img src={instagram} alt='instagram' width={20} />
        </a>
      </div>
      <p>&copy;{t('footer.copyRighter')}</p>
    </div>
  );
};

export default FooterComp;
