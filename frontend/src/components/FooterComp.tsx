import { FC } from 'react';
import { useTranslation } from 'react-i18next';
const FooterComp: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4 border border-blue-800 text-gray-200 text-center">
      <p>&copy;{t('copyRighter')}</p>
    </div>
  );
};

export default FooterComp;
