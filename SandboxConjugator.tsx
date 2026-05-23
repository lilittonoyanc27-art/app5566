import React, { useState } from 'react';
import { VERB_PAIRS } from './verbsData';
import { Sliders, Sparkles, HelpCircle, Check, ArrowRight, ArrowLeftRight } from 'lucide-react';

interface SandboxSentence {
  nonReflexive: {
    spanish: string;
    armenian: string;
  };
  reflexive: {
    spanish: string;
    armenian: string;
  };
}

// Map each verb pair + subject code to useful contextual examples dynamically
const SANDBOX_SENTENCES_MAP: Record<string, Record<string, SandboxSentence>> = {
  "quedar-quedarse": {
    yo: {
      nonReflexive: { spanish: "Yo quedo con Lucía para tomar café.", armenian: "Ես պայմանավորվել եմ հանդիպել Լուսիայի հետ սուրճ խմելու։" },
      reflexive: { spanish: "Yo me quedo en casa de mis padres.", armenian: "Ես մնում եմ իմ ծնողների տանը։" }
    },
    tú: {
      nonReflexive: { spanish: "Tú quedas con tus compañeros hoy.", armenian: "Դու այսօր պայմանավորվել ես հանդիպել քո ընկերների հետ։" },
      reflexive: { spanish: "¿Tú te quedas aquí solo en Madrid?", armenian: "Դու մնո՞ւմ ես այստեղ մենակ՝ Մադրիդում։" }
    },
    él: {
      nonReflexive: { spanish: "Él queda con el director a las cinco.", armenian: "Նա պայմանավորվել է հանդիպել տնօրենի հետ ժամը հինգին։" },
      reflexive: { spanish: "Ella se queda en el hotel de Barcelona.", armenian: "Նա մնում է Բարսելոնայի հյուրանոցում։" }
    },
    nosotros: {
      nonReflexive: { spanish: "Nosotros quedamos para cenar comida mexicana.", armenian: "Մենք պայմանավորվել ենք հանդիպել մեքսիկական ուտելիք ընթրելու։" },
      reflexive: { spanish: "Nosotros nos quedamos sin dinero por comprar souvenirs.", armenian: "Մենք առանց գումարի մնացինք հուշանվերներ գնելու պատճառով։" }
    },
    vosotros: {
      nonReflexive: { spanish: "Vosotros quedáis en la biblioteca para estudiar.", armenian: "Դուք պայմանավորվել եք հանդիպել գրադարանում սովորելու։" },
      reflexive: { spanish: "Vosotros os quedáis sorprendidos con la noticia.", armenian: "Դուք զարմացած եք մնում այդ լուրից։" }
    },
    ellos: {
      nonReflexive: { spanish: "Ellos quedan los fines de semana en la Plaza.", armenian: "Նրանք հանգստյան օրերին պայմանավորվում են հանդիպել Հրապարակում։" },
      reflexive: { spanish: "Mis primos se quedan dos semanas en la playa.", armenian: "Իմ զարմիկները երկու շաբաթ մնում են լողափին։" }
    }
  },
  "levantar-levantarse": {
    yo: {
      nonReflexive: { spanish: "Yo levanto la mesa pesada de madera.", armenian: "Ես բարձրացնում եմ փայտե ծանր սեղանը։" },
      reflexive: { spanish: "Yo me levanto temprano cada lunes.", armenian: "Ես վեր եմ կենում շուտ ամեն երկուշաբթի։" }
    },
    tú: {
      nonReflexive: { spanish: "Tú levantas la mano para preguntar algo.", armenian: "Դու ձեռք ես բարձրացնում ինչ-որ բան հարցնելու համար։" },
      reflexive: { spanish: "Tú te levantas cansado de la cama.", armenian: "Դու հոգնած վեր ես կենում անկողնուց։ font-display" }
    },
    él: {
      nonReflexive: { spanish: "Él levanta su mochila de senderismo.", armenian: "Նա բարձրացնում է իր արշավային պայուսակը։" },
      reflexive: { spanish: "Mateo se levanta con una gran sonrisa hoy.", armenian: "Մատեոն վեր է կենում մեծ ժպիտով այսօր։" }
    },
    nosotros: {
      nonReflexive: { spanish: "Nosotros levantamos las copas para hacer un brindis.", armenian: "Մենք բարձրացնում ենք բաժակները՝ կենաց խմելու համար։" },
      reflexive: { spanish: "Nosotros nos levantamos de la silla de golpe.", armenian: "Մենք հանկարծակի վեր ենք կենում աթոռից։" }
    },
    vosotros: {
      nonReflexive: { spanish: "Vosotros levantáis cajas llenas de libros antiguos.", armenian: "Դուք բարձրացնում եք հին գրքերով լի արկղերը։" },
      reflexive: { spanish: "Vosotros os levantáis de dormir la siesta muy tarde.", armenian: "Դուք շատ ուշ եք վեր կենում հետմիջօրեի քնից։" }
    },
    ellos: {
      nonReflexive: { spanish: "Ellos levantan la cerca rota del jardín.", armenian: "Նրանք բարձրացնում են այգու փլված ցանկապատը։" },
      reflexive: { spanish: "Ellas se levantan felices el día de su graduación.", armenian: "Նրանք ուրախ վեր են կենում իրենց ավարտական օրը։" }
    }
  },
  "duchar-ducharse": {
    yo: {
      nonReflexive: { spanish: "Yo ducho a mi pequeño gato de tres meses.", armenian: "Ես լողացնում եմ իմ երեք ամսական փոքրիկ կատվին։" },
      reflexive: { spanish: "Yo me ducho rápido con agua templada.", armenian: "Ես արագ լողանում եմ գոլ ջրով։" }
    },
    tú: {
      nonReflexive: { spanish: "Tú duchas al perro Toby en el jardín.", armenian: "Դու լողացնում ես շանս՝ Տոբիին այգում։" },
      reflexive: { spanish: "Tú te duchas después de jugar al fútbol.", armenian: "Դու լողանում ես ֆուտբոլ խաղալուց հետո։" }
    },
    él: {
      nonReflexive: { spanish: "El veterinario ducha al perrito travieso.", armenian: "Անասնաբույժը լողացնում է չարաճճի շնիկին։" },
      reflexive: { spanish: "Él se ducha siempre antes de ir a dormir.", armenian: "Նա միշտ լողանում է քնելուց առաջ։" }
    },
    nosotros: {
      nonReflexive: { spanish: "Nosotros duchamos a los caballos en el establo.", armenian: "Մենք լողացնում ենք ձիերին ախոռում։" },
      reflexive: { spanish: "Nosotros nos duchamos con agua fría por el verano.", armenian: "Մենք լողանում ենք սառը ջրով ամռանը։" }
    },
    vosotros: {
      nonReflexive: { spanish: "¿Vosotros ducháis al bebé con esponja suave?", armenian: "Դուք լողացնո՞ւմ եք երեխային փափուկ սպունգով։" },
      reflexive: { spanish: "Vosotros os ducháis para quitaros la arena de la playa.", armenian: "Դուք լողանում եք լողափի ավազը մաքրելու համար։" }
    },
    ellos: {
      nonReflexive: { spanish: "Los cuidadores duchan a los elefantes del parque.", armenian: "Խնամողները լողացնում են այգու փղերին։" },
      reflexive: { spanish: "Ellos se duchan cantando canciones pop españolas.", armenian: "Նրանք լողանում են՝ երգելով իսպանական փոփ երգեր։" }
    }
  },
  "dormir-dormirse": {
    yo: {
      nonReflexive: { spanish: "Yo duermo profundamente los domingos de siesta.", armenian: "Ես խորը քնում եմ կիրակի օրերի կեսօրին։" },
      reflexive: { spanish: "Yo me duermo tarde por ver vídeos divertidos.", armenian: "Ես քնով եմ անցնում (ինձ քունը տանում է) ուշ՝ զվարճալի տեսահոլովակներ դիտելու պատճառով։" }
    },
    tú: {
      nonReflexive: { spanish: "¿Tú duermes con la luz encendida?", armenian: "Դու քնո՞ւմ ես միացրած լույսով։" },
      reflexive: { spanish: "Tú te duermes enseguida que tocas la almohada.", armenian: "Դու վայրկենապես քնով ես անցնում հենց դիպչում ես բարձին։" }
    },
    él: {
      nonReflexive: { spanish: "Él duerme muy tranquilo en el sillón rojo.", armenian: "Նա շատ հանգիստ քնում է կարմիր բազկաթոռին։" },
      reflexive: { spanish: "Mateo se duerme escuchando música relajante.", armenian: "Մատեոն քնով է անցնում հանգստացնող երաժշտություն լսելով։" }
    },
    nosotros: {
      nonReflexive: { spanish: "Nosotros dormimos ocho horas diarias sin problemas.", armenian: "Մենք անխնդիր քնում ենք օրական ութ ժամ։" },
      reflexive: { spanish: "Nosotros nos dormimos en el autobús público ayer.", armenian: "Մենք երեկ հասարակական ավտոբուսի մեջ քնով էինք անցել (աչքներս կպել էր)։" }
    },
    vosotros: {
      nonReflexive: { spanish: "¿Vosotros dormís en camas separadas en el viaje?", armenian: "Դուք առանձին մահճակալներո՞ւմ եք քնում ճանապարհորդության ժամանակ։" },
      reflexive: { spanish: "Vosotros os dormís en la conferencia aburrida.", armenian: "Դուք քնով եք անցնում ձանձրալի գիտաժողովի ժամանակ։" }
    },
    ellos: {
      nonReflexive: { spanish: "Los gatitos duermen juntos sobre la manta.", armenian: "Կատուները միասին քնում են վերմակի վրա։" },
      reflexive: { spanish: "Ellos se duermen de pie porque están exhaustos.", armenian: "Նրանք ոտքի վրա քնով են անցնում, որովհետև ուժասպառ են։" }
    }
  },
  "acostar-acostarse": {
    yo: {
      nonReflexive: { spanish: "Yo acuesto a mi abuelo con delicadeza.", armenian: "Ես խնամքով պառկեցնում եմ պապիկիս հանգստանալու։" },
      reflexive: { spanish: "Yo me acuesto feliz pensando en las vacaciones.", armenian: "Ես պառկում եմ քնելու երջանիկ՝ մտածելով արձակուրդների մասին։" }
    },
    tú: {
      nonReflexive: { spanish: "Tú acuestas al niño Mateo con una nana tierna.", armenian: "Դու պառկեցնում ես փոքրիկ Մատեոյին քնքուշ օրորոցայինով։" },
      reflexive: { spanish: "¿Tú te acuestas enfadado después de discutir?", armenian: "Դու պառկո՞ւմ ես քնելու ջղայնացած՝ վիճելուց հետո։" }
    },
    él: {
      nonReflexive: { spanish: "Carlos acuesta al osito de peluche en la cama.", armenian: "Կառլոսը խաղալիք արջուկին պառկեցնում է մահճակալին։" },
      reflexive: { spanish: "Ella se acuesta en el sofá por estar muy cansada.", armenian: "Նա պառկում է բազմոցին՝ շատ հոգնած լինելու պատճառով։" }
    },
    nosotros: {
      nonReflexive: { spanish: "Nosotros acostamos a los cachorros en sus cestas.", armenian: "Մենք պառկեցնում ենք լակոտներին իրենց զամբյուղներում։" },
      reflexive: { spanish: "Nosotros nos acostamos a medianoche los sábados.", armenian: "Մենք շաբաթ օրերին կեսգիշերին ենք պառկում քնելու։" }
    },
    vosotros: {
      nonReflexive: { spanish: "Vosotros acostáis a los heridos en las camillas.", armenian: "Դուք պառկեցնում եք վիրավորներին պատգարակների վրա։" },
      reflexive: { spanish: "Vosotros os acostáis pensando en el examen de mañana.", armenian: "Դուք պառկում եք քնելու՝ մտածելով վաղվա քննության մասին։" }
    },
    ellos: {
      nonReflexive: { spanish: "Los doctores acuestan a los pacientes sedados.", armenian: "Բժիշկները պառկեցնում են թմրեցված հիվանդներին։" },
      reflexive: { spanish: "Ellos se acuestan sin cenar por falta de tiempo.", armenian: "Նրանք պառկում են քնելու առանց ընթրելու՝ ժամանակի սղության պատճառով։" }
    }
  },
  "vestir-vestirse": {
    yo: {
      nonReflexive: { spanish: "Yo visto al maniquí de la tienda de ropa.", armenian: "Ես հագցնում եմ հագուստի խանութի մանեկենին։" },
      reflexive: { spanish: "Yo me visto formal para la entrevista de trabajo.", armenian: "Ես հագնվում եմ պաշտոնական՝ աշխատանքային հարցազրույցի համար։" }
    },
    tú: {
      nonReflexive: { spanish: "Tú vistes a tu muñeca favorita con sombrero.", armenian: "Դու հագցնում ես քո սիրելի տիկնիկին գլխարկով։" },
      reflexive: { spanish: "Tú te vistes a la moda con sudaderas anchas.", armenian: "Դու հագնվում ես նորաձև՝ լայն սպորտային շապիկներով։" }
    },
    él: {
      nonReflexive: { spanish: "La actriz viste a sus hijos con abrigos rojos.", armenian: "Դերասանուհին հագցնում է իր երեխաներին կարմիր վերարկուներով։" },
      reflexive: { spanish: "Él se viste rápido porque llega tarde al metro.", armenian: "Նա արագ հագնվում է, քանի որ ուշանում է մետրոյից։" }
    },
    nosotros: {
      nonReflexive: { spanish: "Nosotros vestimos a los actores del teatro escolar.", armenian: "Մենք հագցնում ենք դպրոցական թատրոնի դերասաններին։" },
      reflexive: { spanish: "Nosotros nos vestimos de traje para asistir al evento.", armenian: "Մենք կոստյում ենք հագնում միջոցառմանը մասնակցելու համար։" }
    },
    vosotros: {
      nonReflexive: { spanish: "Vosotros vestís a la mascota con abrigo de lana.", armenian: "Դուք հագցնում եք ձեր տնային կենդանուն բրդյա վերարկուով։" },
      reflexive: { spanish: "¿Vosotros os vestís informales para ir al cine?", armenian: "Դուք սովորակա՞ն հագուստ եք հագնում կինո գնալու համար։" }
    },
    ellos: {
      nonReflexive: { spanish: "Los sastres visten a los novios para el gran día.", armenian: "Դերձակները հագցնում են փեսացուներին մեծ օրվա համար։" },
      reflexive: { spanish: "Ellos se visten con colores oscuros en invierno.", armenian: "Նրանք ձմռանը մուգ գույներով են հագնվում։" }
    }
  }
};

