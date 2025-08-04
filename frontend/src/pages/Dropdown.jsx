import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSwitcher = ({ scrolled, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('CZ');
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'CZ', name: 'Česky' },
    { code: 'EN', name: 'English' },
    { code: 'DE', name: 'Deutsch' }
  ];

  // Zavře dropdown při kliknutí mimo
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Mobilní verze přepínače jazyků
  if (isMobile) {
    return (
      <motion.div 
        className="mt-4 pt-4 border-t border-[#A87B4D]/20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="px-4 mb-2 text-[#5E3920]/70 text-xs font-medium uppercase tracking-wider">
          Jazyk
        </div>
        <div className="flex flex-row gap-2 px-2">
          {languages.map((lang) => (
            <motion.button
              key={lang.code}
              className={`
                px-4 py-3 rounded-lg flex-1 text-center relative overflow-hidden
                ${selectedLanguage === lang.code 
                  ? 'bg-[#A87B4D] text-[#F5EFE0] font-bold shadow-md' 
                  : 'bg-[#F5EFE0]/50 text-[#5E3920]/80 hover:bg-[#F5EFE0]/80 border border-[#A87B4D]/20'}
              `}
              onClick={() => setSelectedLanguage(lang.code)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="flex flex-col items-center justify-center gap-1">
                <span className="font-medium text-sm">{lang.code}</span>
                <span className="text-xs opacity-80">{lang.name}</span>
              </div>
              
              {selectedLanguage === lang.code && (
                <motion.div 
                  className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#F5EFE0]"
                  layoutId="mobileLangDot"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>
    );
  }

  // Desktop verze přepínače jazyků
  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        className={`
          ml-4 px-4 py-2 text-sm font-bold flex items-center gap-2 rounded-full
          ${scrolled ? 'bg-[#5E3920]/90 text-[#F5EFE0]' : 'bg-[#F5EFE0]/80 text-[#5E3920] shadow-lg backdrop-blur-sm'}
        `}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <span>{selectedLanguage}</span>
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path d="m6 9 6 6 6-6"/>
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-2 w-36 rounded-xl overflow-hidden bg-[#F5EFE0] shadow-xl border border-[#A87B4D]/20 z-50"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="py-1">
              {languages.map((lang, index) => (
                <motion.button
                  key={lang.code}
                  className={`
                    w-full px-4 py-2 text-left text-sm flex items-center justify-between
                    ${selectedLanguage === lang.code ? 'bg-[#A87B4D]/10 text-[#5E3920] font-medium' : 'text-[#5E3920]/80 hover:bg-[#A87B4D]/5'}
                    ${index !== languages.length - 1 ? 'border-b border-[#A87B4D]/10' : ''}
                  `}
                  onClick={() => {
                    setSelectedLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  whileHover={{ x: 2, backgroundColor: selectedLanguage === lang.code ? 'rgba(168, 123, 77, 0.15)' : 'rgba(168, 123, 77, 0.1)' }}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{lang.code}</span>
                    <span className="text-xs text-[#5E3920]/60">{lang.name}</span>
                  </div>
                  
                  {selectedLanguage === lang.code && (
                    <motion.svg 
                      layoutId="activeLang"
                      xmlns="http://www.w3.org/2000/svg" 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#A87B4D" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"/>
                    </motion.svg>
                  )}
                </motion.button>
              ))}
            </div>
            
            {/* Dekorativní prvky */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#A87B4D]/20 via-[#A87B4D]/40 to-[#A87B4D]/20"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#A87B4D]/20 to-transparent"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;