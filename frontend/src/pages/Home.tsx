import { useTranslation } from 'react-i18next';
import { Button } from '../components/ui/button';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';

const Home = () => {
  const { t } = useTranslation();
  const { welcome, description }: any = t('homePage');
  return (
    <section className="min-h-[800px]">
      <div
        className={`bg-[url('./images/image.png')] bg-center md:bg-left-top  bg-cover min-h-[500px] md:min-h-[800px] md:mb-18  flex gap-3 flex-col items-center justify-center mt-[.5em] object-contain`}
      >
        <div>
          <h1 className="text-2xl text-center">{welcome}</h1>
          <p className="text-center">{description}</p>
        </div>
        <div className="flex flex-col md:flex-row">
          <Button className="btn btn-outline btn-primary my-3 md:mx-3 hover:bg-transparent hover:text-white hover:border border-blue-600 animate-bounce hover:animate-none">
            {t('navigation.About')}
          </Button>
          <Button className="btn btn-outline btn-primary my-3 md:mx-3 hover:bg-transparent hover:text-white hover:border border-blue-600 animate-bounce  hover:animate-none">
            {t('navigation.Contact us')}
          </Button>
        </div>
      </div>
      <About />
      <Gallery />
      <Contact />
    </section>
  );
};
export default Home;
