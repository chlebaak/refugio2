import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Dropdown from './Dropdown.jsx';
import Logo from '../assets/logorefugio.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Barvy - kávově hnědá a béžová
  const colors = {
    coffee: "#5E3920", // Kávově hnědá
    beige: "#F5EFE0", // Světlá béžová
    accent: "#A87B4D", // Světlejší hnědá pro akcenty
  };

  // Automatický scroll nahoru při změně stránky
  useEffect(() => {
    // Kontrola, zda URL obsahuje hash fragment pro specifický scroll
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]); // Reaguje pouze na změnu cesty, ne na změnu hash

  // Detekce scrollování pro změnu stylu navbaru
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Kontrola při načtení stránky
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Zavřít mobilní menu při změně stránky
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Styl aktivního odkazu
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Položky navigace
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Restaurace", path: "/restaurace" },
    { name: "Ubytování", path: "/ubytovani" },
    { name: "Krámek", path: "/shop" }
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Tenká linka nahoře - viditelná jen při scrollování */}
        {scrolled && (
          <motion.div 
            className="h-1 bg-gradient-to-r from-transparent via-[#A87B4D] to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
        
        <motion.nav
          className={`transition-all duration-500 ${
            scrolled 
              ? 'bg-[#F5EFE0]/95 backdrop-blur-md shadow-lg py-3' 
              : 'bg-transparent py-5'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
<Link to="/">
  <motion.div 
    className="flex items-center gap-3"
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="overflow-hidden rounded-md relative">
      <motion.div 
        className="flex items-center justify-center w-12 h-12 relative z-10 shadow-lg"
        whileHover={{ scale: 1.08 }}
      >
        <img 
          src={Logo} 
          alt="Refugio Logo" 
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
    <div className="flex flex-col">
      <h1 className={`${scrolled ? 'text-[#5E3920]' : 'text-[#F5EFE0]'} text-2xl font-serif tracking-wide font-bold ${!scrolled ? 'text-shadow-sm' : ''}`}>
        Refugio
      </h1>
      <div className={`h-px w-full ${scrolled ? 'bg-[#A87B4D]/70' : 'bg-[#F5EFE0]/70'}`}></div>
      <span className={`${scrolled ? 'text-[#5E3920]' : 'text-[#F5EFE0]'} text-xs tracking-wider font-semibold ${!scrolled ? 'text-shadow-sm' : ''}`}>
        RESTAURANT & LODGE
      </span>
    </div>
  </motion.div>
</Link>

              {/* Desktop navigace */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link key={item.path} to={item.path}>
                    <motion.div
                      className="relative group px-6 py-3"
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <span 
                        className={`
                          font-medium relative z-10 
                          ${scrolled ? 'text-[#5E3920]' : 'text-[#F5EFE0]'} 
                          ${isActive(item.path) ? 'font-bold' : ''} 
                          ${!scrolled ? 'text-shadow-sm font-semibold' : ''}
                        `}
                      >
                        {item.name}
                      </span>
                      
                      {/* Spodní linka */}
                      <motion.div 
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${scrolled ? 'bg-[#A87B4D]' : 'bg-[#F5EFE0]'} origin-left`}
                        initial={{ scaleX: isActive(item.path) ? 1 : 0 }}
                        animate={{ scaleX: isActive(item.path) ? 1 : 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Pozadí při hoveru */}
                      <motion.div 
                        className={`
                          absolute inset-0 rounded-full -z-10
                          ${scrolled ? 'bg-[#A87B4D]/10' : 'bg-[#F5EFE0]/20 backdrop-blur-sm'}
                        `}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      
                      {/* Aktivní stav */}
                      {isActive(item.path) && (
                        <motion.div 
                          className={`absolute -right-1 -top-1 w-2 h-2 rounded-full ${scrolled ? 'bg-[#A87B4D]' : 'bg-[#F5EFE0]'}`}
                          layoutId="navDot"
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                ))}
                
                <Dropdown scrolled={scrolled} />

              </div>

              {/* Tlačítko mobilního menu */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                  md:hidden focus:outline-none
                  ${scrolled ? 'text-[#5E3920]' : 'text-[#F5EFE0]'}
                `}
                whileTap={{ scale: 0.9 }}
              >
                <div className="relative w-10 h-10 flex items-center justify-center">
                  {/* Hamburger kruhy */}
                  <motion.div 
                    className={`
                      absolute inset-0 rounded-full
                      `}
                    animate={{ 
                      backgroundColor: isOpen 
                        ? 'rgba(168, 123, 77, 0.2)' 
                        : scrolled ? 'rgba(168, 123, 77, 0)' : 'rgba(245, 239, 224, 0.3)'
                    }}
                  />

                  <div className="flex flex-col items-center justify-center">
                    <motion.span
                      className="w-7 h-0.5 mb-1.5"
                      style={{
                        backgroundColor: isOpen ? "#A87B4D" : scrolled ? "#5E3920" : "#F5EFE0",
                        boxShadow: !scrolled && !isOpen ? "0px 1px 2px rgba(0,0,0,0.1)" : "none"
                      }}
                      animate={{ 
                        rotateZ: isOpen ? 45 : 0, 
                        y: isOpen ? 6 : 0
                      }}
                    />
                    <motion.span
                      className="w-4 h-0.5 mb-1.5"
                      style={{
                        backgroundColor: isOpen ? "#A87B4D" : scrolled ? "#5E3920" : "#F5EFE0",
                        boxShadow: !scrolled && !isOpen ? "0px 1px 2px rgba(0,0,0,0.1)" : "none"
                      }}
                      animate={{ 
                        opacity: isOpen ? 0 : 1,
                        width: isOpen ? 0 : "1rem"
                      }}
                    />
                    <motion.span
                      className="w-7 h-0.5"
                      style={{
                        backgroundColor: isOpen ? "#A87B4D" : scrolled ? "#5E3920" : "#F5EFE0", 
                        boxShadow: !scrolled && !isOpen ? "0px 1px 2px rgba(0,0,0,0.1)" : "none"
                      }}
                      animate={{ 
                        rotateZ: isOpen ? -45 : 0, 
                        y: isOpen ? -6 : 0
                      }}
                    />
                  </div>
                </div>
              </motion.button>
            </div>
          </div>
        </motion.nav>

        {/* Mobilní menu - vylepšené */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 overflow-hidden bg-[#F5EFE0]/95 backdrop-blur-md shadow-lg border-t border-[#A87B4D]/20 z-40"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="container mx-auto px-4 py-4">
                {navItems.map((item, index) => (
                  <motion.div 
                    key={item.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 20, opacity: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link 
                      to={item.path} 
                      className="block relative overflow-hidden"
                    >
                      <motion.div
                        className={`
                          px-4 py-4 my-1 rounded-lg font-medium transition-all
                          flex items-center justify-between
                          ${isActive(item.path) 
                            ? 'bg-[#A87B4D]/20 text-[#5E3920]' 
                            : 'text-[#5E3920] hover:bg-[#A87B4D]/10'}
                        `}
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex items-center">
                          {isActive(item.path) && (
                            <motion.span 
                              className="w-1.5 h-1.5 rounded-full bg-[#A87B4D] mr-2"
                              layoutId="mobileDot" 
                            />
                          )}
                          <span className={isActive(item.path) ? "font-bold text-[#5E3920]" : ""}>
                            {item.name}
                          </span>
                        </div>
                        
                        {isActive(item.path) && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#A87B4D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
                
                <Dropdown scrolled={scrolled} isMobile={true} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      
    </>
  );
};

export default Navbar;