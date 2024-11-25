import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full shadow-lg rounded-lg p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 sm:text-3xl">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:gap-4">
            <div className="flex-1">
              <Label htmlFor="name" className="mb-2">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full"
                required
              />
            </div>
            <div className="flex-1 mt-4 sm:mt-0">
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full"
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="message" className="mb-2">
              Message
            </Label>
            <Textarea
              id="message"
              rows={6}
              placeholder="Your Message"
              className="w-full"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
