import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Leaf, Menu, X, ArrowRight, MapPin, Clock, Phone, Mail, Instagram, Sparkle, Star, ExternalLink
} from "lucide-react";

// Import modules

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTransformation, setActiveTransformation] = useState(0);

  const transformations = [
    {
      title: "Acne Medical Therapy",
      description: "Advanced clinical treatment designed to clear stubborn active inflammatory acne, eliminate redness, and balance natural sebum production to restore a healthy, glowing complexion.",
      image: "/transformations/acne_before_after.jpg"
    },
    {
      title: "Hyperpigmentation & Melasma",
      description: "Custom enzymatic and antioxidant resurfacing therapy designed to fade deep dermal sunspots, pregnancy melasma, and irregular skin patches, resulting in an even, bright, and radiant tone.",
      image: "/transformations/pigmentation_before_after.jpg"
    },
    {
      title: "Plumping & Lip Contouring",
      description: "Precision dermal hydration to sculpt defined borders, correct shape asymmetry, and restore natural youthful volume, completely tailored to preserve your natural facial harmony.",
      image: "/transformations/lips_before_after.jpg"
    },
    {
      title: "Pitted Acne Scar Resurfacing",
      description: "Fractional CO2 resurfacing partnered with advanced microneedling to stimulate deep collagen rebuilding, drastically flattening the depth of acne scars to reveal a polished skin texture.",
      image: "/transformations/scars_before_after.jpg"
    }
  ];

  const doctorImages = [
    "/doctor/charu 1.png",
    "/doctor/charu 2.png",
    "/doctor/charu 3.png"
  ];

  const googleReviews = [
    {
      name: "Sunaina S.",
      concern: "Acne Medical Therapy",
      review: "Dr. Charu is absolutely amazing! She cured my active acne in exactly 8 weeks. The customised clinical facial and peel therapy was highly effective. My skin barrier feels completely renewed now and I can finally walk out confidently without heavy makeup!",
      rating: 5,
      role: "Verified Patient"
    },
    {
      name: "Priyanka K.",
      concern: "Plumping & Lip Contouring",
      review: "Renew aesthetic clinic is definitely the best in Gandhi Nagar. I went for lip contouring & hydration. Dr. Charu took so much care, shaped them perfectly and natural-looking. No overfilled fake look. Highly recommend her clinic!",
      rating: 5,
      role: "Verified Patient"
    },
    {
      name: "Sahil G.",
      concern: "Acne Scar Resurfacing",
      review: "I had deep pitting acne scars for years. Did fractional CO2 laser sessions here, and the skin texture has changed completely! Over 80% marks are gone and skin feels super smooth now. Thank you Dr. Charu!",
      rating: 5,
      role: "Verified Patient"
    },
    {
      name: "Shreya M.",
      concern: "Hyperpigmentation Care",
      review: "Highly recommend for stubborn hyperpigmentation. I tried so many dermatologists but the specific peel combined with clinical antioxidant serums here worked like magic. My skin tone is perfectly uniform and glowing today.",
      rating: 5,
      role: "Verified Patient"
    },
    {
      name: "Meenakshi T.",
      concern: "Dermal Health Glow",
      review: "Extremely professional clinical environment. Dr. Charu and her staff treat patients with so much respect. The medical facial is extremely soothing, and the clinical advice is very genuine.",
      rating: 5,
      role: "Verified Patient"
    },
    {
      name: "Rishi S.",
      concern: "Dermal Rejuvenation",
      review: "Outstanding treatment for skin health. The precision laser and hydration therapies are world-class. Dr. Charu is exceptionally knowledgeable and explains everything with passion and patience.",
      rating: 5,
      role: "Verified Patient"
    }
  ];

  // Auto-fading carousel effect for doctor images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % doctorImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Keep track of scroll for header visual weight
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6F2] relative transparent-grid overflow-hidden selection:bg-brand-300 selection:text-brand-900">
      
      {/* HEADER NAVBAR */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#FAF6F2]/90 backdrop-blur-md py-4 border-b border-brand-200/50 shadow-sm" 
            : "bg-transparent py-6"
        }`}
        id="renewtheaestheticclinic-navigation-header"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => scrollToSection("hero-section")}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            {/* Custom elegant horizontal winged goddess icon matching the reference exactly */}
            <div className="w-12 h-9 flex-shrink-0 text-[#352013] group-hover:scale-105 transition-transform duration-300 ease-out">
              <svg 
                viewBox="0 0 160 120" 
                className="w-full h-full"
              >
                {/* Hands holding the sun/sphere */}
                <circle cx="80" cy="10" r="4" fill="currentColor" />
                
                {/* Sleek silhouette body */}
                <path 
                  d="M80,22 C78,25 74,32 72,38 C70,44 74,46 75,49 C77,51 77,54 76,60 C75,66 72,72 71,79 C70,86 71,92 73,102 L80,114 L87,102 C89,92 90,86 89,79 C88,72 85,66 84,60 C83,54 83,51 85,49 C86,46 90,44 88,38 C86,32 82,25 80,22 Z" 
                  fill="currentColor" 
                />
                
                {/* Arms raised high, curved and meeting at the top sphere */}
                <path d="M72,38 C67,31 71,18 78,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M88,38 C93,31 89,18 82,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                
                {/* Head (Ocular disk/oval centered) */}
                <ellipse cx="80" cy="29" rx="3.5" ry="5" fill="currentColor" />

                {/* Left wing feather lines */}
                <path d="M72,40 C60,25 40,20 10,25 C35,33 55,40 71,45" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
                <path d="M73,44 C58,31 36,28 12,32 C33,40 52,46 71,50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
                <path d="M73,48 C55,38 34,36 15,39 C31,47 48,51 70,54" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.9" />
                <path d="M74,52 C52,45 32,44 18,46 C30,52 45,56 70,58" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.8" />
                <path d="M74,56 C50,51 30,52 22,54 C31,58 43,61 69,62" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.7" />
                <path d="M75,60 C52,58 35,60 28,62 C34,65 44,67 68,66" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
                <path d="M75,64 C55,64 40,67 34,69 C39,71 47,73 67,70" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" />
                <path d="M75,68 C58,70 45,74 41,76 C44,77 50,78 66,74" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" />

                {/* Right wing feather lines */}
                <path d="M88,40 C100,25 120,20 150,25 C125,33 105,40 89,45" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
                <path d="M87,44 C102,31 124,28 148,32 C127,40 108,46 89,50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
                <path d="M87,48 C105,38 126,36 145,39 C129,47 112,51 90,54" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.9" />
                <path d="M86,52 C108,45 128,44 142,46 C130,52 115,56 90,58" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.8" />
                <path d="M86,56 C110,51 130,52 138,54 C129,58 117,61 91,62" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.7" />
                <path d="M85,60 C108,58 125,60 132,62 C126,65 116,67 92,66" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
                <path d="M85,64 C105,64 120,67 126,69 C121,71 113,73 93,70" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" />
                <path d="M85,68 C102,70 115,74 119,76 C116,77 110,78 94,74" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.4" />
              </svg>
            </div>
            
            <span style={{ fontFamily: '"Cormorant Garamond", "Playfair Display", serif' }} className="text-lg sm:text-2xl font-semibold tracking-wide text-[#352013]">
              Renew the Aesthetic Clinic J&K
            </span>
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-brand-900/80">
            <button 
              onClick={() => scrollToSection("hero-section")}
              className="hover:text-[#352013] transition-colors cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-brand-900 hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("doctor-section")}
              className="hover:text-[#352013] transition-colors cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-brand-900 hover:after:w-full after:transition-all after:duration-300"
            >
              About Our Founder
            </button>
            <button 
              onClick={() => scrollToSection("transformations-section")}
              className="hover:text-[#352013] transition-colors cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-brand-900 hover:after:w-full after:transition-all after:duration-300"
            >
              Transformations
            </button>
            <button 
              onClick={() => scrollToSection("reviews-section")}
              className="hover:text-[#352013] transition-colors cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-brand-900 hover:after:w-full after:transition-all after:duration-300"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection("footer-section")}
              className="hover:text-[#352013] transition-colors cursor-pointer relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-brand-900 hover:after:w-full after:transition-all after:duration-300"
            >
              Inquiries
            </button>
            <a 
              href="tel:8899962666"
              className="flex items-center gap-1.5 hover:text-[#352013] transition-colors font-mono font-medium text-brand-900/90 text-xs px-3 py-1.5 rounded-full bg-brand-100 border border-brand-200"
            >
              <Phone className="w-3.5 h-3.5 text-brand-700" />
              <span>8899962666</span>
            </a>
            <a 
              href="https://www.instagram.com/renewtheaestheticclinic/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center hover:scale-105 active:scale-95 transition-all text-brand-900/90 p-2 rounded-full bg-brand-100 border border-brand-200 hover:bg-pink-50/50"
              title="Follow our Instagram"
            >
              <Instagram className="w-4 h-4 text-pink-700" />
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block ml-8">
            <a
              href="https://wa.me/+918899962666"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#14100E] text-[#14100E] bg-transparent hover:bg-[#14100E] hover:text-white px-4.5 py-2 rounded-full text-[10px] font-medium tracking-widest uppercase transition-all duration-300 cursor-pointer text-center hover:-translate-y-0.5 active:translate-y-0"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-brand-100 text-[#352013] transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* MOBILE NAV OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-0 bg-[#FAF6F2] border-b border-brand-200 z-30 pt-24 pb-8 px-6 shadow-xl flex flex-col space-y-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection("hero-section");
                }}
                className="text-left font-serif text-xl font-medium py-2.5 text-brand-900 border-b border-brand-100"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection("doctor-section");
                }}
                className="text-left font-serif text-xl font-medium py-2.5 text-brand-900 border-b border-brand-100"
              >
                About Our Founder
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection("transformations-section");
                }}
                className="text-left font-serif text-xl font-medium py-2.5 text-brand-900 border-b border-brand-100"
              >
                Transformations
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection("reviews-section");
                }}
                className="text-left font-serif text-xl font-medium py-2.5 text-brand-900 border-b border-brand-100"
              >
                Reviews
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection("footer-section");
                }}
                className="text-left font-serif text-xl font-medium py-2.5 text-brand-900 border-b border-brand-100"
              >
                Inquiries
              </button>
              <a
                href="tel:8899962666"
                className="flex items-center gap-2.5 text-left font-mono font-medium text-lg py-2.5 text-brand-950 border-b border-brand-100"
              >
                <Phone className="w-5 h-5 text-brand-700" />
                <span>8899962666</span>
              </a>
              <a
                href="https://www.instagram.com/renewtheaestheticclinic/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2.5 text-left font-medium text-lg py-2.5 text-brand-950 border-b border-brand-100"
              >
                <Instagram className="w-5 h-5 text-pink-700" />
                <span>Instagram Feed</span>
              </a>
            </div>

            <a
              href="https://wa.me/+918899962666"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full py-4 bg-[#14100E] text-brand-50 text-center text-xs font-semibold tracking-wider uppercase rounded-full"
            >
              Book Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <div className="relative overflow-hidden w-full min-h-screen bg-[#FAF6F2]">
        
        {/* Full-width Background Image styled specifically to blend smoothly */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <img 
            src="/landing/renew_landing_bg.png" 
            alt="Luminous skin care aesthetic with delicate shadows" 
            className="w-full h-full object-cover object-[center_right] md:object-right opacity-35 md:opacity-45"
            referrerPolicy="no-referrer"
          />
          {/* Multi-directional gradient overlays to blend the image seamlessly into the page background #FAF6F2 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6F2] via-[#FAF6F2]/95 md:via-[#FAF6F2]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F2] via-transparent to-[#FAF6F2]/50" />
          <div className="absolute inset-0 bg-[#FAF6F2]/5 backdrop-blur-[1px]" />
        </div>

        <main id="hero-section" className="relative z-10 min-h-screen pt-40 md:pt-48 pb-20 px-6 sm:px-8 max-w-7xl mx-auto flex flex-col justify-center">
          
          {/* Subtle, abstract luxurious background elements on left to frame the layout asymmetry */}
          <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 w-full max-w-xl aspect-square pointer-events-none opacity-20 hidden md:block">
            {/* A pristine botanical leaf wireframe sketch in brown matching structural layouts */}
            <svg className="w-full h-full text-brand-400" fill="none" viewBox="0 0 100 100" stroke="currentColor">
              <path strokeWidth="0.5" strokeDasharray="1 3" d="M10,90 Q30,40 85,15" />
              <path strokeWidth="0.5" d="M85,15 Q75,35 60,45" />
              <path strokeWidth="0.5" d="M85,15 Q65,25 50,30" />
              <path strokeWidth="0.5" d="M60,45 Q40,65 10,90" />
              <path strokeWidth="0.5" d="M50,30 Q30,55 10,90" />
              {/* Elegant sub-veins */}
              <path strokeWidth="0.35" strokeDasharray="1 1" d="M60,45 Q70,48 80,42" />
              <path strokeWidth="0.35" strokeDasharray="1 1" d="M50,30 Q60,33 70,27" />
              <path strokeWidth="0.35" strokeDasharray="1 1" d="M40,55 Q50,58 60,52" />
              <circle cx="85" cy="15" r="1.5" fill="currentColor" opacity="0.6"/>
            </svg>
          </div>

          {/* Dynamic elements in the background */}
          <div className="absolute left-[20%] top-[30%] text-brand-300 opacity-30 animate-pulse pointer-events-none">
            <Sparkle className="w-4 h-4" />
          </div>
          <div className="absolute left-[35%] bottom-[25%] text-brand-300 opacity-40 animate-bounce pointer-events-none duration-1000">
            <Sparkle className="w-5 h-5" />
          </div>

          {/* The Core 12-Column Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
            
            {/* Col 1-5 Left: Beautiful, expansive whitespace matching high-end design layouts */}
            <div className="hidden md:block md:col-span-1" />
            
            {/* Col 2-5 Left Subtitle features (faded, premium, optional secondary layout block) */}
            <div className="hidden md:flex md:col-span-4 flex-col justify-center h-full pr-12 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="space-y-4 border-l-2 border-brand-300 pl-6"
              >
                <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#5E392B] font-semibold">
                  <Sparkle className="w-3.5 h-3.5" /> Clinical Dermatology
                </div>
                <p className="text-[#5A453A] text-[13px] leading-relaxed">
                  Led by clinical expertise to deliver state-of-the-art dermatological treatments—from advanced skin rejuvenation and laser therapies to custom medical anti-aging solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex items-center space-x-4 text-xs font-mono text-brand-600"
              >
                <span>Jammu, J&K</span>
                <span className="w-1 h-1 rounded-full bg-brand-300" />
                <span>Premium Aesthetics</span>
              </motion.div>
            </div>

            {/* Col 6-12 Right Side: High-Fashion, Typographic Hero statements */}
            <div className="md:col-span-7 flex flex-col justify-center z-10">
              
              {/* Visual Header Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-2.5 mb-5 md:hidden"
              >
                <span className="h-[1px] w-6 bg-brand-600" />
                <span className="text-xs uppercase tracking-widest font-semibold text-brand-700">
                  Luminous Skin Sciences
                </span>
              </motion.div>

              {/* MAIN MASSIVE SERIF HEADING */}
              {/* Aligned left, but container occupies the right 7-column layout */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif' }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-medium tracking-tight text-[#352013] leading-[1.08] text-left md:text-left"
              >
                Reveal Your Natural<br />
                Glow With Expert<br />
                Skin Care
              </motion.h1>

              {/* SUBTITLE PARAGRAPH */}
              {/* Sits right-aligned within columns 8-12 area, here offset beautifully to the right */}
              <div className="mt-8 md:mt-12 md:pl-[35%] flex flex-col items-start md:items-start space-y-8">
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="text-[#5A453A] text-sm md:text-base leading-relaxed text-left font-sans font-light tracking-wide"
                >
                  Personalized Skin Treatments Designed To Refresh, Rejuvenate, And Restore Healthy, Radiant Skin.
                </motion.p>

                {/* EXPLORE TREATMENTS CTA BUTTON */}
                {/* Pill capsule styled button with luxury gradient glow and hover scaling */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="relative"
                >
                  <a
                    href="https://wa.me/+918899962666"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#7A3F1F] via-[#653114] to-[#4F250B] text-brand-50 hover:text-white rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-500 ease-out shadow-xl shadow-brand-900/15 hover:shadow-brand-900/25 hover:-translate-y-1 hover:scale-[1.03] active:scale-[0.98] border border-brand-800/10 cursor-pointer overflow-hidden"
                    style={{ padding: '16px 36px' }}
                  >
                    {/* Subtle inner shiny glow element */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    Book Consultation
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </a>
                  
                  {/* Golden-brown backup backglow halo */}
                  <div className="absolute -inset-1 rounded-full bg-brand-500/10 blur-md -z-10 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </div>

            </div>
          </div>
        </main>
      </div>

      {/* MEET DR. CHARU GUPTA SECTION */}
      <section id="doctor-section" className="py-24 px-6 md:px-8 bg-white border-t border-brand-200 relative z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Biography & Meet Dr. Gupta */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7A3F1F] font-sans block">
                  Clinic Founder & Owner
                </span>
                
                <h2 
                  style={{ fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif' }} 
                  className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#352013] leading-tight"
                >
                  Hi, I'm Dr. Charu Gupta.
                </h2>
                
                {/* Accent mini divider wire */}
                <div className="w-12 h-[1.5px] bg-[#7A3F1F]" />
              </div>

              {/* Shortened elegant biography */}
              <div className="text-brand-800 text-sm md:text-base leading-relaxed space-y-5 font-sans font-light">
                <p>
                  I'm a medical aesthetics practitioner passionate about helping people look and feel like the most confident version of themselves. My approach is rooted in the belief that treatments should enhance your natural beauty, not change who you are.
                </p>
                <p>
                  With a strong clinical foundation and an eye for facial harmony, I specialize in creating personalized treatment plans that deliver subtle, balanced, and natural-looking results. Through safe, evidence-based care, my goal is to make your aesthetic journey one of absolute confidence and self-care.
                </p>
              </div>

              {/* Action buttons or custom call-outs */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href="tel:+918899962666"
                  className="px-8 py-3.5 bg-gradient-to-r from-[#7A3F1F] to-[#4F250B] text-white hover:opacity-95 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md text-center inline-block"
                >
                  Call: 8899962666
                </a>
                <a
                  href="https://www.instagram.com/renewtheaestheticclinic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-brand-100 hover:bg-brand-200 text-brand-900 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border border-brand-300 flex items-center justify-center gap-2"
                >
                  <Instagram className="w-4 h-4 text-pink-700 animate-pulse" />
                  <span>Follow on Instagram</span>
                </a>
                <div className="flex items-center justify-center sm:justify-start gap-2.5 text-[11px] text-brand-600 font-medium py-2">
                  <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                  <span>Accepting new patients</span>
                </div>
              </div>
            </div>

            {/* Right Column: Fading Photo Carousel */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-brand-200 bg-brand-100 group">
                
                {/* Elegant gold corner accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-brand-300 z-20 pointer-events-none opacity-80" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-brand-300 z-20 pointer-events-none opacity-80" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-brand-300 z-20 pointer-events-none opacity-80" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-brand-300 z-20 pointer-events-none opacity-80" />

                {/* Main fader carousel image */}
                <div className="w-full h-full relative overflow-hidden rounded-3xl">
                  <AnimatePresence mode="popLayout">
                    <motion.img
                      key={currentImageIndex}
                      src={doctorImages[currentImageIndex]}
                      alt="Dr. Charu Gupta"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.9, ease: "easeInOut" }}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[6000ms] ease-out scale-100 group-hover:scale-105"
                    />
                  </AnimatePresence>
                </div>

                {/* Dynamic Glassy Caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/70 backdrop-blur-md border border-white/20 p-4 rounded-2xl z-20 shadow-lg text-left">
                  <p className="text-[10px] font-bold uppercase text-brand-900 tracking-widest">DR. CHARU GUPTA</p>
                  <p className="text-xs text-brand-700 mt-0.5">Renewing Authenticity & Natural Charm</p>
                </div>

                {/* Side Carousel Buttons */}
                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={() => setCurrentImageIndex((prev) => (prev - 1 + doctorImages.length) % doctorImages.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/40 hover:bg-white/80 border border-white/20 flex items-center justify-center text-brand-950 backdrop-blur-sm shadow z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={() => setCurrentImageIndex((prev) => (prev + 1) % doctorImages.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/40 hover:bg-white/80 border border-white/20 flex items-center justify-center text-brand-950 backdrop-blur-sm shadow z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  ›
                </button>
              </div>

              {/* Progress Navigation Dots */}
              <div className="flex space-x-2.5 mt-5 z-20">
                {doctorImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex ? "w-6 bg-[#7A3F1F]" : "w-2 bg-brand-300 hover:bg-brand-400"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BEFORE AND AFTER TRANSFORMATIONS SECTION */}
      <section id="transformations-section" className="py-24 px-6 md:px-8 bg-[#FAF6F2] relative z-10 transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7A3F1F] font-sans block">
              Clinical Transformations
            </span>
            <h2 
              style={{ fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif' }} 
              className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#352013] leading-tight"
            >
              Before & After Gallery
            </h2>
            <div className="w-12 h-[1.5px] bg-[#7A3F1F] mx-auto mt-2" />
            <p className="text-[#5A453A] text-sm md:text-base leading-relaxed font-sans font-light">
              Explore authentic patient outcomes highlighting our specialized treatments. Our philosophy centers on restoring confidence and achieving natural, beautifully balanced skin.
            </p>
          </div>

          {/* Luxury Tab Selectors */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {transformations.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTransformation(idx)}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm border ${
                  idx === activeTransformation
                    ? "bg-gradient-to-r from-[#7A3F1F] to-[#4F250B] text-white border-transparent"
                    : "bg-white text-[#5A453A] border-brand-200 hover:bg-brand-50"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Main Comparison Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Premium Browser Mockup with the Before/After Visual */}
            <div className="lg:col-span-6 flex justify-center w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTransformation}
                  initial={{ opacity: 0, scale: 0.97, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97, y: -15 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full max-w-[520px] bg-white rounded-3xl overflow-hidden shadow-2xl border border-brand-200 relative p-4 pb-6"
                >
                  
                  {/* Safari/Browser header dots styled beautifully mapping attached pictures */}
                  <div className="flex items-center space-x-2 mb-4 px-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-pink-200 border border-pink-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-200 border border-yellow-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-200 border border-green-300" />
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#7A3F1F] ml-auto font-semibold">
                      Transformation
                    </span>
                  </div>

                  {/* Main Picture Frame */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-inner border border-brand-100 group bg-brand-50">
                    <img 
                      src={transformations[activeTransformation].image} 
                      alt={`${transformations[activeTransformation].title} Before and After results`}
                      className="w-full h-full object-cover select-none"
                      referrerPolicy="no-referrer"
                    />

                    {/* Left/Right pill highlights on images */}
                    <div className="absolute inset-x-4 bottom-4 flex justify-between pointer-events-none">
                      <span className="bg-white/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-900 border border-white/20 shadow">
                        Before ♡
                      </span>
                      <span className="bg-[#7A3F1F]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white border border-white/10 shadow animate-pulse">
                        After ♥
                      </span>
                    </div>
                  </div>

                  {/* Beautiful footer card mimicking the user's uploaded pictures perfectly */}
                  <div className="text-center mt-6 pt-4 border-t border-brand-100">
                    <h3 
                      style={{ fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif' }}
                      className="text-xl font-bold tracking-tight text-[#352013]"
                    >
                      Dr. Charu Gupta
                    </h3>
                    <p className="font-mono text-[10px] text-[#7A3F1F] mt-1 tracking-wide font-medium">
                      Contact: 8899962666 | 52/DC Gandhi Nagar, Jammu
                    </p>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right side: Case details card */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTransformation}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <span className="text-[10px] uppercase font-mono tracking-[0.2em] font-semibold text-[#7A3F1F] block">
                      Clinical Focus Review
                    </span>
                    <h3 
                      style={{ fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif' }}
                      className="text-3xl md:text-4xl font-semibold text-[#352013] tracking-tight"
                    >
                      {transformations[activeTransformation].title}
                    </h3>
                    <div className="w-12 h-[1px] bg-brand-300" />
                  </div>

                  <p className="text-[#5A453A] text-sm md:text-base font-light font-sans leading-relaxed">
                    {transformations[activeTransformation].description}
                  </p>

                  <div className="pt-4 border-t border-brand-200/60">
                    <a
                      href={`https://wa.me/+918899962666?text=Hi%20Dr.%20Gupta%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(transformations[activeTransformation].title)}%20treatment%20gallery.%20Can%20we%20schedule%20a%20consultation%3F`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#14100E] hover:bg-[#7A3F1F] text-white rounded-full text-xs font-semibold tracking-wider uppercase shadow-md transition-all duration-300 animate-fade-in"
                    >
                      <span>Inquire about this treatment</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* PATENT AND REVIEWS TESTIMONIALS SECTION */}
      <section id="reviews-section" className="py-24 px-6 md:px-8 bg-white border-t border-brand-100 relative z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          
          {/* Header & Google Stats Summary block */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
            <div className="max-w-2xl text-left space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#7A3F1F] font-sans block">
                Google Verified Testimonials
              </span>
              <h2 
                style={{ fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif' }} 
                className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#352013] leading-tight"
              >
                What Our Patients Experience
              </h2>
              <div className="w-12 h-[1.5px] bg-[#7A3F1F]" />
              <p className="text-[#5A453A] text-sm md:text-base leading-relaxed font-sans font-light">
                Discover honest, clinical reviews directly from patients treated by Dr. Charu Gupta in Jammu. We take immense pride in delivering safe, natural, and transformative skin care therapies.
              </p>
            </div>

            {/* Google Rating Highlights Widget */}
            <div className="bg-[#FAF6F2] border border-brand-200/60 p-6 rounded-2xl flex flex-col sm:flex-row items-center gap-6 shadow-sm min-w-[280px]">
              <div className="text-center sm:text-left">
                <span className="text-4xl font-extrabold text-[#352013] font-serif block tracking-tight">5.0</span>
                <span className="text-[10px] uppercase tracking-widest text-[#7A3F1F] font-bold block mt-1">Perfect Score</span>
              </div>
              <div className="h-[1px] w-full sm:h-12 sm:w-[1px] bg-brand-200" />
              <div className="space-y-1.5 flex flex-col items-center sm:items-start">
                <div className="flex text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <div className="text-xs text-[#5A453A] font-medium flex items-center gap-1.5 font-sans">
                  <span>Google Reviews</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-green-700 uppercase tracking-wider font-semibold">100% Genuine</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {googleReviews.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-[#FAF6F2]/30 hover:bg-[#FAF6F2]/60 border border-brand-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 relative group"
              >
                {/* Decorative absolute subtle quote icon or mark */}
                <span className="absolute top-6 right-8 text-[#7A3F1F]/5 text-6xl font-serif select-none pointer-events-none group-hover:text-[#7A3F1F]/10 transition-colors">
                  “
                </span>

                <div className="space-y-4">
                  {/* Rating Stars & Case Concern tag */}
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-500">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[9px] uppercase font-mono tracking-widest text-[#7A3F1F] bg-white border border-brand-200/50 px-2.5 py-1 rounded-full font-semibold shadow-inner">
                      {item.concern}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-brand-900 text-sm font-sans font-light leading-relaxed italic relative z-10">
                    "{item.review}"
                  </p>
                </div>

                {/* Patient Profile */}
                <div className="mt-8 pt-6 border-t border-brand-200/50 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7A3F1F] to-[#4F250B] text-white flex items-center justify-center font-bold text-sm shadow-sm select-none">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#352013] tracking-tight">{item.name}</h4>
                    <span className="text-[10px] font-mono text-brand-500 uppercase tracking-widest mt-0.5 block">{item.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Luxury Google CTA redirect button of clinic */}
          <div className="mt-16 text-center space-y-4">
            <p className="text-[#5A453A] text-xs font-sans font-normal tracking-wide">
              We highly encourage patient transparency. Read full reviewer threads on Google.
            </p>
            <a
              href="https://share.google/McnE2uYJHWn7wNXuk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#7A3F1F] hover:bg-[#5A453A] text-white font-semibold uppercase tracking-wider text-xs rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>View All Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* RICH LUXURY FOOTER */}
      <footer id="footer-section" className="bg-brand-900 text-brand-100 pt-20 pb-12 border-t border-brand-950 relative z-10 font-sans">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-brand-800">
          
          {/* Logo and Pitch */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-10 h-8 text-brand-200">
                <svg viewBox="0 0 160 120" className="w-full h-full">
                  {/* Hands holding the sun/sphere */}
                  <circle cx="80" cy="10" r="4" fill="currentColor" />
                  
                  {/* Sleek silhouette body */}
                  <path 
                    d="M80,22 C78,25 74,32 72,38 C70,44 74,46 75,49 C77,51 77,54 76,60 C75,66 72,72 71,79 C70,86 71,92 73,102 L80,114 L87,102 C89,92 90,86 89,79 C88,72 85,66 84,60 C83,54 83,51 85,49 C86,46 90,44 88,38 C86,32 82,25 80,22 Z" 
                    fill="currentColor" 
                  />
                  
                  {/* Arms raised high, curved and meeting at the top sphere */}
                  <path d="M72,38 C67,31 71,18 78,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <path d="M88,38 C93,31 89,18 82,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                  
                  {/* Head (Ocular disk/oval centered) */}
                  <ellipse cx="80" cy="29" rx="3.5" ry="5" fill="currentColor" />

                  {/* Left wing feather lines */}
                  <path d="M72,40 C60,25 40,20 10,25 C35,33 55,40 71,45" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
                  <path d="M73,44 C58,31 36,28 12,32 C33,40 52,46 71,50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
                  <path d="M73,48 C55,38 34,36 15,39 C31,47 48,51 70,54" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.9" />
                  <path d="M74,52 C52,45 32,44 18,46 C30,52 45,56 70,58" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.8" />
                  <path d="M74,56 C50,51 30,52 22,54 C31,58 43,61 69,62" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.7" />

                  {/* Right wing feather lines */}
                  <path d="M88,40 C100,25 120,20 150,25 C125,33 105,40 89,45" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
                  <path d="M87,44 C102,31 124,28 148,32 C127,40 108,46 89,50" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
                  <path d="M87,48 C105,38 126,36 145,39 C129,47 112,51 90,54" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.9" />
                  <path d="M86,52 C108,45 128,44 142,46 C130,52 115,56 90,58" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.8" />
                  <path d="M86,56 C110,51 130,52 138,54 C129,58 117,61 91,62" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.7" />
                </svg>
              </div>
              <span style={{ fontFamily: '"Cormorant Garamond", "Playfair Display", serif' }} className="text-xl font-semibold tracking-wider text-white">
                Renew the Aesthetic Clinic
              </span>
            </div>
            <p className="text-xs text-brand-300 leading-relaxed max-w-sm">
              A premier aesthetic clinic dedicated to advanced skin rejuvenation, state-of-the-art dermatological treatments, and custom patient-centric care.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.instagram.com/renewtheaestheticclinic/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 border border-brand-800 rounded-full hover:bg-white/10 text-brand-200 hover:text-white transition-all hover:scale-105"
                title="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/+918899962666" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 border border-brand-800 rounded-full hover:bg-white/10 text-brand-200 hover:text-white transition-all hover:scale-105"
                title="Chat with us on WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.002 5.219 5.221 0 11.64 0 14.755 0 17.67 1.214 19.87 3.418 22.072 5.62 23.284 8.542 23.28 11.66c-.006 6.425-5.224 11.64-11.64 11.64-2.01 0-3.993-.521-5.74-1.517L0 24zm6.154-3.418l.363.216c1.51.896 3.234 1.37 5.006 1.371 5.378 0 9.754-4.373 9.759-9.753.003-2.607-1.012-5.06-2.863-6.914C16.57 3.551 14.116 2.535 11.51 2.535c-5.385 0-9.768 4.383-9.773 9.764-.002 1.83.483 3.619 1.401 5.184l.24.41L2.39 21.135l3.821-1.011zm11.398-6.19c-.312-.156-1.847-.91-2.128-1.011-.282-.102-.487-.156-.692.156-.205.312-.795 1.011-.974 1.214-.179.201-.358.226-.67.07-1.12-.416-1.921-.715-2.684-2.02-.19-.325-.19-.193.07-.37.234-.156.312-.226.468-.312s.156-.201.07-.312c-.087-.11-.692-1.67-.948-2.287-.25-.6-.505-.515-.69-.523-.179-.008-.385-.008-.59-.008s-.538.077-.82.385c-.282.312-1.077 1.05-1.077 2.562s1.103 2.973 1.256 3.178c.154.205 2.171 3.313 5.258 4.646.734.317 1.309.507 1.758.649.737.234 1.409.201 1.94.122.593-.088 1.847-.756 2.109-1.449.262-.693.262-1.289.184-1.414-.078-.125-.282-.201-.593-.357z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-4 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Navigate</h4>
            <ul className="space-y-2.5 text-brand-300">
              <li><button onClick={() => scrollToSection("hero-section")} className="hover:text-white transition-colors cursor-pointer">Home</button></li>
              <li><button onClick={() => scrollToSection("transformations-section")} className="hover:text-white transition-colors cursor-pointer">Transformations</button></li>
              <li><button onClick={() => scrollToSection("reviews-section")} className="hover:text-white transition-colors cursor-pointer">Reviews</button></li>
              <li><button onClick={() => scrollToSection("footer-section")} className="hover:text-white transition-colors cursor-pointer">Inquiries</button></li>
            </ul>
          </div>

          {/* Clinic Location */}
          <div className="md:col-span-3 space-y-4 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Our Clinic</h4>
            <ul className="space-y-4 text-brand-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Renew the Aesthetic Clinic</p>
                  <p className="mt-1 opacity-80">52D/C, Gandhi Nagar, Jammu, J&K</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Direct Line</p>
                  <a href="tel:8899962666" className="mt-1 block opacity-80 hover:text-white transition-colors font-mono">8899962666</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours and phone */}
          <div className="md:col-span-3 space-y-4 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Inquiries</h4>
            <ul className="space-y-3 text-brand-300">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a href="tel:8899962666" className="hover:text-white transition-colors font-mono font-normal">8899962666</a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">7 Days Open</p>
                  <p className="mt-0.5 font-light text-brand-300 text-[11px] uppercase tracking-wider">Pre-Appointment Required</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal footprint */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-400 font-light">
          <p>© 2026 Renew the Aesthetic Clinic. All rights preserved under international beauty conventions.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">Dermal Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Care Rituals</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
