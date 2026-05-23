export interface Conjugation {
  yo: string;
  tú: string;
  él: string; // él / ella / usted
  nosotros: string;
  vosotros: string;
  ellos: string; // ellos / ellas / ustedes
}

export interface ExampleSentence {
  spanish: string;
  armenian: string;
  explanation: string;
}

export interface VerbDetail {
  name: string;
  translatedArm: string;
  nuance: string;
  conjugations: Conjugation;
  examples: ExampleSentence[];
}

export interface VerbPair {
  id: string;
  title: string;
  titleArm: string;
  contrastExplanation: string;
  nonReflexive: VerbDetail;
  reflexive: VerbDetail;
}

export interface GameScenario {
  id: number;
  stage: 'morning' | 'afternoon' | 'evening';
  situation: string;
  situationArm: string;
  dialoguePedrito: string;
  dialoguePedritoArm: string;
  imageAlt: string;
  options: {
    text: string;
    isCorrect: boolean;
    explanationArm: string;
  }[];
}

export const VERB_PAIRS: VerbPair[] = [
  {
    id: "quedar-quedarse",
    title: "quedar vs quedarse",
    titleArm: "quedar (պայմանավորվել) vs quedarse (մնալ)",
    contrastExplanation: "Այս զույգը իսպաներենի ամենակիրառական և հաճախ շփոթեցնող բայերից է։ Quedar-ը նշանակում է հանդիպման պայմանավորվել կամ ինչ-որ բանից մնալ (գումար, ժամանակ), իսկ quedarse-ն՝ մնալ որևէ ֆիզիկական վայրում կամ որոշակի հաստատուն վիճակում։",
    nonReflexive: {
      name: "quedar",
      translatedArm: "պայմանավորվել հանդիպել, մնալ (չափի իմաստով)",
      nuance: "Օգտագործվում է, երբ ընկերների հետ հանդիպում եք կազմակերպում («լռվում» եք մի տեղ), կամ երբ ինչ-որ բանից քանակ է մնում (օրինակ՝ ժամանակ, գումար, ուտելիք)։",
      conjugations: {
        yo: "quedo",
        tú: "quedas",
        él: "queda",
        nosotros: "quedamos",
        vosotros: "quedáis",
        ellos: "quedan"
      },
      examples: [
        {
          spanish: "Hoy quedo con mis amigos a las 6 de la tarde.",
          armenian: "Այսօր ես պայմանավորվել եմ հանդիպել ընկերներիս հետ երեկոյան ժամը 6-ին։",
          explanation: "Ցույց է տալիս հանդիպման պայմանավորվածություն։"
        },
        {
          spanish: "¿Cuánto tiempo nos queda para entregar el examen?",
          armenian: "Որքա՞ն ժամանակ է մեզ մնացել քննությունը հանձնելու համար։",
          explanation: "Ցույց է տալիս մնացորդային ժամանակ։"
        },
        {
          spanish: "No me queda dinero en la billetera.",
          armenian: "Դրամապանակումս գումար չի մնացել։",
          explanation: "Ցույց է տալիս գումարային մնացորդ։"
        }
      ]
    },
    reflexive: {
      name: "quedarse",
      translatedArm: "մնալ որևէ վայրում (տանը, հյուրանոցում, մտքում)",
      nuance: "Միշտ օգտագործում է անդրադարձ դերանուններ (me, te, se, nos, os, se)։ Նշանակում է պահպանել ֆիզիկական տեղը կամ մարմնական/հոգեկան վիճակը (կանգնել, ապշած մնալ, մոլորվել)։",
      conjugations: {
        yo: "me quedo",
        tú: "te quedas",
        él: "se queda",
        nosotros: "nos quedamos",
        vosotros: "os quedáis",
        ellos: "se quedan"
      },
      examples: [
        {
          spanish: "Hace frío, así que hoy me quedo en casa de mis abuelos.",
          armenian: "Ցուրտ է, ուստի այսօր ես մնում եմ տատիկիս ու պապիկիս տանը։",
          explanation: "Ֆիզիկապես տանը մնալը։"
        },
        {
          spanish: "Ellos se quedaron muy sorprendidos con la noticia.",
          armenian: "Նրանք շատ զարմացած մնացին այդ լուրից։",
          explanation: "Հոգեվիճակի պահպանումը (զարմացած մնալը)։"
        },
        {
          spanish: "Nos quedamos tres noches en un hotel precioso en Barcelona.",
          armenian: "Մենք երեք գիշեր մնացինք Բարսելոնայի մի գեղեցիկ հյուրանոցում։",
          explanation: "Ժամանակավոր կացություն որոշակի վայրում։"
        }
      ]
    }
  },
  {
    id: "levantar-levantarse",
    title: "levantar vs levantarse",
    titleArm: "levantar (բարձրացնել) vs levantarse (վեր կենալ)",
    contrastExplanation: "Levantar-ը նշանակում է բարձրացնել ինչ-որ առարկա կամ այլ անձի, իսկ անդրադարձ Levantarse-ն նշանակում է սեփական մարմինը բարձրացնել (անկողնուց վեր կենալ, ոտքի կանգնել)։",
    nonReflexive: {
      name: "levantar",
      translatedArm: "բարձրացնել (ինչ-որ առարկա կամ ուրիշին)",
      nuance: "Գործողությունն ուղղված է արտաքին առարկայի, ծանրության կամ այլ մարդու վրա։",
      conjugations: {
        yo: "levanto",
        tú: "levantas",
        él: "levanta",
        nosotros: "levantamos",
        vosotros: "levantáis",
        ellos: "levantan"
      },
      examples: [
        {
          spanish: "Yo levanto las pesas en el gimnasio todos los días.",
          armenian: "Ամեն օր ես մարզասրահում ծանրություններ եմ բարձրացնում։",
          explanation: "Գործողությունն ուղղված է ծանրության վրա։"
        },
        {
          spanish: "Por favor, levanta la mano si tienes alguna pregunta.",
          armenian: "Խնդրում եմ, բարձրացրու ձեռքդ, եթե հարց ունես։",
          explanation: "Մարմնի մասի (ձեռքի) ֆիզիկական բարձրացումը։"
        },
        {
          spanish: "La grúa levanta el coche averiado.",
          armenian: "Ամբարձիչը բարձրացնում է փչացած մեքենան։",
          explanation: "Այլ առարկայի բարձրացում։"
        }
      ]
    },
    reflexive: {
      name: "levantarse",
      translatedArm: "արթնանալ-վեր կենալ, ոտքի կանգնել",
      nuance: "Քանի որ այն անդրադարձ է, նշանակում է «ինքն իրեն բարձրացնել»։ Օգտագործվում է առավոտյան անկողնուց վեր կենալու կամ աթոռից ոտքի կանգնելու իմաստով։",
      conjugations: {
        yo: "me levanto",
        tú: "te levantas",
        él: "se levanta",
        nosotros: "nos levantamos",
        vosotros: "os levantáis",
        ellos: "se levantan"
      },
      examples: [
        {
          spanish: "Me levanto a las siete de la mañana para ir a trabajar.",
          armenian: "Ես վեր եմ կենում առավոտյան ժամը յոթին՝ աշխատանքի գնալու համար։",
          explanation: "Առավոտյան անկողնուց վեր կենալը։"
        },
        {
          spanish: "¡Levántate, por favor! Vamos a llegar tarde.",
          armenian: "Վե՛ր կաց, խնդրում եմ։ Մենք ուշանալու ենք։",
          explanation: "Հրամայական ձև՝ ոտքի կանգնելու համար։"
        },
        {
          spanish: "Nos levantamos de la silla cuando entra el profesor.",
          armenian: "Մենք վեր ենք կենում աթոռից, երբ ներս է մտնում ուսուցիչը։",
          explanation: "Աթոռից ոտքի կանգնելը։"
        }
      ]
    }
  },
  {
    id: "duchar-ducharse",
    title: "duchar vs ducharse",
    titleArm: "duchar (լողացնել) vs ducharse (լողանալ)",
    contrastExplanation: "Duchar-ն օգտագործվում է, երբ մենք լողացնում ենք երեխային, տան կենդանուն կամ մեկ ուրիշին։ Ducharse-ն անդրադարձ է և նշանակում է սեփական մարմինը լվանալ՝ լողանալ, ցնցուղ ընդունել։",
    nonReflexive: {
      name: "duchar",
      translatedArm: "լողացնել, ցնցուղի տակ պահել մեկ ուրիշին",
      nuance: "Գործողությունը կիրառվում է այլ էակի կամ առարկայի վրա։",
      conjugations: {
        yo: "ducho",
        tú: "duchas",
        él: "ducha",
        nosotros: "duchamos",
        vosotros: "ducháis",
        ellos: "duchan"
      },
      examples: [
        {
          spanish: "Primero ducho a mi perro Toby porque está lleno de barro.",
          armenian: "Առաջինը ես լողացնում եմ շանս՝ Տոբիին, քանի որ նա ամբողջովին ցեխոտ է։",
          explanation: "Գործողությունը կատարվում է շան վրա։"
        },
        {
          spanish: "Los padres duchan a sus bebés antes de dormir.",
          armenian: "Ծնողները լողացնում են իրենց փոքրիկներին քնելուց առաջ։",
          explanation: "Գործողությունը կատարվում է ուրիշների (երեխաների) վրա։"
        }
      ]
    },
    reflexive: {
      name: "ducharse",
      translatedArm: "լողանալ, լոգանք ընդունել (ինքն իրեն)",
      nuance: "Օգտագործվում է սեփական անձի լողանալու մասին խոսելիս։ Ամենօրյա հիգիենայի անբաժանելի մասը։",
      conjugations: {
        yo: "me ducho",
        tú: "te duchas",
        él: "se ducha",
        nosotros: "nos duchamos",
        vosotros: "os ducháis",
        ellos: "se duchan"
      },
      examples: [
        {
          spanish: "Yo siempre me ducho con agua fría por las mañanas.",
          armenian: "Ես առավոտյան միշտ լողանում եմ սառը ջրով։",
          explanation: "Սեփական անձի առավոտյան լողանալը։"
        },
        {
          spanish: "¿Te duchas por la noche o por la mañana?",
          armenian: "Դու լողանո՞ւմ ես գիշերը, թե՞ առավոտյան։",
          explanation: "Հարց ընկերոջը սեփական սովորության մասին։"
        }
      ]
    }
  },
  {
    id: "dormir-dormirse",
    title: "dormir vs dormirse",
    titleArm: "dormir (քնել) vs dormirse (քնով անցնել)",
    contrastExplanation: "Dormir-ը նշանակում է քնելու տևական վիճակը (կատարվող գործընթացը), իսկ Dormirse-ն նշանակում է քնելու գործողության սկիզբը (քնով անցնել, անսպասելիորեն քնել կամ անցնել քնի աշխարհ)։",
    nonReflexive: {
      name: "dormir",
      translatedArm: "քնել (քնած վիճակում լինել, տևողություն)",
      nuance: "Օգտագործվում է քնելու տևողությունը, ժամաքանակը կամ պարզապես քնի պրոցեսը նշելու համար։",
      conjugations: {
        yo: "duermo",
        tú: "duermes",
        él: "duerme",
        nosotros: "dormimos",
        vosotros: "dormís",
        ellos: "duermen"
      },
      examples: [
        {
          spanish: "Normalmente duermo ocho horas diarias para estar sano.",
          armenian: "Սովորաբար ես քնում եմ օրական ութ ժամ՝ առողջ լինելու համար։",
          explanation: "Քնի տևողության նկարագրություն։"
        },
        {
          spanish: "El gato duerme pacíficamente sobre el sofá de cuero.",
          armenian: "Կատուն խաղաղ քնած է կաշվե բազմոցի վրա։",
          explanation: "Քնի վիճակի նկարագրություն։"
        }
      ]
    },
    reflexive: {
      name: "dormirse",
      translatedArm: "քնել / քնով անցնել (գործողության սկիզբը, անսպասելի քնելը)",
      nuance: "Ցույց է տալիս անցումը արթուն վիճակից քնած վիճակի («քունը տանել») կամ նախատեսվածից ավելի երկար քնելը (աշխատանքից ուշանալու պատճառով)։",
      conjugations: {
        yo: "me duermo",
        tú: "te duermes",
        él: "se duerme",
        nosotros: "nos dormimos",
        vosotros: "os dormís",
        ellos: "se duermen"
      },
      examples: [
        {
          spanish: "Ayer me dormí en el metro y me pasé de la estación.",
          armenian: "Երեկ ես մետրոյում քնով անցա (ինձ քունը տարավ) և բաց թողեցի կանգառը։",
          explanation: "Անսպասելի կերպով քնով անցնելը։"
        },
        {
          spanish: "¡Rápido! El bebé se duerme si le cantas una canción de cuna.",
          armenian: "Արա՛գ, փոքրիկը կքնի (քունը կտանի), եթե նրա համար օրորոցային երգես։",
          explanation: "Քնելու գործընթացի անցումային պահը։"
        },
        {
          spanish: "Lo siento, me dormí y no escuché el despertador.",
          armenian: "Կներես, ես քնով էի անցել (ուշացել եմ քնելուց / աչքս կպել էր) և չլսեցի զարթուցիչը։",
          explanation: "Իրավիճակ, երբ մարդը «քնով է ընկել» և բաց թողել զարթուցիչը։"
        }
      ]
    }
  },
  {
    id: "acostar-acostarse",
    title: "acostar vs acostarse",
    titleArm: "acostar (պառկեցնել) vs acostarse (պառկել քնելու)",
    contrastExplanation: "Acostar բայը նշանակում է պառկեցնել մեկ այլ անձի (օրինակ՝ երեխային) կամ հորիզոնական դիրք տալ առարկային։ Acostarse-ն անդրադարձ է և նշանակում է ինքնուրույն գնալ անկողին՝ պառկել քնելու։",
    nonReflexive: {
      name: "acostar",
      translatedArm: "պառկեցնել (ուրիշին)",
      nuance: "Գործողությունը կատարվում է այլ մարդու կամ էակի վրա, ում պառկեցնում են քնելու կամ հանգստանալու։",
      conjugations: {
        yo: "acuesto",
        tú: "acuestas",
        él: "acuesta",
        nosotros: "acostamos",
        vosotros: "acostáis",
        ellos: "acuestan"
      },
      examples: [
        {
          spanish: "Yo acuesto a mi hermano pequeño a las nueve de la noche.",
          armenian: "Ես պառկեցնում եմ իմ փոքր եղբորը քնելու երեկոյան ժամը իննին։",
          explanation: "Գործողությունը կատարվում է եղբոր վրա։"
        },
        {
          spanish: "La enfermera acuesta al paciente con mucho cuidado.",
          armenian: "Բուժքույրը մեծ զգուշությամբ պառկեցնում է հիվանդին։",
          explanation: "Հիվանդին մահճակալին պառկեցնելը։"
        }
      ]
    },
    reflexive: {
      name: "acostarse",
      translatedArm: "պառկել քնելու, գնալ քնելու (ինքդ քեզ)",
      nuance: "Նշանակում է «սեփական անձին պառկեցնել»։ Կիրառվում է, երբ անձամբ գնում եք քնելու սովորության կամ գործողության մասին խոսելիս։",
      conjugations: {
        yo: "me acuesto",
        tú: "te acuestas",
        él: "se acuesta",
        nosotros: "nos acostamos",
        vosotros: "os acuestaís",
        ellos: "se acuestan"
      },
      examples: [
        {
          spanish: "Los fines de semana me acuesto muy tarde viendo series.",
          armenian: "Հանգստյան օրերին ես շատ ուշ եմ պառկում քնելու՝ սերիալներ դիտելով։",
          explanation: "Անձնական քնելու սովորությունը։"
        },
        {
          spanish: "¿A qué hora te acuestas los lunes?",
          armenian: "Երկուշաբթի օրերին ժամը քանիսի՞ն ես պառկում քնելու։",
          explanation: "Հարց ընկերոջը նրա քնելու ժամի մասին։"
        }
      ]
    }
  },
  {
    id: "vestir-vestirse",
    title: "vestir vs vestirse",
    titleArm: "vestir (հագցնել) vs vestirse (հագնվել)",
    contrastExplanation: "Vestir բայը օգտագործվում է, երբ մենք հագուստ ենք հագցնում մեկ այլ անձի (կամ տիկնիկին, կենդանուն) կամ ձևավորում ենք նորաձևությունը։ Vestirse-ն անդրադարձ է և նշանակում է սեփական մարմինը հագցնել՝ հագնվել։",
    nonReflexive: {
      name: "vestir",
      translatedArm: "հագցնել (մեկ ուրիշին), հագուստով ապահովել",
      nuance: "Օբյեկտը մեկ այլ անձ է, կամ էլ օգտագործվում է նորաձևության մեջ՝ որպես «ոճավորել» կամ «կրել» որոշակի հագուստ առանց անդրադարձի։",
      conjugations: {
        yo: "visto",
        tú: "vistes",
        él: "viste",
        nosotros: "vestimos",
        vosotros: "vestís",
        ellos: "visten"
      },
      examples: [
        {
          spanish: "La diseñadora viste a las modelos con vestidos de seda.",
          armenian: "Դիզայները հագցնում է մոդելներին մետաքսե զգեստներ։",
          explanation: "Գործողությունը կատարվում է մոդելների վրա։"
        },
        {
          spanish: "La madre viste al niño con ropa de invierno.",
          armenian: "Մայրը հագցնում է երեխային ձմեռային հագուստով։",
          explanation: "Երեխային հագնելուն օգնելը։"
        }
      ]
    },
    reflexive: {
      name: "vestirse",
      translatedArm: "հագնվել (ինքն իրեն)",
      nuance: "Նշանակում է «ինքն իրեն հագցնել»։ Կարևոր է առավոտյան դուրս գալուց առաջ կամ պատրաստվելիս։",
      conjugations: {
        yo: "me visto",
        tú: "te vistes",
        él: "se viste",
        nosotros: "nos vestimos",
        vosotros: "os vestís",
        ellos: "se visten"
      },
      examples: [
        {
          spanish: "Me visto rápidamente en cinco minutos por la mañana.",
          armenian: "Առավոտյան ես արագ հագնվում եմ հինգ րոպեում։",
          explanation: "Սեփական անձի հագնվելու արագությունը։"
        },
        {
          spanish: "Hoy se visten elegantes porque van a una boda fantástica.",
          armenian: "Այսօր նրանք շքեղ են հագնվել, որովհետև գնում են հիասքանչ հարսանիքի։",
          explanation: "Նրանց սեփական հագնվելու կերպը հատուկ առիթով։"
        }
      ]
    }
  }
];

