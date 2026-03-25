import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  ChevronRight,
  Shield,
  Users,
  Calendar,
  Menu,
  X,
  Smile,
  Stethoscope,
  Sparkles,
  HeartPulse
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Logo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const scale = size === "sm" ? 0.8 : size === "lg" ? 1.2 : 1;
  
  return (
    <div className="flex items-center gap-3" style={{ transform: `scale(${scale})`, transformOrigin: 'left center' }}>
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Heart Outline */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-brand-red fill-none stroke-[4]">
          <path d="M50 85 C20 65, 5 45, 5 25 C5 10, 25 5, 40 15 C45 20, 50 25, 50 25 C50 25, 55 20, 60 15 C75 5, 95 10, 95 25 C95 45, 80 65, 50 85" />
        </svg>
        
        {/* Tooth Shape */}
        <svg viewBox="0 0 100 100" className="relative z-10 w-10 h-10 text-brand-purple fill-current">
          <path d="M50 15 C30 15, 20 25, 20 45 C20 65, 30 85, 40 90 C45 92, 55 92, 60 90 C70 85, 80 65, 80 45 C80 25, 70 15, 50 15" />
          {/* Smile */}
          <path d="M35 55 Q50 70, 65 55" className="text-white fill-none stroke-[4] stroke-linecap-round" />
          {/* Eyes */}
          <circle cx="40" cy="40" r="3" className="text-white fill-current" />
          <circle cx="60" cy="40" r="3" className="text-white fill-current" />
          {/* Star Sparkle */}
          <path d="M75 30 L78 35 L83 35 L79 38 L81 43 L75 40 L69 43 L71 38 L67 35 L72 35 Z" className="text-yellow-400 fill-current" />
        </svg>
      </div>
      
      <div className="flex flex-col -space-y-1.5 leading-none">
        <span className="font-bold text-2xl tracking-tight text-brand-text-dark font-display">DIAO</span>
        <span className="font-bold text-2xl tracking-tight text-brand-text-accent font-display">DENTAL</span>
        <span className="font-bold text-2xl tracking-tight text-brand-text-dark font-display">CLINIC</span>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">EST. 1989</span>
      </div>
    </div>
  );
};

