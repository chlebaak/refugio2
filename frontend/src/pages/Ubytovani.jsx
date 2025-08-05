import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { 
  Bed, Users, Wifi, Clock, Euro, ShowerHead, Coffee, 
  Mountain, ArrowRight, CheckCircle, CalendarDays, ChevronDown, Star, Phone, X, ChevronLeft, ChevronRight, ShoppingBag, MapPin, Info, Mail, CreditCard, Tag, Calendar, MailIcon, ShoppingCart, Compass
} from "lucide-react";
import a1 from "../assets/a1.jpg";
import a2 from "../assets/a2.jpg";
import a3 from "../assets/a3.jpg";
import a4 from "../assets/a4.jpg";
import a5 from "../assets/a5.jpg";
import a6 from "../assets/a6.jpg";
import a7 from "../assets/a7.jpg";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";
import b4 from "../assets/b4.jpg";
import b5 from "../assets/b5.jpg";
import b6 from "../assets/b6.jpg";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.jpg";
import c5 from "../assets/c5.jpg";
import hero from "../assets/ubytovani.png";



export default function Ubytovani() {
  // Stav pro animace při scrollování
  const [isVisible, setIsVisible] = useState({
    hero: false,
    about: false,
    rooms: false
  });

  // Reference pro sekce
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const roomsRef = useRef(null);
  const [activeGallery, setActiveGallery] = useState(null);

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

  // Aktivní pokoj pro mobilní zobrazení
  const [activeRoom, setActiveRoom] = useState(null);

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
    if (roomsRef.current) observer.observe(roomsRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  // Data pokojů
  // Upravená data pokojů
const rooms = [
  {
    id: "apartment",
    name: "Apartmán",
    type: "Apartmán",
    price: 4400,
    description: "V nově zrekonstruovaném apartmánu Vám nabízíme dvě samostatné ložnice a možnost přistýlky na rozkládací pohovce, televizi, vybavenou kuchyňku, jídelní kout, samostatnou koupelnu s vanou i sprchovým koutem, toaletu, pračku.",
    features: [
      "Až 4+2 osob",
      "2 samostatné ložnice",
      "Rozkládací pohovka (přistýlka)",
      "Plně vybavená kuchyňka",
      "Jídelní kout",
      "Televize",
      "Koupelna s vanou i sprchovým koutem",
      "Samostatná toaleta",
      "Pračka"
    ],
    additionalInfo: [
      "Přistýlka: 350 Kč/noc (při 7+ nocích 300 Kč/noc)",
      "Lázeňský poplatek: 38 Kč/noc za dospělou osobu",
      "Pes: 200 Kč/noc",
      "Snídaně není v ceně (dospělý: 275 Kč, dítě do 15 let: 165 Kč)"
    ],
    images: [
      a1, a2, a3, a4, a5, a6, a7
    ],
    color: "#A87B4D"
  },
  {
    id: "room1",
    name: "Pokoj č. 1",
    type: "Pokoj",
    price: 1990,
    description: "V pokoji se nachází dvojpostel, masivní palanda (možnost 2 přistýlek), televize, malá lednice, koupelna se sprchovým koutem a toaletou.",
    features: [
      "Až 2+2 osoby",
      "Dvojpostel",
      "Masivní palanda (možnost 2 přistýlek)",
      "Televize",
      "Malá lednice",
      "Koupelna se sprchovým koutem",
      "Toaleta"
    ],
    additionalInfo: [
      "Přistýlka: 350 Kč/noc (při 7+ nocích 300 Kč/noc)",
      "Lázeňský poplatek: 38 Kč/noc za dospělou osobu",
      "Pes: 200 Kč/noc",
      "Snídaně není v ceně (dospělý: 275 Kč, dítě do 15 let: 165 Kč)"
    ],
    images: [
      b1, b2, b3, b4, b5, b6
    ],
    color: "#5E3920"
  },
  {
    id: "room2",
    name: "Pokoj č. 2",
    type: "Pokoj",
    price: 1990,
    description: "V pokoji se nachází dvojpostel, rozkládací gauč (možnost 1 přistýlky), televize, stůl a 2 židle, malá lednice, koupelna se sprchovým koutem a toaletou.",
    features: [
      "Až 2+1 osoby",
      "Dvojpostel",
      "Rozkládací gauč (možnost 1 přistýlky)",
      "Televize",
      "Stůl a 2 židle",
      "Malá lednice",
      "Koupelna se sprchovým koutem",
      "Toaleta"
    ],
    additionalInfo: [
      "Přistýlka: 350 Kč/noc (při 7+ nocích 300 Kč/noc)",
      "Lázeňský poplatek: 38 Kč/noc za dospělou osobu",
      "Pes: 200 Kč/noc",
      "Snídaně není v ceně (dospělý: 275 Kč, dítě do 15 let: 165 Kč)"
    ],
    images: [
      c1, c2, c3, c4, c5
    ],
    color: "#A87B4D"
  }
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
        className="relative min-h-[70vh] flex items-center overflow-hidden"
      >
        {/* Background image */}
<div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }}>
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
              REFUGIO UBYTOVÁNÍ
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl text-[#F5EFE0] font-bold mb-6 leading-tight"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Odpočinek v <span className="text-[#A87B4D]">srdci</span> hor
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-[#F5EFE0]/90 mb-10"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Útulné ubytování s výhledem, kde každé probuzení je novým dobrodružstvím
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
                onClick={() => scrollToSection(roomsRef)}
              >
                <Bed size={18} />
                Prohlédnout pokoje
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
              <span className="text-sm font-medium">Objevte naše ubytování</span>
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

     {/* O ubytování sekce */}
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
        variants={fadeInUp}
        className="order-2 lg:order-1"
      >
        <motion.span 
          className="inline-block py-1 px-4 bg-[#5E3920]/10 text-[#5E3920] rounded-full text-sm font-accent tracking-wider mb-4"
          variants={fadeInUp}
        >
          REFUGIO UBYTOVÁNÍ
        </motion.span>
        
        <motion.h2 
          className="text-4xl font-bold text-[#5E3920] mb-6"
          variants={fadeInUp}
        >
          Objevte krásy <span className="text-[#A87B4D]">Českého Švýcarska</span>
        </motion.h2>
        
        <motion.p 
          className="text-[#5E3920]/80 mb-6 text-lg"
          variants={fadeInUp}
        >
          Penzion REFUGIO se nachází v překrásné přírodě Labských pískovců na samotné hranici parku České Švýcarsko. Leží přímo pod majestátními skalními masívy v obci Tisá, kde vám poskytne dokonalou základnu pro vaše dobrodružství.
        </motion.p>

        <motion.p 
          className="text-[#5E3920]/80 mb-8 text-lg"
          variants={fadeInUp}
        >
          Kromě komfortního ubytování vám nabízíme také nekuřáckou kavárnu s restaurací a specializovaný outdoor shop, kde naleznete veškeré vybavení pro horolezectví, turistiku a aktivní pobyt v přírodě.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          variants={staggerContainer}
        >
          {[
            { icon: <Mountain size={24} />, text: "Skalní oblast Tisá" },
            { icon: <Coffee size={24} />, text: "Kavárna & restaurace" },
            { icon: <ShoppingBag size={24} />, text: "Outdoor shop" },
            { icon: <MapPin size={24} />, text: "České Švýcarsko" },
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-[#5E3920]/5 p-4 rounded-xl flex flex-col items-center text-center"
              variants={fadeIn}
              whileHover={{ y: -5, backgroundColor: "rgba(168, 123, 77, 0.1)" }}
            >
              <div className="w-12 h-12 rounded-full bg-[#A87B4D]/10 flex items-center justify-center text-[#A87B4D] mb-3">
                {item.icon}
              </div>
              <span className="text-sm text-[#5E3920]">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4"
          variants={fadeInUp}
        >
          <motion.button 
            className="px-6 py-3 bg-[#A87B4D] text-[#F5EFE0] rounded-lg font-bold transition-all hover:bg-[#5E3920] shadow-lg flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection(roomsRef)}
          >
            Zobrazit pokoje
            <ArrowRight size={16} />
          </motion.button>
          
          <motion.a 
            href="mailto:refugio@seznam.cz"
            className="px-6 py-3 bg-[#5E3920]/10 text-[#5E3920] rounded-lg font-bold transition-all hover:bg-[#5E3920]/20 shadow-lg flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={16} />
            refugio@seznam.cz
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="order-1 lg:order-2 relative"
        variants={fadeIn}
      >
        {/* Image grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden h-48 md:h-64 shadow-xl">
              <img 
                src={a1}
                alt="Pokoj v Refugio" 
                className="w-full h-full object-cover transition-all hover:scale-105 duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-48 md:h-64 shadow-xl">
              <img 
                src={c1}
                alt="Výhled z pokoje" 
                className="w-full h-full object-cover transition-all hover:scale-105 duration-700"
              />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="rounded-2xl overflow-hidden h-48 md:h-64 shadow-xl">
              <img 
                src={b6}
                alt="Hotelová chodba" 
                className="w-full h-full object-cover transition-all hover:scale-105 duration-700"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-48 md:h-64 shadow-xl">
              <img 
                src={a4}
                alt="Snídaně v posteli" 
                className="w-full h-full object-cover transition-all hover:scale-105 duration-700"
              />
            </div>
          </div>
        </div>

        {/* Decoration elements */}
        <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-[#A87B4D]/10 rounded-full blur-xl -z-10" />
        <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#5E3920]/10 rounded-full blur-xl -z-10" />
      </motion.div>
    </motion.div>

    {/* Informace o rezervaci */}
<motion.div 
  className="mt-24 "
  initial="hidden"
  animate={isVisible.about ? "visible" : "hidden"}
  variants={fadeInUp}
>
 
  {/* Nadpis sekce */}
  <motion.h3 
    className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#5E3920] relative inline-block"
    variants={fadeInUp}
  >
    Užitečné <span className="text-[#A87B4D]">informace</span>
    <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A87B4D] to-transparent"></div>
  </motion.h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
    {/* Karta 1 - Rezervace */}
    <motion.div
      className="bg-gradient-to-br from-white to-[#F5EFE0]/80 rounded-2xl overflow-hidden shadow-lg border border-[#5E3920]/5 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mb-5"
      variants={fadeInUp}
      transition={{ delay: 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Horní barevný pruh */}
      <div className="h-2 bg-gradient-to-r from-[#A87B4D] via-[#A87B4D]/70 to-[#A87B4D]/40"></div>
      
      <div className="p-6">
        <div className="w-14 h-14 rounded-xl bg-[#5E3920]/5 flex items-center justify-center mb-4 group-hover:bg-[#A87B4D]/10 transition-colors">
          <Calendar className="text-[#A87B4D]" size={28} />
        </div>
        
        <h3 className="font-bold text-[#5E3920] text-xl mb-4">Rezervace</h3>
        
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#A87B4D]/10 flex items-center justify-center shrink-0">
              <MailIcon size={16} className="text-[#A87B4D]" />
            </div>
            <div className="text-[#5E3920]/80">
              <span className="font-medium block text-[#5E3920]">E-mailová adresa</span>
              <a href="mailto:refugio@seznam.cz" className="text-[#A87B4D] hover:underline transition-all">refugio@seznam.cz</a>
            </div>
          </li>
          
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#A87B4D]/10 flex items-center justify-center shrink-0">
              <CreditCard size={16} className="text-[#A87B4D]" />
            </div>
            <div className="text-[#5E3920]/80">
              <span className="font-medium block text-[#5E3920]">Platba zálohy</span>
              50% z celkové ceny (splatná max. 30 dní před příjezdem)
            </div>
          </li>
          
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#A87B4D]/10 flex items-center justify-center shrink-0">
              <Clock size={16} className="text-[#A87B4D]" />
            </div>
            <div className="text-[#5E3920]/80">
              <span className="font-medium block text-[#5E3920]">Pozdní rezervace</span>
              Při rezervaci do 14 dnů před příjezdem je vyžadována platba celé částky předem
            </div>
          </li>
        </ul>
      </div>
    </motion.div>
    
    {/* Karta 2 - Důležité informace */}
    <motion.div
      className="bg-gradient-to-br from-white to-[#F5EFE0]/80 rounded-2xl overflow-hidden shadow-lg border border-[#5E3920]/5 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mb-5"
      variants={fadeInUp}
      transition={{ delay: 0.2 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Horní barevný pruh */}
      <div className="h-2 bg-gradient-to-r from-[#5E3920] via-[#5E3920]/70 to-[#5E3920]/40"></div>
      
      <div className="p-6">
        <div className="w-14 h-14 rounded-xl bg-[#5E3920]/5 flex items-center justify-center mb-4 group-hover:bg-[#5E3920]/10 transition-colors">
          <Info className="text-[#5E3920]" size={28} />
        </div>
        
        <h3 className="font-bold text-[#5E3920] text-xl mb-4">Důležité informace</h3>
        
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#5E3920]/10 flex items-center justify-center shrink-0">
              <Tag size={16} className="text-[#5E3920]" />
            </div>
            <div className="text-[#5E3920]/80">
              <span className="font-medium block text-[#5E3920]">Platný ceník</span>
              Ceny uvedeny u jednotlivých pokojů (platné od 1.1.2024)
            </div>
          </li>
          
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#5E3920]/10 flex items-center justify-center shrink-0">
              <Coffee size={16} className="text-[#5E3920]" />
            </div>
            <div className="text-[#5E3920]/80">
              <span className="font-medium block text-[#5E3920]">Stravování na místě</span>
              Možnost využití kavárny a restaurace přímo v objektu
            </div>
          </li>
          
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-[#5E3920]/10 flex items-center justify-center shrink-0">
              <MapPin size={16} className="text-[#5E3920]" />
            </div>
            <div className="text-[#5E3920]/80">
              <span className="font-medium block text-[#5E3920]">Jedinečná poloha</span>
              Přímo pod majestátními skalními masívy v obci Tisá
            </div>
          </li>
        </ul>
      </div>
    </motion.div>
    
    {/* Karta 3 - Další služby */}
    <motion.div
      className="bg-gradient-to-br from-white to-[#F5EFE0]/80 rounded-2xl overflow-hidden shadow-lg border border-[#5E3920]/5 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mb-5"
      variants={fadeInUp}
      transition={{ delay: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Horní barevný pruh */}
      <div className="h-2 bg-gradient-to-r from-[#A87B4D]/40 via-[#A87B4D]/70 to-[#5E3920]"></div>
      
      <div className="p-6">
        <div className="w-14 h-14 rounded-xl bg-[#5E3920]/5 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-[#A87B4D]/20 group-hover:to-[#5E3920]/10 transition-colors">
          <ShoppingBag className="text-[#A87B4D]" size={28} />
        </div>
        
        <h3 className="font-bold text-[#5E3920] text-xl mb-4">Další služby</h3>
        
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#A87B4D]/20 to-[#5E3920]/10 flex items-center justify-center shrink-0">
              <Coffee size={16} className="text-[#A87B4D]" />
            </div>
            <div className="text-[#5E3920]/80">
              <span className="font-medium block text-[#5E3920]">Kavárna</span>
              Nekuřácká kavárna s restaurací a příjemným posezením
            </div>
          </li>
          
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#A87B4D]/20 to-[#5E3920]/10 flex items-center justify-center shrink-0">
              <ShoppingCart size={16} className="text-[#A87B4D]" />
            </div>
            <div className="text-[#5E3920]/80">
              <span className="font-medium block text-[#5E3920]">Outdoor shop</span>
              Kompletní vybavení pro horolezectví a turistiku
            </div>
          </li>
          
          <li className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#A87B4D]/20 to-[#5E3920]/10 flex items-center justify-center shrink-0">
              <MapPin size={16} className="text-[#A87B4D]" />
            </div>
            <div className="text-[#5E3920]/80">
              <span className="font-medium block text-[#5E3920]">Turistické informace</span>
              Tipy na výlety v okolí a průvodce oblastí
            </div>
          </li>
        </ul>
      </div>
    </motion.div>
  </div>
  

</motion.div>

    {/* Výhody ubytování */}
    <motion.div
      className="mt-24"
      initial="hidden"
      animate={isVisible.about ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <motion.h3
        className="text-2xl font-bold text-[#5E3920] mb-8 text-center"
        variants={fadeInUp}
      >
        Co nabízí naše <span className="text-[#A87B4D]">ubytování</span>
      </motion.h3>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
      >
        {[
          {
            title: "Komfortní pokoje",
            description: "Nabízíme ubytování v útulných pokojích i prostorném apartmánu s vlastní koupelnou a moderním vybavením.",
            icon: <Bed />
          },
          {
            title: "Vlastní koupelna",
            description: "Každý pokoj má vlastní koupelnu s fénem, ručníky a základními toaletními potřebami.",
            icon: <ShowerHead />
          },
          {
            title: "Wi-Fi připojení",
            description: "Bezplatné připojení k internetu ve všech prostorách penzionu pro váš komfort.",
            icon: <Wifi />
          },
          {
            title: "Ideální lokalita",
            description: "Nacházíme se přímo v srdci Českého Švýcarska, obklopeni nádhernou přírodou a skalními útvary.",
            icon: <Mountain />
          },
          {
            title: "Restaurace a kavárna",
            description: "V objektu se nachází nekuřácká kavárna s restaurací, kde si můžete vychutnat místní speciality.",
            icon: <Coffee />
          },
          {
            title: "Outdoor vybavení",
            description: "V našem obchodě najdete vše potřebné pro horolezectví, turistiku a outdoor aktivity.",
            icon: <Compass />
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg"
            variants={fadeIn}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(168, 123, 77, 0.25)" }}
          >
            <div className="w-12 h-12 rounded-full bg-[#A87B4D]/10 flex items-center justify-center text-[#A87B4D] mb-4">
              {item.icon}
            </div>
            <h4 className="font-bold text-[#5E3920] text-lg mb-2">{item.title}</h4>
            <p className="text-[#5E3920]/70">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* Pokoje sekce */}
<section 
  id="rooms" 
  ref={roomsRef}
  className="py-24 bg-[#5E3920] relative overflow-hidden"
>
  {/* Dekorativní prvky na pozadí */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NCAwLTE4IDguMDYtMTggMThzOC4wNiAxOCAxOCAxOCAxOC04LjA2IDE4LTE4LTguMDYtMTgtMTgtMTh6bTAgMzRDMjUuMDQgNTIgMTYgNDIuOTYgMTYgMzJTMjUuMDQgMTIgMzYgMTJzMjAgOS4wNCAyMCAyMC05LjA0IDIwLTIwIDIweiIgZmlsbD0icmdiYSgyNDUsIDIzOSwgMjI0LCAwLjAzKSIvPjxwYXRoIGQ9Ik0yIDE4YzkuOTQgMCAxOCA4LjA2IDE4IDE4cy04LjA2IDE4LTE4IDE4djRjMTIuMTUgMCAyMi05Ljg1IDIyLTIyUzE0LjE1IDE0IDIgMTR2NHoiIGZpbGw9InJnYmEoMjQ1LCAyMzksIDIyNCwgMC4wMykiLz48L2c+PC9zdmc+')] opacity-10" />
  <div className="absolute bottom-0 right-0 w-full h-40 bg-gradient-to-t from-[#5E3920] to-transparent" />
  
  {/* Obsah sekce */}
  <div className="container mx-auto px-6 relative z-10">
    <motion.div 
      className="text-center mb-16"
      initial="hidden"
      animate={isVisible.rooms ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      <motion.span 
        className="inline-block py-1 px-4 bg-[#F5EFE0]/10 text-[#F5EFE0] rounded-full text-sm font-accent tracking-wider mb-4"
        variants={fadeInUp}
      >
        NAŠE POKOJE
      </motion.span>
      
      <motion.h2 
        className="text-4xl font-bold text-[#F5EFE0] mb-4"
        variants={fadeInUp}
      >
        Vyberte si <span className="text-[#A87B4D]">ideální</span> pokoj
      </motion.h2>
      
      <motion.p 
        className="text-[#F5EFE0]/70 mx-auto max-w-2xl text-lg"
        variants={fadeInUp}
      >
        Od útulných pokojů pro dvojici až po prostorné apartmány pro celou rodinu, každý si u nás najde své místo pro odpočinek
      </motion.p>
    </motion.div>
    
    {/* Pokoje - Desktop & tablet layout */}
    <motion.div 
      className="hidden md:block space-y-24"
      initial="hidden"
      animate={isVisible.rooms ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {rooms.map((room, index) => (
        <RoomCard 
          key={room.id} 
          room={room} 
          index={index} 
          activeGallery={activeGallery}
          setActiveGallery={setActiveGallery}
        />
      ))}
    </motion.div>
    
    {/* Pokoje - Mobile layout */}
    <motion.div 
      className="md:hidden space-y-12"
      initial="hidden"
      animate={isVisible.rooms ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {rooms.map((room, index) => (
        <RoomCardMobile 
          key={room.id} 
          room={room} 
          index={index}
          activeRoom={activeRoom}
          setActiveRoom={setActiveRoom}
          activeGallery={activeGallery}
          setActiveGallery={setActiveGallery}
        />
      ))}
    </motion.div>
    
    {/* CTA - rezervace */}
    <motion.div 
      className="mt-20 p-8 bg-[#A87B4D]/20 backdrop-blur-sm rounded-xl border border-[#F5EFE0]/20 text-center"
      initial={{ opacity: 0 }}
      animate={isVisible.rooms ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-[#F5EFE0] mb-3">Máte speciální požadavky?</h3>
      <p className="text-[#F5EFE0]/80 mb-6 max-w-lg mx-auto">
        Neváhejte nás kontaktovat pro individuální nabídku ubytování nebo s dotazy ohledně vašeho pobytu.
      </p>
      
      <motion.button 
        className="px-8 py-3 bg-[#F5EFE0] text-[#5E3920] rounded-lg shadow-lg font-bold inline-flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <Phone size={18} />
        <span>Kontaktujte nás</span>
      </motion.button>
    </motion.div>
  </div>
  
  {/* Lightbox pro zobrazení galerie */}
  <AnimatePresence>
    {activeGallery && (
      <ImageGalleryModal 
        images={activeGallery.images} 
        title={activeGallery.name}
        onClose={() => setActiveGallery(null)}
      />
    )}
  </AnimatePresence>
</section>
      
      {/* FAQ sekce */}
      <section className="py-20 bg-[#F5EFE0] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-4 bg-[#5E3920]/10 text-[#5E3920] rounded-full text-sm font-accent tracking-wider mb-4">
              ČASTO KLADENÉ DOTAZY
            </span>
            
            <h2 className="text-3xl font-bold text-[#5E3920] mb-4">
              Vše, co potřebujete <span className="text-[#A87B4D]">vědět</span>
            </h2>
            
            <p className="text-[#5E3920]/70 mx-auto max-w-2xl">
              Odpovědi na nejčastější otázky týkající se ubytování
            </p>
          </div>
          
          {/* Accordion s FAQ */}
          <div className="max-w-3xl mx-auto grid gap-4">
            {[
              {
                question: "Jak probíhá check-in a check-out?",
                answer: "Check-in je možný od 14:00 a check-out do 11:00. Po předchozí domluvě je možné časy upravit podle vašich potřeb."
              },
              {
                question: "Je možné ubytovat se s domácím mazlíčkem?",
                answer: "Ano, malé a střední psy přijímáme za příplatek 200 Kč/noc. Prosíme o nahlášení mazlíčka předem při rezervaci."
              },
              {
                question: "Nabízíte dětské postýlky nebo přistýlky?",
                answer: "Ano, dětské postýlky poskytujeme zdarma a přistýlky za příplatek 500 Kč/noc včetně snídaně."
              },
              {
                question: "Je ve vašem hotelu k dispozici parkování?",
                answer: "Ano, k dispozici je bezplatné parkování přímo před budovou hotelu."
              },
              {
                question: "Je možné stornovat rezervaci?",
                answer: "Rezervaci lze bezplatně stornovat do 7 dnů před příjezdem. Při pozdějším stornování účtujeme poplatek ve výši první noci."
              }
            ].map((faq, index) => (
              <Accordion key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Rezervační CTA */}
      <section className="py-16 bg-[#A87B4D] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F5EFE0]/30 to-transparent" />
        
        <motion.div 
          className="container mx-auto px-6 relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5EFE0] mb-4">
            Rezervujte si ubytování v Refugio
          </h2>
          <p className="text-[#F5EFE0]/80 mx-auto max-w-2xl text-lg mb-8">
            Zajistěte si pohodlný pobyt v našich horských apartmánech a užijte si aktivní dovolenou v přírodě.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a 
              href="tel:+420123456789"
              className="py-3 px-6 bg-[#5E3920] text-[#F5EFE0] rounded-lg shadow-lg text-lg font-bold flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={18} />
              <span>+420 123 456 789</span>
            </motion.a>
            
            <motion.button 
              className="py-3 px-6 bg-[#F5EFE0] text-[#5E3920] rounded-lg shadow-lg text-lg font-bold flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={18} />
              <span>refugio@seznam.cz</span>
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

{/* Desktop Room Card Component */}
const RoomCard = ({ room, index, activeGallery, setActiveGallery }) => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };
  
  return (
    <motion.div 
      className="bg-[#F5EFE0] rounded-3xl overflow-hidden shadow-xl"
      variants={fadeIn}
      transition={{ delay: index * 0.2 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Foto sekce */}
        <div className="p-6 relative">
          {/* Hlavní fotka */}
          <div 
            className="relative rounded-2xl overflow-hidden h-80 mb-2 cursor-pointer shadow-lg"
            onClick={() => setActiveGallery(room)}
          >
            <img 
              src={room.images[0]} 
              alt={room.name} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
              <span className="text-[#F5EFE0] font-medium px-4 py-2 bg-[#5E3920]/70 backdrop-blur-sm rounded-lg flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 21-6.05-6.05m0 0a7 7 0 1 0-9.9-9.9 7 7 0 0 0 9.9 9.9ZM13 10V8m0 4h.01M11 10h4"></path></svg>
                Zobrazit galerii ({room.images.length} fotek)
              </span>
            </div>
          </div>
          
          {/* Miniatury */}
          <div className="grid grid-cols-4 gap-2">
            {room.images.slice(1, 5).map((img, idx) => (
              <div 
                key={idx} 
                className="aspect-square rounded-lg overflow-hidden cursor-pointer shadow-md"
                onClick={() => setActiveGallery(room)}
              >
                <img 
                  src={img} 
                  alt={`${room.name} detail ${idx + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          {/* Hodnocení */}
          <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg flex items-center gap-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  fill="#A87B4D" 
                  color="#A87B4D" 
                />
              ))}
            </div>
            <span className="text-xs text-[#5E3920] font-bold">5.0</span>
          </div>
          
          {/* Badge s typem pokoje */}
          <div className="absolute top-10 left-10 bg-[#A87B4D] px-4 py-1.5 rounded-full shadow-lg">
            <span className="text-sm text-[#F5EFE0] font-bold">{room.type || 'Pokoj'}</span>
          </div>
        </div>
        
        {/* Informace o pokoji */}
        <div className="p-8 flex flex-col">
          <div className="mb-6">
            <h3 className="text-3xl font-bold text-[#5E3920] mb-3">{room.name}</h3>
            <p className="text-[#5E3920]/80 text-lg">{room.description}</p>
          </div>
          
          <div className="mb-8">
            <h4 className="font-bold text-[#5E3920] text-lg mb-4 flex items-center gap-2">
              <CheckCircle className="text-[#A87B4D]" size={20} />
              Vybavení a služby
            </h4>
            <ul className="grid grid-cols-2 gap-3">
              {room.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-[#5E3920]/80">
                  <div className="w-1 h-1 bg-[#A87B4D] rounded-full"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Ceník sekce */}
          <div className="mt-auto">
            <h4 className="font-bold text-[#5E3920] text-lg mb-4 flex items-center gap-2">
              <Euro className="text-[#A87B4D]" size={20} />
              Ceník
            </h4>
            
            {/* Ceník obsah - přehlednější tabulka */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#5E3920]/10">
              <div className="grid grid-cols-2 border-b border-[#5E3920]/10 bg-[#5E3920]/5">
                <div className="py-3 px-4 font-bold text-[#5E3920] text-sm">Délka pobytu</div>
                <div className="py-3 px-4 font-bold text-[#5E3920] text-sm">Cena za noc</div>
              </div>
              
              <div className="grid grid-cols-2 border-b border-[#5E3920]/10 hover:bg-[#5E3920]/5 transition-colors">
                <div className="py-3 px-4 text-[#5E3920]/80">1-2 noci</div>
                <div className="py-3 px-4 font-bold text-[#5E3920]">{room.price} Kč</div>
              </div>
              
              <div className="grid grid-cols-2 border-b border-[#5E3920]/10 hover:bg-[#5E3920]/5 transition-colors">
                <div className="py-3 px-4 text-[#5E3920]/80">3-6 nocí</div>
                <div className="py-3 px-4 font-bold text-[#5E3920]">
                  {room.id === 'apartment' ? '3 900' : '1 790'} Kč
                </div>
              </div>
              
              <div className="grid grid-cols-2 hover:bg-[#5E3920]/5 transition-colors">
                <div className="py-3 px-4 text-[#5E3920]/80">7 a více nocí</div>
                <div className="py-3 px-4 font-bold text-[#5E3920]">
                  {room.id === 'apartment' ? '3 700' : '1 700'} Kč
                </div>
              </div>
            </div>
            
            {/* Dodatečné informace v přehlednějším zobrazení */}
            {room.additionalInfo && (
              <div className="mt-4 bg-[#5E3920]/5 rounded-xl p-4 border border-[#5E3920]/10">
                <h5 className="font-medium text-[#5E3920] mb-3 text-sm flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A87B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                  Důležité informace:
                </h5>
                <ul className="space-y-2">
                  {room.additionalInfo.map((info, idx) => (
                    <li key={idx} className="text-sm text-[#5E3920]/80 flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#A87B4D]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 bg-[#A87B4D] rounded-full"></div>
                      </div>
                      <span>{info}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="text-sm text-[#5E3920]/70 mt-3 flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A87B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <span>V ceně není zahrnuta snídaně ani lázeňský poplatek.</span>
            </div>
            
            {/* Rezervační tlačítko */}
            <motion.button 
              className="mt-6 w-full py-3.5 bg-[#5E3920] hover:bg-[#5E3920]/90 text-[#F5EFE0] rounded-lg shadow-lg text-base font-bold flex items-center justify-center gap-2 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <CalendarDays size={18} />
              <span>Rezervovat pobyt</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

{/* Mobile Room Card Component */}
const RoomCardMobile = ({ room, index, activeRoom, setActiveRoom, activeGallery, setActiveGallery }) => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };
  
  return (
    <motion.div 
      key={room.id}
      className="bg-[#F5EFE0] overflow-hidden rounded-2xl shadow-lg"
      variants={fadeIn}
      transition={{ delay: index * 0.2 }}
    >
      {/* Obrázek s překryvem informací */}
      <div 
        className="h-56 overflow-hidden relative cursor-pointer"
        onClick={() => setActiveGallery(room)}
      >
        <img 
          src={room.images[0]} 
          alt={room.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex justify-between items-center mb-1">
              <div className="bg-[#A87B4D] px-3 py-1 rounded-full shadow-lg">
                <span className="text-xs text-[#F5EFE0] font-bold">{room.type}</span>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-lg shadow-lg flex items-center gap-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star 
                      key={i} 
                      size={10} 
                      fill="#A87B4D" 
                      color="#A87B4D" 
                    />
                  ))}
                </div>
                <span className="text-xs text-[#5E3920] font-bold">5.0</span>
              </div>
            </div>
            
            <div 
              className="text-[#F5EFE0] mt-2 px-3 py-1.5 bg-[#A87B4D]/80 backdrop-blur-sm rounded-lg flex items-center justify-center gap-1.5 text-sm"
              onClick={(e) => {
                e.stopPropagation();
                setActiveGallery(room);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11h16"></path><path d="M11 4h1v16h-1z"></path></svg>
              Zobrazit všechny fotky ({room.images.length})
            </div>
          </div>
        </div>
      </div>
      
      {/* Obsah karty */}
      <div className="p-4">
        {/* Název a popis */}
        <h3 className="text-xl font-bold text-[#5E3920] mb-2">{room.name}</h3>
        <p className="text-sm text-[#5E3920]/80 mb-4 line-clamp-2">{room.description}</p>
        
        {/* Hlavní vybavení - nejdůležitější 2-3 položky */}
        <div className="flex flex-wrap gap-2 mb-4">
          {room.features.slice(0, 3).map((feature, idx) => (
            <div 
              key={idx}
              className="bg-[#5E3920]/5 px-2 py-1 rounded text-xs text-[#5E3920]/80 flex items-center gap-1"
            >
              <CheckCircle size={12} className="text-[#A87B4D]" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        {/* Cena - výraznější */}
        <div className="bg-[#5E3920]/5 p-4 rounded-lg mb-4">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-xs text-[#5E3920]/70 block">Cena od</span>
              <span className="text-2xl font-bold text-[#5E3920]">
                {room.price} Kč
              </span>
              <span className="text-xs text-[#5E3920]/80">/noc</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-[#5E3920]/70 block">Dlouhodobý pobyt</span>
              <span className="text-base font-bold text-[#5E3920]">
                {room.id === 'apartment' ? '3 700' : '1 700'} Kč
              </span>
              <span className="text-xs text-[#5E3920]/80">/noc (7+ nocí)</span>
            </div>
          </div>
        </div>
        
        {/* Rezervační tlačítko */}
        <motion.button 
          className="w-full py-3 text-[#F5EFE0] rounded-lg shadow-lg text-base font-bold flex items-center justify-center gap-2"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          style={{ backgroundColor: room.color }}
        >
          <CalendarDays size={18} />
          <span>Rezervovat pobyt</span>
        </motion.button>
        
        {/* Rozbalovací detail */}
        <div className="mt-4 pt-4 border-t border-[#5E3920]/10">
          <motion.button 
            className="flex items-center justify-between w-full text-sm font-medium text-[#5E3920] p-1"
            onClick={() => setActiveRoom(activeRoom === room.id ? null : room.id)}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1 }}
          >
            <span>Zobrazit více informací</span>
            <div className="flex items-center gap-1">
              <span className="text-xs text-[#5E3920]/60">
                {activeRoom === room.id ? 'Méně' : 'Více'}
              </span>
              <ChevronDown 
                size={18} 
                className={`transform transition-transform text-[#A87B4D] ${activeRoom === room.id ? 'rotate-180' : ''}`} 
              />
            </div>
          </motion.button>
          
          {activeRoom === room.id && (
            <motion.div 
              className="mt-4 space-y-6"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Ceník přehledněji */}
              <div>
                <h4 className="font-bold text-[#5E3920] text-base mb-3 flex items-center gap-2">
                  <Euro size={16} className="text-[#A87B4D]" />
                  Ceník
                </h4>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="grid grid-cols-2 border-b border-[#5E3920]/10">
                    <div className="p-3 text-sm text-[#5E3920]/80 font-medium border-r border-[#5E3920]/10">Délka pobytu</div>
                    <div className="p-3 text-sm text-[#5E3920]/80 font-medium">Cena za noc</div>
                  </div>
                  
                  <div className="grid grid-cols-2 border-b border-[#5E3920]/10">
                    <div className="p-3 text-sm text-[#5E3920]">1-2 noci</div>
                    <div className="p-3 text-sm font-bold text-[#5E3920]">{room.price} Kč</div>
                  </div>
                  
                  <div className="grid grid-cols-2 border-b border-[#5E3920]/10">
                    <div className="p-3 text-sm text-[#5E3920]">3-6 nocí</div>
                    <div className="p-3 text-sm font-bold text-[#5E3920]">
                      {room.id === 'apartment' ? '3 900' : '1 790'} Kč
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 bg-[#A87B4D]/5">
                    <div className="p-3 text-sm text-[#5E3920]">7 a více nocí</div>
                    <div className="p-3 text-sm font-bold text-[#5E3920]">
                      {room.id === 'apartment' ? '3 700' : '1 700'} Kč
                    </div>
                  </div>
                </div>
                
                {/* Dodatečné informace */}
                {room.additionalInfo && (
                  <div className="mt-3 bg-[#5E3920]/5 rounded-lg p-3 space-y-2">
                    {room.additionalInfo.map((info, idx) => (
                      <div key={idx} className="text-xs text-[#5E3920]/80 flex items-start gap-2">
                        <div className="min-w-[4px] h-4 flex items-center">
                          <div className="w-1 h-1 bg-[#A87B4D] rounded-full"></div>
                        </div>
                        <span>{info}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Vybavení přehledněji */}
              <div>
                <h4 className="font-bold text-[#5E3920] text-base mb-3 flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#A87B4D]" />
                  Vybavení a služby
                </h4>
                
                <div className="grid grid-cols-1 gap-2">
                  {room.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2 bg-white p-2 rounded-lg shadow-sm"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#A87B4D]/10 flex items-center justify-center shrink-0">
                        <CheckCircle size={14} className="text-[#A87B4D]" />
                      </div>
                      <span className="text-sm text-[#5E3920]/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Miniatury fotek v lepším rozložení */}
              <div>
                <h4 className="font-bold text-[#5E3920] text-base mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A87B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                  Galerie pokoje
                </h4>
                
                <div className="grid grid-cols-3 gap-2">
                  {room.images.slice(0, 5).map((img, idx) => (
                    <div 
                      key={idx} 
                      className={`${idx === 0 ? 'col-span-2 row-span-2' : ''} aspect-square rounded-lg overflow-hidden cursor-pointer shadow-sm`}
                      onClick={() => {
                        setActiveGallery(room);
                        // Pokud implementujete přímý skok na konkrétní obrázek:
                        // setStartIndex(idx);
                      }}
                    >
                      <img 
                        src={img} 
                        alt={`${room.name} detail ${idx + 1}`} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                  
                  {room.images.length > 5 && (
                    <div 
                      className="aspect-square rounded-lg overflow-hidden cursor-pointer relative"
                      onClick={() => setActiveGallery(room)}
                    >
                      <img 
                        src={room.images[5]} 
                        alt={`${room.name} detail 6`} 
                        className="w-full h-full object-cover brightness-50"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                        +{room.images.length - 5}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

{/* Image Gallery Modal Component */}
const ImageGalleryModal = ({ images, title, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // Reset loading state when active image changes
  useEffect(() => {
    setIsLoading(true);
  }, [activeIndex]);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setActiveIndex(prev => (prev > 0 ? prev - 1 : images.length - 1));
      if (e.key === 'ArrowRight') setActiveIndex(prev => (prev < images.length - 1 ? prev + 1 : 0));
    };
    
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto'; // Restore scrolling when modal closes
    };
  }, [onClose, images.length]);
  
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-[#F5EFE0] rounded-2xl overflow-hidden shadow-2xl max-w-7xl w-full max-h-[90vh] flex flex-col"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 md:p-5 border-b border-[#5E3920]/10 bg-gradient-to-r from-[#5E3920]/5 to-transparent">
          <h3 className="font-bold text-[#5E3920] text-lg flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A87B4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2"/>
              <circle cx="9" cy="9" r="2"/>
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
            </svg>
            {title} - Galerie
          </h3>
          
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#5E3920]/70 hidden sm:block">
              {activeIndex + 1} / {images.length}
            </span>
            <button 
              onClick={onClose} 
              className="w-8 h-8 rounded-full flex items-center justify-center bg-[#5E3920]/10 text-[#5E3920] hover:bg-[#A87B4D]/20 transition-colors" 
              aria-label="Zavřít galerii"
            >
              <X size={18} />
            </button>
          </div>
        </div>
        
        {/* Main image container */}
        <div className="relative overflow-hidden flex-1 flex items-center justify-center bg-gradient-to-b from-[#5E3920]/3 to-[#5E3920]/10 p-4">
          {/* Loading indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <div className="w-12 h-12 border-4 border-[#A87B4D]/20 border-t-[#A87B4D] rounded-full animate-spin"></div>
            </div>
          )}
          
          {/* Main image with animation */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              className="relative w-full h-full flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.25 }}
            >
              <img 
                src={images[activeIndex]} 
                alt={`${title} - obrázek ${activeIndex + 1}`} 
                className="max-w-full max-h-full object-contain rounded-md shadow-lg"
                onLoad={() => setIsLoading(false)}
                style={{ opacity: isLoading ? 0.3 : 1 }}
              />
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation arrows - improved hitbox and visibility */}
          <button 
            className="absolute left-4 bg-[#F5EFE0]/90 hover:bg-[#F5EFE0] rounded-full p-3 text-[#5E3920] backdrop-blur-md shadow-lg transform hover:scale-105 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(prev => (prev > 0 ? prev - 1 : images.length - 1));
            }}
            aria-label="Předchozí obrázek"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute right-4 bg-[#F5EFE0]/90 hover:bg-[#F5EFE0] rounded-full p-3 text-[#5E3920] backdrop-blur-md shadow-lg transform hover:scale-105 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(prev => (prev < images.length - 1 ? prev + 1 : 0));
            }}
            aria-label="Další obrázek"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Mobile-visible image counter */}
          <div className="sm:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#F5EFE0]/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm text-[#5E3920] font-medium shadow-md">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
        
        {/* Thumbnails - improved scrolling and visibility */}
        <div className="border-t border-[#5E3920]/10 bg-[#5E3920]/5 p-4">
          <div className="flex justify-center">
            <div className="flex gap-2 overflow-x-auto pb-2 max-w-full scrollbar-thin scrollbar-thumb-[#A87B4D]/40 scrollbar-track-transparent snap-x">
              {images.map((img, idx) => (
                <motion.div 
                  key={idx}
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer snap-start transition-all ${
                    activeIndex === idx 
                      ? 'ring-2 ring-offset-2 ring-[#A87B4D] scale-105 shadow-lg' 
                      : 'opacity-70 hover:opacity-100 hover:scale-105'
                  }`}
                  onClick={() => setActiveIndex(idx)}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: activeIndex === idx ? 1.05 : 1.08 }}
                >
                  <img 
                    src={img}
                    alt={`${title} - náhled ${idx + 1}`}
                    className="w-full h-full object-cover" 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
  

// Komponenta Accordion pro FAQ sekci
function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className={`border border-[#5E3920]/10 rounded-xl overflow-hidden bg-white shadow-md ${isOpen ? 'shadow-lg' : ''}`}
      animate={{ 
        backgroundColor: isOpen ? "rgba(168, 123, 77, 0.05)" : "rgba(255, 255, 255, 1)"
      }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left p-5 font-bold text-[#5E3920] hover:bg-[#5E3920]/5 transition"
      >
        <span>{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#A87B4D]"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-5 pt-0 text-[#5E3920]/80 border-t border-[#5E3920]/10">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
}