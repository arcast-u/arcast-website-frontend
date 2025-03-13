'use client';

import { useEffect, useState, useRef } from 'react';
import Script from 'next/script';
import Cookies from 'js-cookie';
import { GoGlobe } from 'react-icons/go';
import { TbCaretDown } from 'react-icons/tb';

interface Language {
  code: string;
  name: string;
}
interface LanguageSelectorProps {
  isOpen: boolean;
  isStudioOpen: boolean;
  pathname: string;
}
export default function LanguageSelector({
  isOpen,
  isStudioOpen,
  pathname,
}: LanguageSelectorProps) {
  const [languages] = useState<Language[]>([
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Russian' },
    { code: 'ar', name: 'Arabic' },

    // Add more languages as needed
  ]);

  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false);
  const [googleInitialized, setGoogleInitialized] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const initAttempts = useRef<number>(0);
  const maxInitAttempts = 5; // Maximum number of initialization attempts

  // Initialize with saved language preference or default to 'en'
  useEffect(() => {
    // Check for saved preference in localStorage and cookies
    const savedLanguage =
      typeof window !== 'undefined'
        ? localStorage.getItem('preferredLanguage') ||
          Cookies.get('preferredLanguage')
        : null;

    // Set saved language if it exists and is in our language list, otherwise default to English
    if (
      savedLanguage &&
      languages.some((lang) => lang.code === savedLanguage)
    ) {
      setSelectedLanguage(savedLanguage);
    }
  }, [languages]);

  // Function to safely check if Google Translate is available
  const isGoogleTranslateAvailable = () => {
    return (
      typeof window !== 'undefined' &&
      window.google &&
      window.google.translate &&
      typeof window.google.translate.TranslateElement === 'function'
    );
  };

  // Function to create the Google Translate element
  const createTranslateElement = () => {
    try {
      if (!isGoogleTranslateAvailable()) {
        console.log('Google Translate not yet available, waiting...');
        return false;
      }

      // First, check if element already exists
      let translateElement = document.getElementById(
        'google_translate_element'
      );

      // If not, create it
      if (!translateElement) {
        translateElement = document.createElement('div');
        translateElement.id = 'google_translate_element';
        translateElement.style.display = 'none';
        document.body.appendChild(translateElement);
      }

      // Initialize Google Translate
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: languages.map((lang) => lang.code).join(','),
          autoDisplay: false,
        },
        'google_translate_element'
      );

      setGoogleInitialized(true);
      return true;
    } catch (error) {
      console.error('Error initializing Google Translate:', error);
      return false;
    }
  };

  useEffect(() => {
    if (!scriptLoaded) return;

    // Initialize Google Translate functionality
    const initGoogleTranslate = () => {
      if (initAttempts.current >= maxInitAttempts) {
        console.error(
          'Maximum Google Translate initialization attempts reached'
        );
        return;
      }

      initAttempts.current += 1;

      if (createTranslateElement()) {
        // Apply saved language preference on initial load
        if (selectedLanguage !== 'en') {
          setTimeout(() => {
            selectLanguage(selectedLanguage);
          }, 1000);
        }
      } else {
        // If initialization fails, try again after a delay
        setTimeout(initGoogleTranslate, 500 * initAttempts.current);
      }
    };

    // Add the callback to the window object
    window.googleTranslateElementInit = initGoogleTranslate;

    // Trigger initialization if script is already loaded
    if (isGoogleTranslateAvailable()) {
      initGoogleTranslate();
    }

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined') {
        // @ts-expect-error - googleTranslateElementInit is dynamically added
        delete window.googleTranslateElementInit;
      }
    };
  }, [languages, selectedLanguage, scriptLoaded]);

  // Handle clicks outside dropdown to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Function to directly select language from Google Translate
  const selectLanguage = (languageCode: string) => {
    if (!googleInitialized) {
      // Store preference but don't try to change language yet
      localStorage.setItem('preferredLanguage', languageCode);
      Cookies.set('preferredLanguage', languageCode, { expires: 365 });
      setSelectedLanguage(languageCode);
      return;
    }

    // Try different methods to change the language

    // Method 1: Using the combo box
    const select = document.querySelector(
      '.goog-te-combo'
    ) as HTMLSelectElement;
    if (select) {
      select.value = languageCode;
      select.dispatchEvent(new Event('change'));

      // Save preference
      localStorage.setItem('preferredLanguage', languageCode);
      Cookies.set('preferredLanguage', languageCode, { expires: 365 });
      setSelectedLanguage(languageCode);
      return;
    }

    // Method 2: Using the iframe approach as fallback
    try {
      const iframe = document.getElementsByClassName(
        'goog-te-menu-frame'
      )[0] as HTMLIFrameElement;
      if (iframe) {
        const iframeDoc =
          iframe.contentDocument || iframe.contentWindow?.document;
        if (iframeDoc) {
          const languageLinks = iframeDoc.getElementsByTagName('a');

          for (let i = 0; i < languageLinks.length; i++) {
            const langText = languageLinks[i].textContent;
            const langMatch = languages.find(
              (lang) =>
                langText?.includes(lang.name) && lang.code === languageCode
            );

            if (langMatch) {
              languageLinks[i].click();

              // Save preference
              localStorage.setItem('preferredLanguage', languageCode);
              Cookies.set('preferredLanguage', languageCode, { expires: 365 });
              setSelectedLanguage(languageCode);
              return;
            }
          }
        }
      }
    } catch (error) {
      console.error('Error selecting language via iframe:', error);
    }

    // Still save preference even if changing language fails
    localStorage.setItem('preferredLanguage', languageCode);
    Cookies.set('preferredLanguage', languageCode, { expires: 365 });
    setSelectedLanguage(languageCode);
  };

  const changeLanguage = (languageCode: string) => {
    if (languageCode === selectedLanguage) return;
    setIsDropdownOpen(false);
    selectLanguage(languageCode);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Get language name from code
  // const getLanguageName = (code: string): string => {
  //   const language = languages.find((lang) => lang.code === code);
  //   return language ? language.name : 'English';
  // };

  const handleScriptLoad = () => {
    setScriptLoaded(true);

    // Double-check if Google Translate is available after script loads
    setTimeout(() => {
      if (isGoogleTranslateAvailable() && !googleInitialized) {
        window.googleTranslateElementInit();
      }
    }, 500);
  };

  const handleScriptError = () => {
    console.error('Failed to load Google Translate script');
  };

  return (
    <>
      <Script
        src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
        strategy='lazyOnload'
        onLoad={handleScriptLoad}
        onError={handleScriptError}
      />

      <div className='relative' ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className='flex lg:ml-6 cursor-pointer hover:scale-105 items-center gap-1 self-stretch'
          aria-expanded={isDropdownOpen}
          aria-label='Select language'
        >
          <GoGlobe
            className={`${
              isOpen ||
              isStudioOpen ||
              (pathname !== '/' && pathname !== '/about-us')
                ? 'text-[#333333]'
                : 'text-[#FCFCFC]'
            } size-6`}
          />
          <TbCaretDown
            className={`${
              isOpen ||
              isStudioOpen ||
              (pathname !== '/' && pathname !== '/about-us')
                ? 'text-[#333333]'
                : 'text-[#FCFCFC]'
            } size-5 stroke-[1.5px]`}
          />
        </button>

        {/* <button 
                      className={`
                        flex
                        lg:ml-6 
                        cursor-none 
                        hover:scale-105 
                        items-center 
                        gap-1 
                        self-stretch
                      `}
                    >
                      <GoGlobe 
                        className={`${isOpen || isStudioOpen || pathname !== '/' && pathname !== '/about-us' ? 'text-[#333333]' : 'text-[#FCFCFC]'} size-6`}
                      />
                      <TbCaretDown 
                        className={`${isOpen || isStudioOpen || pathname !== '/' && pathname !== '/about-us' ? 'text-[#333333]' : 'text-[#FCFCFC]'} size-5 stroke-[1.5px]`}
                      />
                    </button> */}
        {isDropdownOpen && (
          <div className='absolute top-10 right-0 bg-[#FCFCFC] shadow-lg rounded-xl py-2 z-50 min-w-[150px]'>
            <ul className='flex flex-col w-full'>
              {languages.map((language) => (
                <li
                  key={language.code}
                  onClick={() => changeLanguage(language.code)}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 text-sm ${
                    selectedLanguage === language.code
                      ? 'font-semibold bg-gray-50'
                      : ''
                  }`}
                >
                  {language.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Invisible container for Google Translate */}
      <div id='google_translate_element' style={{ display: 'none' }}></div>
    </>
  );
}
