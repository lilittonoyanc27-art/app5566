import React from 'react';
import { Sparkles, BookOpen, Gamepad2, Sliders, Flame } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  gameScore: number;
}

export default function Header({ activeTab, setActiveTab, gameScore }: HeaderProps) {
  return (
    <header className="bg-white border-b-4 border-orange-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* Brand Logo and Flags */}
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-tr from-orange-500 to-amber-500 text-white p-2.5 rounded-2xl shadow-lg shadow-orange-150 flex items-center justify-center transform hover:rotate-6 transition-transform">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl md:text-2xl font-black font-display tracking-tight text-slate-900">
                Aprende <span className="text-orange-500">Español</span>
              </h1>
              <div className="flex items-center gap-1 bg-orange-100/80 px-2 py-0.5 rounded-full text-xs font-bold text-orange-700 border border-orange-200">
                <span>🇪🇸 ES</span>
                <span className="text-orange-300">|</span>
                <span>🇦🇲 AM</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
              Իսպաներենի անդրադարձ բայերի ինտերակտիվ լաբորատորիա
            </p>
          </div>
        </div>

        {/* Dynamic Navigation Tabs */}
        <nav className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200 self-center md:self-auto overflow-x-auto max-w-full">
          <button
            id="tab-theory"
            onClick={() => setActiveTab('theory')}
            className={`flex items-center gap-1.5 px-3 md:px-5 py-2 rounded-xl text-sm font-extrabold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'theory'
                ? 'bg-orange-500 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>📚 Տեսություն (Theory)</span>
          </button>
          
          <button
            id="tab-game"
            onClick={() => setActiveTab('game')}
            className={`flex items-center gap-1.5 px-3 md:px-5 py-2 rounded-xl text-sm font-extrabold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'game'
                ? 'bg-orange-500 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Gamepad2 className="w-4 h-4" />
            <span>🎮 Ինտերակտիվ խաղ (Game)</span>
          </button>

          <button
            id="tab-sandbox"
            onClick={() => setActiveTab('sandbox')}
            className={`flex items-center gap-1.5 px-3 md:px-5 py-2 rounded-xl text-sm font-extrabold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'sandbox'
                ? 'bg-orange-500 text-white shadow-md'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>🛠️ Պրակտիկա (Practice)</span>
          </button>
        </nav>

        {/* Game Stats Badge */}
        <div className="flex items-center gap-3 self-end md:self-auto">
          {gameScore > 0 && (
            <div className="flex items-center gap-1.5 bg-amber-100 border-2 border-amber-300 rounded-full px-3 py-1 text-amber-850 text-xs font-black animate-pulse shadow-sm">
              <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>{gameScore} SOL ՄԻԱՎՈՐ</span>
            </div>
          )}
          <div className="text-right hidden sm:block">
            <span className="text-[10px] block font-mono text-slate-400 uppercase tracking-widest leading-none">
              ԻՍՊԱՆԵՐԵՆ ԼԱԲ
            </span>
            <span className="text-xs font-bold font-mono text-slate-600">
              Uso Pragmático
            </span>
          </div>
        </div>

      </div>
    </header>
  );
}
