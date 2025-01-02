import { useMyContext } from '@/context-Api/toggle-menu';
import type { EndPoints } from '@/Types/type';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ListMenu = ({ className }: { className: string }) => {
  const { t } = useTranslation(); // Access the translation function
  const { toggleMenu } = useMyContext(); // Access the toggleMenu function from context

  // Define the navigation links with keys for translation
  const links: EndPoints[] = [
    {
      id: 1,
      endPoint: '/',
      linkName: t('navigation.Home'), // Translate "Home"
    },
    {
      id: 2,
      endPoint: '/contact',
      linkName: t('navigation.Contact us'), // Translate "Contact"
    },
    {
      id: 3,
      endPoint: '/about',
      linkName: t('navigation.About us'), // Translate "About Us"
    },
    {
      id: 4,
      endPoint: '/gallery',
      linkName: t('navigation.Gallery'), // Translate "Gallery"
    },
    {
      id: 5,
      endPoint: '/services',
      linkName: t('navigation.services'), // Translate "services"
    },
  ];

  return (
    <div className={className}>
      {links.map((link) => (
        <NavLink
          key={link.id}
          // to={link.endPoint.trim()}
          to={link.endPoint}
          // className="hover:text-blue-700 transition-shadow mt-2 md:mt-1 tracking-widest"
          className={({ isActive }) =>
            isActive
              ? 'text-blue-700  mt-1 font-semibold'
              : 'hover:text-blue-700 mt-2 md:mt-1 tracking-widest hover:border-b border-white transition duration-150 ease-out hover:ease-linear'
          }
          onClick={toggleMenu} // Close the menu when a link is clicked
        >
          {link.linkName}
        </NavLink>
      ))}
    </div>
  );
};

export default ListMenu;
