import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Phone, User } from 'lucide-react';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { toast } from 'react-toastify';

import { useTranslation } from 'react-i18next';
import Accessibility from '@/components/Accessibility';
import { useState } from 'react';

const Contact = () => {
  const { t } = useTranslation();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  let information = t('contactSection.messageSent');
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/api/sendMessage',
        {
          name,
          email,
          phone,
          message,
        }
      );
      console.log(response);
      toast.success(information);
      setName('');
      setEmail('');
      setMessage('');
      setPhone('');
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error(t('contactSection.errorMessage'));
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 container mx-auto'>
      <Accessibility />
      <div className='max-w-2xl w-full shadow-lg rounded-lg p-6 sm:p-8 text-center mt-7'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center'
        >
          <h1 className='text-2xl font-bold text-center mb-6 sm:text-3xl'>
            {t('contactSection.contactUs')}
          </h1>
          <div className='bg-blue-800 w-10 h-[2px] mx-auto mb-8 font-bold'></div>
        </motion.div>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='flex flex-col sm:flex-row sm:gap-4'>
            <div className='flex-1'>
              <Label htmlFor='name' className='mb-5 form-label'>
                {t('contactSection.name')}
                <User size={24} />
              </Label>

              <Input
                id='name'
                type='text'
                value={name}
                placeholder={t('contactSection.yourName')}
                className='w-full'
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='flex-1 mt-4 sm:mt-0'>
              <Label htmlFor='email' className='mb-2 form-label'>
                {/* <span> {t('contactSection.email')}</span>
                <MdEmail /> */}
                {t('contactSection.email')}
                <MdEmail size={24} />
              </Label>
              <Input
                id='email'
                type='email'
                value={email}
                placeholder={t('contactSection.yourEmail')}
                className='w-full mt-[18.3px]'
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className='flex-1'>
            <Label htmlFor='phone' className='mb-2 form-label'>
              {t('contactSection.phone')}
              <Phone size={24} />
            </Label>

            <Input
              id='phone'
              type='text'
              placeholder={t('contactSection.phone')}
              className='w-full'
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor='message' className='mb-2 form-label'>
              {t('contactSection.message')}
              <MessageCircle size={24} />
            </Label>
            <Textarea
              id='message'
              value={message}
              rows={6}
              placeholder={t('contactSection.yourMessage')}
              className='w-full'
              required
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <Button
            type='submit'
            className='w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          >
            {t('contactSection.submit')}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
