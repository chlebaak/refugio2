import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  Coffee, 
  UtensilsCrossed, 
  BedDouble, 
  Mountain, 
  ChevronDown, 
  MapPin, 
  Clock, 
  Phone,
  Instagram,
  Facebook,
  Star
} from 'lucide-react';
import HeroImg from '../assets/hero.png';
import RefoImg from '../assets/refo.png';
import RestaurantImg from '../assets/out.png';
import SkalyImg from '../assets/skaly.png';
import SkalyImg2 from '../assets/skaly2.png';
import Ubytovani from '../assets/ubytko.png';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/flex2.jpg';
import img3 from '../assets/b4.jpg';
import img4 from '../assets/ilustrace.jpg';
import img5 from '../assets/tiskesteny.jpg';
import img6 from '../assets/out.png';




import { Link, useNavigate } from 'react-router-dom';


export default function Home() {
  const [isVisible, setIsVisible] = useState({
    about: false,
    services: false,
    gallery: false,
    contact: false
  });
  
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const navigate = useNavigate();


  // Sledování pozice při scrollování pro animace
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setIsVisible(prev => ({ ...prev, [sectionId]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (galleryRef.current) observer.observe(galleryRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (servicesRef.current) observer.unobserve(servicesRef.current);
      if (galleryRef.current) observer.unobserve(galleryRef.current);
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  // Varianta pro animace
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Animace pro služby
  const serviceCard = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      }
    }
  };

  // Cesty obrázků pro galerii
  const galleryImages = [
    '/images/restaurant1.jpg',
    '/images/coffee.jpg',
    '/images/accommodation.jpg',
    '/images/climbing.jpg',
    '/images/food.jpg',
    '/images/interior.jpg',
  ];

  // Funkce pro scrollování k sekci
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const now = new Date();
  const day = now.getDay(); // 0 = neděle, 1 = pondělí, atd.
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes; // převod na minuty
  
  // Definice otevírací doby v minutách (9:00 = 9*60 = 540, 21:00 = 21*60 = 1260, 22:00 = 22*60 = 1320)
  const openTime = 9 * 60; // 9:00
  const closeTimeNormal = 21 * 60; // 21:00
  const closeTimeExtended = 22 * 60; // 22:00
  
  let isOpen = false;
  
  // Kontrola, zda je otevřeno
  if (day === 2) { // Úterý (zavřeno)
    isOpen = false;
  } else if ([5, 6].includes(day)) { // Pátek, Sobota (9:00 - 22:00)
    isOpen = currentTime >= openTime && currentTime < closeTimeExtended;
  } else { // Pondělí, Středa, Čtvrtek, Neděle (9:00 - 21:00)
    isOpen = currentTime >= openTime && currentTime < closeTimeNormal;
  }

  return (
    <div className="flex flex-col bg-[#F5EFE0]">
      {/* Hero sekce */}
<section className="relative min-h-screen flex items-center overflow-hidden">
  {/* Background image s překrytím */}
  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HeroImg})` }}>
    <div className="absolute inset-0 bg-gradient-to-b from-[#5E3920]/80 via-[#5E3920]/60 to-[#5E3920]/80 mix-blend-multiply" />
  </div>
  
  {/* Dekorativní prvky */}
  <motion.div 
    className="absolute inset-0 overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  >
    <motion.div 
      className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#A87B4D]/20 blur-[80px]"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div 
      className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-[#A87B4D]/20 blur-[60px]"
      animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
      }}
    />
  </motion.div>

        {/* Hero obsah */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span 
              className="inline-block py-2 px-5 bg-[#F5EFE0]/90 text-[#5E3920] rounded-full text-sm font-accent tracking-wider mb-6"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              VÍTEJTE V REFUGIU
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl text-[#F5EFE0] font-bold mb-6 leading-tight"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">Restaurace & Kavárna</span>
              <span className="text-[#A87B4D]">v krásné přírodě</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-[#F5EFE0]/90 mb-10"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Jedinečné místo, kde se snoubí láska k dobrému jídlu, kvalitní kávě a vášeň pro horolezectví
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/restaurace#menu">
  <motion.button 
    className="px-8 py-3 bg-[#A87B4D] text-[#F5EFE0] rounded-full font-bold transition-all hover:bg-[#5E3920] shadow-lg flex items-center gap-2"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
  >
    <UtensilsCrossed size={18} />
    Prohlédnout menu
  </motion.button>
</Link>
              
              
            </motion.div>
          </motion.div>

          {/* Scroll down indicator - opravené umístění */}
<motion.div 
  className="absolute mt-18 left-0 right-0 flex justify-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5, duration: 1 }}
>
  <motion.button
    onClick={() => scrollToSection(aboutRef)}
    className="flex flex-col items-center gap-2 text-[#F5EFE0] hover:text-[#A87B4D] transition-colors pb-4"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <span className="text-sm font-medium">Objevte naši story</span>
    <motion.div
      animate={{
        y: [0, 8, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="bg-[#A87B4D]/20 backdrop-blur-sm rounded-full p-2"
    >
      <ChevronDown size={24} />
    </motion.div>
  </motion.button>
</motion.div>
        </div>
      </section>

      {/* O nás sekce */}
      <section 
        id="about" 
        ref={aboutRef} 
        className="py-24 bg-[#F5EFE0] relative overflow-hidden"
      >
        {/* Dekorativní prvky */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#5E3920]/10 to-transparent pointer-events-none" />
        <div className="absolute -left-24 top-1/3 w-48 h-48 rounded-full bg-[#A87B4D]/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-[#5E3920]/5 blur-3xl" />

        {/* Obsah sekce */}
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate={isVisible.about ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* Levá strana - obrázek */}
            <motion.div
              className="relative  rounded-2xl overflow-hidden shadow-2xl"
              variants={fadeIn}
              transition={{ duration: 1 }}
            >
              <img 
                src={RefoImg}
                alt="Refugio restaurant interior" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#5E3920]/50 to-transparent pointer-events-none" />
              
              <motion.div 
                className="absolute bottom-6 left-6 bg-[#F5EFE0]/90 backdrop-blur-sm py-3 px-5 rounded-lg shadow-lg flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible.about ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="flex -space-x-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-[#F5EFE0] overflow-hidden bg-[#A87B4D] flex items-center justify-center text-[#F5EFE0] font-bold text-xs`}>
                      {i === 0 && 'JK'}
                      {i === 1 && 'AM'}
                      {i === 2 && 'TR'}
                    </div>
                  ))}
                </div>
                <div className="text-[#5E3920]">
                  <p className="font-bold">10+ let zkušeností</p>
                  <p className="text-sm">Přátelský personál</p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Pravá strana - text */}
            <motion.div
              variants={staggerContainer}
              transition={{ staggerChildren: 0.2 }}
            >
             <motion.span 
  className="inline-block py-1 px-4 bg-[#5E3920]/10 text-[#5E3920] rounded-full text-sm font-accent tracking-wider mb-4"
  variants={fadeInUp}
