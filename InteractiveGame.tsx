import React, { useState, useEffect } from 'react';
import { GAME_SCENARIOS, GameScenario } from './verbsData';
import { 
  Trophy, RotateCcw, Award, Check, X, ShieldAlert, Zap, BookOpen, 
  HelpCircle, Star, ArrowRight, Sun, Sunset, Sunrise, Moon, Dumbbell,
  Bath, Sparkles, Smile, MessageSquare, Coffee, Compass
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InteractiveGameProps {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export default function InteractiveGame({ score, setScore }: InteractiveGameProps) {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [isGameFinished, setIsGameFinished] = useState<boolean>(false);
  const [highScore, setHighScore] = useState<number>(() => {
    return Number(localStorage.getItem('reflexivos_high_score') || '0');
  });

  // Keep track of our answers
  const [answersHistory, setAnswersHistory] = useState<{ scenarioId: number; isCorrect: boolean }[]>([]);

  const currentScenario = GAME_SCENARIOS[currentIdx];

  useEffect(() => {
    // Sync local storage high score when game finishes
    if (isGameFinished && score > highScore) {
      localStorage.setItem('reflexivos_high_score', String(score));
      setHighScore(score);
    }
  }, [isGameFinished, score, highScore]);

  // Handle choosing an option
  const handleSelectOption = (optIdx: number) => {
    if (hasAnswered) return; // Prevent double clicking
    setSelectedOptionIdx(optIdx);
    setHasAnswered(true);

    const option = currentScenario.options[optIdx];
    const optionIsCorrect = option.isCorrect;

    // Record answer
    setAnswersHistory(prev => [
      ...prev,
      { scenarioId: currentScenario.id, isCorrect: optionIsCorrect }
    ]);

    if (optionIsCorrect) {
      setScore(prev => prev + 10);
    }
  };

  // Move to next question or end game
  const handleNext = () => {
    setSelectedOptionIdx(null);
    setHasAnswered(false);

    if (currentIdx < GAME_SCENARIOS.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setIsGameFinished(true);
    }
  };

  // Restart game
  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOptionIdx(null);
    setHasAnswered(false);
    setIsGameFinished(false);
    setScore(0);
    setAnswersHistory([]);
  };

  // Guide's visual expression calculator
  const getGuideExpression = () => {
    if (!hasAnswered) {
      if (currentScenario.stage === 'evening' && currentIdx >= 8) return '🥱'; // sleepy/yawning
      return '😄'; // friendly
    }
    const chosenOption = currentScenario.options[selectedOptionIdx!];
    return chosenOption.isCorrect ? '🥳' : '🤔'; // partying or thinking helper
  };

  // Time-of-day background classes
  const getStageStyle = () => {
    switch (currentScenario.stage) {
      case 'morning':
        return {
          bg: 'bg-radial from-amber-50 to-orange-100/60',
          border: 'border-amber-200',
          text: 'text-amber-800',
          icon: <Sunrise className="w-5 h-5 text-amber-600 animate-bounce" />
        };
      case 'afternoon':
        return {
          bg: 'bg-radial from-blue-50 to-indigo-100/60',
          border: 'border-blue-200',
          text: 'text-blue-800',
          icon: <Sun className="w-5 h-5 text-blue-600 animate-spin-slow" />
        };
      case 'evening':
        return {
          bg: 'bg-radial from-slate-900 via-indigo-950 to-slate-950',
          border: 'border-indigo-900',
          text: 'text-indigo-300',
          icon: <Moon className="w-5 h-5 text-sky-400 rotate-12" />
        };
      default:
        return {
          bg: 'bg-slate-50',
          border: 'border-slate-200',
          text: 'text-slate-800',
          icon: <Compass className="w-5 h-5" />
        };
    }
  };

  const stageStyle = getStageStyle();

  // Scenario illustrations matching icons helper
  const renderScenarioProp = () => {
    switch (currentScenario.id) {
      case 1: // alarm
        return <Sunrise className="w-12 h-12 text-amber-500" />;
      case 2: // dumbbell
        return <Dumbbell className="w-12 h-12 text-blue-500" />;
      case 3: // shower
        return <Bath className="w-12 h-12 text-teal-500" />;
      case 4: // dog
        return <div className="text-4xl text-amber-700 font-bold">🐶</div>;
      case 5: // clothes
        return <Sparkles className="w-12 h-12 text-indigo-500" />;
      case 6: // chat WhatsApp
        return <MessageSquare className="w-12 h-12 text-green-500" />;
      case 7: // raining
        return <div className="text-4xl">🌧️</div>;
      case 8: // crib/baby
        return <div className="text-4xl">👶</div>;
      case 9: // pajamas clock
        return <Coffee className="w-12 h-12 text-purple-400" />;
      case 10: // movie sofa
        return <div className="text-4xl">🍿</div>;
      default:
        return <BookOpen className="w-12 h-12 text-indigo-500" />;
    }
  };

  // Certificate levels
  const getBadgeDetails = (scorePoints: number) => {
    const questionsCorrect = scorePoints / 10;
    if (questionsCorrect >= 9) {
      return {
        title: "👑 Rey del Pronombre",
        titleArm: "Անդրադարձ Բայերի Արքա",
        desc: "Մակարդակ՝ Իսպանախոս Փորձագետ: Դուք կատարյալ հասկանում եք անդրադարձ դերանունների նրբությունները!",
        color: "from-amber-500 to-yellow-600"
      };
    }
    if (questionsCorrect >= 7) {
      return {
        title: "🎖️ Experto en Acción",
        titleArm: "Գործողությունների Մասնագետ",
        desc: "Մակարդակ՝ Լավ իմացություն: Դուք շատ քիչ սխալներ թույլ տվեցիք և հիանալի տարբերակում եք սովորական և անդրադարձ բայերի տարբերությունները:",
        color: "from-indigo-500 to-indigo-700"
      };
    }
    if (questionsCorrect >= 4) {
      return {
        title: "📖 Estudiante Activo",
        titleArm: "Ակտիվ Ուսանող",
        desc: "Մակարդակ՝ Միջին իմացություն: Դուք արդեն հասկանում եք հիմնական կանոնները, բայց որոշ նյուանսներ դեռ պարզաբանելու կարիք ունեն: Շարունակե՛ք պրակտիկան!",
        color: "from-blue-500 to-blue-700"
      };
    }
    return {
      title: "🌱 Principiante Solícito",
      titleArm: "Ջանասեր Սկսնակ",
      desc: "Մակարդակ՝ Սկսնակ: Ոչինչ, սա միայն սկիզբն է: Խորհուրդ է տրվում ևս մեկ անգամ կարդալ տեսությունը և նորից փորձել:",
      color: "from-slate-500 to-slate-700"
    };
  };

  return (
    <div className="max-w-4xl mx-auto">
      
      {!isGameFinished ? (
        <div className="space-y-6">
          
          {/* Game header: score, progress bar */}
          <div className="bg-white border-2 border-orange-100 rounded-3xl p-4 md:p-6 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-orange-600 tracking-wider uppercase bg-orange-100 px-2.5 py-1 rounded-full">
                  Խաղի Ընթացքը (Escenarios)
                </span>
                <span className="font-mono text-sm font-bold text-slate-500">
                  {currentIdx + 1} / {GAME_SCENARIOS.length}
                </span>
              </div>
              <h3 className="font-display font-bold text-slate-800 text-sm md:text-base">
                Ընտրե՛ք ճիշտ տարբերակը իրավիճակին համապատասխան
              </h3>
            </div>

            <div className="flex items-center gap-6 justify-between sm:justify-start">
              {/* Score widget */}
              <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-xl text-amber-800">
                <Sun className="w-5 h-5 fill-amber-500 text-amber-500" />
                <div>
                  <span className="text-[10px] block font-mono uppercase text-amber-600 font-bold leading-none">սոլ միավոր</span>
                  <span className="text-base font-extrabold font-mono">{score}</span>
                </div>
              </div>

              {/* High score widget */}
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-xl text-slate-700">
                <Trophy className="w-5 h-5 text-orange-500" />
                <div>
                  <span className="text-[10px] block font-mono uppercase text-slate-400 font-bold leading-none">Ռեկորդ</span>
                  <span className="text-base font-extrabold font-mono">{highScore}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Core scenario block: time based background */}
          <div className={`rounded-3xl border-2 ${stageStyle.border} p-6 md:p-10 transition-all duration-300 ${stageStyle.bg} ${currentScenario.stage === 'evening' ? 'text-white animate-pulse-slow' : 'text-slate-950'} shadow-lg`}>
            
            {/* Visual indicators for stage of the day */}
            <div className="flex items-center justify-between mb-6">
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold ${
                currentScenario.stage === 'evening' ? 'bg-indigo-950/85 border border-indigo-800' : 'bg-white/90 shadow-2xs border border-slate-100'
              }`}>
                {stageStyle.icon}
                <span className={stageStyle.text}>{currentScenario.situationArm}</span>
              </div>
              
              <span className={`text-xs font-mono font-bold tracking-wider ${
                currentScenario.stage === 'evening' ? 'text-indigo-400' : 'text-slate-500'
              }`}>
                {currentScenario.situation}
              </span>
            </div>

            {/* Pedro Dialogue Box */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Character Head & Expression Graphic */}
              <div className="md:col-span-3 flex flex-col items-center justify-center space-y-2">
                <div className={`w-28 h-28 rounded-full border-4 flex items-center justify-center text-5xl bg-white shadow-md transform transition-transform hover:scale-105 ${
                  hasAnswered 
                    ? (currentScenario.options[selectedOptionIdx!].isCorrect ? 'border-emerald-400' : 'border-rose-400')
                    : 'border-indigo-400'
                }`}>
                  {getGuideExpression()}
                </div>
                <div className="text-center">
                  <span className={`font-display font-extrabold text-sm ${currentScenario.stage === 'evening' ? 'text-indigo-200' : 'text-slate-800'}`}>
                    Guía de Español
                  </span>
                  <span className="block text-[10px] opacity-60 font-mono">Español práctico</span>
                </div>
              </div>

              {/* Dialogue speech bubble */}
              <div className="md:col-span-9 relative">
                <div className={`p-5 rounded-2xl relative border shadow-xs ${
                  currentScenario.stage === 'evening' 
                    ? 'bg-slate-900/90 border-indigo-900/40 text-slate-100' 
                    : 'bg-white border-slate-200 text-slate-800'
                }`}>
                  {/* Speech bubble arrow indicator for large layout */}
                  <div className={`hidden md:block absolute left-0 top-1/2 transform -translate-x-2 -translate-y-2 rotate-45 w-4 h-4 border-l border-b ${
                    currentScenario.stage === 'evening' ? 'bg-slate-900 border-indigo-900/40' : 'bg-white border-slate-200'
                  }`} />
                  
                  <div className="space-y-3">
                    <p className="text-sm italic font-medium leading-relaxed font-mono">
                      "{currentScenario.dialoguePedrito}"
                    </p>
                    <div className="h-px bg-slate-200/50 my-2" />
                    <p className="text-sm font-semibold leading-relaxed">
                      {currentScenario.dialoguePedritoArm}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Practical illustrative item frame */}
            <div className="flex justify-center mt-6">
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-xs border ${
                currentScenario.stage === 'evening' 
                  ? 'bg-indigo-950/80 border-indigo-800' 
                  : 'bg-white border-slate-200'
              }`}>
                {renderScenarioProp()}
              </div>
            </div>

          </div>

          {/* Interactive answering area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentScenario.options.map((option, idx) => {
              const belongsToSelected = selectedOptionIdx === idx;
              const isCorrectOption = option.isCorrect;

              let buttonStyle = "bg-white border-slate-200 text-slate-800 hover:border-orange-500 hover:bg-orange-50/20";
              
              if (hasAnswered) {
                if (belongsToSelected) {
                  buttonStyle = isCorrectOption 
                    ? "bg-emerald-50 text-emerald-900 border-emerald-400 shadow-xs ring-2 ring-emerald-200" 
                    : "bg-rose-50 text-rose-900 border-rose-400 shadow-xs ring-2 ring-rose-200";
                } else {
                  // highlight the correct one even if not chosen
                  if (option.isCorrect) {
                     buttonStyle = "bg-emerald-50/70 text-emerald-800 border-emerald-300 pointer-events-none";
                  } else {
                     buttonStyle = "opacity-45 bg-slate-50 border-slate-200 text-slate-400 pointer-events-none";
                  }
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={hasAnswered}
                  className={`w-full text-left p-5 rounded-2xl border-2 transition-all cursor-pointer font-semibold shadow-xs ${buttonStyle}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <span className="text-xs text-orange-500 font-mono tracking-wide block uppercase font-bold">
                        Տարբերակ {idx + 1}
                      </span>
                      <span className="text-lg md:text-xl font-mono font-extrabold text-slate-900">
                        {option.text}
                      </span>
                    </div>

                    {/* Status icons after choice */}
                    {hasAnswered && (
                      <div className={`rounded-xl p-1.5 ${isCorrectOption ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                        {isCorrectOption ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation block feedback */}
          {hasAnswered && (
            <div className="bg-white border-2 border-orange-100 rounded-2xl p-5 md:p-6 shadow-md space-y-3 animate-fade-in">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-extrabold font-mono tracking-wider uppercase px-2.5 py-1 rounded-full ${
                  currentScenario.options[selectedOptionIdx!].isCorrect 
                    ? 'bg-emerald-100 text-emerald-800' 
                    : 'bg-rose-100 text-rose-800'
                }`}>
                  {currentScenario.options[selectedOptionIdx!].isCorrect ? "👏 Ճիշտ է" : "💡 Բացատրություն"}
                </span>
                <span className="text-xs text-slate-500 font-bold">Ինչո՞ւ է այսպես</span>
              </div>
              <p className="text-sm md:text-base font-semibold text-slate-700 leading-relaxed">
                {currentScenario.options[selectedOptionIdx!].explanationArm}
              </p>

              {/* Progress dynamic button */}
              <div className="flex justify-end pt-2">
                <button
                  id="btn-next-scenario"
                  onClick={handleNext}
                  className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-3.5 px-6 rounded-xl shadow-lg shadow-orange-100 cursor-pointer text-sm tracking-wide transition-all"
                >
                  <span>{currentIdx < GAME_SCENARIOS.length - 1 ? "Հաջորդ սցենարը" : "Տեսնել արդյունքները"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      ) : (
        /* End game report: graduation certificate */
        <div className="bg-white border-2 border-orange-200 rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden text-center space-y-8 max-w-2xl mx-auto">
          
          {/* Decorative frame banner */}
          <div className="absolute top-0 inset-x-0 h-4 bg-gradient-to-r from-amber-400 via-rose-500 to-indigo-600" />

          {/* Large badge Trophy graphic */}
          <div className="pt-4 flex justify-center">
            <div className="relative">
              <div className="bg-amber-50 rounded-full p-6 border-4 border-amber-300">
                <Award className="w-16 h-16 text-amber-500" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white rounded-full p-1.5 shadow-sm">
                <Star className="w-5 h-5 fill-white" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block font-mono">
              ավարտական հավաստագիր
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 font-display">
              Իսպաներենի Անդրադարձ Բայերի Դասընթաց
            </h2>
            <p className="text-slate-500 text-sm">
              Պատվավոր կերպով տրվում է մեր լաբորատորիայում ուսանողին
            </p>
          </div>

          {/* Achievement details block */}
          {(() => {
            const badge = getBadgeDetails(score);
            return (
              <div className={`p-6 rounded-2xl bg-gradient-to-b ${badge.color} text-white space-y-3 max-w-lg mx-auto shadow-sm`}>
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest opacity-80 block">
                  ստացված տիտղոսը (Título)
                </span>
                <h3 className="text-lg md:text-xl font-bold font-display leading-none">
                  {badge.title} ({badge.titleArm})
                </h3>
                <p className="text-xs text-white/90 leading-relaxed font-medium">
                  {badge.desc}
                </p>
              </div>
            );
          })()}

          {/* Grid scorecard summary */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl max-w-lg mx-auto border border-slate-100/80">
            <div className="text-center p-2">
              <span className="block text-[10px] text-slate-400 uppercase font-mono">փորձեր</span>
              <span className="font-extrabold font-mono text-lg text-slate-800">10 / 10</span>
            </div>
            
            <div className="text-center p-2">
              <span className="block text-[10px] text-slate-400 uppercase font-mono">ճիշտ պատասխան</span>
              <span className="font-extrabold font-mono text-lg text-emerald-600">{score / 10} / 10</span>
            </div>

            <div className="text-center p-2 col-span-2 md:col-span-1">
              <span className="block text-[10px] text-slate-400 uppercase font-mono">գնահատական</span>
              <span className="font-extrabold font-mono text-lg text-indigo-600">{score}%</span>
            </div>
          </div>

          {/* Brief Armenian guide comment */}
          <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200/40 text-left text-xs text-slate-700 italic flex items-start gap-3">
            <div className="text-2xl">😄</div>
            <div>
              <strong>Ուղեցույցի խորհուրդը՝</strong> «Իսպաներենում անդրադարձ բայերը կարևորագույն դեր ունեն առօրյա կյանքում։ Լավագույնս տիրապետելու համար պրակտիկա բաժնում ինքնուրույն փորձարկեք խոնարհումները։ ¡Hasta la vista, amigo!»
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              id="btn-restart-game"
              onClick={handleRestart}
              className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-3.5 px-6 rounded-xl shadow-lg shadow-orange-100 cursor-pointer transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Խաղալ նորից</span>
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
