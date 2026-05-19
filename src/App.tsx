/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  FileText, 
  Image as ImageIcon, 
  Share2, 
  BarChart3, 
  Sparkles, 
  Calendar,
  Play,
  ArrowRight,
  CheckCircle2,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function App() {
  const TARGET_URL = 'https://wyslider-venom.base44.app';

  const handleRedirect = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    window.location.href = TARGET_URL;
  };

  const stats = [
    { value: "60s", label: "Average pack generation time" },
    { value: "10x", label: "Faster than manual production" },
    { value: "100%", label: "Personalized to your channel" },
    { value: "8+", label: "Content assets per pack" },
  ];

  const features = [
    {
      icon: <FileText className="text-purple-400" size={24} />,
      title: "Full Video Scripts",
      description: "AI-crafted scripts with viral hooks, storytelling arcs, and CTAs — tailored to your exact channel DNA and tone.",
      tag: "viral",
      bgColor: "bg-purple-950/20"
    },
    {
      icon: <ImageIcon className="text-blue-400" size={24} />,
      title: "Thumbnail Concepts",
      description: "Click-worthy thumbnail directions with visual layout, text overlays, and color psychology matched to your brand.",
      tag: "visual",
      bgColor: "bg-blue-950/20"
    },
    {
      icon: <Share2 className="text-emerald-400" size={24} />,
      title: "Social Media Automation",
      description: "Auto-publish promotional posts to YouTube, Instagram, LinkedIn, and TikTok the moment your video drops.",
      tag: "viral",
      bgColor: "bg-emerald-950/20"
    },
    {
      icon: <BarChart3 className="text-amber-400" size={24} />,
      title: "Sponsor Decks & ROI Reports",
      description: "Pitch-ready sponsorship decks and revenue projections to secure brand deals at any subscriber count.",
      tag: "business",
      bgColor: "bg-amber-950/20"
    },
    {
      icon: <Sparkles className="text-pink-400" size={24} />,
      title: "Slida AI Strategist",
      description: "Your always-on YouTube strategist — ask anything about growth, monetization, or your next viral topic.",
      tag: "strategy",
      bgColor: "bg-pink-950/20"
    },
    {
      icon: <Calendar className="text-indigo-400" size={24} />,
      title: "Content Scheduler",
      description: "Plan release dates for every pack and let WySlider auto-publish descriptions, tags, and posts on schedule.",
      tag: "planning",
      bgColor: "bg-indigo-950/20"
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden selection:bg-purple-500/30">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] hero-glow pointer-events-none opacity-50" />
      <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-6 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
            <Zap className="text-white fill-white" size={20} />
          </div>
          <span className="text-xl font-display font-bold tracking-tight">WySlider Venom</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" onClick={handleRedirect} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Features</a>
          <a href="#" onClick={handleRedirect} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Solutions</a>
          <a href="#" onClick={handleRedirect} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Pricing</a>
          <button onClick={handleRedirect} className="px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors cursor-pointer">Sign In</button>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="px-6 pt-20 pb-32 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full mb-10"
          >
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-purple-400">AI-Powered YouTube Production Suite</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tight mb-8"
          >
            Go From Idea to <br />
            <span className="text-gradient">Complete Video Pack</span> <br />
            in Under 60 Seconds
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            WySlider Venom is the AI production engine for serious YouTube creators. 
            Enter a topic — get a ready-to-publish script, thumbnail concept, SEO description, 
            social posts, and sponsor deck, all personalized to your channel's unique DNA.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button 
              onClick={handleRedirect}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-purple-500/20 hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <Zap size={20} className="group-hover:animate-pulse" />
              Start Creating — It's Free
            </button>
            <button 
              onClick={handleRedirect}
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900/80 hover:bg-zinc-800 text-white rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 transition-all border border-zinc-800 backdrop-blur-sm group cursor-pointer"
            >
              <Play size={18} className="fill-white" />
              See How It Works
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-3 opacity-60"
          >
            {["No credit card required", "3 free packs to start", "Setup in 2 minutes", "Cancel anytime"].map((text) => (
              <span key={text} className="flex items-center gap-1.5 text-xs font-medium text-zinc-400">
                <CheckCircle2 size={12} className="text-purple-400" />
                {text}
              </span>
            ))}
          </motion.div>
        </section>

        {/* Stats Strip */}
        <section className="border-y border-zinc-900 bg-zinc-950/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold mb-2 text-white">{stat.value}</div>
                <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-32 max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-purple-400">Everything You Need</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">One Pack. Every Asset. Zero Guesswork.</h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              From the first word of your script to the final social post — WySlider 
              produces every production asset in a single generation.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onClick={handleRedirect}
                className="glass-card p-8 rounded-[2.5rem] relative group overflow-hidden cursor-pointer"
              >
                {/* Accent Highlight */}
                <div className={`absolute -right-10 -bottom-10 w-32 h-32 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity ${feature.bgColor.replace('/20', '')}`} />
                
                <div className={`${feature.bgColor} w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border border-white/5`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  {feature.title}
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm mb-6">
                  {feature.description}
                </p>

                <div className="inline-flex px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer">
                  {feature.tag}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-20 border-t border-zinc-900 text-center">
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
            <div className="flex items-center gap-2">
              <Zap className="text-purple-500" size={24} />
              <span className="text-lg font-display font-bold">WySlider Venom</span>
            </div>
            <div className="flex gap-8 text-sm text-zinc-500 font-medium">
              <a href="#" onClick={handleRedirect} className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" onClick={handleRedirect} className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" onClick={handleRedirect} className="hover:text-white transition-colors">Contact Support</a>
            </div>
            <p className="text-sm text-zinc-600 font-mono">
              &copy; {new Date().getFullYear()} WySlider Venom. Built for Creators.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

