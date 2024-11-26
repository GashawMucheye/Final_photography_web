import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, User } from 'lucide-react';
import { MdEmail } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 container mx-auto border border-red-700">
      <div className="max-w-2xl w-full shadow-lg rounded-lg p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 sm:text-3xl">
          {t('contactSection.contactUs')}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:gap-4">
            <div className="flex-1">
              <Label htmlFor="name" className="mb-2 form-label">
                <span>{t('contactSection.name')}</span>
                <User />
              </Label>

              <Input
                id="name"
                type="text"
                placeholder={t('contactSection.yourName')}
                className="w-full"
                required
              />
            </div>
            <div className="flex-1 mt-4 sm:mt-0">
              <Label htmlFor="email" className="mb-2 form-label">
                <span> {t('contactSection.email')}</span>
                <MdEmail />
              </Label>
              <Input
                id="email"
                type="email"
                placeholder={t('contactSection.yourEmail')}
                className="w-full mt-[18.3px]"
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="message" className="mb-2 form-label">
              <span>{t('contactSection.message')}</span>
              <MessageCircle />
            </Label>
            <Textarea
              id="message"
              rows={6}
              placeholder={t('contactSection.yourMessage')}
              className="w-full"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {t('contactSection.submit')}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
