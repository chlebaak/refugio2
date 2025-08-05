import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { 
  Mountain, ShoppingBag, Compass, Shirt, Award, MapPin, Footprints, 
  HeartHandshake, Clock, Users, ArrowRight, ChevronDown, GalleryVerticalEnd
} from "lucide-react";
import skaly from "../assets/skaly2.png";
import l1 from "../assets/loga/1.png";
import l2 from "../assets/loga/2.png";
import l3 from "../assets/loga/3.png";
import l4 from "../assets/loga/4.png";
import l5 from "../assets/loga/5.png";
import l6 from "../assets/loga/6.png";
import l7 from "../assets/loga/7.png";
import l8 from "../assets/loga/8.png";
import l9 from "../assets/loga/9.png";
import l10 from "../assets/loga/10.png";
import l11 from "../assets/loga/11.png";
import l12 from "../assets/loga/12.png";
import shop from "../assets/shop.jpg";
import equipment from "../assets/equipment.jpg";
import clothes from "../assets/clothes.jpg";
import shoes from "../assets/shoes.jpg";
import bag from "../assets/bag.jpg";


export default function Shop() {
  // Stav pro animace při scrollování
  const [isVisible, setIsVisible] = useState({
    hero: false,
    about: false,
    categories: false,
    brands: false
  });

  // Reference pro sekce
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const categoriesRef = useRef(null);
  const brandsRef = useRef(null);

  // Animace pro různé sekce
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Sledování viditelnosti sekcí pro animace
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15
    };
    
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (heroRef.current) observer.observe(heroRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (categoriesRef.current) observer.observe(categoriesRef.current);
    if (brandsRef.current) observer.observe(brandsRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  // Kategorie produktů
  const categories = [
    {
      name: "Horolezecké vybavení",
      description: "Jistící prostředky, lana, karabiny, sedáky a vše pro bezpečné lezení.",
      icon: <Mountain size={28} />,
      image: equipment
    },
    {
      name: "Outdoorové oblečení",
      description: "Funkční oblečení pro všechny typy outdoorových aktivit - od základních vrstev po svrchní vrstvy.",
      icon: <Shirt size={28} />,
      image: clothes
    },
    {
      name: "Obuv",
      description: "Trekingová, lezecká a outdoorová obuv pro každý terén a každé dobrodružství.",
      icon: <Footprints size={28} />,
      image: shoes
    },
    {
      name: "Batohy a tašky",
      description: "Od městských batohů až po expediční vybavení pro několikadenní výlety.",
      icon: <ShoppingBag size={28} />,
      image: bag
    }
  ];

  // Seznam značek v obchodě
  // Then replace the brands array with:
const brands = [
  { name: "Marmot", logo: l1 },
  { name: "Rockempire", logo: l2 },
  { name: "LaSportiva", logo: l3 },
  { name: "La Sportiva", logo: l4 },
  { name: "Opinel", logo: l5 },
  { name: "Primus", logo: l6 },
  { name: "Smartwool", logo: l7 },
  { name: "Hannah", logo: l8 },
  { name: "Chillaz", logo: l9 },
  { name: "Ocún", logo: l10 },
  { name: "Keen", logo: l11 },
  { name: "Black Diamond", logo: l12 }

];

  // Funkce pro scrollování na určitou sekci
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col bg-[#F5EFE0]">
      {/* Hero sekce */}
      <section 
        id="hero" 
        ref={heroRef}
        className="relative min-h-[80vh] flex items-center overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0 bg-cover bg-center bg-fixed"  style={{ backgroundImage: `url(${skaly})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#5E3920]/80 via-[#5E3920]/60 to-[#5E3920]/80 mix-blend-multiply opacity-70" />
        </div>
        
        {/* Dekorativní prvky */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div 
            className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-[#A87B4D]/20 blur-[70px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Hero obsah */}
        <div className="container mx-auto px-6 relative z-10 py-20">
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
              REFUGIO OUTDOOR SHOP
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl text-[#F5EFE0] font-bold mb-6 leading-tight"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Vybavení pro vaše <span className="text-[#A87B4D]">horská dobrodružství</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-[#F5EFE0]/90 mb-10"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Specializovaná prodejna s kvalitním vybavením pro horolezce, turisty a všechny milovníky přírody
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                className="px-8 py-3 bg-[#A87B4D] text-[#F5EFE0] rounded-full font-bold transition-all hover:bg-[#5E3920] shadow-lg flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection(categoriesRef)}
              >
                <ShoppingBag size={18} />
                Prohlédnout sortiment
              </motion.button>
              
              
            </motion.div>
          </motion.div>

          {/* Scroll down indicator */}
          <motion.div 
            className="absolute mt-5 left-0 right-0 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.button
              onClick={() => scrollToSection(aboutRef)}
              className="flex flex-col items-center gap-2 text-[#F5EFE0] hover:text-[#A87B4D] transition-colors pb-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium">Objevte náš obchod</span>
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

      {/* O obchodu sekce */}
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            initial="hidden"
            animate={isVisible.about ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div
              className="order-2 lg:order-1"
              variants={fadeInUp}
            >
              <motion.span 
                className="inline-block py-1 px-4 bg-[#5E3920]/10 text-[#5E3920] rounded-full text-sm font-accent tracking-wider mb-4"
                variants={fadeInUp}
              >
                NÁŠ OBCHOD
              </motion.span>
              
              <motion.h2 
                className="text-4xl font-bold text-[#5E3920] mb-6"
                variants={fadeInUp}
              >
                Vše pro <span className="text-[#A87B4D]">vaše</span> outdoorové zážitky
              </motion.h2>
              
              <motion.p 
                className="text-[#5E3920]/80 mb-6 text-lg"
                variants={fadeInUp}
              >
                V našem specializovaném obchodě Refugio Outdoor Shop najdete rozsáhlou nabídku vybavení pro horolezectví, turistiku a další outdoorové aktivity. Od technického lezeckého vybavení až po funkční oblečení pro jakékoliv počasí.
              </motion.p>

              <motion.p 
                className="text-[#5E3920]/80 mb-8 text-lg"
                variants={fadeInUp}
              >
                Jsme hrdí na to, že nabízíme pouze prověřené značky a produkty, které sami používáme a můžeme je s důvěrou doporučit. Náš personál tvoří aktivní horolezci a outdooroví nadšenci, kteří vám rádi poradí s výběrem vhodného vybavení.
              </motion.p>

              <motion.div
                className="grid grid-cols-2 gap-6 mb-8"
                variants={staggerContainer}
              >
                {[
                  { icon: <Award size={24} />, title: "Kvalitní značky", text: "Nabízíme pouze ověřené značky a kvalitní produkty" },
                  { icon: <HeartHandshake size={24} />, title: "Odborné poradenství", text: "Náš tým tvoří zkušení horolezci a outdooroví nadšenci" },
                  { icon: <Clock size={24} />, title: "Otevřeno denně kromě úterý", text: "Navštivte nás každý den od 9:00 do 18:00" },
                  { icon: <Users size={24} />, title: "Kurzy a workshopy", text: "Pravidelně pořádáme workshopy a přednášky" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-md"
                    variants={fadeIn}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#A87B4D]/10 flex items-center justify-center text-[#A87B4D] mb-3">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-[#5E3920] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#5E3920]/70">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Kontaktní informace */}
              <motion.div
                className="rounded-xl bg-[#5E3920]/5 p-6 border border-[#5E3920]/10"
                variants={fadeInUp}
              >
                <h3 className="font-bold text-[#5E3920] mb-3 flex items-center gap-2">
                  <MapPin size={18} className="text-[#A87B4D]" />
                  Kde nás najdete
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[#5E3920]/80 mb-1">Refugio Outdoor Shop</p>
                    <p className="text-[#5E3920]/80 mb-1">Tisá 473</p>
                    <p className="text-[#5E3920]/80 mb-3">Tisá, 403 36</p>
                    
                    <p className="text-[#5E3920]/80 mb-1"><strong>Telefon:</strong> +420 702 017 774</p>
                    <p className="text-[#5E3920]/80 mb-1"><strong>Email:</strong> refugio@seznam.cz</p>
                  </div>
                  
                  <div>
                    <p className="font-bold text-[#5E3920] mb-2">Otevírací doba:</p>
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-[#5E3920]/80">Pondělí - Pátek</span>
                        <span className="text-[#A87B4D] font-medium">9:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#5E3920]/80">Sobota - Neděle</span>
                        <span className="text-[#A87B4D] font-medium">9:00 - 16:00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[#5E3920]/80">Úterý</span>
                        <span className="text-[#A87B4D] font-medium">Zavřeno</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="order-1 lg:order-2 relative"
              variants={fadeIn}
            >
              {/* Image grid */}
              <div className="relative h-[550px] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={shop}
                  alt="Refugio Outdoor Shop" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5E3920]/60 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-[#F5EFE0] mb-2">Refugio Outdoor Shop</h3>
                  <p className="text-[#F5EFE0]/80 mb-4">
                    Prodejna s tradicí a zkušenostmi, kde najdete vše pro vaše outdoorové aktivity
                  </p>
                  
                  
                </div>
              </div>

              {/* Decoration elements */}
              <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-[#A87B4D]/10 rounded-full blur-xl -z-10" />
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#5E3920]/10 rounded-full blur-xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Kategorie produktů */}
<section 
  id="categories" 
  ref={categoriesRef}
  className="py-24 bg-[#5E3920] relative overflow-hidden"
>
  {/* Dekorativní prvky na pozadí */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NCAwLTE4IDguMDYtMTggMThzOC4wNiAxOCAxOCAxOCAxOC04LjA2IDE4LTE4LTguMDYtMTgtMTgtMTh6bTAgMzRDMjUuMDQgNTIgMTYgNDIuOTYgMTYgMzJTMjUuMDQgMTIgMzYgMTJzMjAgOS4wNCAyMCAyMC05LjA0IDIwLTIwIDIweiIgZmlsbD0icmdiYSgyNDUsIDIzOSwgMjI0LCAwLjAzKSIvPjxwYXRoIGQ9Ik0yIDE4YzkuOTQgMCAxOCA4LjA2IDE4IDE4cy04LjA2IDE4LTE4IDE4djRjMTIuMTUgMCAyMi05Ljg1IDIyLTIyUzE0LjE1IDE0IDIgMTR2NHoiIGZpbGw9InJnYmEoMjQ1LCAyMzksIDIyNCwgMC4wMykiLz48L2c+PC9zdmc+')] opacity-10" />
  <div className="absolute bottom-0 right-0 w-full h-40 bg-gradient-to-t from-[#5E3920] to-transparent" />
  <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#5E3920]/80 to-transparent" />
  <div className="absolute -left-16 top-1/4 w-64 h-64 rounded-full bg-[#A87B4D]/10 blur-[100px]" />
  <div className="absolute -right-16 bottom-1/4 w-64 h-64 rounded-full bg-[#A87B4D]/10 blur-[100px]" />
  
  {/* Obsah sekce */}
  <div className="container mx-auto px-4 sm:px-6 relative z-10">
    <motion.div 
      className="text-center mb-14"
      initial="hidden"
      animate={isVisible.categories ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <motion.div
        className="inline-flex items-center gap-3 mb-4 bg-[#F5EFE0]/10 px-5 py-2 rounded-full backdrop-blur-sm"
        variants={fadeInUp}
      >
        <ShoppingBag size={18} className="text-[#A87B4D]" />
        <span className="text-[#F5EFE0] text-sm font-accent tracking-wider">
          NÁŠ SORTIMENT
        </span>
      </motion.div>
      
      <motion.h2 
        className="text-3xl md:text-5xl font-bold text-[#F5EFE0] mb-4 tracking-tight"
        variants={fadeInUp}
      >
        Vše pro vaše <span className="text-[#A87B4D] relative">
          outdoorové aktivity
          <span className="absolute left-0 bottom-1 w-full h-1 bg-[#A87B4D]/30 -z-10 rounded-full"></span>
        </span>
      </motion.h2>
      
      <motion.p 
        className="text-[#F5EFE0]/80 mx-auto max-w-2xl text-lg md:text-xl"
        variants={fadeInUp}
      >
        V našem obchodě najdete široký sortiment vybavení pro horolezectví, turistiku a další outdoorové aktivity
      </motion.p>
    </motion.div>
    
    {/* Kategorie produktů - masonry grid */}
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-6 gap-6"
      initial="hidden"
      animate={isVisible.categories ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {/* První řada - velké karty */}
      <motion.div
        className="md:col-span-3 rounded-2xl overflow-hidden bg-[#F5EFE0] shadow-[0_15px_40px_-15px_rgba(94,57,32,0.3)] transition-all duration-300"
        variants={fadeIn}
        transition={{ delay: 0.1 }}
        whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(94, 57, 32, 0.4)' }}
      >
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 h-56 md:h-auto relative overflow-hidden">
            <img 
              src={categories[0].image}
              alt={categories[0].name}
              className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5E3920]/80 via-[#5E3920]/30 to-transparent" />
            <div className="absolute top-4 left-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#A87B4D] to-[#5E3920] rounded-xl flex items-center justify-center text-[#F5EFE0] shadow-lg transform -rotate-3">
                {categories[0].icon}
              </div>
            </div>
          </div>
          <div className="p-6 md:w-1/2 flex flex-col justify-center">
            <div className="bg-[#A87B4D]/10 text-[#5E3920]/80 text-xs font-medium px-3 py-1 rounded-full w-fit mb-3">
              Bestseller
            </div>
            <h3 className="font-bold text-[#5E3920] text-2xl mb-3">{categories[0].name}</h3>
            <p className="text-[#5E3920]/70 mb-6 text-base">{categories[0].description}</p>
            
          </div>
        </div>
      </motion.div>
      
      <motion.div
        className="md:col-span-3 rounded-2xl overflow-hidden bg-[#F5EFE0] shadow-[0_15px_40px_-15px_rgba(94,57,32,0.3)] transition-all duration-300"
        variants={fadeIn}
        transition={{ delay: 0.2 }}
        whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(94, 57, 32, 0.4)' }}
      >
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 h-56 md:h-auto relative overflow-hidden">
            <img 
              src={categories[1].image}
              alt={categories[1].name}
              className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5E3920]/80 via-[#5E3920]/30 to-transparent" />
            <div className="absolute top-4 left-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#A87B4D] to-[#5E3920] rounded-xl flex items-center justify-center text-[#F5EFE0] shadow-lg transform rotate-3">
                {categories[1].icon}
              </div>
            </div>
          </div>
          <div className="p-6 md:w-1/2 flex flex-col justify-center">
            <div className="bg-[#A87B4D]/10 text-[#5E3920]/80 text-xs font-medium px-3 py-1 rounded-full w-fit mb-3">
              Nová kolekce
            </div>
            <h3 className="font-bold text-[#5E3920] text-2xl mb-3">{categories[1].name}</h3>
            <p className="text-[#5E3920]/70 mb-6 text-base">{categories[1].description}</p>
            
          </div>
        </div>
      </motion.div>
      
      {/* Druhá řada - menší karty */}
      <motion.div
        className="md:col-span-2 rounded-2xl overflow-hidden bg-[#F5EFE0] shadow-[0_15px_40px_-15px_rgba(94,57,32,0.3)] transition-all duration-300"
        variants={fadeIn}
        transition={{ delay: 0.3 }}
        whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(94, 57, 32, 0.4)' }}
      >
        <div className="h-48 relative overflow-hidden">
          <img 
            src={categories[2].image}
            alt={categories[2].name}
            className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#5E3920]/80 via-[#5E3920]/30 to-transparent" />
          <div className="absolute top-4 left-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#A87B4D] to-[#5E3920] rounded-xl flex items-center justify-center text-[#F5EFE0] shadow-lg transform -rotate-2">
              {categories[2].icon}
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-[#F5EFE0] font-bold text-xl mb-1">{categories[2].name}</h3>
            <div className="flex items-center gap-1 text-[#F5EFE0]/70">
              <span className="text-xs">20+ produktů</span>
              <span className="w-1 h-1 rounded-full bg-[#F5EFE0]/50"></span>
              <span className="text-xs">Doprava zdarma</span>
            </div>
          </div>
        </div>
        <div className="p-5">
          <p className="text-[#5E3920]/70 text-sm mb-4">{categories[2].description}</p>
          
        </div>
      </motion.div>
      
      <motion.div
        className="md:col-span-2 rounded-2xl overflow-hidden bg-[#F5EFE0] shadow-[0_15px_40px_-15px_rgba(94,57,32,0.3)] transition-all duration-300"
        variants={fadeIn}
        transition={{ delay: 0.4 }}
        whileHover={{ y: -8, boxShadow: '0 25px 50px -12px rgba(94, 57, 32, 0.4)' }}
      >
        <div className="h-48 relative overflow-hidden">
          <img 
            src={categories[3].image}
            alt={categories[3].name}
            className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#5E3920]/80 via-[#5E3920]/30 to-transparent" />
          <div className="absolute top-4 left-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#A87B4D] to-[#5E3920] rounded-xl flex items-center justify-center text-[#F5EFE0] shadow-lg transform rotate-2">
              {categories[3].icon}
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-[#F5EFE0] font-bold text-xl mb-1">{categories[3].name}</h3>
            <div className="flex items-center gap-1 text-[#F5EFE0]/70">
              <span className="text-xs">15+ produktů</span>
              <span className="w-1 h-1 rounded-full bg-[#F5EFE0]/50"></span>
              <span className="text-xs">Novinka</span>
            </div>
          </div>
        </div>
        <div className="p-5">
          <p className="text-[#5E3920]/70 text-sm mb-4">{categories[3].description}</p>
          
        </div>
      </motion.div>
      
      {/* Poradenství box */}
      <motion.div
        className="md:col-span-2 rounded-2xl overflow-hidden bg-gradient-to-br from-[#A87B4D]/30 to-[#A87B4D]/20 backdrop-blur-sm border border-[#F5EFE0]/10 p-6 shadow-lg transition-all duration-300"
        variants={fadeIn}
        transition={{ delay: 0.5 }}
        whileHover={{ y: -8, backgroundColor: "rgba(168, 123, 77, 0.25)" }}
      >
        <div className="w-14 h-14 rounded-xl bg-[#F5EFE0]/20 backdrop-blur-sm flex items-center justify-center text-[#F5EFE0] mb-5">
          <HeartHandshake size={24} />
        </div>
        <h3 className="font-bold text-[#F5EFE0] text-2xl mb-4">Nevíte si rady s výběrem?</h3>
        <p className="text-[#F5EFE0]/80 mb-6 text-base">Náš tým zkušených horolezců vám pomůže vybrat ideální vybavení pro vaše dobrodružství.</p>
        <motion.button 
          className="py-3 px-5 bg-[#F5EFE0] text-[#5E3920] rounded-lg shadow-md font-bold flex items-center justify-center gap-2 transition-all hover:bg-white"
          whileHover={{ scale: 1.03, boxShadow: '0 10px 25px -5px rgba(245, 239, 224, 0.3)' }}
          whileTap={{ scale: 0.98 }}
        >
          <HeartHandshake size={18} />
          <span>Poradenství zdarma</span>
        </motion.button>
      </motion.div>
    </motion.div>
    
    
  </div>
</section>

{/* Sekce se značkami */}
<section 
  id="brands" 
  ref={brandsRef}
  className="py-20 bg-[#F5EFE0] relative overflow-hidden"
>
  {/* Dekorativní prvky pozadí */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NCAwLTE4IDguMDYtMTggMThzOC4wNiAxOCAxOCAxOCAxOC04LjA2IDE4LTE4LTguMDYtMTgtMTgtMTh6bTAgMzRDMjUuMDQgNTIgMTYgNDIuOTYgMTYgMzJTMjUuMDQgMTIgMzYgMTJzMjAgOS4wNCAyMCAyMC05LjA0IDIwLTIwIDIweiIgZmlsbD0icmdiYSg5NCwgNTcsIDMyLCAwLjAzKSIvPjxwYXRoIGQ9Ik0yIDE4YzkuOTQgMCAxOCA4LjA2IDE4IDE4cy04LjA2IDE4LTE4IDE4djRjMTIuMTUgMCAyMi05Ljg1IDIyLTIyUzE0LjE1IDE0IDIgMTR2NHoiIGZpbGw9InJnYmEoOTQsIDU3LCAzMiwgMC4wMykiLz48L2c+PC9zdmc+')] opacity-10" />
  <div className="absolute -left-16 top-1/3 w-64 h-64 rounded-full bg-[#5E3920]/5 blur-[80px]" />
  <div className="absolute -right-16 bottom-1/3 w-64 h-64 rounded-full bg-[#A87B4D]/5 blur-[80px]" />
  
  {/* Obsah sekce */}
  <div className="container mx-auto px-4 sm:px-6 relative z-10 mb-10">
    <motion.div 
      className="text-center mb-14"
      initial="hidden"
      animate={isVisible.brands ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <motion.div
        className="inline-flex items-center gap-3 mb-4 bg-[#5E3920]/10 px-5 py-2 rounded-full backdrop-blur-sm"
        variants={fadeInUp}
      >
        <Award size={18} className="text-[#A87B4D]" />
        <span className="text-[#5E3920] text-sm font-accent tracking-wider">
          SPOLUPRACUJEME S NEJLEPŠÍMI
        </span>
      </motion.div>
      
      <motion.h2 
        className="text-3xl md:text-5xl font-bold text-[#5E3920] mb-4 tracking-tight"
        variants={fadeInUp}
      >
        Značky, <span className="text-[#A87B4D] relative">
          kterým důvěřujeme
          <span className="absolute left-0 bottom-1 w-full h-1 bg-[#A87B4D]/30 -z-10 rounded-full"></span>
        </span>
      </motion.h2>
      
      <motion.p 
        className="text-[#5E3920]/70 mx-auto max-w-2xl text-lg md:text-xl"
        variants={fadeInUp}
      >
        Vybíráme jen ty nejkvalitnější produkty od renomovaných výrobců outdoorového vybavení
      </motion.p>
    </motion.div>
  </div>
  




{/* Druhý karusel s opačným pohybem */}
<div className="relative overflow-hidden py-8 mt-8">
  <div className="absolute inset-0 pointer-events-none" />
  
  <div className="relative flex overflow-hidden">
    <motion.div 
      className="flex gap-12 items-center will-change-transform"
      animate={{
        x: ["-50%", 0]
      }}
      transition={{ 
        duration: 50,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
      }}
      style={{ 
        width: "max-content",
        backfaceVisibility: "hidden"
      }}
    >
      {/* První sada log */}
      <div className="flex gap-12 items-center">
        {[...brands].reverse().map((brand, index) => (
          <motion.div 
            key={`third-${index}`}
            className="flex items-center justify-center min-w-[180px] h-24 flex-shrink-0 transform-gpu group"
            whileHover={{ 
              y: -10, 
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
          >
            <div className="relative flex flex-col items-center justify-center">
              <img 
                src={brand.logo}
                alt={brand.name}
                loading="lazy" 
                className="max-h-16 max-w-full object-contain transition-all duration-500 filter grayscale group-hover:grayscale-0"
              />
              <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 text-xs font-medium text-[#5E3920]/80 tracking-wide transition-all duration-300">
                {brand.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Druhá identická sada log pro plynulý přechod */}
      <div className="flex gap-12 items-center">
        {[...brands].reverse().map((brand, index) => (
          <motion.div 
            key={`fourth-${index}`}
            className="flex items-center justify-center min-w-[180px] h-24 flex-shrink-0 transform-gpu group"
            whileHover={{ 
              y: -10, 
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
          >
            <div className="relative flex flex-col items-center justify-center">
              <img 
                src={brand.logo}
                alt={brand.name}
                loading="lazy"
                className="max-h-16 max-w-full object-contain transition-all duration-500 filter grayscale group-hover:grayscale-0"
              />
              <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 text-xs font-medium text-[#5E3920]/80 tracking-wide transition-all duration-300">
                {brand.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
  
  {/* Efekt přechodu na okrajích */}
  <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#F5EFE0] via-[#F5EFE0]/80 to-transparent z-10 pointer-events-none" />
  <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#F5EFE0] via-[#F5EFE0]/80 to-transparent z-10 pointer-events-none" />
</div>
  

</section>
      
      {/* CTA sekce */}
      <section className="py-16 bg-[#A87B4D] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F5EFE0]/30 to-transparent" />
        
        <motion.div 
          className="container mx-auto px-6 relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5EFE0] mb-4">
            Navštivte nás a vybavte se na své dobrodružství
          </h2>
          <p className="text-[#F5EFE0]/80 mx-auto max-w-2xl text-lg mb-8">
            Rádi vám poradíme s výběrem vhodného vybavení pro vaše outdoorové aktivity a horolezecké výpravy.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            
            
            <motion.button 
              className="py-3 px-6 bg-[#F5EFE0] text-[#5E3920] rounded-lg shadow-lg text-lg font-bold flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Jak se k nám dostanete</span>
              <MapPin size={18} />
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}