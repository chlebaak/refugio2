import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Facebook, 
  ArrowUpRight, 
  ChevronRight, 
  Mountain, 
  Coffee,
  Send,
  Phone,
  Mail,
  Clock,
  MapPin,
  ArrowRight,
  Heart,
  ExternalLink
} from 'lucide-react';
import Logo from '../assets/logorefugio2.png';


const Footer = ({ isVisible = true }) => {
  const [hoverLink, setHoverLink] = useState(null);

  
  const footerSections = [
    {
      title: "Navigace",
      links: [
        { name: "Home", url: "/" },
        { name: "Restaurace", url: "/restaurace" },
        { name: "Ubytování", url: "/ubytovani" },
        { name: "Lezecký krámek", url: "/shop" }
      ]
    },
    {
      title: "Objevuj",
      links: [
        { name: "Rezervace", url: "/rezervace" },
        { name: "Lezecké oblasti", url: "/lezecke-oblasti" },
        { name: "Fotogalerie", url: "/galerie" },
        { name: "Náš příběh", url: "/o-nas" }
      ]
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };



  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#40281a] to-[#2D1D14]">
      

      

      <div className="container mx-auto max-w-6xl px-6 py-16 relative z-10 mt-15">
        {/* Main footer section */}
        <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-12 gap-10 mb-16">
          {/* Brand and info */}
          <motion.div
            className="md:col-span-3 lg:col-span-4"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
           {/* Logo with image from assets */}
<motion.div 
  className="mb-8 group"
  variants={fadeInUp}
>
  <div className="flex items-center gap-4">
    <div className="relative">
      <img 
        src={Logo} 
        alt="Refugio Logo" 
        className="w-14 h-14 object-contain"
      />
    </div>
    
    <div>
      <h3 className="font-bold text-2xl text-[#F5EFE0]">Refugio</h3>
      <div className="h-px w-full bg-gradient-to-r from-[#A87B4D] to-transparent opacity-60 my-1.5"></div>
      <span className="text-[#F5EFE0]/60 text-xs tracking-widest uppercase">
        Restaurant & Lodge
      </span>
    </div>
  </div>
</motion.div>

            <motion.p 
              className="text-[#F5EFE0]/70 mb-6 leading-relaxed"
              variants={fadeInUp}
            >
              Na úpatí skal, kde se snoubí výborné jídlo s vášní pro horolezectví. 
              Útočiště pro dobrodruhy, místo pro setkávání a sdílení příběhů z hor.
            </motion.p>

            {/* Contact information with icons */}
            <motion.div 
              className="space-y-4 mb-8"
              variants={fadeInUp}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F5EFE0]/5 flex items-center justify-center text-[#A87B4D] flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="text-[#F5EFE0]/70">
                  <p>Tisá, 403 36</p>
                  <p>Tisá 473, Refugio s.r.o.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F5EFE0]/5 flex items-center justify-center text-[#A87B4D] flex-shrink-0">
                  <Phone size={18} />
                </div>
                <p className="text-[#F5EFE0]/70">+420 702 017 774</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F5EFE0]/5 flex items-center justify-center text-[#A87B4D] flex-shrink-0">
                  <Mail size={18} />
                </div>
                <p className="text-[#F5EFE0]/70">refugio@seznam.cz</p>
              </div>
            </motion.div>
            
            {/* Social media with hover effects */}
            <motion.div 
              className="flex gap-3"
              variants={fadeInUp}
            >
              <motion.a 
                href="#"
                className="group flex items-center justify-center w-11 h-11 rounded-lg bg-[#F5EFE0]/5 hover:bg-[#A87B4D] transition-colors relative overflow-hidden"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#C13584] via-[#8A3AB9] to-[#FCAF45] opacity-0 group-hover:opacity-100 transition-opacity" />
                <Instagram size={18} className="text-[#F5EFE0]/70 group-hover:text-[#F5EFE0] relative z-10" />
              </motion.a>
              
              <motion.a 
                href="#"
                className="group flex items-center justify-center w-11 h-11 rounded-lg bg-[#F5EFE0]/5 hover:bg-[#A87B4D] transition-colors relative overflow-hidden"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Facebook"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#3B5998] to-[#4E69A2] opacity-0 group-hover:opacity-100 transition-opacity" />
                <Facebook size={18} className="text-[#F5EFE0]/70 group-hover:text-[#F5EFE0] relative z-10" />
              </motion.a>
              
              
            </motion.div>
          </motion.div>
          
          {/* Divider for mobile only */}
          <div className="border-b border-[#F5EFE0]/10 md:hidden my-4"></div>
          
          {/* Navigation links sections */}
          <div className="md:col-span-4 lg:col-span-5 grid grid-cols-2 gap-8">
            {footerSections.map((section, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={staggerContainer}
              >
                <motion.h4 
                  className="text-lg font-bold text-[#F5EFE0] mb-6 relative pl-3"
                  variants={fadeInUp}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#A87B4D] rounded-full"></div>
                  {section.title}
                </motion.h4>
                
                <ul className="space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <motion.li 
                      key={linkIdx}
                      variants={fadeInUp}
                      onMouseEnter={() => setHoverLink(`${idx}-${linkIdx}`)}
                      onMouseLeave={() => setHoverLink(null)}
                    >
                      <Link to={link.url}>
                        <div className="flex items-center group">
                          <div className="w-2 h-2 rounded-full bg-[#A87B4D]/30 group-hover:bg-[#A87B4D] transition-colors mr-3"></div>
                          <span className="text-[#F5EFE0]/60 group-hover:text-[#F5EFE0] transition-all">
                            {link.name}
                          </span>
                          <motion.div
                            animate={{
                              x: hoverLink === `${idx}-${linkIdx}` ? 5 : 0,
                              opacity: hoverLink === `${idx}-${linkIdx}` ? 1 : 0
                            }}
                            transition={{ duration: 0.2 }}
                            className="ml-2"
                          >
                            <ArrowRight size={14} className="text-[#A87B4D]" />
                          </motion.div>
                        </div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          
          {/* Opening hours with stylized clock */}
          <motion.div
            className="md:col-span-3 lg:col-span-3"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h4 
              className="text-lg font-bold text-[#F5EFE0] mb-6 relative pl-3"
              variants={fadeInUp}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#A87B4D] rounded-full"></div>
              Otevírací doba
            </motion.h4>
            
            <motion.div 
              className="relative bg-[#F5EFE0]/5 backdrop-blur-sm rounded-xl p-5 border border-[#F5EFE0]/10"
              variants={fadeInUp}
            >
              {/* Animated clock element */}
              <div className="absolute -top-5 -right-3 w-12 h-12 rounded-full bg-[#2D1D14] border-4 border-[#A87B4D]/30 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                  <Clock size={18} className="text-[#F5EFE0]/70" />
                </motion.div>
              </div>
              
              <div className="text-[#F5EFE0]/80 space-y-3">
                <div className="flex justify-between items-center">
                  <span>Po, St, Čt, Ne</span>
                  <span className="text-[#A87B4D] font-medium">9:00 - 21:00</span>
                </div>
                <div className="h-px w-full bg-[#F5EFE0]/10"></div>
                <div className="flex justify-between items-center">
                  <span>Pá, So</span>
                  <span className="text-[#A87B4D] font-medium">8:00 - 22:00</span>
                </div>
                <div className="h-px w-full bg-[#F5EFE0]/10"></div>
                <div className="flex justify-between items-center">
                  <span>Úterý</span>
                  <span className="text-[#A87B4D] font-medium">Zavřeno</span>
                </div>
              </div>
              
              {/* Quick contact section */}
              <div className="mt-6 pt-4 border-t border-[#F5EFE0]/10">
                <div className="flex justify-between items-center">
                  <span className="text-[#F5EFE0]/60 text-sm">Pro rezervaci:</span>
                  
                </div>
                <div className="mt-2 flex gap-2">
                  <motion.a
                    href="tel:+420123456789"
                    className="flex-1 flex items-center justify-center gap-1 py-2 bg-[#F5EFE0]/5 hover:bg-[#F5EFE0]/10 rounded-lg text-[#F5EFE0]/80 transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    <Phone size={14} />
                    <span className="text-sm">Volat</span>
                  </motion.a>
                  <motion.a
                    href="mailto:info@refugio.cz"
                    className="flex-1 flex items-center justify-center gap-1 py-2 bg-[#F5EFE0]/5 hover:bg-[#F5EFE0]/10 rounded-lg text-[#F5EFE0]/80 transition-colors"
                    whileHover={{ y: -2 }}
                  >
                    <Mail size={14} />
                    <span className="text-sm">Email</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Bottom footer with copyright and links */}
        <div className="pt-8 border-t border-[#F5EFE0]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-1.5">
                <div className="w-8 h-8 rounded-md bg-[#A87B4D]/20 flex items-center justify-center">
                  <span className="font-serif text-sm text-[#A87B4D] font-bold">R</span>
                </div>
                <span className="text-[#F5EFE0]/60 text-sm tracking-wide">REFUGIO</span>
              </Link>
            </div>
            
            
            
            {/* Copyright */}
            <div className="text-[#F5EFE0]/40 text-sm flex items-center gap-2">
              <span>&copy; {new Date().getFullYear()} Refugio</span>
              <span className="text-[#A87B4D]">&bull;</span>
              <span className="flex items-center gap-1 text-xs">
                Vytvořeno s 
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <Heart size={12} className="text-[#A87B4D]" />
                </motion.div>
                v Čechách
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Parallax mountain silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden z-0">
        <motion.div
          initial={{ y: 20 }}
          animate={isVisible ? { y: 0 } : { y: 20 }}
          transition={{ duration: 1 }}
        >
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full">
            <path d="M0,120 L60,100 L140,115 L200,90 L260,110 L320,90 L380,105 L440,85 L500,100 L560,80 L620,95 L680,70 L740,85 L800,60 L860,80 L920,60 L980,75 L1040,55 L1100,70 L1160,50 L1200,65 L1200,120 Z" fill="#1A100A" opacity="0.8" />
          </svg>
        </motion.div>
      </div>
      
      {/* Decorative background patterns */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        {/* Mountain contour pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='70' height='70' viewBox='0 0 70 70' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,70 L17.5,35 L35,52.5 L52.5,17.5 L70,70 L0,70 Z' stroke='%23F5EFE0' fill='none' stroke-width='0.5' stroke-opacity='0.5' /%3E%3C/svg%3E")`,
          backgroundSize: '70px 70px'
        }}/>
      </div>
      
      {/* Light effects */}
      <div className="absolute top-1/4 -left-24 w-72 h-72 rounded-full bg-[#A87B4D]/5 blur-[100px]"></div>
      <div className="absolute bottom-1/3 -right-24 w-72 h-72 rounded-full bg-[#A87B4D]/5 blur-[100px]"></div>
    </footer>
  );
};

export default Footer;