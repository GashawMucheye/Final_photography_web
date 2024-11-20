import { Globe } from 'lucide-react';
import i18n from '../i18n';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import WorldFlag from 'react-world-flags';
import { useEffect } from 'react';

function SelectLang() {
  // Read language from localStorage on component mount
  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
      document.documentElement.dir = savedLang === 'he' ? 'rtl' : 'ltr';
    }
  }, []);

  // Handle language change and store it in localStorage
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang); // Save language to localStorage
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
  };

  return (
    <div className="max-w[80px]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="p-1">
            <Globe
              // code="IL" // Default flag (use a default language if necessary)
              className="mx-auto"
              style={{ width: 30, height: 24 }}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 mt-1">
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => handleLanguageChange('en')}>
              <WorldFlag
                code="US"
                className="mr-2"
                style={{ width: 20, height: 20 }}
              />
              <span>English</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleLanguageChange('am')}>
              <WorldFlag
                code="ET"
                className="mr-2"
                style={{ width: 20, height: 20 }}
              />
              <span>Amharic</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleLanguageChange('he')}>
              <WorldFlag
                code="IL"
                className="mr-2"
                style={{ width: 20, height: 20 }}
              />
              <span>Hebrew</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default SelectLang;