export const GAME_SCENARIOS: GameScenario[] = [
  {
    id: 1,
    stage: "morning",
    situation: "7:00 AM - ¡Arriba!",
    situationArm: "7:00 Առավոտ - Վե՛ր կաց։",
    dialoguePedrito: "¿Cómo se dice 'ես վեր եմ կենում' en español?",
    dialoguePedritoArm: "Ինչպե՞ս կասենք իսպաներեն «ես վեր եմ կենում (անկողնուց)»:",
    imageAlt: "Waking up in the morning",
    options: [
      {
        text: "Yo me levanto",
        isCorrect: true,
        explanationArm: "Ճի՛շտ է: 'Levantarse' անդրադարձ բայը նշանակում է սեփական մարմինը բարձրացնել (վեր կենալ)։"
      },
      {
        text: "Yo levanto",
        isCorrect: false,
        explanationArm: "Ո՛չ, 'levanto' նշանակում է բարձրացնել ինչ-որ արտաքին առարկա, ոչ թե ինքդ քեզ։"
      }
    ]
  },
  {
    id: 2,
    stage: "morning",
    situation: "7:30 AM - Pesas",
    situationArm: "7:30 Առավոտ - Մարզումներ։",
    dialoguePedrito: "Hago ejercicio y... las pesas pesadas con mis brazos.",
    dialoguePedritoArm: "Ես մարզվում եմ և... բարձրացնում եմ ծանր հանտելները իմ ձեռքերով։",
    imageAlt: "Lifting weighted sport dumbbells",
    options: [
      {
        text: "levanto las pesas",
        isCorrect: true,
        explanationArm: "Ճի՛շտ է: 'Levanto' (բարձրացնում եմ)՝ առանց անդրադարձի, քանի որ գործողությունն ուղղված է արտաքին առարկայի վրա։"
      },
      {
        text: "me levanto las pesas",
        isCorrect: false,
        explanationArm: "Սխալ է: 'Me levanto' նշանակում է դուք եք վեր կենում: Ծանրություն բարձրացնելու համար պետք է սովորական 'levanto':"
      }
    ]
  },
  {
    id: 3,
    stage: "morning",
    situation: "8:00 AM - Higiene",
    situationArm: "8:00 Առավոտ - Լոգանք։",
    dialoguePedrito: "Para empezar el día con energía, 'ես լողանում եմ' con agua fresca.",
    dialoguePedritoArm: "Օրն էներգիայով սկսելու համար՝ «ես լողանում եմ» զով ջրով։",
    imageAlt: "Taking a fresh morning shower",
    options: [
      {
        text: "me ducho",
        isCorrect: true,
        explanationArm: "Ճի՛շտ է: 'Ducharse'-ն անդրադարձ բայ է (լողանալ), որովհետև ինքներս մեզ ենք լվանում։"
      },
      {
        text: "ducho",
        isCorrect: false,
        explanationArm: "Սխալ է: Առանց 'me' անդրադարձ դերանվանի, 'ducho' նշանակում է մեկ ուրիշին լողացնել։"
      }
    ]
  },
  {
    id: 4,
    stage: "morning",
    situation: "8:30 AM - El perro Toby",
    situationArm: "8:30 Առավոտ - Շնիկը կեղտոտ է։",
    dialoguePedrito: "El perrito está mojado y sucio de tierra. Yo... al perro en la bañera.",
    dialoguePedritoArm: "Շնիկը թաց է և կեղտոտված։ Ես... լողացնում եմ շանը լոգարանում։",
    imageAlt: "Washing a cute small puppy",
    options: [
      {
        text: "ducho al perro",
        isCorrect: true,
        explanationArm: "Հիանալի է: Քանի որ լողացնում ենք ուրիշին (շանը), ապա օգտագործվում է ոչ անդրադարձ 'ducho' սովորական կառույցը։"
      },
      {
        text: "me ducho al perro",
        isCorrect: false,
        explanationArm: "Սխալ է: 'Me ducho al perro' կնշանակեր, որ դուք ինքներդ ձեզ եք լողացնում շան վրա, ինչն անիմաստ է:"
      }
    ]
  },
  {
    id: 5,
    stage: "afternoon",
    situation: "14:00 PM - Planes con amigos",
    situationArm: "14:00 Կեսօր - Ծրագրեր ընկերների հետ։",
    dialoguePedrito: "¿Cómo expresamos 'մենք պայմանավորվել ենք հանդիպել' a las 5:00 de la tarde?",
    dialoguePedritoArm: "Ինչպե՞ս կասենք «մենք պայմանավորվել ենք հանդիպել» ժամը 5-ին։",
    imageAlt: "Meeting friends in town",
    options: [
      {
        text: "quedamos",
        isCorrect: true,
        explanationArm: "Բրավո՛: 'Quedar' նշանակում է պայմանավորվել հանդիպել։ Սա իսպանացիների ամենասիրելի առօրյա բառերից է։"
      },
      {
        text: "nos quedamos",
        isCorrect: false,
        explanationArm: "Ո՛չ, 'nos quedamos' նշանակում է «մենք մնում ենք» որևէ վայրում (օրինակ՝ տանը, հյուրանոցում)։"
      }
    ]
  },
  {
    id: 6,
    stage: "afternoon",
    situation: "16:00 PM - Hace frío fuera",
    situationArm: "16:00 Կեսօր - Ցուրտ է դրսում։",
    dialoguePedrito: "No quiero salir con esta lluvia. 'Ես տանն եմ մնում' a leer un libro.",
    dialoguePedritoArm: "Չեմ ուզում դուրս գալ այս ցուրտ անձրևին։ «Ես մնում եմ տանը»՝ գիրք կարդալու։",
    imageAlt: "Staying warm inside home reading",
    options: [
      {
        text: "Me quedo en casa",
        isCorrect: true,
        explanationArm: "Ճի՛շտ է: 'Quedarse' անդրադարձ բայն օգտագործվում է որևէ վայրում ֆիզիկապես մնալու համար (մնալ)։"
      },
      {
        text: "Quedo en casa",
        isCorrect: false,
        explanationArm: "Սխալ է: Առանց 'me'-ի 'quedo' նշանակում է պայմանավորվել հանդիպել, ոչ թե մնալ։"
      }
    ]
  },
  {
    id: 7,
    stage: "afternoon",
    situation: "17:00 PM - Prepararse para salir",
    situationArm: "17:00 Կեսօր - Պատրաստվել դուրս գալու։",
    dialoguePedrito: "Voy a una cafetería elegante, así que 'ես հագնվում եմ' con ropa limpia.",
    dialoguePedritoArm: "Գնում եմ նրբագեղ սրճարան, ուստի «ես հագնվում եմ» մաքուր հագուստով։",
    imageAlt: "Getting dressed in beautiful clothes",
    options: [
      {
        text: "me visto",
        isCorrect: true,
        explanationArm: "Ճի՛շտ է: 'Vestirse' նշանակում է ինքն իրեն հագցնել (հագնվել)։"
      },
      {
        text: "visto",
        isCorrect: false,
        explanationArm: "Սխալ է: Առանց 'me'-ի 'visto' նշանակում է հագցնել մեկ ուրիշին (օրինակ՝ երեխային)։"
      }
    ]
  },
  {
    id: 8,
    stage: "evening",
    situation: "20:00 PM - El niño pequeño",
    situationArm: "20:00 Երեկո - Փոքրիկ երեխան։",
    dialoguePedrito: "El niño tiene mucho sueño. Yo... al niño pequeño a las ocho.",
    dialoguePedritoArm: "Երեխան շատ քնկոտ է։ Ես... պառկեցնում եմ փոքր երեխային ժամը ութին։",
    imageAlt: "Putting a child to bed nicely",
    options: [
      {
        text: "acuesto al niño",
        isCorrect: true,
        explanationArm: "Ճի՛շտ է: Քանի որ պառկեցնում ենք ուրիշին (նրան), օգտագործում ենք ոչ անդրադարձ 'acuesto' բայը:"
      },
      {
        text: "me acuesto al niño",
        isCorrect: false,
        explanationArm: "Սխալ է: 'Me acuesto' նշանակում է ես ինքս եմ գնում քնելու: Ուրիշին պառկեցնելու համար 'me' պետք չէ։"
      }
    ]
  },
  {
    id: 9,
    stage: "evening",
    situation: "22:00 PM - Cansancio extremo",
    situationArm: "22:00 Երեկո - Ծայրահեղ հոգնածություն։",
    dialoguePedrito: "Estaba viendo una película interesante, pero tenía tanto sueño que de repente 'ես քնով անցա'...",
    dialoguePedritoArm: "Ֆիլմ էի դիտում, բայց այնքան քնկոտ էի, որ հանկարծ «ես քնով անցա» (աչքս կպավ)։",
    imageAlt: "Falling sleep unexpectedly",
    options: [
      {
        text: "me dormí",
        isCorrect: true,
        explanationArm: "Հրաշալի՛ է: 'Dormirse' անդրադարձ բայը նշանակում է քնով անցնել (իրավիճակային անցում քնի)։"
      },
      {
        text: "dormí",
        isCorrect: false,
        explanationArm: "Ո՛չ, 'dormí' նշանակում է ուղղակի քնել տևողությամբ (օրինակ՝ ես քնեցի 8 ժամ), այլ ոչ թե քնով անցնել։"
      }
    ]
  },
  {
    id: 10,
    stage: "evening",
    situation: "23:00 PM - Hora de dormir",
    situationArm: "23:00 Երեկո - Քնելու ժամն է։",
    dialoguePedrito: "¡Buenas noches! Yo siempre 'պառկում եմ քնելու' a esta hora.",
    dialoguePedritoArm: "Բարի գիշե՜ր։ Ես միշտ այս ժամին «պառկում եմ քնելու»։",
    imageAlt: "Going to bed to sleep, peaceful night",
    options: [
      {
        text: "me acuesto",
        isCorrect: true,
        explanationArm: "Ապրե՛ս: 'Acostarse' նշանակում է պառկել քնելու՝ սեփական մարմինը տեղափոխելով անկողին։"
      },
      {
        text: "acuesto",
        isCorrect: false,
        explanationArm: "Սխալ է: 'Acuesto' առանց դերանվան նշանակում է պառկեցնել մեկ ուրիշին, այլ ոչ թե ինքներդ պառկել։"
      }
    ]
  }
];
