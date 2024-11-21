import type { EndPoints } from '@/Types/type';
import { Link } from 'react-router-dom';

const Links: EndPoints[] = [
  {
    id: 1,
    endPoint: '/',
    linkName: 'Home',
  },
  {
    id: 2,
    endPoint: '/contact',
    linkName: 'Contact',
  },
  {
    id: 3,
    endPoint: '/about',
    linkName: 'About Us',
  },
  {
    id: 4,
    endPoint: '/gallery',
    linkName: 'Gallery',
  },
];

const ListMenu = ({ className, setMenu }: { className: string }) => {
  return (
    <div className={className}>
      {Links.map((link) => (
        <Link
          key={link.id}
          to={link.endPoint}
          className="hover:text-blue-700 transition-shadow  mt-2 md:mt-1 
  tracking-widest"
        >
          {link.linkName}
        </Link>
      ))}
    </div>
  );
};

export default ListMenu;
