import React, { useState } from 'react';
import Header from './Header';
import TheoryCorner from './TheoryCorner';
import InteractiveGame from './InteractiveGame';
import SandboxConjugator from './SandboxConjugator';
import { Sparkles, GraduationCap, MapPin, Compass, Globe, CheckCircle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('theory');
  const [gameScore, setGameScore] = useState<number>(0);

  return (
    <div className="min-h-screen bg-orange-50/70 flex flex-col font-sans">
      
      {/* App brand header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        gameScore={gameScore} 
      />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8 space-y-8">
        
              {/* Banner about the Interactive learning system */}
        <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 text-white rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden ring-4 ring-orange-200">
          
          {/* Subtle design graphics */}
          <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-8 w-60 h-60 bg-indigo-500 rounded-full opacity-10 blur-xl" />
          <div className="absolute bottom-0 left-1/3 transform -translate-y-12 w-40 h-40 bg-pink-500 rounded-full opacity-10 blur-2xl" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center gap-2 bg-indigo-850 border border-indigo-700 w-fit px-3 py-1 rounded-full text-xs font-semibold text-amber-300">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Ինտերակտիվ Իսպաներեն / Español Interactivo</span>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-black font-display tracking-tight leading-tight">
                Անդրադարձ բայերը իսպաներենում
              </h2>
              
              <p className="text-indigo-200 text-sm md:text-base leading-relaxed max-w-2xl">
                Սովորե՛ք իսպաներենի անդրադարձ բայերը (<span className="text-white font-semibold">verbos reflexivos</span>) հայերեն բացատրություններով, խոնարհման ինտերակտիվ աղյուսակներով և հետաքրքիր արկածային խաղով։
              </p>
            </div>

            <div className="md:col-span-4 flex items-center md:justify-end">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 space-y-2 text-xs text-indigo-150 w-full md:max-w-xs">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-white">Ուսումնասիրվող բայեր՝</span>
                </div>
                <div className="grid grid-cols-2 gap-x-3 gap-y-1 font-mono text-white/95 text-[11px]">
                  <span>• quedar / -se</span>
                  <span>• levantar / -se</span>
                  <span>• duchar / -se</span>
                  <span>• dormir / -se</span>
                  <span>• acostar / -se</span>
                  <span>• vestir / -se</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Dynamic section rendering based on tab state */}
        <div className="transition-all duration-300">
          {activeTab === 'theory' && (
            <TheoryCorner />
          )}

          {activeTab === 'game' && (
            <InteractiveGame 
              score={gameScore} 
              setScore={setGameScore} 
            />
          )}

          {activeTab === 'sandbox' && (
            <SandboxConjugator />
          )}
        </div>

      </main>

      {/* Elegant minimalist footer */}
      <footer className="bg-white border-t border-slate-200/80 py-6 mt-12 text-center text-xs text-slate-400 font-medium">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="text-sm">🇪🇸</span>
            <span>Իսպաներենի Անդրադարձ Բայեր (Հայերեն-Իսպաներեն)</span>
          </div>
          <div className="flex items-center gap-4 justify-center font-mono">
            <span>Uso Pragmático</span>
            <span>•</span>
            <span>2026</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
