const questions = {

  // 🔬 SCIENCE (20)
  science: [
    {question_en:"Which animal barks?",question_np:"कुन जनावर भुक्छ?",options_en:["Cat","Dog","Cow","Bird"],options_np:["बिरालो","कुकुर","गाई","चरा"],answer_en:"Dog",answer_np:"कुकुर"},
    {question_en:"What do plants need to grow?",question_np:"बोटबिरुवालाई बढ्न के चाहिन्छ?",options_en:["Sunlight","Water","Air","All"],options_np:["घाम","पानी","हावा","सबै"],answer_en:"All",answer_np:"सबै"},
    {question_en:"Which planet is red?",question_np:"कुन ग्रह रातो हुन्छ?",options_en:["Mars","Earth","Venus","Jupiter"],options_np:["मंगल","पृथ्वी","शुक्र","बृहस्पति"],answer_en:"Mars",answer_np:"मंगल"},
    {question_en:"Which animal flies?",question_np:"कुन जनावर उड्छ?",options_en:["Dog","Bird","Cow","Cat"],options_np:["कुकुर","चरा","गाई","बिरालो"],answer_en:"Bird",answer_np:"चरा"},
    {question_en:"What do bees make?",question_np:"मौरीले के बनाउँछ?",options_en:["Milk","Honey","Bread","Water"],options_np:["दूध","मह","रोटी","पानी"],answer_en:"Honey",answer_np:"मह"},
    {question_en:"Fish live in?",question_np:"माछा कहाँ बस्छ?",options_en:["Water","Air","Tree","Sand"],options_np:["पानी","हावा","रुख","बालुवा"],answer_en:"Water",answer_np:"पानी"},
    {question_en:"We breathe?",question_np:"हामी के सास लिन्छौं?",options_en:["Air","Water","Fire","Soil"],options_np:["हावा","पानी","आगो","माटो"],answer_en:"Air",answer_np:"हावा"},
    {question_en:"Which is fruit?",question_np:"कुन फल हो?",options_en:["Apple","Carrot","Potato","Onion"],options_np:["स्याउ","गाजर","आलु","प्याज"],answer_en:"Apple",answer_np:"स्याउ"},
    {question_en:"We see with?",question_np:"हामी केबाट देख्छौं?",options_en:["Eyes","Ears","Hands","Feet"],options_np:["आँखा","कान","हात","खुट्टा"],answer_en:"Eyes",answer_np:"आँखा"},
    {question_en:"Which is hot?",question_np:"कुन तातो हो?",options_en:["Fire","Ice","Water","Snow"],options_np:["आगो","बरफ","पानी","हिउँ"],answer_en:"Fire",answer_np:"आगो"},
    {question_en:"Animal with trunk?",question_np:"कुन जनावरको सुँड हुन्छ?",options_en:["Elephant","Dog","Cat","Rabbit"],options_np:["हात्ती","कुकुर","बिरालो","खरायो"],answer_en:"Elephant",answer_np:"हात्ती"},
    {question_en:"Gives milk?",question_np:"दूध दिने जनावर?",options_en:["Cow","Dog","Cat","Horse"],options_np:["गाई","कुकुर","बिरालो","घोडा"],answer_en:"Cow",answer_np:"गाई"},
    {question_en:"Seed grows into?",question_np:"बीउबाट के बन्छ?",options_en:["Tree","Rock","Water","Cloud"],options_np:["रुख","ढुंगा","पानी","बादल"],answer_en:"Tree",answer_np:"रुख"},
    {question_en:"Biggest planet?",question_np:"सबैभन्दा ठूलो ग्रह?",options_en:["Jupiter","Mars","Earth","Venus"],options_np:["बृहस्पति","मंगल","पृथ्वी","शुक्र"],answer_en:"Jupiter",answer_np:"बृहस्पति"},
    {question_en:"We wear on feet?",question_np:"खुट्टामा के लगाउँछौं?",options_en:["Shoes","Hat","Gloves","Shirt"],options_np:["जुत्ता","टोपी","पञ्जा","कमीज"],answer_en:"Shoes",answer_np:"जुत्ता"},
    {question_en:"Which swims?",question_np:"कुन पौडिन्छ?",options_en:["Fish","Dog","Lion","Horse"],options_np:["माछा","कुकुर","सिंह","घोडा"],answer_en:"Fish",answer_np:"माछा"},
    {question_en:"Cold thing?",question_np:"चिसो वस्तु?",options_en:["Ice","Fire","Sun","Sand"],options_np:["बरफ","आगो","घाम","बालुवा"],answer_en:"Ice",answer_np:"बरफ"},
    {question_en:"Insect?",question_np:"कुन किराफट्याङ्ग्रा?",options_en:["Butterfly","Dog","Cow","Cat"],options_np:["पुतली","कुकुर","गाई","बिरालो"],answer_en:"Butterfly",answer_np:"पुतली"},
    {question_en:"We drink?",question_np:"हामी के पिउँछौं?",options_en:["Water","Oil","Sand","Air"],options_np:["पानी","तेल","बालुवा","हावा"],answer_en:"Water",answer_np:"पानी"},
    {question_en:"Which gives light?",question_np:"कुनले उज्यालो दिन्छ?",options_en:["Sun","Moon","Star","Lamp"],options_np:["घाम","चन्द्रमा","तारा","बत्ती"],answer_en:"Sun",answer_np:"घाम"}
  ],

  // ➗ MATHS (20)
  maths: [
    {question_en:"5+3?",question_np:"५+३?",options_en:["8","7","6","9"],options_np:["८","७","६","९"],answer_en:"8",answer_np:"८"},
    {question_en:"2+2?",question_np:"२+२?",options_en:["4","3","5","6"],options_np:["४","३","५","६"],answer_en:"4",answer_np:"४"},
    {question_en:"10÷2?",question_np:"१०÷२?",options_en:["5","4","6","3"],options_np:["५","४","६","३"],answer_en:"5",answer_np:"५"},
    {question_en:"6-4?",question_np:"६-४?",options_en:["2","3","4","1"],options_np:["२","३","४","१"],answer_en:"2",answer_np:"२"},
    {question_en:"1+1?",question_np:"१+१?",options_en:["2","1","3","0"],options_np:["२","१","३","०"],answer_en:"2",answer_np:"२"},
    {question_en:"3+5?",question_np:"३+५?",options_en:["8","7","9","6"],options_np:["८","७","९","६"],answer_en:"8",answer_np:"८"},
    {question_en:"5-2?",question_np:"५-२?",options_en:["3","2","4","5"],options_np:["३","२","४","५"],answer_en:"3",answer_np:"३"},
    {question_en:"4÷2?",question_np:"४÷२?",options_en:["2","1","3","4"],options_np:["२","१","३","४"],answer_en:"2",answer_np:"२"},
    {question_en:"0+5?",question_np:"०+५?",options_en:["5","4","6","0"],options_np:["५","४","६","०"],answer_en:"5",answer_np:"५"},
    {question_en:"Smallest number?",question_np:"सानो संख्या?",options_en:["1","2","3","5"],options_np:["१","२","३","५"],answer_en:"1",answer_np:"१"},
    {question_en:"2x2?",question_np:"२x२?",options_en:["4","2","6","8"],options_np:["४","२","६","८"],answer_en:"4",answer_np:"४"},
    {question_en:"3x1?",question_np:"३x१?",options_en:["3","2","1","4"],options_np:["३","२","१","४"],answer_en:"3",answer_np:"३"},
    {question_en:"10-7?",question_np:"१०-७?",options_en:["3","2","4","5"],options_np:["३","२","४","५"],answer_en:"3",answer_np:"३"},
    {question_en:"2+3?",question_np:"२+३?",options_en:["5","4","6","3"],options_np:["५","४","६","३"],answer_en:"5",answer_np:"५"},
    {question_en:"Even number?",question_np:"सम संख्या?",options_en:["4","3","5","7"],options_np:["४","३","५","७"],answer_en:"4",answer_np:"४"},
    {question_en:"Odd number?",question_np:"विषम संख्या?",options_en:["5","2","4","6"],options_np:["५","२","४","६"],answer_en:"5",answer_np:"५"},
    {question_en:"1+0?",question_np:"१+०?",options_en:["1","0","2","3"],options_np:["१","०","२","३"],answer_en:"1",answer_np:"१"},
    {question_en:"6-3?",question_np:"६-३?",options_en:["3","2","4","5"],options_np:["३","२","४","५"],answer_en:"3",answer_np:"३"},
    {question_en:"7 greater?",question_np:"ठूलो संख्या?",options_en:["7","3","5","1"],options_np:["७","३","५","१"],answer_en:"7",answer_np:"७"},
    {question_en:"5+0?",question_np:"५+०?",options_en:["5","0","10","1"],options_np:["५","०","१०","१"],answer_en:"5",answer_np:"५"}
  ],

  // 📖 ENGLISH (20)
  english: [
    {question_en:"Opposite of hot?",question_np:"तातोको विपरित?",options_en:["Cold","Warm","Cool","Fire"],options_np:["चिसो","तातो","हल्का","आगो"],answer_en:"Cold",answer_np:"चिसो"},
    {question_en:"Plural of cat?",question_np:"cat को बहुवचन?",options_en:["Cats","Cat","Cates","Catt"],options_np:["Cats","Cat","Cates","Catt"],answer_en:"Cats",answer_np:"Cats"},
    {question_en:"First letter of Apple?",question_np:"Apple को पहिलो अक्षर?",options_en:["A","B","C","D"],options_np:["A","B","C","D"],answer_en:"A",answer_np:"A"},
    {question_en:"Opposite of big?",question_np:"ठूलोको विपरित?",options_en:["Small","Large","Tall","Short"],options_np:["सानो","ठूलो","अग्लो","होचो"],answer_en:"Small",answer_np:"सानो"},
    {question_en:"Verb?",question_np:"क्रिया?",options_en:["Run","Apple","Book","Sun"],options_np:["दौडनु","स्याउ","किताब","घाम"],answer_en:"Run",answer_np:"दौडनु"},
    {question_en:"Plural dog?",question_np:"dog बहुवचन?",options_en:["Dogs","Dog","Doges","Dogg"],options_np:["Dogs","Dog","Doges","Dogg"],answer_en:"Dogs",answer_np:"Dogs"},
    {question_en:"Opposite up?",question_np:"माथिको विपरित?",options_en:["Down","Top","High","Above"],options_np:["तल","माथि","उच्च","माथि"],answer_en:"Down",answer_np:"तल"},
    {question_en:"Color?",question_np:"रंग?",options_en:["Red","Dog","Run","Apple"],options_np:["रातो","कुकुर","दौड","स्याउ"],answer_en:"Red",answer_np:"रातो"},
    {question_en:"Opposite happy?",question_np:"खुशीको विपरित?",options_en:["Sad","Glad","Joy","Smile"],options_np:["दुःखी","खुशी","आनन्द","हाँसो"],answer_en:"Sad",answer_np:"दुःखी"},
    {question_en:"Plural book?",question_np:"book बहुवचन?",options_en:["Books","Book","Boks","Bok"],options_np:["Books","Book","Boks","Bok"],answer_en:"Books",answer_np:"Books"},
    {question_en:"Adjective?",question_np:"विशेषण?",options_en:["Happy","Run","Cat","Apple"],options_np:["खुशी","दौड","बिरालो","स्याउ"],answer_en:"Happy",answer_np:"खुशी"},
    {question_en:"Opposite fast?",question_np:"छिटोको विपरित?",options_en:["Slow","Quick","Run","Fly"],options_np:["ढिलो","छिटो","दौड","उड"],answer_en:"Slow",answer_np:"ढिलो"},
    {question_en:"Plural car?",question_np:"car बहुवचन?",options_en:["Cars","Car","Caar","Carr"],options_np:["Cars","Car","Caar","Carr"],answer_en:"Cars",answer_np:"Cars"},
    {question_en:"Letter of Dog?",question_np:"Dog को अक्षर?",options_en:["D","C","B","A"],options_np:["D","C","B","A"],answer_en:"D",answer_np:"D"},
    {question_en:"Fruit?",question_np:"फल?",options_en:["Apple","Car","Dog","Chair"],options_np:["स्याउ","गाडी","कुकुर","कुर्सी"],answer_en:"Apple",answer_np:"स्याउ"},
    {question_en:"Opposite tall?",question_np:"अग्लोको विपरित?",options_en:["Short","High","Big","Long"],options_np:["होचो","उच्च","ठूलो","लामो"],answer_en:"Short",answer_np:"होचो"},
    {question_en:"Plural child?",question_np:"child बहुवचन?",options_en:["Children","Childs","Child","Chid"],options_np:["Children","Childs","Child","Chid"],answer_en:"Children",answer_np:"Children"},
    {question_en:"Verb?",question_np:"क्रिया?",options_en:["Jump","Apple","Table","Sun"],options_np:["हाम फाल्नु","स्याउ","टेबल","घाम"],answer_en:"Jump",answer_np:"हाम फाल्नु"},
    {question_en:"Opposite clean?",question_np:"सफा को विपरित?",options_en:["Dirty","Clean","Wash","Dry"],options_np:["फोहोर","सफा","धुनु","सुक्खा"],answer_en:"Dirty",answer_np:"फोहोर"},
    {question_en:"Plural pen?",question_np:"pen बहुवचन?",options_en:["Pens","Pen","Pennes","Penn"],options_np:["Pens","Pen","Pennes","Penn"],answer_en:"Pens",answer_np:"Pens"}
  ],

  // 🌎 GK (20)
  gk: [
    {question_en:"Capital of Nepal?",question_np:"नेपालको राजधानी?",options_en:["Kathmandu","Pokhara","Lalitpur","Bhaktapur"],options_np:["काठमाडौं","पोखरा","ललितपुर","भक्तपुर"],answer_en:"Kathmandu",answer_np:"काठमाडौं"},
    {question_en:"King of jungle?",question_np:"जंगलको राजा?",options_en:["Lion","Tiger","Elephant","Cow"],options_np:["सिंह","बाघ","हात्ती","गाई"],answer_en:"Lion",answer_np:"सिंह"},
    {question_en:"Nearest planet?",question_np:"सूर्य नजिकको ग्रह?",options_en:["Mercury","Earth","Mars","Venus"],options_np:["बुध","पृथ्वी","मंगल","शुक्र"],answer_en:"Mercury",answer_np:"बुध"},
    {question_en:"Largest ocean?",question_np:"सबैभन्दा ठूलो महासागर?",options_en:["Pacific","Atlantic","Indian","Arctic"],options_np:["प्रशान्त","एटलान्टिक","हिन्द","आर्कटिक"],answer_en:"Pacific",answer_np:"प्रशान्त"},
    {question_en:"Tallest mountain?",question_np:"सबैभन्दा अग्लो हिमाल?",options_en:["Everest","K2","Makalu","Annapurna"],options_np:["एभरेष्ट","के२","मकालु","अन्नपूर्ण"],answer_en:"Everest",answer_np:"एभरेष्ट"},
    {question_en:"Country?",question_np:"देश?",options_en:["Nepal","Everest","Ganga","Kathmandu"],options_np:["नेपाल","एभरेष्ट","गंगा","काठमाडौं"],answer_en:"Nepal",answer_np:"नेपाल"},
    {question_en:"Longest river?",question_np:"सबैभन्दा लामो नदी?",options_en:["Nile","Amazon","Ganga","Yamuna"],options_np:["नाइल","अमेजन","गंगा","यमुना"],answer_en:"Nile",answer_np:"नाइल"},
    {question_en:"Planet?",question_np:"ग्रह?",options_en:["Mars","Moon","Sun","Earth"],options_np:["मंगल","चन्द्रमा","सूर्य","पृथ्वी"],answer_en:"Mars",answer_np:"मंगल"},
    {question_en:"Natural resource?",question_np:"प्राकृतिक स्रोत?",options_en:["Water","Car","Chair","Book"],options_np:["पानी","गाडी","कुर्सी","किताब"],answer_en:"Water",answer_np:"पानी"},
    {question_en:"Striped animal?",question_np:"धर्का भएको जनावर?",options_en:["Tiger","Lion","Cow","Dog"],options_np:["बाघ","सिंह","गाई","कुकुर"],answer_en:"Tiger",answer_np:"बाघ"},
    {question_en:"Fastest animal?",question_np:"सबैभन्दा छिटो जनावर?",options_en:["Cheetah","Lion","Horse","Dog"],options_np:["चितुवा","सिंह","घोडा","कुकुर"],answer_en:"Cheetah",answer_np:"चितुवा"},
    {question_en:"Smallest planet?",question_np:"सानो ग्रह?",options_en:["Mercury","Mars","Earth","Jupiter"],options_np:["बुध","मंगल","पृथ्वी","बृहस्पति"],answer_en:"Mercury",answer_np:"बुध"},
    {question_en:"Desert?",question_np:"मरुभूमि?",options_en:["Sahara","Amazon","Ganga","Nile"],options_np:["सहारा","अमेजन","गंगा","नाइल"],answer_en:"Sahara",answer_np:"सहारा"},
    {question_en:"Largest country?",question_np:"सबैभन्दा ठूलो देश?",options_en:["Russia","Nepal","India","China"],options_np:["रूस","नेपाल","भारत","चीन"],answer_en:"Russia",answer_np:"रूस"},
    {question_en:"Hottest planet?",question_np:"सबैभन्दा तातो ग्रह?",options_en:["Venus","Earth","Mars","Jupiter"],options_np:["शुक्र","पृथ्वी","मंगल","बृहस्पति"],answer_en:"Venus",answer_np:"शुक्र"},
    {question_en:"See stars?",question_np:"तारा हेर्न?",options_en:["Telescope","Microscope","Glass","Camera"],options_np:["दूरबिन","सूक्ष्मदर्शी","गिलास","क्यामेरा"],answer_en:"Telescope",answer_np:"दूरबिन"},
    {question_en:"Gas?",question_np:"ग्यास?",options_en:["Oxygen","Water","Rock","Sand"],options_np:["अक्सिजन","पानी","ढुंगा","बालुवा"],answer_en:"Oxygen",answer_np:"अक्सिजन"},
    {question_en:"Energy source?",question_np:"ऊर्जाको स्रोत?",options_en:["Sun","Chair","Book","Table"],options_np:["घाम","कुर्सी","किताब","टेबल"],answer_en:"Sun",answer_np:"घाम"},
    {question_en:"Our planet?",question_np:"हाम्रो ग्रह?",options_en:["Earth","Mars","Venus","Jupiter"],options_np:["पृथ्वी","मंगल","शुक्र","बृहस्पति"],answer_en:"Earth",answer_np:"पृथ्वी"},
    {question_en:"Bird?",question_np:"कुन चरा?",options_en:["Parrot","Dog","Cow","Fish"],options_np:["सुगा","कुकुर","गाई","माछा"],answer_en:"Parrot",answer_np:"सुगा"}
  ]

};