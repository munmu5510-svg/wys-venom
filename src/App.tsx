/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { ExternalLink, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const TARGET_URL = 'https://wyslider-venom.base44.app';

  useEffect(() => {
    // Small delay to let the user see what's happening
    const timer = setTimeout(() => {
      window.location.href = TARGET_URL;
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 font-sans text-slate-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center space-y-6 max-w-md"
      >
        <div className="flex justify-center">
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="text-emerald-500"
            >
              <Loader2 size={48} />
            </motion.div>
          </div>
        </div>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Wyslider Venom
        </h1>
        
        <p className="text-slate-400 text-lg">
          Redirection automatique en cours...
        </p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="pt-4"
        >
          <a
            href={TARGET_URL}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-medium transition-colors shadow-lg shadow-emerald-900/20"
          >
            Ouvrir maintenant
            <ExternalLink size={18} />
          </a>
        </motion.div>

        <p className="text-slate-500 text-sm">
          Si vous n'êtes pas redirigé dans quelques secondes, veuillez cliquer sur le bouton ci-dessus.
        </p>
      </motion.div>
    </div>
  );
}

