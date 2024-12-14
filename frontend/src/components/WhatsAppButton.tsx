import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const WhatsAppButton: FC = () => {
  const phoneNumber = '1234567890'; // Replace with your WhatsApp number
  const message = 'Hello!%20I%20need%20help.'; // Customize the message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
  const { t, i18n } = useTranslation();

  return (
    <div className="mx-auto  overflow-hidden lg:flex lg:items-center my-10 container min-h-[250px]">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        title={t('contactSection.title')}
        // className="fixed bottom-14 right-3 md:right-14 bg-green-500 hover:bg-green-600 rounded-full p-3 shadow-xl transition-all duration-300 ease-in-out z-50 mb-2"
        className="fixed bottom-[59px] left-[0px]  bg-green-500 hover:bg-green-600 rounded-full p-3 shadow-xl transition-all duration-300 ease-in-out z-50 mb-2 "
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-12 h-12 md:w-10 md:h-10 sm:w-8 sm:h-8"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
