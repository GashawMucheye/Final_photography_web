import { FC } from 'react';
import ListMenu from './ListMenu';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './ui/button';
// import eyal from '/eyal_logo.jpg';
import eyal from '/new_eyal_logo.jpg';
import SelectLang from './SelectLang';
import ModeToggle from './mode-toggle';
import { useMyContext } from '@/context-Api/toggle-menu';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  // const [openMenu, setOpenMenu] = useState<boolean>(true);
  const { openMenu, toggleMenu } = useMyContext();

  return (
    <nav className='container mx-auto flex flex-col md:flex-row justify-between text-gray-300 items-center px-4'>
      <Link
        to={'/'}
        className='cursor-pointer mr-auto md:mr-0 text-2xl font-bold hover:scale-180 rounded-full hover:bg-red-600'
      >
        <img
          src={eyal}
          alt='eyal'
          width={80}
          className='cursor-pointer mr-auto md:mr-0 text-2xl font-bold hover:scale-180 rounded-full hover:bg-red-600'
        />
      </Link>

      {/* <ModeToggle /> */}
      <ListMenu className='hidden md:flex justify-center items-center gap-3 ' />
      <ListMenu
        className={
          openMenu
            ? 'flex flex-col space-y-5 items-center gap-4 md:hidden bg-primary-foreground dark: bg-slate-600 fixed right-0 top-0 mt-10 h-[400px] w-1/2 '
            : 'hidden md:hidden'
        }
      />
      <div className='absolute top-0 right-1 md:relative space-x-4 flex items-center mt-1'>
        <ModeToggle />
        <SelectLang />
        <Button
          // onClick={() => setOpenMenu(!openMenu)}
          onClick={toggleMenu}
          className='block md:hidden '
        >
          {openMenu && <FaTimes size={24} />}
          {!openMenu && <FaBars size={24} />}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
