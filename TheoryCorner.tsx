import React, { useState } from 'react';
import { VERB_PAIRS, VerbPair, VerbDetail } from './verbsData';
import { HelpCircle, ChevronRight, CheckCircle2, Info, BookOpen, User } from 'lucide-react';
import { motion } from 'motion/react';

export default function TheoryCorner() {
  const [selectedPairId, setSelectedPairId] = useState<string>(VERB_PAIRS[0].id);
  const activePair = VERB_PAIRS.find(p => p.id === selectedPairId) || VERB_PAIRS[0];

  const subjects = [
    { code: 'yo', label: 'Yo (Ես)' },
    { code: 'tú', label: 'Tú (Դու)' },
    { code: 'él', label: 'Él/Ella/Usted (Նա)' },
    { code: 'nosotros', label: 'Nosotros (Մենք)' },
    { code: 'vosotros', label: 'Vosotros (Դուք)' },
    { code: 'ellos', label: 'Ellos/Ellas/Ustedes (Նրանք)' },
  ];

  return (
    <div className="space-y-8">
      {/* Introduction to Reflexive Verbs block */}
      <div className="bg-gradient-to-r from-orange-100/80 via-amber-50 to-orange-50 rounded-3xl p-6 border-2 border-orange-200 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="bg-orange-500 text-white p-3 rounded-2xl shadow-md">
            <Info className="w-6 h-6 animate-bounce" />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-black text-slate-900 font-display">
              Ի՞նչ է անդրադարձ բայը (Verbo Reflexivo) իսպաներենում
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed font-medium">
              Իսպաներենում անդրադարձ բայերը ցույց են տալիս գործողություն, որն ուղղված է <strong className="text-orange-600">հենց սուբյեկտի (կատարողի) վրա</strong>։ Օրինակ՝ <code className="bg-white px-1.5 py-0.5 rounded text-orange-600 font-bold border border-orange-200">ducharse</code> նշանակում է «լոգանալ» (ինքն իրեն լվանալ), իսկ սովորական <code className="bg-white px-1.5 py-0.5 rounded text-blue-600 font-bold border border-blue-200">duchar</code> բայը նշանակում է «լողացնել» (ուրիշին)։
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Անդրադարձ բայերը խոնարհելիս բայից առաջ միշտ ավելանում է համապատասխան <strong>անդրադարձ դերանունը</strong>՝
            </p>

            {/* Pronoun Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 pt-2">
              {[
                { s: 'Yo', p: 'me', t: 'ինձ' },
                { s: 'Tú', p: 'te', t: 'քեզ' },
                { s: 'Él / Ella / Usted', p: 'se', t: 'իրեն / Ձեզ' },
                { s: 'Nosotros', p: 'nos', t: 'մեզ' },
                { s: 'Vosotros', p: 'os', t: 'ձեզ' },
                { s: 'Ellos / Ellas / Ustedes', p: 'se', t: 'իրենց / Ձեզ' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-2.5 rounded-xl border-2 border-orange-100 text-center shadow-xs hover:border-orange-300 transition-colors">
                  <span className="block text-[10px] text-slate-400 font-mono uppercase tracking-wider">{item.s}</span>
                  <span className="block text-base font-extrabold text-orange-600 font-mono">+{item.p}</span>
                  <span className="block text-[11px] text-slate-500 font-medium">{item.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Study Zone */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left column: Sidebar for choosing verbs */}
        <div className="lg:col-span-4 space-y-3">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">
            Բայական Զույգեր (Seleccionar Verbo)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
            {VERB_PAIRS.map((pair) => {
              const isSelected = pair.id === selectedPairId;
              return (
                <button
                  key={pair.id}
                  onClick={() => setSelectedPairId(pair.id)}
                  className={`text-left p-3.5 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-orange-600 to-amber-500 text-white border-transparent shadow-md shadow-orange-100'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-orange-400 hover:bg-orange-50/20 shadow-xs'
                  }`}
                >
                  <div className="font-bold text-sm md:text-base font-mono flex items-center justify-between">
                    <span>{pair.title}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90 text-white' : 'text-slate-400'}`} />
                  </div>
                  <span className={`text-xs block mt-1 line-clamp-1 ${isSelected ? 'text-orange-100 font-bold' : 'text-slate-500'}`}>
                    {pair.titleArm}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right column: Side-by-side comparative dashboard */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-3xl border-2 border-orange-100 p-5 md:p-8 shadow-md space-y-6">
            
            {/* Pair Headline & Quick Armenian Summary */}
            <div className="border-b border-orange-100 pb-5">
              <span className="text-orange-600 text-xs font-extrabold tracking-wider uppercase font-mono block">
                կոնտրաստային տեսություն / Contraste Teórico
              </span>
              <h2 className="text-xl md:text-3xl font-black text-slate-950 font-display flex items-center gap-2 mt-1">
                {activePair.titleArm}
              </h2>
              <p className="text-slate-700 text-sm mt-3 leading-relaxed italic bg-orange-50/80 border-l-4 border-orange-500 p-4 rounded-r-2xl font-medium">
                <strong>💡 Ընդհանուր տարբերությունը՝</strong> {activePair.contrastExplanation}
              </p>
            </div>

            {/* Side-by-side details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              
              {/* NON-REFLEXIVE verb */}
              <div className="space-y-4 p-5 rounded-2xl bg-blue-50/40 border-2 border-blue-100 shadow-sm">
                <div className="flex items-center gap-2 pb-2 border-b border-blue-100">
                  <span className="bg-blue-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    ՊԱՐԶ ՁԵՎ / SIMPLE
                  </span>
                  <h3 className="text-xl font-black font-mono text-blue-700">
                    {activePair.nonReflexive.name}
                  </h3>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase font-black tracking-wider">թարգմանություն</span>
                  <p className="text-sm font-extrabold text-blue-900 bg-white px-3 py-1.5 rounded-xl border border-blue-100">{activePair.nonReflexive.translatedArm}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase font-black tracking-wider">կիրառության նյուանսը</span>
                  <p className="text-xs text-slate-600 leading-relaxed bg-white border border-blue-50 p-3 rounded-xl">{activePair.nonReflexive.nuance}</p>
                </div>

                {/* Non-reflexive Conjugation */}
                <div className="space-y-2">
                  <span className="text-[10px] text-slate-400 uppercase font-black block tracking-wider">ներկա ժամանակի խոնարհումը</span>
                  <div className="bg-white divide-y divide-blue-50 rounded-xl border border-blue-100 overflow-hidden shadow-xs">
                    {subjects.map((s) => {
                      const conjugated = (activePair.nonReflexive.conjugations as any)[s.code];
                      return (
                        <div key={s.code} className="flex justify-between items-center text-xs px-3 py-2.5 hover:bg-blue-50/35 font-mono">
                          <span className="text-slate-500 font-medium text-[11px]">{s.label}</span>
                          <span className="font-extrabold text-blue-800">{conjugated}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Non-reflexive examples */}
                <div className="space-y-2">
                  <span className="text-[10px] text-slate-400 uppercase font-black block tracking-wider">օրինակներ / Ejemplos</span>
                  <div className="space-y-2">
                    {activePair.nonReflexive.examples.map((ex, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-xl border border-blue-100/50 text-xs text-slate-705 shadow-3xs hover:scale-[1.01] transition-transform">
                        <p className="font-extrabold text-blue-950 font-mono text-sm">{ex.spanish}</p>
                        <p className="text-slate-650 mt-1 font-medium">{ex.armenian}</p>
                        <p className="text-[10px] text-blue-700 bg-blue-50 font-bold inline-block px-2 py-0.5 rounded-full mt-2">
                          ✓ {ex.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* REFLEXIVE verb */}
              <div className="space-y-4 p-5 rounded-2xl bg-orange-50/40 border-2 border-orange-100 shadow-sm">
                <div className="flex items-center gap-2 pb-2 border-b border-orange-100">
                  <span className="bg-orange-500 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    ԱՆԴՐԱԴԱՐՁ / REFLEXIVO
                  </span>
                  <h3 className="text-xl font-black font-mono text-orange-600">
                    {activePair.reflexive.name}
                  </h3>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase font-black tracking-wider">թարգմանություն</span>
                  <p className="text-sm font-extrabold text-orange-905 bg-white px-3 py-1.5 rounded-xl border border-orange-100">{activePair.reflexive.translatedArm}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] text-slate-400 uppercase font-black tracking-wider">կիրառության նյուանսը</span>
                  <p className="text-xs text-slate-600 leading-relaxed bg-white border border-orange-50 p-3 rounded-xl">{activePair.reflexive.nuance}</p>
                </div>

                {/* Reflexive Conjugation */}
                <div className="space-y-2">
                  <span className="text-[10px] text-slate-400 uppercase font-black block tracking-wider">ներկա ժամանակի խոնարհումը</span>
                  <div className="bg-white divide-y divide-orange-50 rounded-xl border border-orange-100 overflow-hidden shadow-xs">
                    {subjects.map((s) => {
                      const pronoun = s.code === 'yo' ? 'me' : s.code === 'tú' ? 'te' : s.code === 'él' ? 'se' : s.code === 'nosotros' ? 'nos' : s.code === 'vosotros' ? 'os' : 'se';
                      const core = (activePair.reflexive.conjugations as any)[s.code];
                      return (
                        <div key={s.code} className="flex justify-between items-center text-xs px-3 py-2.5 hover:bg-orange-50/35 font-mono">
                          <span className="text-slate-500 font-medium text-[11px]">{s.label}</span>
                          <div className="font-extrabold">
                            <span className="text-orange-600 bg-orange-100/75 px-1.5 py-0.5 rounded-md font-black">{pronoun}</span>{' '}
                            <span className="text-slate-900">{core.replace(pronoun + ' ', '')}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Reflexive examples */}
                <div className="space-y-2">
                  <span className="text-[10px] text-slate-400 uppercase font-black block tracking-wider">օրինակներ / Ejemplos</span>
                  <div className="space-y-2">
                    {activePair.reflexive.examples.map((ex, idx) => (
                      <div key={idx} className="bg-white p-3 rounded-xl border border-orange-100/50 text-xs text-slate-705 shadow-3xs hover:scale-[1.01] transition-transform">
                        <p className="font-extrabold text-orange-950 font-mono text-sm">{ex.spanish}</p>
                        <p className="text-slate-650 mt-1 font-medium">{ex.armenian}</p>
                        <p className="text-[10px] text-orange-700 bg-orange-100/80 font-bold inline-block px-2 py-0.5 rounded-full mt-2">
                          ✓ {ex.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
              
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
