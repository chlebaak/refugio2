import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { UtensilsCrossed, Coffee, Wine, Pizza, Salad, ChevronDown, Star, Clock, Users, MapPin, Flame, Info, LucideVegan, Phone, Beer, AlignJustify, Dessert } from "lucide-react";
import Hero from '../assets/out.png';
import Interier from '../assets/interier.png';
import restaurace from '../assets/restaurace.png';


export default function Restaurace() {
  // Stav pro animace při scrollování
  const [isVisible, setIsVisible] = useState({
    hero: false,
    overview: false,
    menu: false,
    testimonials: false
  });
  
  // Reference pro sekce
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const menuRef = useRef(null);
  const testimonialsRef = useRef(null);
  
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
    if (overviewRef.current) observer.observe(overviewRef.current);
    if (menuRef.current) observer.observe(menuRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Kontrola, zda URL obsahuje hash fragment
    if (window.location.hash === "#menu" && menuRef.current) {
      // Počkáme chvíli, aby se stránka načetla
      setTimeout(() => {
        menuRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, []);
  
  // Kategorie menu
  const [activeCategory, setActiveCategory] = useState("hlavni");

  
  // Data pro menu - kategorie jídel a nápojů
  const menuItems = {
    predkrmy: [
      { name: "Polévky s láskou vařené", description: "Dle denní nabídky", price: "od 65 Kč" },
      { name: "Pečivo", description: "Čerstvé pečivo k polévce nebo jen tak", price: "15 Kč" },
      { name: "Vege paštika", description: "Podává se s toustem", price: "95 Kč", isVegetarian: true },
      { name: "Tlačenka s cibulí", description: "150g, chléb z Pekárny Tisá", price: "105 Kč" },
      { name: "Domácí játrová paštika", description: "S hruškovým chutney a toustem", price: "105 Kč" },
      { name: "Nakládané sýry", description: "120g (niva, gouda, hermelín), chléb z Pekárny Tisá", price: "145 Kč", isVegetarian: true }
    ],    
    hlavni: [
      { name: "Hermelín v listovém těstě", description: "S domácí pikantní brusinkovou omáčkou, podávaný na salátových listech", price: "135 Kč", isVegetarian: true },
      { name: "Bramborové šišky", description: "S anglickou slaninou a zelím, zapečené se sýrem", price: "145 Kč" },
      { name: "Zapečená brambora", description: "S bylinkovým tvarohem, zeleninový salátek a kukuřičný klas", price: "175 Kč", isVegetarian: true },
      { name: "Zapečený ovčí sýr v olivovém oleji", description: "S česnekem, cibulkou, olivami a feferonkou, chléb z Pekárny Tisá", price: "175 Kč", isVegetarian: true, isPopular: true },
      { name: "Bulgurové rizoto", description: "Se sušenými rajčaty, česnekem, kořenovou zeleninou, cuketou, sýr Grana Padano", price: "185 Kč", isVegetarian: true },
      { name: "Boloňské špagety", description: "Hovězí ragú na červeném víně s kořenovou zeleninou, sýr Grana Padano", price: "195 Kč" },
      { name: "Kuřecí kari v zeleninové omáčce", description: "S kokosovým mlékem, červenou čočkou, černým sezamem, koriandrem, rýže", price: "245 Kč" },
      { name: "Ribs žebírka glazovaná bourbonem", description: "Se salátkem Coleslaw, chléb", price: "295 Kč" },
      { name: "Ryba dle nabídky", description: "S pečenou zeleninou, lahůdkovým bramborem a domácím bylinkovým pestem", price: "365 Kč" }
    ],   
    dezerty: [
      { name: "Palačinka s marmeládou", description: "Šlehačka", price: "65 Kč" },
      { name: "Palačinka s domácím slaným karamelem a ořechy", description: "Šlehačka", price: "85 Kč" },
      { name: "Palačinka s borůvkami a kysanou smetanou", description: "Šlehačka", price: "85 Kč", isPopular: true },
      { name: "Ovocný crumble", description: "", price: "75 Kč" },
      { name: "Koláč/zákusek", description: "Uvidíte, co jsme pro vás napekli", price: "od 65 Kč" },
      { name: "Zmrzlinový pohár s horkými malinami", description: "Vanilková zmrzlina (2 kopečky), šlehačka", price: "85 Kč" },
      { name: "Zmrzlinový pohár se slaným karamelem a ořechy", description: "Vanilková zmrzlina (2 kopečky), šlehačka", price: "85 Kč" },
      { name: "Zmrzlinový pohár s vaječným likérem", description: "Vanilková zmrzlina (2 kopečky), šlehačka", price: "85 Kč" },
      { name: "Kopeček vanilkové zmrzliny", description: "", price: "20 Kč" }
    ],    
    kavy: [
      { name: "Espresso", description: "", price: "45 Kč" },
      { name: "Espresso lungo", description: "", price: "45 Kč" },
      { name: "Doppio", description: "", price: "70 Kč" },
      { name: "Cappuccino", description: "", price: "60 Kč", isPopular: true }, 
      { name: "Flat white", description: "", price: "80 Kč" },
      { name: "Vídeňská káva", description: "", price: "75 Kč" },
      { name: "Café Latte", description: "", price: "70 Kč" },
      { name: "Turecká káva", description: "", price: "40 Kč" },
      { name: "Sojové mléko", description: "", price: "15 Kč" }
    ]
    ,
    teple: [
      { name: "Horká čokoláda", description: "", price: "65 Kč" },
      { name: "Horká čokoláda s rumem", description: "", price: "85 Kč" },
      { name: "Horká čokoláda s amarettem", description: "", price: "85 Kč" },
      { name: "Svařák", description: "", price: "65 Kč" },
      { name: "Grog", description: "", price: "65 Kč" },
      { name: "Horká griotka", description: "", price: "65 Kč" },
      { name: "Horký džus", description: "", price: "65 Kč" },
      { name: "Čaj z čerstvého zázvoru/máty", description: "", price: "55 Kč" },
      { name: "Čaje sáčkové – Ahmad", description: "", price: "45 Kč" },
      { name: "Čaje sypané – dle čajového lístku", description: "", price: "55 Kč" },
      { name: "Med", description: "", price: "10 Kč" }
    ]
    ,
    nealko: [
      { name: "Džusy Rauch", description: "", price: "50 Kč" },
      { name: "RC Cola / Vinea / Tonic", description: "0,3l", price: "35 Kč" },
      { name: "Domácí limonáda", description: "0,5l", price: "55 Kč", isPopular: true },
      { name: "Kauboy mošt", description: "0,33l", price: "35 Kč" },
      { name: "Rajec pramenitá voda", description: "0,5l", price: "25 Kč" },
      { name: "Karafa vody/sody", description: "0,3l", price: "30 Kč" },
      { name: "Točená Kofola", description: "0,5l", price: "45 Kč" },
      { name: "Cola / Fanta / Sprite – rozlévané", description: "0,5l", price: "50 Kč" },
      { name: "Rauch džus – soda", description: "0,5l", price: "55 Kč" },
      { name: "Rozlévaný džus – soda", description: "0,5l", price: "45 Kč" }
    ]
    ,
    alko: [
      { name: "Klášter 11°", description: "0,3l", price: "30 Kč" },
      { name: "Klášter 11°", description: "0,5l", price: "45 Kč" },
      { name: "Falkenštejn 12°", description: "0,3l", price: "40 Kč" },
      { name: "Falkenštejn 12°", description: "0,5l", price: "55 Kč", isPopular: true },
      { name: "Plzeň 12° – láhev", description: "0,5l", price: "55 Kč" },
      { name: "Kozel tmavý – láhev", description: "0,5l", price: "45 Kč" },
      { name: "Nealkopivo – láhev", description: "0,5l", price: "45 Kč" },
      { name: "F.H.Prager cider", description: "0,3l", price: "65 Kč" },
      { name: "Kauboy cider", description: "0,5l", price: "95 Kč" },
      { name: "Radler", description: "0,3l", price: "35 Kč" },
      { name: "Radler", description: "0,5l", price: "50 Kč" },
      { name: "Víno rozlévané", description: "0,1l", price: "30 Kč" },
      { name: "Vinný střik", description: "0,3l", price: "45 Kč" },
      { name: "Vinný střik", description: "0,5l", price: "75 Kč" },
      { name: "Prosecco", description: "0,1l", price: "55 Kč" }
    ]
    
  };

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
<div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Hero})` }}>
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
              REFUGIO RESTAURANT
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl text-[#F5EFE0] font-bold mb-6 leading-tight"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Místo, kde <span className="text-[#A87B4D]">chuť</span> dosahuje <span className="text-[#A87B4D]">výšin</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-[#F5EFE0]/90 mb-10"
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Naše restaurace nabízí výjimečné gastronomické zážitky inspirované horolezeckou tradicí
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
                onClick={() => scrollToSection(menuRef)}
              >
                <UtensilsCrossed size={18} />
                Prohlédnout menu
              </motion.button>
              
              <motion.button 
                className="px-8 py-3 bg-[#F5EFE0]/20 backdrop-blur-sm border-2 border-[#F5EFE0]/40 text-[#F5EFE0] rounded-full font-bold transition-all hover:bg-[#F5EFE0]/30 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection(testimonialsRef)}

              >
                Rezervovat stůl
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
              onClick={() => scrollToSection(overviewRef)}
              className="flex flex-col items-center gap-2 text-[#F5EFE0] hover:text-[#A87B4D] transition-colors pb-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium">Poznejte naši kuchyni</span>
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

           {/* O restauraci sekce s moderním designem */}
<section 
  id="overview" 
  ref={overviewRef} 
  className="py-32 bg-[#F5EFE0] relative overflow-hidden"
>
  {/* Vylepšené dekorativní prvky */}
  <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#5E3920]/15 to-transparent pointer-events-none" />
  <div className="absolute -left-32 top-1/4 w-72 h-72 rounded-full bg-[#A87B4D]/15 blur-[100px]" />
  <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-[#5E3920]/10 blur-[80px]" />
  <div className="absolute left-1/2 top-1/3 w-64 h-64 rounded-full bg-[#F5EFE0]/40 mix-blend-overlay blur-[120px]" />
  
  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NCAwLTE4IDguMDYtMTggMThzOC4wNiAxOCAxOCAxOCAxOC04LjA2IDE4LTE4LTguMDYtMTgtMTgtMTh6bTAgMzRDMjUuMDQgNTIgMTYgNDIuOTYgMTYgMzJTMjUuMDQgMTIgMzYgMTJzMjAgOS4wNCAyMCAyMC05LjA0IDIwLTIwIDIweiIgZmlsbD0icmdiYSg5NCwgNTcsIDMyLCAwLjAzKSIvPjxwYXRoIGQ9Ik0yIDE4YzkuOTQgMCAxOCA4LjA2IDE4IDE4cy04LjA2IDE4LTE4IDE4djRjMTIuMTUgMCAyMi05Ljg1IDIyLTIyUzE0LjE1IDE0IDIgMTR2NHoiIGZpbGw9InJnYmEoOTQsIDU3LCAzMiwgMC4wMykiLz48L2c+PC9zdmc+')] opacity-5" />

  {/* Obsah sekce */}
  <div className="container mx-auto px-6 relative z-10">
    <motion.div 
      className="text-center mb-16"
      initial="hidden"
      animate={isVisible.overview ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {/* Vylepšený badge */}
      <motion.div 
        className="inline-flex items-center gap-2 mb-4"
        variants={fadeInUp}
      >
        <div className="h-px w-8 bg-[#A87B4D]"></div>
        <span className="bg-[#5E3920]/10 text-[#5E3920] rounded-full py-1.5 px-5 text-sm font-medium tracking-wider inline-flex items-center gap-2">
          <UtensilsCrossed size={14} />
          NAŠE RESTAURACE
        </span>
        <div className="h-px w-8 bg-[#A87B4D]"></div>
      </motion.div>
      
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-[#5E3920] mb-5 tracking-tight"
        variants={fadeInUp}
      >
        Gastronomický <span className="text-[#A87B4D] relative inline-block">
          zážitek
          <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 15" preserveAspectRatio="none">
            <path d="M0,5 Q50,-5 100,5" stroke="#A87B4D" strokeWidth="2" fill="none" />
          </svg>
        </span>
      </motion.h2>
      
      <motion.p 
        className="text-[#5E3920]/70 mx-auto max-w-3xl text-lg md:text-xl leading-relaxed"
        variants={fadeInUp}
      >
        V Refugiu připravujeme jídla s láskou k tradici a respektem k lokálním surovinám. 
        Naše mladé a vášnivé kuchařské talenty neustále experimentují a vytvářejí unikátní menu, 
        které potěší i ty nejnáročnější gurmány.
      </motion.p>
    </motion.div>

    {/* Modernizovaný layout */}
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8"
      initial="hidden"
      animate={isVisible.overview ? "visible" : "hidden"}
      variants={staggerContainer}
    >
      {/* Hlavní obraz - větší a impozantnější */}
      <motion.div 
        className="md:col-span-7 row-span-2 rounded-3xl overflow-hidden shadow-2xl relative h-[600px] group"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        whileHover={{ 
          y: -10,
          boxShadow: "0 50px 80px -20px rgba(94, 57, 32, 0.25), 0 30px 50px -30px rgba(94, 57, 32, 0.3)"
        }}
      >
        <img 
          src={restaurace}
          alt="Refugio interior" 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#5E3920]/90 via-[#5E3920]/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-8 lg:p-10">
          <motion.h3 
            className="text-[#F5EFE0] text-3xl font-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Vášeň pro jídlo, láska k tradicím
          </motion.h3>
          <motion.p 
            className="text-[#F5EFE0]/90 mb-5 lg:text-lg max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Naše kuchyně spojuje tradiční recepty s moderními postupy. 
            Používáme čerstvý chléb z vyhlášené Tiské pekárny, který skvěle doplňuje naše pečlivě připravená jídla.
            Každý den pro vás připravujeme domácí zákusky a koláče podle sezónní nabídky.
          </motion.p>

          <motion.div 
            className="flex items-center gap-3 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex bg-[#F5EFE0]/10 backdrop-blur-sm py-1.5 px-3 rounded-full">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} size={16} fill="#A87B4D" color="#A87B4D" />
                ))}
              </div>
              <span className="ml-2 font-bold text-[#F5EFE0]">4.7 / 5.0</span>
            </div>
            <span className="text-sm text-[#F5EFE0]/70 bg-[#F5EFE0]/10 backdrop-blur-sm py-1.5 px-3 rounded-full">
              800+ recenzí na google
            </span>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Otevírací doba - modernizovaná */}
      <motion.div 
        className="md:col-span-5 bg-gradient-to-br from-[#5E3920]/5 to-[#5E3920]/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#5E3920]/10 hover:border-[#A87B4D]/20 transition-all duration-300"
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.1 }}
        whileHover={{ 
          y: -10,
          boxShadow: "0 25px 50px -12px rgba(94, 57, 32, 0.18)"
        }}
      >
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 bg-[#A87B4D]/20 rounded-2xl flex items-center justify-center text-[#A87B4D] shrink-0 shadow-lg">
            <Clock size={28} />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-[#5E3920] mb-4 text-xl">Otevírací doba</h4>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-[#5E3920]/10 pb-3">
                <span className="text-[#5E3920]/80 font-medium">Pondělí - Pátek</span>
                <span className="text-[#A87B4D] font-bold">11:00 - 22:00</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#5E3920]/10 pb-3">
                <span className="text-[#5E3920]/80 font-medium">Sobota</span>
                <span className="text-[#A87B4D] font-bold">10:00 - 23:00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#5E3920]/80 font-medium">Neděle</span>
                <span className="text-[#A87B4D] font-bold">10:00 - 22:00</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#5E3920]/10">
              <div className="flex items-center gap-2 text-[#5E3920]/80">
                <MapPin size={16} className="text-[#A87B4D]" />
                <span>Tiská 428, 403 36 Tisá</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Náš tým - nový box */}
      <motion.div 
        className="md:col-span-3 bg-gradient-to-br from-[#A87B4D]/10 to-[#A87B4D]/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#A87B4D]/10 hover:border-[#A87B4D]/20 transition-all duration-300"
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ 
          y: -10,
          boxShadow: "0 25px 50px -12px rgba(168, 123, 77, 0.18)"
        }}
      >
        <div className="w-14 h-14 bg-[#A87B4D]/20 rounded-2xl flex items-center justify-center text-[#A87B4D] shrink-0 shadow-lg mb-5">
          <Users size={28} />
        </div>
        
        <h4 className="font-bold text-[#5E3920] mb-3 text-xl">Mladý tým plný energie</h4>
        
        <p className="text-[#5E3920]/80 mb-5 leading-relaxed">
          Náš personál tvoří mladí a nadšení lidé s vášní pro gastronomii, kteří vám rádi poradí s výběrem 
          jídla i s párovním vhodného nápoje.
        </p>
        
        
      </motion.div>
            
      {/* Na co jsme hrdí - modernizováno */}
      <motion.div 
        className="md:col-span-5 bg-gradient-to-br from-[#5E3920] to-[#5E3920]/90 rounded-3xl p-8 shadow-xl relative overflow-hidden"
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ 
          y: -10,
          boxShadow: "0 25px 50px -12px rgba(94, 57, 32, 0.35)"
        }}
      >
        <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[#A87B4D]/30 blur-3xl" />
        <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[#A87B4D]/20 blur-3xl" />
        
        <h4 className="font-bold text-[#F5EFE0] mb-6 text-xl flex items-center gap-3">
          <div className="w-10 h-10 bg-[#A87B4D]/20 rounded-full flex items-center justify-center">
            <Flame size={20} className="text-[#A87B4D]" />
          </div>
          Na co jsme hrdí
        </h4>
        
        <ul className="space-y-4 relative z-10">
          <li className="flex items-center gap-4 text-[#F5EFE0]/90 group">
            <div className="w-10 h-10 bg-[#A87B4D]/20 rounded-full flex items-center justify-center text-[#F5EFE0] group-hover:bg-[#A87B4D]/40 transition-colors">
              <MapPin size={18} />
            </div>
            <div>
              <span className="font-medium">Lokální suroviny</span>
              <p className="text-[#F5EFE0]/70 text-sm mt-0.5">Od místních farmářů a producentů</p>
            </div>
          </li>
          <li className="flex items-center gap-4 text-[#F5EFE0]/90 group">
            <div className="w-10 h-10 bg-[#A87B4D]/20 rounded-full flex items-center justify-center text-[#F5EFE0] group-hover:bg-[#A87B4D]/40 transition-colors">
              <Coffee size={18} />
            </div>
            <div>
              <span className="font-medium">Speciální káva z lokální pražírny</span>
              <p className="text-[#F5EFE0]/70 text-sm mt-0.5">S pestrou nabídkou alternativních příprav</p>
            </div>
          </li>
          <li className="flex items-center gap-4 text-[#F5EFE0]/90 group">
            <div className="w-10 h-10 bg-[#A87B4D]/20 rounded-full flex items-center justify-center text-[#F5EFE0] group-hover:bg-[#A87B4D]/40 transition-colors">
              <Wine size={18} />
            </div>
            <div>
              <span className="font-medium">Moravská vína a řemeslné pivovary</span>
              <p className="text-[#F5EFE0]/70 text-sm mt-0.5">Pečlivě vybraná vína a piva z malých provozoven</p>
            </div>
          </li>
          <li className="flex items-center gap-4 text-[#F5EFE0]/90 group">
            <div className="w-10 h-10 bg-[#A87B4D]/20 rounded-full flex items-center justify-center text-[#F5EFE0] group-hover:bg-[#A87B4D]/40 transition-colors">
              <LucideVegan size={18} />
            </div>
            <div>
              <span className="font-medium">Vegetariánské a veganské speciality</span>
              <p className="text-[#F5EFE0]/70 text-sm mt-0.5">Kreativní pokrmy i pro nemasožravce</p>
            </div>
          </li>
        </ul>
      </motion.div>

      {/* Domácí koláče a zákusky - nový box */}
      <motion.div 
        className="md:col-span-4 bg-gradient-to-br from-[#F5EFE0] to-[#F5EFE0]/80 rounded-3xl p-8 shadow-xl overflow-hidden relative border border-[#5E3920]/5"
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.4 }}
        whileHover={{ 
          y: -10,
          boxShadow: "0 25px 50px -12px rgba(94, 57, 32, 0.15)"
        }}
      >
        <div className="w-14 h-14 bg-[#A87B4D]/20 rounded-2xl flex items-center justify-center text-[#A87B4D] shrink-0 shadow-lg mb-5">
          <Dessert size={28} />
        </div>
        
        <h4 className="font-bold text-[#5E3920] mb-3 text-xl">Domácí sladké potěšení</h4>
        
        <p className="text-[#5E3920]/80 mb-4 leading-relaxed">
          Naše cukrářky každý den připravují čerstvé koláče, dorty a zákusky podle sezónní nabídky a tradičních receptů.
        </p>
        
        <div className="flex gap-2 mt-4 mb-6">
          <div className="px-3 py-1 rounded-full bg-[#A87B4D]/10 text-xs text-[#A87B4D] font-medium">
            Domácí štrúdl
          </div>
          <div className="px-3 py-1 rounded-full bg-[#A87B4D]/10 text-xs text-[#A87B4D] font-medium">
            Medovník
          </div>
          <div className="px-3 py-1 rounded-full bg-[#A87B4D]/10 text-xs text-[#A87B4D] font-medium">
            Cheesecake
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-4 border-t border-[#5E3920]/10">
          <span className="text-sm text-[#5E3920]/70">Denní nabídka se mění</span>
          <span className="text-[#A87B4D] font-medium">od 65 Kč</span>
        </div>
        
        {/* Dekorativní prvky */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-[#A87B4D]/5 blur-2xl" />
      </motion.div>
    </motion.div>
    
    {/* Unikátní menu showcase */}
    <motion.div
      className="mt-10 bg-[#5E3920]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#5E3920]/10 shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-wrap justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-[#5E3920]">Unikátní sezónní speciality</h3>
        <motion.button 
          className="px-6 py-2.5 bg-[#A87B4D] text-[#F5EFE0] rounded-full font-medium shadow-md flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => scrollToSection(menuRef)}
        >
          <UtensilsCrossed size={16} />
          Zobrazit celé menu
        </motion.button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#F5EFE0]    p-4 rounded-xl shadow-sm">
          <div className="text-[#A87B4D] font-medium text-sm mb-1">Sezonní specialita</div>
          <h4 className="font-bold text-[#5E3920]">Zapečený ovčí sýr v olivovém oleji</h4>
          <p className="text-[#5E3920]/70 text-sm">S česnekem, cibulkou, olivami a feferonkou, chléb z Pekárny Tisá</p>
          <div className="mt-2 text-[#A87B4D] font-bold">175 Kč</div>
        </div>
        
        <div className="bg-[#F5EFE0] p-4 rounded-xl shadow-sm">
          <div className="text-[#A87B4D] font-medium text-sm mb-1">Populární volba</div>
          <h4 className="font-bold text-[#5E3920]">Ribs žebírka glazovaná bourbonem</h4>
          <p className="text-[#5E3920]/70 text-sm">Se salátkem Coleslaw, chléb</p>
          <div className="mt-2 text-[#A87B4D] font-bold">295 Kč</div>
        </div>
        
        <div className="bg-[#F5EFE0] p-4 rounded-xl shadow-sm">
          <div className="text-[#A87B4D] font-medium text-sm mb-1">Novinka</div>
          <h4 className="font-bold text-[#5E3920]">Kuřecí kari v zeleninové omáčce</h4>
          <p className="text-[#5E3920]/70 text-sm">S kokosovým mlékem, červenou čočkou, černým sezamem, koriandrem, rýže</p>
          <div className="mt-2 text-[#A87B4D] font-bold">245 Kč</div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* Menu sekce */}
      <section 
        id="menu" 
        ref={menuRef}
        className="py-24 bg-[#5E3920] relative overflow-hidden"
      >
        {/* Dekorativní prvky na pozadí */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NCAwLTE4IDguMDYtMTggMThzOC4wNiAxOCAxOCAxOCAxOC04LjA2IDE4LTE4LTguMDYtMTgtMTgtMTh6bTAgMzRDMjUuMDQgNTIgMTYgNDIuOTYgMTYgMzJTMjUuMDQgMTIgMzYgMTJzMjAgOS4wNCAyMCAyMC05LjA0IDIwLTIwIDIweiIgZmlsbD0icmdiYSgyNDUsIDIzOSwgMjI0LCAwLjAzKSIvPjxwYXRoIGQ9Ik0yIDE4YzkuOTQgMCAxOCA4LjA2IDE4IDE4cy04LjA2IDE4LTE4IDE4djRjMTIuMTUgMCAyMi05Ljg1IDIyLTIyUzE0LjE1IDE0IDIgMTR2NHoiIGZpbGw9InJnYmEoMjQ1LCAyMzksIDIyNCwgMC4wMykiLz48L2c+PC9zdmc+')] opacity-10" />
        <div className="absolute bottom-0 right-0 w-full h-40 bg-gradient-to-t from-[#5E3920] to-transparent" />
        
        {/* Obsah sekce */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-10"
            initial="hidden"
            animate={isVisible.menu ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.span 
              className="inline-block py-1 px-4 bg-[#F5EFE0]/10 text-[#F5EFE0] rounded-full text-sm font-accent tracking-wider mb-4"
              variants={fadeInUp}
            >
              NAŠE MENU
            </motion.span>
            
            <motion.h2 
              className="text-4xl font-bold text-[#F5EFE0] mb-4"
              variants={fadeInUp}
            >
              Gastronomické <span className="text-[#A87B4D]">dobrodružství</span>
            </motion.h2>
            
            <motion.p 
              className="text-[#F5EFE0]/70 mx-auto max-w-2xl text-lg"
              variants={fadeInUp}
            >
              Vyberte si z naší nabídky pečlivě připravených jídel a nápojů
            </motion.p>
          </motion.div>
          
          {/* Kategorie menu */}
<motion.div 
  className="flex flex-wrap justify-center gap-2 mb-8"
  initial="hidden"
  animate={isVisible.menu ? "visible" : "hidden"}
  variants={staggerContainer}
>
  {[
    { id: "predkrmy", icon: <Salad size={16} />, name: "Předkrmy" },
    { id: "hlavni", icon: <UtensilsCrossed size={16} />, name: "Hlavní jídla" },
    { id: "dezerty", icon: <Pizza size={16} />, name: "Dezerty" },
    { id: "kavy", icon: <Coffee size={16} />, name: "Káva" },
    { id: "teple", icon: <AlignJustify size={16} />, name: "Teplé nápoje" },
    { id: "nealko", icon: <Wine size={16} />, name: "Nealkoholícké nápoje" },
    { id: "alko", icon: <Beer size={16} />, name: "Alkoholické nápoje" }
  ].map(category => (
    <motion.button 
      key={category.id}
      className={`py-2 px-4 rounded-full text-sm font-bold flex items-center gap-2 transition-all ${
        activeCategory === category.id 
          ? 'bg-[#A87B4D] text-[#F5EFE0] shadow-md' 
          : 'bg-[#F5EFE0]/10 text-[#F5EFE0]/80 hover:bg-[#F5EFE0]/20'
      }`}
      onClick={() => setActiveCategory(category.id)}
      variants={fadeIn}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {category.icon}
      {category.name}
    </motion.button>
  ))}
</motion.div>
          
          {/* Menu položky */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            animate={isVisible.menu ? "visible" : "hidden"}
            variants={staggerContainer}
            layout
          >
            {menuItems[activeCategory].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-[#F5EFE0] rounded-xl p-4 shadow-lg relative overflow-hidden"
                variants={fadeIn}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                layout
              >
                <div className="flex justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-[#5E3920] text-lg">{item.name}</h4>
                      {item.isPopular && (
                        <span className="bg-[#A87B4D]/10 text-[#A87B4D] text-xs font-bold py-1 px-2 rounded-full">
                          Populární
                        </span>
                      )}
                      {item.isVegetarian && (
                        <span className="bg-[#5E3920]/10 text-[#5E3920] text-xs py-1 px-2 rounded-full flex items-center gap-1">
                          <LucideVegan size={12} />
                          Vegetariánské
                        </span>
                      )}
                    </div>
                    <p className="text-[#5E3920]/70 text-sm mt-1">{item.description}</p>
                  </div>
                  <div className="font-bold text-[#A87B4D] whitespace-nowrap">
                    {item.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Poznámka k menu */}
          <motion.div 
            className="mt-10 bg-[#F5EFE0]/5 backdrop-blur-sm p-4 rounded-lg border border-[#F5EFE0]/10 flex items-start gap-3"
            initial={{ opacity: 0 }}
            animate={isVisible.menu ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Info size={20} className="text-[#F5EFE0] shrink-0 mt-0.5" />
            <div className="text-[#F5EFE0]/80 text-sm">
              <p>Informace o obsažených alergenech poskytne na vyžádání obsluha. Váha masa je uvedena v syrovém stavu.</p>
              <p className="mt-1">Ceny zahrnují DPH. Poloviční porce účtujeme na 70% ceny.</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Recenze a reference */}
      <section 
        id="testimonials" 
        ref={testimonialsRef}
        className="py-24 bg-[#F5EFE0] relative overflow-hidden"
      >
        <div className="absolute -right-24 top-1/3 w-48 h-48 rounded-full bg-[#A87B4D]/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 w-64 h-64 rounded-full bg-[#5E3920]/5 blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={isVisible.testimonials ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.span 
              className="inline-block py-1 px-4 bg-[#5E3920]/10 text-[#5E3920] rounded-full text-sm font-accent tracking-wider mb-4"
              variants={fadeInUp}
            >
              RECENZE
            </motion.span>
            
            <motion.h2 
              className="text-4xl font-bold text-[#5E3920] mb-4"
              variants={fadeInUp}
            >
              Co říkají naši <span className="text-[#A87B4D]">hosté</span>
            </motion.h2>
            
            <motion.p 
              className="text-[#5E3920]/70 mx-auto max-w-2xl text-lg"
              variants={fadeInUp}
            >
              Jsme vděční za každou zpětnou vazbu, která nám pomáhá se zlepšovat
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            animate={isVisible.testimonials ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {[
              {
                name: "Zuzana Novotna",
                rating: 5,
                text: "Výborná nabídka jídel - netradiční, pestrá a chutná. Příjemné posezení na terase, milá obsluha a fajn atmosféra.",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961"
              },
              {
                name: "Lucie Zázvorková",
                rating: 5,
                text: "Máme to zde moc rádi. Příjemné prostředí s venkovní terasou a dobré jídlo nás vždy znovu přiláká. Vyplatí se sem zajet i když nejdete do skal.",
                image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974"
              },
              {
                name: "Kosuke Shingobei",
                rating: 5,
                text: "Poprvé jsem toto krásné místo navštívil před 12 lety a od té doby se stále vracím. Úžasný rodinný podnik,skvělá kuchyně,mega zásobený krámek nejen s horolezeckou výbavou,super ubytování prosťě Vše skvělé. Vřele doporučuji v jakémkoliv ročním období.",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976"
              }
            ].map((review, i) => (
              <motion.div 
                key={i}
                className="bg-white rounded-xl p-6 shadow-lg relative"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(168, 123, 77, 0.25)" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  
                  <div>
                    <h5 className="font-bold text-[#5E3920]">{review.name}</h5>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          fill={i < review.rating ? "#A87B4D" : "transparent"} 
                          color={i < review.rating ? "#A87B4D" : "#A87B4D"} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[#5E3920]/80 text-sm italic">"{review.text}"</p>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-[#A87B4D]/10 blur-xl" />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={isVisible.testimonials ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 py-2 px-4 bg-[#5E3920]/5 rounded-full text-[#5E3920]"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} size={16} fill="#A87B4D" color="#A87B4D" />
                ))}
              </div>
              <span className="font-bold">4.7 / 5.0</span>
              <span>průměrné hodnocení od našich hostů</span>
            </motion.div>
          </motion.div>
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
            Rezervujte si svůj stůl ještě dnes
          </h2>
          <p className="text-[#F5EFE0]/80 mx-auto max-w-2xl text-lg mb-8">
            Přijďte zažít výjimečnou gastronomii v Refugiu. Těšíme se na vaši návštěvu!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a 
              href="tel:+420123456789"
              className="py-3 px-6 bg-[#5E3920] text-[#F5EFE0] rounded-lg shadow-lg text-lg font-bold flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={18} />
              <span>+420 702 017 774</span>
            </motion.a>
            
            <motion.button 
              className="py-3 px-6 bg-[#F5EFE0] text-[#5E3920] rounded-lg shadow-lg text-lg font-bold flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Users size={18} />
              <span>refugio@seznam.cz</span>
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}