export default function SandboxConjugator() {
  const [selectedPairId, setSelectedPairId] = useState<string>("quedar-quedarse");
  const [selectedSubjectCode, setSelectedSubjectCode] = useState<string>("yo");

  const activePair = VERB_PAIRS.find(p => p.id === selectedPairId) || VERB_PAIRS[0];

  const subjectsList = [
    { code: 'yo', label: 'Yo (Ես)' },
    { code: 'tú', label: 'Tú (Դու)' },
    { code: 'él', label: 'Él/Ella/Usted (Նա)' },
    { code: 'nosotros', label: 'Nosotros (Մենք)' },
    { code: 'vosotros', label: 'Vosotros (Դուք)' },
    { code: 'ellos', label: 'Ellos/Ellas/Ustedes (Նրանք)' },
  ];

  const pronounsMap: Record<string, string> = {
    yo: 'me',
    tú: 'te',
    él: 'se',
    nosotros: 'nos',
    vosotros: 'os',
    ellos: 'se'
  };

  const currentDynamicSentence = SANDBOX_SENTENCES_MAP[selectedPairId]?.[selectedSubjectCode];

  // Get current simple and reflexive conjugated formulas
  const simpleConjugated = (activePair.nonReflexive.conjugations as any)[selectedSubjectCode];
  const reflexiveConjugated = (activePair.reflexive.conjugations as any)[selectedSubjectCode];
  const currentPronoun = pronounsMap[selectedSubjectCode];

  return (
    <div className="space-y-6">
      
      {/* Description header card */}
      <div className="bg-white border-2 border-orange-100 rounded-3xl p-5 md:p-6 shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-orange-100 text-orange-600 p-2.5 rounded-2xl">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-black text-slate-900 font-display">
              🛠️ Ինտերակտիվ Խոնարհիչ և Սանդղակ (Interactive Sandbox)
            </h3>
            <p className="text-slate-500 text-xs md:text-sm mt-1 font-medium">
              Ընտրեք ցանկացած բայական զույգ և դերանուն՝ տեսնելու համար side-by-side հատուկ խոնարհումը և կիրառական նախադասությունը։
            </p>
          </div>
        </div>
      </div>

      {/* Control Configuration layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Step 1: Verb Selector */}
        <div className="bg-white p-4 rounded-2xl border-2 border-orange-100 shadow-3xs space-y-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest block font-mono">
            Քայլ 1: Ընտրել Բայազույգը (Verbo)
          </label>
          <div className="relative">
            <select
              id="select-verb-pair"
              value={selectedPairId}
              onChange={(e) => setSelectedPairId(e.target.value)}
              className="w-full bg-orange-50/20 border-2 border-orange-100 rounded-xl px-4 py-3 text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none cursor-pointer"
            >
              {VERB_PAIRS.map(pair => (
                <option key={pair.id} value={pair.id}>
                  {pair.title} ({pair.titleArm})
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400 text-xs">
              ▼
            </div>
          </div>
        </div>

        {/* Step 2: Subject Selector */}
        <div className="bg-white p-4 rounded-2xl border-2 border-orange-100 shadow-3xs space-y-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-widest block font-mono">
            Քայլ 2: Ընտրել Դերանունը (Sujeto)
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {subjectsList.map(s => {
              const isSelected = s.code === selectedSubjectCode;
              return (
                <button
                  key={s.code}
                  onClick={() => setSelectedSubjectCode(s.code)}
                  className={`px-2 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer text-center ${
                    isSelected
                      ? 'bg-orange-500 text-white border-transparent shadow-md font-extrabold'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-orange-50/20 hover:text-orange-950'
                  }`}
                >
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Live Side-by-Side Playground results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        
        {/* Non-reflexive Outcome Output */}
        <div className="bg-blue-50/20 rounded-3xl border-2 border-blue-100 p-5 md:p-6 shadow-md space-y-5">
          
          <div className="flex items-center gap-2">
            <span className="bg-blue-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
              պարզ ձև / Simple
            </span>
            <span className="text-sm font-mono font-bold text-blue-700">
              {activePair.nonReflexive.name}
            </span>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] block font-mono text-slate-400 uppercase tracking-widest font-black">խոնարհման բանաձևը</span>
            <div className="bg-white p-4 rounded-xl border border-blue-100/60 shadow-xs">
              <span className="text-xs text-slate-400 block font-mono uppercase">{selectedSubjectCode}</span>
              <span className="text-2xl font-mono font-extrabold text-blue-900 block mt-1">
                {simpleConjugated}
              </span>
            </div>
          </div>

          {currentDynamicSentence && (
            <div className="space-y-2">
              <span className="text-[10px] block font-mono text-slate-400 uppercase tracking-widest font-black">նմուշային նախադասություն</span>
              <div className="bg-white p-4 rounded-xl border border-blue-100/60 shadow-xs space-y-2">
                <p className="font-mono text-sm font-bold text-blue-950 border-l-4 border-blue-500 pl-2.5">
                  {currentDynamicSentence.nonReflexive.spanish}
                </p>
                <p className="text-xs text-slate-600 font-medium pt-1">
                  {currentDynamicSentence.nonReflexive.armenian}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Reflexive Outcome Output */}
        <div className="bg-orange-50/20 rounded-3xl border-2 border-orange-100 p-5 md:p-6 shadow-md space-y-5">
          
          <div className="flex items-center gap-2">
            <span className="bg-orange-500 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
              անդրադարձ ձև / Reflexivo
            </span>
            <span className="text-sm font-mono font-bold text-orange-600">
              {activePair.reflexive.name}
            </span>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] block font-mono text-slate-400 uppercase tracking-widest font-black">խոնարհման բանաձևը</span>
            <div className="bg-white p-4 rounded-xl border border-orange-100/60 shadow-xs">
              <span className="text-xs text-slate-400 block font-mono uppercase">{selectedSubjectCode} + pronombre</span>
              <span className="text-2xl font-mono font-extrabold text-slate-900 block mt-1">
                <span className="text-orange-600 bg-orange-100/80 px-1.5 py-0.5 rounded-md mr-1 font-black">{currentPronoun}</span>
                <span>{reflexiveConjugated.replace(currentPronoun + ' ', '')}</span>
              </span>
            </div>
          </div>

          {currentDynamicSentence && (
            <div className="space-y-2">
              <span className="text-[10px] block font-mono text-slate-400 uppercase tracking-widest font-black">նմուշային նախադասություն</span>
              <div className="bg-white p-4 rounded-xl border border-orange-100/60 shadow-xs space-y-2">
                <p className="font-mono text-sm font-bold text-orange-950 border-l-4 border-orange-500 pl-2.5">
                  {currentDynamicSentence.reflexive.spanish}
                </p>
                <p className="text-xs text-slate-600 font-medium pt-1">
                  {currentDynamicSentence.reflexive.armenian}
                </p>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Logic review widget */}
      <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 text-white p-6 rounded-3xl border-2 border-orange-200 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="text-3xl mt-0.5 animate-bounce">💡</div>
          <div className="space-y-1.5 text-xs md:text-sm">
            <h4 className="font-black text-white text-base font-display uppercase tracking-wider">Ինչպե՞ս հիշել անդրադարձ դարձվածքները</h4>
            <p className="leading-relaxed font-bold opacity-95">
              Եթե գործողությունը կատարում եք <strong>ինքներդ ձեր մարմնի վրա</strong> (լողանում եք, հագնվում եք, արթնանում եք, պառկում եք քնելու, ինչ-որ տեղ մնում եք), օգտագործեք <span className="bg-white text-orange-600 px-2 py-0.5 rounded-full font-black ml-1">անդրադարձ ձևը</span> (me, te, se, nos, os, se)։ Եթե գործողությունը <strong>այլ մարդու, կենդանու կամ առարկայի վրա է</strong>, օգտագործեք <span className="bg-white text-blue-600 px-2 py-0.5 rounded-full font-black ml-1">պարզ չանդրադարձ բայը</span>:
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