const Navbar = ({ onBookClick }: { onBookClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Results", href: "#results" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              {link.name}
            </a>
          ))}
          <button 
            onClick={onBookClick}
            className="bg-brand-purple hover:bg-purple-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-purple-200 active:scale-95"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-700 p-2 hover:bg-slate-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => { setMobileMenuOpen(false); onBookClick(); }}
                className="w-full bg-brand-purple text-white py-4 rounded-xl font-bold text-center"
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onBookClick }: { onBookClick: () => void }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50/50 rounded-l-[100px] hidden lg:block" />
      <div className="absolute top-20 left-10 -z-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-50 text-brand-purple px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Sparkles size={16} />
              <span>Est. 1989 • 35+ Years of Excellence</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 font-display">
              A Smile You'll <br />
              <span className="text-brand-purple">Love to Share.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              Experience gentle, modern dental care designed for your comfort. From routine check-ups to complete transformations, we're here for your family's lifelong health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onBookClick}
                className="bg-brand-purple hover:bg-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-purple-200 flex items-center justify-center gap-2 group active:scale-95"
              >
                Book Your Visit
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="tel:+1234567890"
                className="bg-white border-2 border-slate-100 hover:border-purple-100 text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                <Phone size={20} className="text-brand-purple" />
                Call Now
              </a>
            </div>
            
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-white" alt="Patient" />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-amber-400 mb-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-500 font-medium">Trusted by 5,000+ happy patients</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Dental Clinic" 
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-slate-50"
            >
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <Shield size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Safety First</p>
                <p className="text-slate-900 font-bold">Certified Gentle Care</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  const stats = [
    { label: "Years Experience", value: "35+", icon: Clock },
    { label: "Happy Patients", value: "5k+", icon: Users },
    { label: "Specialists", value: "12", icon: Stethoscope },
    { label: "Success Rate", value: "99%", icon: HeartPulse },
  ];

  return (
    <section className="bg-white py-12 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="flex justify-center mb-2">
                <stat.icon size={24} className="text-blue-600 opacity-50" />
              </div>
              <p className="text-3xl font-extrabold text-slate-900 mb-1">{stat.value}</p>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "General Dentistry",
      desc: "Routine cleanings, exams, and preventive care to keep your smile healthy.",
      icon: Smile,
      color: "bg-purple-50 text-brand-purple",
      tags: ["Cleaning", "Exams", "Fillings"]
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Whitening, veneers, and bonding for a brighter, more confident smile.",
      icon: Sparkles,
      color: "bg-purple-50 text-purple-600",
      tags: ["Whitening", "Veneers", "Bonding"]
    },
    {
      title: "Orthodontics",
      desc: "Modern braces and clear aligners to straighten teeth comfortably.",
      icon: Shield,
      color: "bg-cyan-50 text-cyan-600",
      tags: ["Invisalign", "Braces", "Retainers"]
    },
    {
      title: "Restorative Care",
      desc: "Implants, crowns, and bridges to restore function and aesthetics.",
      icon: HeartPulse,
      color: "bg-rose-50 text-rose-600",
      tags: ["Implants", "Crowns", "Bridges"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-purple uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 font-display">Comprehensive Care for Every Smile</h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We combine advanced technology with a gentle touch to provide the best dental experience in the region.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 flex flex-col h-full"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-slate-50 text-slate-500 px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="text-blue-600 font-bold text-sm flex items-center gap-2 group">
                Learn More
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BeforeAfter = () => {
  return (
    <section id="results" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Real Results</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 font-display">Transforming Smiles, Changing Lives</h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our patient transformations speak for themselves. We focus on natural-looking results that enhance your unique features.
            </p>
            
            <div className="space-y-6">
              {[
                "Advanced 3D Smile Design",
                "Pain-Free Treatment Options",
                "Long-Lasting Aesthetic Results"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-10 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2">
              View Smile Gallery
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1588776814546-1ffce47267a5?auto=format&fit=crop&q=80&w=500" alt="Before" className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
                  <div className="bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest py-2 text-center">Before</div>
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=500" alt="After" className="w-full h-80 object-cover" referrerPolicy="no-referrer" />
                  <div className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest py-2 text-center">After</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1594412086253-909787593301?auto=format&fit=crop&q=80&w=500" alt="Patient" className="w-full h-80 object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1571772996211-2f02c97da19d?auto=format&fit=crop&q=80&w=500" alt="Smile" className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Patient for 5 years",
      text: "I used to be terrified of the dentist, but Diao Dental changed everything. The staff is so gentle and the clinic feels more like a spa than a medical office.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Orthodontic Patient",
      text: "The Invisalign process was seamless. Dr. Diao explained every step and the results are better than I ever imagined. Highly recommend for professionals!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Parent",
      text: "My kids actually look forward to their check-ups! The pediatric care here is exceptional. They make dental health fun and stress-free for the little ones.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-brand-purple text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-purple-200 uppercase tracking-[0.2em] mb-4">Patient Stories</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold mb-6 font-display">What Our Patients Say</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-[32px] border border-white/10">
              <div className="flex text-amber-400 mb-6">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <p className="text-lg font-medium leading-relaxed mb-8 italic">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center font-bold text-xl">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-bold">{review.name}</p>
                  <p className="text-sm text-purple-200">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DentistProfile = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Diao" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-xs">
              <p className="text-blue-600 font-bold text-lg mb-1 font-display">Dr. Maria Diao</p>
              <p className="text-slate-500 text-sm font-medium">Lead Dentist & Founder<br />DDS, NYU College of Dentistry</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Meet Your Dentist</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 font-display">Expert Care with a Personal Touch</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              With over 35 years of experience, Dr. Maria Diao has dedicated her career to providing high-quality dental care that is both effective and comfortable.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              She believes that every patient deserves a smile they can be proud of, and she works closely with each individual to develop personalized treatment plans that meet their unique needs and goals.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-2xl font-bold text-blue-600 mb-1">35+</p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Years Exp.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <p className="text-2xl font-bold text-blue-600 mb-1">10k+</p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Procedures</p>
              </div>
            </div>

            <button className="text-blue-600 font-bold flex items-center gap-2 group">
              Read Full Bio
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Advanced Technology",
      desc: "We use the latest dental tech for faster, more accurate, and pain-free treatments.",
      icon: Sparkles
    },
    {
      title: "Gentle Approach",
      desc: "Our team is trained to provide a calm, reassuring experience for patients with anxiety.",
      icon: HeartPulse
    },
    {
      title: "Family Friendly",
      desc: "From toddlers to seniors, we provide specialized care for every member of your family.",
      icon: Users
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden costs. We provide clear estimates and flexible payment plans for all treatments.",
      icon: Shield
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Why Choose Us</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 font-display">A Better Dental Experience</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <div key={i} className="text-center group">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 cursor-pointer"
              >
                <reason.icon size={32} />
              </motion.div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 font-display">{reason.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "Do you accept dental insurance?",
      a: "Yes, we accept most major dental insurance plans. Our team will help you verify your coverage and file claims on your behalf to maximize your benefits."
    },
    {
      q: "Is dental treatment painful?",
      a: "We prioritize your comfort. We use advanced numbing techniques and offer sedation options for patients with high anxiety to ensure a virtually pain-free experience."
    },
    {
      q: "How long does a typical check-up take?",
      a: "A routine cleaning and exam usually take about 45 to 60 minutes. First-time visits may take slightly longer as we perform a comprehensive assessment."
    },
    {
      q: "Do you offer emergency dental services?",
      a: "Absolutely. If you're experiencing severe pain or a dental injury, call us immediately. We strive to see emergency cases on the same day."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Common Questions</h2>
          <h3 className="text-4xl font-extrabold text-slate-900 mb-6 font-display">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                {faq.q}
              </h4>
              <p className="text-slate-600 leading-relaxed pl-5">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[48px] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 text-white">
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-8">Visit Our Clinic</h2>
              <p className="text-slate-400 text-lg mb-12">
                We're located in the heart of the city, easily accessible with ample parking for our patients.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-xl mb-1">Our Location</p>
                    <p className="text-slate-400">123 Dental Plaza, Medical District<br />City Name, ST 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-xl mb-1">Clinic Hours</p>
                    <p className="text-slate-400">Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-xl mb-1">Contact Us</p>
                    <p className="text-slate-400">(123) 456-7890<br />hello@diaodental.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.214442361073!2d121.022!3d14.5547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDMzJzE2LjkiTiAxMjHCsDAxJzE5LjIiRQ!5e0!3m2!1sen!2sph!4v1620000000000!5m2!1sen!2sph" 
                className="absolute inset-0 w-full h-full border-0 grayscale invert opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BookingModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative bg-white w-full max-w-xl rounded-[40px] shadow-2xl overflow-hidden"
      >
        <button onClick={onClose} className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors">
          <X size={24} />
        </button>
        
        <div className="p-10">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calendar size={32} />
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Book Your Visit</h3>
            <p className="text-slate-500">Choose a convenient time for your consultation.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Booking request sent! We'll contact you shortly."); onClose(); }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Full Name</label>
                <input type="text" required className="w-full bg-slate-50 border-0 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-600 transition-all outline-none" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Phone Number</label>
                <input type="tel" required className="w-full bg-slate-50 border-0 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-600 transition-all outline-none" placeholder="(123) 456-7890" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Service Interested In</label>
              <select className="w-full bg-slate-50 border-0 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-600 transition-all outline-none appearance-none">
                <option>General Checkup</option>
                <option>Teeth Whitening</option>
                <option>Orthodontics / Braces</option>
                <option>Dental Implants</option>
                <option>Emergency Care</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-brand-purple hover:bg-purple-700 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-purple-200 transition-all active:scale-[0.98]">
              Request Appointment
            </button>
            
            <p className="text-center text-xs text-slate-400">
              By clicking, you agree to our privacy policy. We'll call you within 24 hours to confirm.
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="mb-6">
              <Logo size="sm" />
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed mb-8">
              Providing world-class dental care since 1989. Our mission is to combine advanced technology with compassionate care for a lifetime of healthy smiles.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'twitter'].map(social => (
                <a key={social} href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current rounded-sm opacity-20" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Services', 'About Us', 'Smile Gallery', 'Testimonials', 'Contact'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Patient Resources</h4>
            <ul className="space-y-4">
              {['New Patient Form', 'Insurance Info', 'Payment Plans', 'FAQ', 'Emergency Care'].map(item => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors font-medium">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-200 flex flex-col md:row items-center justify-between gap-4 text-sm text-slate-400 font-medium">
          <p>© 2026 Diao Dental Clinic. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const StickyCTA = ({ onBookClick }: { onBookClick: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-6 left-0 right-0 z-40 px-4 pointer-events-none"
        >
          <div className="max-w-md mx-auto bg-white/80 backdrop-blur-xl border border-white p-2 rounded-full shadow-2xl flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-3 pl-4">
              <div className="w-10 h-10 bg-brand-purple rounded-full flex items-center justify-center text-white">
                <Phone size={18} />
              </div>
              <div className="hidden sm:block">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Ready to smile?</p>
                <p className="text-sm font-bold text-slate-900">Book Your Visit</p>
              </div>
            </div>
            <button 
              onClick={onBookClick}
              className="bg-brand-purple hover:bg-purple-700 text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-lg shadow-purple-200 active:scale-95"
            >
              Book Now
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar onBookClick={() => setIsBookingOpen(true)} />
      
      <main>
        <Hero onBookClick={() => setIsBookingOpen(true)} />
        <TrustBar />
        <Services />
        <WhyChooseUs />
        <DentistProfile />
        <BeforeAfter />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <StickyCTA onBookClick={() => setIsBookingOpen(true)} />
      
      <AnimatePresence>
        {isBookingOpen && (
          <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