>
  O REFUGIU
</motion.span>

<motion.h2 
  className="text-4xl font-bold text-[#5E3920] mb-6"
  variants={fadeInUp}
>
  Víc než jen restaurace, jsme <span className="italic text-[#A87B4D]">útočiště</span> v srdci Tiských stěn
</motion.h2>

<motion.p 
  className="text-[#5E3920]/80 mb-6 text-lg leading-relaxed"
  variants={fadeInUp}
>
  Refugio vzniklo z vášně pro horolezectví a lásky k dobrému jídlu. Na úpatí majestátních pískovcových útvarů jsme vytvořili místo, kde se po náročném dni na skalách můžete cítit jako doma. S výhledem na legendární Tiské stěny servírujeme poctivá jídla připravená z lokálních surovin Českého Švýcarska.
</motion.p>

<motion.p 
  className="text-[#5E3920]/80 mb-8 text-lg leading-relaxed"
  variants={fadeInUp}
>
  Již více než deset let spojujeme to nejlepší z gastronomie, kvalitního ubytování a lezeckého vybavení na jednom místě. Naším posláním je být centrem horolezecké komunity, kde se sdílí nejen zkušenosti a rady od místních lezců, ale také nezapomenutelné zážitky u dobrého jídla a řemeslné kávy.
</motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-6 items-center"
                variants={fadeInUp}
              >
                {/* Statistika 1 */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#A87B4D]/20 rounded-full flex items-center justify-center text-[#A87B4D]">
                    <Coffee size={24} />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#5E3920]">2000+</p>
                    <p className="text-[#5E3920]/60 text-sm">Objednávek měsíčně</p>
                  </div>
                </div>
                
                {/* Statistika 2 */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#A87B4D]/20 rounded-full flex items-center justify-center text-[#A87B4D]">
                    <UtensilsCrossed size={24} />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#5E3920]">1000+</p>
                    <p className="text-[#5E3920]/60 text-sm">Spokojených hostů měsíčně</p>
                  </div>
                </div>
                
                {/* Hodnocení */}
                <motion.div 
                  className="mt-4 flex items-center gap-2 bg-[#F5EFE0] p-2 rounded-lg shadow-md border border-[#A87B4D]/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} size={16} fill="#A87B4D" color="#A87B4D" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-[#5E3920]">4.7 / 5.0</span>
                  <span className="text-xs text-[#5E3920]/60">na Google</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Služby sekce */}
<section 
  id="services" 
  ref={servicesRef}
  className="py-32 bg-gradient-to-b from-[#4C2E18] via-[#5E3920] to-[#4A2E18] relative overflow-hidden"
>
  {/* Vylepšené dekorativní prvky */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NCAwLTE4IDguMDYtMTggMThzOC4wNiAxOCAxOCAxOCAxOC04LjA2IDE4LTE4LTguMDYtMTgtMTgtMTh6bTAgMzRDMjUuMDQgNTIgMTYgNDIuOTYgMTYgMzJTMjUuMDQgMTIgMzYgMTJzMjAgOS4wNCAyMCAyMC05LjA0IDIwLTIwIDIweiIgZmlsbD0icmdiYSgyNDUsIDIzOSwgMjI0LCAwLjA1KSIvPjxwYXRoIGQ9Ik0yIDE4YzkuOTQgMCAxOCA4LjA2IDE4IDE4cy04LjA2IDE4LTE4IDE4djRjMTIuMTUgMCAyMi05Ljg1IDIyLTIyUzE0LjE1IDE0IDIgMTR2NHoiIGZpbGw9InJnYmEoMjQ1LCAyMzksIDIyNCwgMC4wNSkiLz48L2c+PC9zdmc+')] opacity-15" />
  
  {/* Nové dekorativní prvky */}
  <div className="absolute top-0 left-0 w-full h-full">
    <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-[#A87B4D]/10 blur-[100px]"></div>
    <div className="absolute bottom-40 right-[15%] w-80 h-80 rounded-full bg-[#A87B4D]/5 blur-[120px]"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMEgxMDBWMTAwSDBWMFoiIGZpbGw9Im5vbmUiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1IDI1SDI3VjI3SDI1VjI1Wk01MCA1MEg1Mkg1MFY1MFpNNzUgNzVINzNWNzNINzVWNzVaIiBmaWxsPSJyZ2JhKDIxMSwgMTc2LCAxMzYsIDAuMTUpIi8+PC9zdmc+')] opacity-5" />
  </div>

  {/* Stylové horní a dolní okraje */}
  <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#3D230F]/80 to-transparent"></div>
  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#3D230F]/60 to-transparent"></div>
  
  {/* Obsah sekce */}
  <div className="container mx-auto px-6 relative z-10">
    <motion.div 
      className="text-center mb-20"
      initial="hidden"
      animate={isVisible.services ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <motion.div 
        className="inline-block relative"
        variants={fadeInUp}
      >
        <span className="inline-block py-1.5 px-6 bg-[#F5EFE0]/10 text-[#F5EFE0] rounded-full text-sm font-accent tracking-wider mb-4 backdrop-blur-sm border border-[#F5EFE0]/10">
          NAŠE SLUŽBY
        </span>
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-[#A87B4D]"></div>
      </motion.div>
      
      <motion.h2 
        className="text-5xl font-bold text-[#F5EFE0] mb-6 relative"
        variants={fadeInUp}
      >
        Co pro vás <span className="text-[#A87B4D] italic">nabízíme</span>
        <div className="absolute -z-10 w-24 h-24 rounded-full bg-[#A87B4D]/10 blur-xl top-0 left-1/2 transform -translate-x-1/2"></div>
      </motion.h2>
      
      <motion.p 
        className="text-[#F5EFE0]/80 mx-auto max-w-3xl text-xl leading-relaxed"
        variants={fadeInUp}
      >
        Refugio není jen o gastronomii, ale i o poskytování komplexního zážitku 
        pro všechny milovníky přírody a horolezectví
      </motion.p>
    </motion.div>
    
    {/* Karty služeb */}
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
      initial="hidden"
      animate={isVisible.services ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {/* Karta 1 - Restaurace a Kavárna */}
      <motion.div
        className="bg-gradient-to-br from-[#F5EFE0] to-[#F5EFE0]/90 rounded-3xl overflow-hidden shadow-2xl group relative"
        variants={serviceCard}
        whileHover={{ 
          y: -15, 
          transition: { duration: 0.4, ease: "easeOut" } 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="h-60 overflow-hidden relative">
          <img 
            src={RestaurantImg}
            alt="Restaurace & Kavárna" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F5EFE0] opacity-10"></div>
        </div>

        <div className="p-8 relative">
          {/* Odznak v pravém horním rohu */}
          <div className="absolute -top-7 right-8 bg-[#A87B4D] text-[#F5EFE0] text-sm font-bold py-1.5 px-4 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5 z-20">
            <div className="w-2 h-2 bg-[#F5EFE0] rounded-full"></div>
            Otevřeno denně kromě úterý
          </div>
          
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 bg-gradient-to-br from-[#A87B4D]/30 to-[#A87B4D]/10 rounded-2xl flex items-center justify-center text-[#A87B4D] mb-5 shadow-inner">
              <UtensilsCrossed size={30} />
            </div>
            
            <h3 className="text-2xl font-bold text-[#5E3920] mb-3">Restaurace & Kavárna</h3>
            
            <p className="text-[#5E3920]/80 mb-5 leading-relaxed">
              Užijte si špičkovou gastronomii z lokálních surovin a výbornou kávu 
              v příjemném prostředí s výhledem na skály.
            </p>
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#A87B4D]/30 to-transparent my-4"></div>
            
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-6 w-full">
              {['Snídaně', 'Obědy', 'Večeře', 'Specialty kávy', 'Domácí dezerty', 'Lokální suroviny'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-[#5E3920]/90 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A87B4D]" />
                  {item}
                </li>
              ))}
            </ul>
            
            <motion.button 
  className="z-20 w-full py-3.5 mt-auto bg-gradient-to-r from-[#5E3920] to-[#6A422A] text-[#F5EFE0] rounded-xl font-bold transition-all hover:from-[#A87B4D] hover:to-[#BD9265] shadow-lg flex items-center justify-center gap-2"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  onClick={() => navigate('/restaurace#menu')}
>
  <span>Zobrazit menu</span>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
</motion.button>
          </div>
        </div>
      </motion.div>
      
      {/* Karta 2 - Ubytování */}
      <motion.div
        className="bg-gradient-to-br from-[#F5EFE0] to-[#F5EFE0]/90 rounded-3xl overflow-hidden shadow-2xl group relative"
        variants={serviceCard}
        whileHover={{ 
          y: -15, 
          transition: { duration: 0.4, ease: "easeOut" } 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="h-60 overflow-hidden relative">
          <img 
            src={Ubytovani}
            alt="Ubytování" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F5EFE0] opacity-10"></div>
        </div>

        <div className="p-8 relative">
          {/* Odznak v pravém horním rohu */}
          <div className="absolute -top-7 right-8 bg-[#A87B4D] text-[#F5EFE0] text-sm font-bold py-1.5 px-4 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5 z-20">
            <div className="w-2 h-2 bg-[#F5EFE0] rounded-full"></div>
            Celoročně
          </div>
          
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 bg-gradient-to-br from-[#A87B4D]/30 to-[#A87B4D]/10 rounded-2xl flex items-center justify-center text-[#A87B4D] mb-5 shadow-inner">
              <BedDouble size={30} />
            </div>
            
            <h3 className="text-2xl font-bold text-[#5E3920] mb-3">Ubytování</h3>
            
            <p className="text-[#5E3920]/80 mb-5 leading-relaxed">
              Komfortní pokoje a apartmány v těsné blízkosti lezeckých terénů. 
              Ideální základna pro vaše horolezecké výpravy.
            </p>
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#A87B4D]/30 to-transparent my-4"></div>
            
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-6 w-full">
              {['Dvoulůžkové pokoje', 'Rodinné apartmány', 'Společná kuchyňka', 'Úschovna vybavení', 'Wifi zdarma', 'Parkování zdarma'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-[#5E3920]/90 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A87B4D]" />
                  {item}
                </li>
              ))}
            </ul>
            <motion.button 
  className="z-20 w-full py-3.5 mt-auto bg-gradient-to-r from-[#5E3920] to-[#6A422A] text-[#F5EFE0] rounded-xl font-bold transition-all hover:from-[#A87B4D] hover:to-[#BD9265] shadow-lg flex items-center justify-center gap-2"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  onClick={() => navigate('/ubytovani')}
>
  <span>Zobrazit ubytování</span>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
</motion.button>
          </div>
        </div>
      </motion.div>
      
      {/* Karta 3 - Lezecký krámek */}
      <motion.div
        className="bg-gradient-to-br from-[#F5EFE0] to-[#F5EFE0]/90 rounded-3xl overflow-hidden shadow-2xl group relative"
        variants={serviceCard}
        whileHover={{ 
          y: -15, 
          transition: { duration: 0.4, ease: "easeOut" } 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="h-60 overflow-hidden relative">
          <img 
            src={SkalyImg2}
            alt="Lezecký krámek" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F5EFE0] opacity-10"></div>
        </div>

        <div className="p-8 relative">
          {/* Odznak v pravém horním rohu */}
          <div className="absolute -top-7 right-8 bg-[#A87B4D] text-[#F5EFE0] text-sm font-bold py-1.5 px-4 rounded-full shadow-lg backdrop-blur-sm flex items-center gap-1.5 z-20">
            <div className="w-2 h-2 bg-[#F5EFE0] rounded-full"></div>
            Otevřeno 9-18
          </div>
          
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 bg-gradient-to-br from-[#A87B4D]/30 to-[#A87B4D]/10 rounded-2xl flex items-center justify-center text-[#A87B4D] mb-5 shadow-inner">
              <Mountain size={30} />
            </div>
            
            <h3 className="text-2xl font-bold text-[#5E3920] mb-3">Lezecký krámek</h3>
            
            <p className="text-[#5E3920]/80 mb-5 leading-relaxed">
              Vše, co potřebujete pro bezpečné a pohodlné lezení. Nabízíme vybavení, 
              příslušenství a poradenství od zkušených horolezců.
            </p>
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#A87B4D]/30 to-transparent my-4"></div>
            
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-6 w-full">
              {['Lana a karabiny', 'Lezecké boty', 'Magnézium', 'Outdoor oblečení', 'Průvodce oblastí', 'Odborné poradenství'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-[#5E3920]/90 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A87B4D]" />
                  {item}
                </li>
              ))}
            </ul>
            
            <motion.button 
  className="z-20 w-full py-3.5 mt-auto bg-gradient-to-r from-[#5E3920] to-[#6A422A] text-[#F5EFE0] rounded-xl font-bold transition-all hover:from-[#A87B4D] hover:to-[#BD9265] shadow-lg flex items-center justify-center gap-2"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  onClick={() => navigate('/shop')}
>
  <span>Prozkoumat obchod</span>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
</motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* Mini galerie fotek */}
      <section 
        id="gallery" 
        ref={galleryRef}
        className="py-24 bg-[#F5EFE0] relative overflow-hidden"
      >
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={isVisible.gallery ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.span 
              className="inline-block py-1 px-4 bg-[#5E3920]/10 text-[#5E3920] rounded-full text-sm font-accent tracking-wider mb-4"
              variants={fadeInUp}
            >
              GALERIE
            </motion.span>
            
            <motion.h2 
              className="text-4xl font-bold text-[#5E3920] mb-4"
              variants={fadeInUp}
            >
              Zážitky z <span className="text-[#A87B4D]">Refugia</span>
            </motion.h2>
            
            <motion.p 
              className="text-[#5E3920]/70 mx-auto max-w-2xl text-lg"
              variants={fadeInUp}
            >
              Nahlédněte do atmosféry našeho útočiště pro horolezce
            </motion.p>
          </motion.div>

          {/* Galerie s lokálními obrázky */}
<motion.div 
  className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
  initial="hidden"
  animate={isVisible.gallery ? "visible" : "hidden"}
  variants={staggerContainer}
>
  {/* Nahrazení externích URL vašimi lokálními obrázky */}
  {[
    img1, // '../assets/img1.jpg' - první obrázek v mřížce
    img2, // '../assets/flex2.jpg'
    img3, // '../assets/b4.jpg'
    img4, // '../assets/citron.jpg'
    img5, // '../assets/tiskesteny.jpg'
    img6  // '../assets/out.png'
  ].map((src, i) => (
    <motion.div 
      key={i}
      className={`rounded-xl overflow-hidden shadow-lg relative ${
        i === 0 ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      variants={fadeIn}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      whileHover={{ scale: 1.03 }}
    >
      <img 
        src={src} 
        alt={`Gallery image ${i+1}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#5E3920]/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <span className="text-[#F5EFE0] font-bold text-sm">
          {i === 0 && "Naše restaurace"}
          {i === 1 && "Relaxace v Refugiu"}
          {i === 2 && "Pokoje s výhledem"}
          {i === 3 && "Naše speciality"}
          {i === 4 && "Tiské stěny"}
          {i === 5 && "Venkovní posezení"}
        </span>
      </div>
    </motion.div>
  ))}
</motion.div>

          
        </div>
      </section>
      
      {/* Kontakt sekce s bento box layoutem */}
<section 
  id="contact" 
  ref={contactRef}
  className="py-28 bg-gradient-to-b from-[#5E3920] to-[#4C2E18] relative overflow-hidden"
>
  {/* Vylepšené pozadí */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIHZpZXdCb3g9IjAgMCA3MCA3MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik00MiAyMWMtMTEuNiAwLTIxIDkuNC0yMSAyMXM5LjQgMjEgMjEgMjEgMjEtOS40IDIxLTIxLTkuNC0yMS0yMS0yMXptMCAzOS43Yy0xMC4zIDAtMTguNy04LjQtMTguNy0xOC43UzMxLjcgMjMuMyA0MiAyMy4zczE4LjcgOC40IDE4LjcgMTguN1M1Mi4zIDYwLjcgNDIgNjAuN3oiIGZpbGw9InJnYmEoMjQ1LCAyMzksIDIyNCwgMC4wNCkiLz48cGF0aCBkPSJNMiAyMWMxMS42IDAgMjEgOS40IDIxIDIxcy05LjQgMjEtMjEgMjF2Mi4zYzEzIDAgMjMuMy0xMC4zIDIzLjMtMjMuM1MxNSAxOC43IDIgMTguN1YyMXoiIGZpbGw9InJnYmEoMjQ1LCAyMzksIDIyNCwgMC4wNCkiLz48L2c+PC9zdmc+')] opacity-15" />
  
  {/* Jednoduché, ale efektní pozadí */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[#A87B4D]/10 blur-[80px]"></div>
    <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#A87B4D]/5 blur-[100px]"></div>
  </div>

  {/* Horní a dolní přechody */}
  <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#4A2E18] to-transparent"></div>
  <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#4A2E18] to-transparent"></div>
  
  {/* Nadpis sekce */}
  <div className="container mx-auto px-6 relative z-10 mb-14">
    <motion.div
      className="text-center mb-12"
      initial="hidden"
      animate={isVisible.contact ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <motion.span 
        className="inline-block py-1.5 px-5 bg-[#F5EFE0]/10 text-[#F5EFE0] rounded-full text-sm font-accent tracking-wider mb-4"
        variants={fadeInUp}
      >
        KONTAKT
      </motion.span>
      
      <motion.h2 
        className="text-4xl font-bold text-[#F5EFE0] mb-4"
        variants={fadeInUp}
      >
        Navštivte <span className="text-[#A87B4D]">Refugio</span>
      </motion.h2>
      
      <motion.p 
        className="text-[#F5EFE0]/80 mx-auto max-w-2xl text-lg"
        variants={fadeInUp}
      >
        Přijďte nás navštívit a zažijte výjimečnou atmosféru místa, kde se snoubí skvělé jídlo, káva a horolezectví.
      </motion.p>
    </motion.div>
    
    {/* Vylepšený bento box layout */}
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
      initial="hidden"
      animate={isVisible.contact ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {/* Box 1: Interaktivní mapa (zabírá 2/3 šířky na desktopu) */}
      <motion.div 
        className="lg:col-span-2 bg-[#F5EFE0] rounded-2xl overflow-hidden shadow-xl relative"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -5 }}
      >
        {/* Mapa Google */}
        <div className="w-full h-[350px] relative bg-[#A87B4D]/10">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.45125912784!2d14.028026941243581!3d50.785745092648966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470999b72c037ba5%3A0x235eb98fe65269cc!2sRefugio!5e0!3m2!1scs!2scz!4v1744746733664!5m2!1scs!2scz" 
            className="w-full h-full border-0 absolute inset-0 z-10" 
            loading="lazy"
            title="Mapa s umístěním restaurace Refugio"
            referrerPolicy="no-referrer"
            style={{ filter: "grayscale(15%) contrast(1.1)" }}
          />
          
          {/* Záložní obsah pro případ, že mapa selže */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-0 p-6 text-center">
            <div className="w-12 h-12 mb-3 bg-[#A87B4D]/30 rounded-full flex items-center justify-center text-[#F5EFE0]">
              <MapPin size={24} />
            </div>
            <h4 className="font-bold text-[#F5EFE0] mb-2">Refugio Restaurant & Lodge</h4>
            <p className="text-[#F5EFE0]/80 mb-2">Skalní 123, 123 45 Horolezce</p>
            <a 
              href="https://maps.app.goo.gl/T1qC4xJqNWf9gqcq5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#A87B4D] underline hover:text-[#F5EFE0] transition-colors"
            >
              Otevřít v Google Maps
            </a>
          </div>
        </div>
        
        {/* Lokace - štítek */}
        <div className="absolute top-4 left-4 z-20 bg-white/90 py-2 px-4 rounded-lg shadow-md text-sm font-medium text-[#5E3920]">
          Refugio Restaurant & Lodge
        </div>
        
        {/* Navigační tlačítko */}
        <div className="absolute bottom-4 right-4 z-10">
          <motion.a 
            href="https://maps.app.goo.gl/T1qC4xJqNWf9gqcq5" 
            target="_blank" 
            rel="noopener noreferrer"
            className="py-2 px-4 bg-[#5E3920] text-[#F5EFE0] rounded-lg shadow-lg text-sm font-bold flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
            </svg>
            <span>Navigovat</span>
          </motion.a>
        </div>
        
        {/* Subtilní dekorace rohů */}
        <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-24 h-1 bg-[#A87B4D]/50 transform -rotate-45 translate-x-[-30%]" />
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 right-0 w-24 h-1 bg-[#A87B4D]/50 transform -rotate-45 translate-x-[30%]" />
        </div>
      </motion.div>
      
      {/* Box 2: Adresa a telefon */}
      <motion.div 
        className="bg-[#A87B4D]/20 backdrop-blur-sm rounded-2xl p-7 shadow-lg border border-[#A87B4D]/30"
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.1 }}
        whileHover={{ y: -5 }}
      >
        {/* Adresa */}
        <motion.div className="mb-7" variants={fadeInUp}>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#A87B4D]/30 rounded-xl flex items-center justify-center text-[#F5EFE0] shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-bold text-[#F5EFE0] mb-2 text-lg">Adresa</h4>
              <p className="text-[#F5EFE0]/90">Tisá 473, Refugio s.r.o.</p>
              <p className="text-[#F5EFE0]/90">Tisá, 403 36</p>
              <p className="text-[#F5EFE0]/90">Česká republika</p>
            </div>
          </div>
        </motion.div>
        
        {/* Tenký oddělovač */}
        <div className="w-full h-px bg-[#F5EFE0]/15 my-5"></div>
        
        {/* Telefon a email */}
        <motion.div variants={fadeInUp}>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#A87B4D]/30 rounded-xl flex items-center justify-center text-[#F5EFE0] shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="font-bold text-[#F5EFE0] mb-2 text-lg">Kontakt</h4>
              <a href="tel:+420123456789" className="text-[#F5EFE0]/90 hover:text-[#F5EFE0] block transition-colors mb-1">
              +420 702 017 774
              </a>
              <a href="mailto:refugio@seznam.cz" className="text-[#F5EFE0]/90 hover:text-[#F5EFE0] block transition-colors">
              refugio@seznam.cz
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Box 3: Otevírací doba */}
      <motion.div 
        className="bg-[#F5EFE0]/5 backdrop-blur-sm rounded-2xl p-7 shadow-lg border border-[#F5EFE0]/10 relative overflow-hidden"
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ y: -5 }}
      >
        {/* Dekorativní prvek */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#A87B4D]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="flex items-start gap-4 relative z-10">
          <div className="w-12 h-12 bg-[#A87B4D]/30 rounded-xl flex items-center justify-center text-[#F5EFE0] shrink-0">
            <Clock size={24} />
          </div>
          <div className="w-full">
            <h4 className="font-bold text-[#F5EFE0] mb-3 text-lg">Otevírací doba</h4>
            
            <div className="space-y-3">
  <div className="flex justify-between items-center border-b border-[#F5EFE0]/10 pb-3">
    <span className="text-[#F5EFE0]/90">Pondělí</span>
    <span className="text-[#A87B4D] font-bold">9:00 - 21:00</span>
  </div>
  <div className="flex justify-between items-center border-b border-[#F5EFE0]/10 pb-3">
    <span className="text-[#F5EFE0]/90">Úterý</span>
    <span className="text-[#A87B4D] font-bold">Zavřeno</span>
  </div>
  <div className="flex justify-between items-center border-b border-[#F5EFE0]/10 pb-3">
    <span className="text-[#F5EFE0]/90">Středa - Čtvrtek</span>
    <span className="text-[#A87B4D] font-bold">9:00 - 21:00</span>
  </div>
  <div className="flex justify-between items-center border-b border-[#F5EFE0]/10 pb-3">
    <span className="text-[#F5EFE0]/90">Pátek - Sobota</span>
    <span className="text-[#A87B4D] font-bold">9:00 - 22:00</span>
  </div>
  <div className="flex justify-between items-center">
    <span className="text-[#F5EFE0]/90">Neděle</span>
    <span className="text-[#A87B4D] font-bold">9:00 - 21:00</span>
  </div>
</div>
            
            {/* Status - otevřeno/zavřeno */}
            <div className={`mt-5 inline-flex items-center gap-2 ${isOpen ? 'bg-[#A87B4D]/20' : 'bg-[#5E3920]/40'} px-3 py-1.5 rounded-lg`}>
      <div className={`w-2 h-2 ${isOpen ? 'bg-green-400' : 'bg-red-500'} rounded-full animate-pulse`}></div>
      <span className="text-[#F5EFE0] text-sm font-medium">
        {isOpen ? 'Nyní otevřeno' : 'Nyní zavřeno'}
      </span>
    </div>
          </div>
        </div>
      </motion.div>
      
      {/* Box 4: Sociální sítě */}
      <motion.div 
        className="bg-[#5E3920]/80 rounded-2xl p-7 shadow-lg border border-[#A87B4D]/20 relative overflow-hidden"
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ y: -5 }}
      >
        <h4 className="font-bold text-[#F5EFE0] mb-5 text-lg">Sledujte nás</h4>
        <div className="flex gap-5 justify-around">
          <motion.a 
            href="https://www.instagram.com/refugio.tisa/" 
            className="flex flex-col items-center gap-2"
            whileHover={{ y: -3 }}
          >
            <div className="w-14 h-14 bg-[#A87B4D]/20 rounded-xl flex items-center justify-center text-[#F5EFE0] hover:bg-[#A87B4D] transition-colors">
              <Instagram size={24} />
            </div>
            <span className="text-[#F5EFE0]/80 text-sm">Instagram</span>
          </motion.a>
          
          <motion.a 
            href="https://www.facebook.com/refugio.eshop/" 
            className="flex flex-col items-center gap-2"
            whileHover={{ y: -3 }}
          >
            <div className="w-14 h-14 bg-[#A87B4D]/20 rounded-xl flex items-center justify-center text-[#F5EFE0] hover:bg-[#A87B4D] transition-colors">
              <Facebook size={24} />
            </div>
            <span className="text-[#F5EFE0]/80 text-sm">Facebook</span>
          </motion.a>
          
          
        </div>
        
        {/* Dekorativní okraje */}
        <div className="absolute bottom-0 right-0 h-24 w-24 bg-[#A87B4D]/10 rounded-full blur-xl"></div>
      </motion.div>
      
      {/* Box 5: Rezervace*/}
      <motion.div 
        className="bg-[#A87B4D] rounded-2xl p-7 shadow-lg relative overflow-hidden"
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ y: -5 }}
      >
        <h4 className="font-bold text-[#F5EFE0] mb-3 text-lg">Chcete si rezervovat stůl?</h4>
        <p className="text-[#F5EFE0]/90 mb-5">Zarezervujte si místo v našem Refugiu a užijte si jedinečný gastronomický zážitek.</p>
        
        <div className="flex flex-wrap gap-4">
          <motion.a 
            href="tel:+420123456789"
            className="py-2.5 px-5 bg-[#5E3920] text-[#F5EFE0] rounded-lg shadow-md text-sm font-bold flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Phone size={16} />
            <span>Zavolejte nám</span>
          </motion.a>
          
        </div>
        
        {/* Dekorativní prvky */}
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#5E3920]/30 rounded-full blur-2xl"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F5EFE0]/30 to-transparent"></div>
      </motion.div>
    </motion.div>
  </div>
</section>
      
      
    </div>
  );
}