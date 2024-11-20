import { useTranslation } from 'react-i18next';
import { Button } from '../components/ui/button';
const Home = () => {
  const { t } = useTranslation();
  return (
    <section className="min-h-[800px]">
      <div
        className={`bg-[url('./images/image.png')] bg-center md:bg-left-top  bg-cover min-h-[600px] mb-20 flex gap-3 flex-col items-center justify-center`}
      >
        <div>
          <h1 className="text-2xl text-center">{t('welcome')}</h1>
          <p className="text-center">{t('description')}</p>
        </div>
        <div className="flex flex-col md:flex-row">
          <Button className="btn btn-outline btn-primary my-3 md:mx-3 hover:bg-transparent hover:text-white hover:border border-blue-600">
            About
          </Button>
          <Button className="btn btn-outline btn-primary my-3 md:mx-3 hover:bg-transparent hover:text-white hover:border border-blue-600">
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
