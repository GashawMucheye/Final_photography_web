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
          href='https://www.facebook.com/profile.php?id=100009047140252&mibextid=LQQJ4d&rdid=u3F29h1rlUw4jLJ4&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15o3TneSrX%2F%3Fmibextid%3DLQQJ4d#'
          target='_blank'
          className='text-blue-600 mx-3'
        >
          <img src={facebook} alt='facebook' width={20} />
        </a>
        <a
          href='https://www.instagram.com/eyal_ytzhak/?igsh=bzh4YW10czllMG5i&utm_source=qr#'
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
