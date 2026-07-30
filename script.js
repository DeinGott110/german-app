// ПОЛНАЯ БАЗА ТЕОРИИ БЕЗ СОКРАЩЕНИЙ
const fullGrammarDatabase = [
  {
    id: 1,
    level: "A1",
    title: "Тема 1: Базовые приветствия и вежливость",
    text:
      "В немецком языке выбор приветствия зависит от официальности обстановки и времени суток:<br><br>" +
      "• <b>Hallo</b> — «Привет» (универсальное дружеское приветствие).<br>" +
      "• <b>Guten Morgen</b> — «Доброе утро» (используется примерно до 11:00).<br>" +
      "• <b>Guten Tag</b> — «Добрый день» (основное официальное приветствие в течение дня).<br>" +
      "• <b>Guten Abend</b> — «Добрый вечер» (используется в вечернее время).<br>" +
      "• <b>Gute Nacht</b> — «Спокойной ночи» (говорится только перед сном).<br><br>" +
      "<b>Формы прощания:</b><br>" +
      "• <b>Tschüss</b> — «Пока» (неформальное прощание с друзьями).<br>" +
      "• <b>Auf Wiedersehen</b> — «До свидания» (официальное прощание).<br><br>" +
      "<b>Слова вежливости:</b><br>" +
      "• <b>Danke</b> — «Спасибо».<br>" +
      "• <b>Bitte</b> — «Пожалуйста» (служит ответом на «Danke», а также просьбой).",
  },
  {
    id: 2,
    level: "A1",
    title: "Тема 2: Род существительных и заглавная буква",
    text:
      "<b>ГЛАВНОЕ ЗОЛОТОЕ ПРАВИЛО НЕМЕЦКОГО ЯЗЫКА:</b><br>" +
      "Абсолютно <b>ВСЕ существительные</b> (предметы, люди, понятия, животные) всегда пишутся с <b>Заглавной Буквы</b> в любой части предложения (например: <i>der Tisch, die Frau, das Auto</i>).<br><br>" +
      "Каждое существительное имеет один из трех родов, который выражается определенным артиклем:<br>" +
      "• <b>der</b> — Мужской род (<i>der Mann</i> — мужчина, <i>der Tisch</i> — стол).<br>" +
      "• <b>die</b> — Женский род (<i>die Frau</i> — женщина, <i>die Katze</i> — кошка).<br>" +
      "• <b>das</b> — Средний род (<i>das Kind</i> — ребенок, <i>das Auto</i> — машина).",
  },
  {
    id: 3,
    level: "A1",
    title: "Тема 3: Личные местоимения",
    text:
      "Личные местоимения заменяют существительные и указывают на участников речи:<br><br>" +
      "<b>Единственное число:</b><br>" +
      "• <b>ich</b> — я<br>" +
      "• <b>du</b> — ты (при обращении к близким, друзьям, детям)<br>" +
      "• <b>er</b> — он (мужской род)<br>" +
      "• <b>sie</b> — она (женский род)<br>" +
      "• <b>es</b> — оно (средний род)<br><br>" +
      "<b>Множественное число:</b><br>" +
      "• <b>wir</b> — мы<br>" +
      "• <b>ihr</b> — вы (при обращении к группе близких людей/друзей)<br>" +
      "• <b>sie</b> — они<br>" +
      "• <b>Sie</b> — Вы (вежливая форма при обращении к одному или нескольким незнакомым людям/коллегам). Пишется <b>всегда с большой буквы</b>!",
  },
  {
    id: 4,
    level: "A1",
    title: "Тема 4: Глагол 'sein' (быть)",
    text:
      "Глагол <b>sein</b> (быть / являться) — важнейший глагол-связка в немецком языке. В отличие от русского языка, где мы говорим «Я студент», в немецком обязательно сказать «Я ЕСМЬ студент» (<i>Ich bin Student</i>).<br><br>" +
      "<b>Формы спряжения глагола sein:</b><br>" +
      "• ich <b>bin</b> (я есть)<br>" +
      "• du <b>bist</b> (ты есть)<br>" +
      "• er / sie / es <b>ist</b> (он / она / оно есть)<br>" +
      "• wir <b>sind</b> (мы есть)<br>" +
      "• ihr <b>seid</b> (вы есть)<br>" +
      "• sie / Sie <b>sind</b> (они / Вы есть)",
  },
  {
    id: 5,
    level: "A1",
    title: "Тема 5: Глагол 'haben' и Числа 1–10",
    text:
      "Глагол <b>haben</b> переводится как «иметь» (у кого-то есть что-то).<br><br>" +
      "<b>Спряжение глагола haben:</b><br>" +
      "• ich <b>habe</b> (у меня есть)<br>" +
      "• du <b>hast</b> (у тебя есть)<br>" +
      "• er / sie / es <b>hat</b> (у него / нее / этого есть)<br>" +
      "• wir <b>haben</b> (у нас есть)<br>" +
      "• ihr <b>habt</b> (у вас есть)<br>" +
      "• sie / Sie <b>haben</b> (у них / у Вас есть)<br><br>" +
      "<b>Числа от 1 до 10:</b><br>" +
      "1 — eins | 2 — zwei | 3 — drei | 4 — vier | 5 — fünf<br>" +
      "6 — sechs | 7 — sieben | 8 — acht | 9 — neun | 10 — zehn",
  },
  {
    id: 6,
    level: "A1",
    title: "Тема 6: Семья и Притяжательные формы",
    text:
      "Притяжательные местоимения указывают на принадлежность предмета («мой», «твой»). Окончание местоимения зависит от рода существительного, которое стоит после него:<br><br>" +
      "<b>1. Мужской и Средний род (нет окончания -e):</b><br>" +
      "• <b>mein</b> — мой / моё (<i>mein Vater</i> — мой отец, <i>mein Kind</i> — мой ребёнок).<br>" +
      "• <b>dein</b> — твой / твоё (<i>dein Bruder</i> — твой брат).<br><br>" +
      "<b>2. Женский род и Множественное число (добавляется окончание -e):</b><br>" +
      "• <b>meine</b> — моя / мои (<i>meine Mutter</i> — моя мама, <i>meine Eltern</i> — мои родители).<br>" +
      "• <b>deine</b> — твоя / твои (<i>deine Schwester</i> — твоя сестра).",
  },
  {
    id: 7,
    level: "A1",
    title: "Тема 7: Отрицание (Nicht vs Kein)",
    text:
      "В немецком языке существует два основных способа отрицания: <b>kein</b> и <b>nicht</b>.<br><br>" +
      "<b>1. Отрицание KEIN / KEINE:</b><br>" +
      "Используется ТОЛЬКО для отрицания существительных, которые употребляются с неопределенным артиклем (<i>ein/eine</i>) или вообще без артикля.<br>" +
      "• Мужской / Средний род: <b>kein</b> (<i>Ich habe kein Auto</i> — У меня нет машины).<br>" +
      "• Женский род / Мн. число: <b>keine</b> (<i>Ich habe keine Zeit</i> — У меня нет времени).<br><br>" +
      "<b>2. Отрицание NICHT:</b><br>" +
      "Используется для отрицания глаголов, прилагательных, имен собственных или всей фразы.<br>" +
      "• <i>Ich arbeite nicht</i> (Я не работаю — отрицание глагола).<br>" +
      "• <i>Das ist nicht gut</i> (Это не хорошо — отрицание прилагательного).",
  },
  {
    id: 8,
    level: "A1",
    title: "Тема 8: Спряжение регулярных глаголов в Präsens",
    text:
      "В настоящем времени (Präsens) правильные глаголы отбрасывают инфинитивное окончание <b>-en</b> и получают личные окончания в зависимости от местоимения:<br><br>" +
      "Пример глагола <b>machen</b> (делать) → основа <b>mach-</b>:<br>" +
      "• ich mach<b>-e</b> (я делаю)<br>" +
      "• du mach<b>-st</b> (ты делаешь)<br>" +
      "• er / sie / es mach<b>-t</b> (он / она делает)<br>" +
      "• wir mach<b>-en</b> (мы делаем)<br>" +
      "• ihr mach<b>-t</b> (вы делаете)<br>" +
      "• sie / Sie mach<b>-en</b> (они / Вы делают)",
  },
  {
    id: 9,
    level: "A1",
    title: "Тема 9: Порядок слов и Вопросы",
    text:
      "<b>1. Утвердительное предложение:</b><br>" +
      "Спрягаемый глагол ВСЕГДА стоит строго на <b>2-м месте</b> в предложении.<br>" +
      "<i>Пример: Ich <u>wohne</u> in Berlin.</i><br><br>" +
      "<b>2. Вопросительное предложение с W-словом:</b><br>" +
      "На 1-м месте стоит вопросительное слово (<i>was, wer, wo, woher</i>), а глагол остается на <b>2-м месте</b>.<br>" +
      "<i>Пример: Wo <u>wohnst</u> du?</i><br><br>" +
      "<b>3. Общий вопрос (без вопросительного слова):</b><br>" +
      "Глагол переносится на <b>1-е место</b>.<br>" +
      "<i>Пример: <u>Lernst</u> du Deutsch?</i> (Учишь ли ты немецкий?)",
  },
  {
    id: 10,
    level: "A2",
    title: "Тема 10: Винительный падеж (Akkusativ)",
    text:
      "Винительный падеж (Akkusativ) отвечает на вопросы <b>Wen? (Кого?) / Was? (Что?)</b>.<br><br>" +
      "<b>ГЛАВНОЕ ПРАВИЛО AKKUSATIV:</b><br>" +
      "В винительном падеже изменяются артикли <b>ТОЛЬКО МУЖСКОГО РОДА</b>! Женский, средний род и множественное число сохраняют свои исходные формы.<br><br>" +
      "<b>Изменения артиклей:</b><br>" +
      "• Мужской род: <b>der → den</b> | неопределенный: <b>ein → einen</b> | отрицание: <b>kein → keinen</b>.<br>" +
      "• Женский род: <b>die → die</b> | неопределенный: <b>eine → eine</b> (не меняется).<br>" +
      "• Средний род: <b>das → das</b> | неопределенный: <b>ein → ein</b> (не меняется).<br><br>" +
      "<i>Пример: Ich habe <u>einen</u> Tisch (муж.р. der Tisch → einen Tisch).</i>",
  },
];

let unlockedVocab = [];
let unlockedGrammarIds = [];
let currentActiveLessonIndex = 0;

let mapNodes = [
  { status: "active", icon: "1️⃣" },
  { status: "locked", icon: "2️⃣" },
  { status: "locked", icon: "3️⃣" },
  { status: "locked", icon: "4️⃣" },
  { status: "locked", icon: "5️⃣" },
  { status: "locked", icon: "6️⃣" },
  { status: "locked", icon: "7️⃣" },
  { status: "locked", icon: "8️⃣" },
  { status: "locked", icon: "9️⃣" },
  { status: "locked", icon: "🔟" },
];

// БАЗА ДАННЫХ: 10 УРОКОВ ПО 10 ВОПРОСОВ В КАЖДОМС КАТЕГОРИЯМИ СЛОВ
const lessons = [
  {
    id: 0,
    title: "1. Приветствия",
    unlocksVocab: [
      { de: "Hallo", ru: "Привет", cat: "Приветствия" },
      { de: "Tschüss", ru: "Пока", cat: "Приветствия" },
      { de: "Danke", ru: "Спасибо", cat: "Приветствия" },
      { de: "Bitte", ru: "Пожалуйста", cat: "Приветствия" },
      { de: "Auf Wiedersehen", ru: "До свидания", cat: "Приветствия" },
    ],
    unlocksGrammarIds: [1],
    questions: [
      {
        q: "Как сказать «Привет»?",
        opts: ["Tschüss", "Hallo", "Danke"],
        correct: 1,
        rule: "«Hallo» — разговорное приветствие.",
      },
      {
        q: "Как попрощаться с другом (неформально)?",
        opts: ["Tschüss", "Guten Morgen", "Bitte"],
        correct: 0,
        rule: "«Tschüss» означает «Пока».",
      },
      {
        q: "Как переводится «Danke»?",
        opts: ["Пожалуйста", "Спасибо", "Здравствуйте"],
        correct: 1,
        rule: "«Danke» — «Спасибо».",
      },
      {
        q: "Как сказать «До свидания» вежливо?",
        opts: ["Auf Wiedersehen", "Hallo", "Gute Nacht"],
        correct: 0,
        rule: "«Auf Wiedersehen» — формальное прощание.",
      },
      {
        q: "Переведи: «Добрый день»",
        opts: ["Guten Morgen", "Guten Tag", "Guten Abend"],
        correct: 1,
        rule: "«Guten Tag» говорим в течение дня.",
      },
      {
        q: "Что сказать перед сном («Спокойной ночи»)?",
        opts: ["Gute Nacht", "Guten Morgen", "Tschüss"],
        correct: 0,
        rule: "«Gute Nacht» — «Спокойной ночи».",
      },
      {
        q: "Как ответит официант на «Danke»?",
        opts: ["Bitte", "Hallo", "Tschüss"],
        correct: 0,
        rule: "«Bitte» — «Пожалуйста».",
      },
      {
        q: "Как сказать «Добрый вечер»?",
        opts: ["Guten Abend", "Guten Tag", "Hallo"],
        correct: 0,
        rule: "«Guten Abend» используется вечером.",
      },
      {
        q: "Как сказать «Доброе утро»?",
        opts: ["Guten Morgen", "Guten Abend", "Gute Nacht"],
        correct: 0,
        rule: "«Guten Morgen» — «Доброе утро».",
      },
      {
        q: "Какое из этих слов является универсальным ответом на «Спасибо»?",
        opts: ["Bitte", "Danke", "Tschüss"],
        correct: 0,
        rule: "«Bitte» переводится как «Пожалуйста».",
      },
    ],
  },
  {
    id: 1,
    title: "2. Артикли и Род",
    unlocksVocab: [
      { de: "der Tisch", ru: "Стол", cat: "Существительные" },
      { de: "die Katze", ru: "Кошка", cat: "Существительные" },
      { de: "das Auto", ru: "Машина", cat: "Существительные" },
      { de: "der Mann", ru: "Мужчина", cat: "Существительные" },
      { de: "die Frau", ru: "Женщина", cat: "Существительные" },
    ],
    unlocksGrammarIds: [2],
    questions: [
      {
        q: "Какого рода слово «Tisch» (стол)?",
        opts: ["die", "der", "das"],
        correct: 1,
        rule: "Стол в немецком мужского рода (der Tisch).",
      },
      {
        q: "Какого рода слово «Katze» (кошка)?",
        opts: ["der", "die", "das"],
        correct: 1,
        rule: "Кошка — женского рода (die Katze).",
      },
      {
        q: "Какой артикль у слова «Auto» (машина)?",
        opts: ["das", "der", "die"],
        correct: 0,
        rule: "Машина среднего рода (das Auto).",
      },
      {
        q: "Как пишутся ВСЕ существительные в немецком?",
        opts: [
          "С маленькой буквы",
          "С Заглавной буквы",
          "Всегда латиницей с капсом",
        ],
        correct: 1,
        rule: "В немецком все существительные пишутся с Заглавной буквы!",
      },
      {
        q: "Какой артикль у слова «Mann» (мужчина)?",
        opts: ["die", "das", "der"],
        correct: 2,
        rule: "Мужчина — der Mann.",
      },
      {
        q: "Какой артикль у слова «Frau» (женщина)?",
        opts: ["die", "der", "das"],
        correct: 0,
        rule: "Женщина — die Frau.",
      },
      {
        q: "Какой артикль используется для среднего рода?",
        opts: ["der", "die", "das"],
        correct: 2,
        rule: "Средний род — das.",
      },
      {
        q: "Какой артикль у слова «Kind» (ребенок)?",
        opts: ["das", "der", "die"],
        correct: 0,
        rule: "Ребенок среднего рода (das Kind).",
      },
      {
        q: "Какой артикль используется для женского рода?",
        opts: ["der", "die", "das"],
        correct: 1,
        rule: "Женский род — die.",
      },
      {
        q: "Какой артикль у слова «Sonne» (солнце)?",
        opts: ["der", "das", "die"],
        correct: 2,
        rule: "Солнце в немецком женского рода (die Sonne).",
      },
    ],
  },
  {
    id: 2,
    title: "3. Личные местоимения",
    unlocksVocab: [
      { de: "ich", ru: "я", cat: "Местоимения" },
      { de: "du", ru: "ты", cat: "Местоимения" },
      { de: "er", ru: "он", cat: "Местоимения" },
      { de: "sie", ru: "она / они", cat: "Местоимения" },
      { de: "wir", ru: "мы", cat: "Местоимения" },
    ],
    unlocksGrammarIds: [3],
    questions: [
      {
        q: "Как сказать «Я» по-немецки?",
        opts: ["du", "ich", "wir"],
        correct: 1,
        rule: "«Ich» — это «Я».",
      },
      {
        q: "Как сказать «Ты»?",
        opts: ["du", "er", "ihr"],
        correct: 0,
        rule: "«Du» — неофициальное обращение на «ты».",
      },
      {
        q: "Как переводится «er»?",
        opts: ["она", "он", "оно"],
        correct: 1,
        rule: "«Er» — это «он».",
      },
      {
        q: "Как написать вежливое «Вы» к незнакомцу или боссу?",
        opts: ["ihr", "Sie", "sie"],
        correct: 1,
        rule: "Вежливая форма «Sie» всегда пишется с большой буквы.",
      },
      {
        q: "Как сказать «Мы»?",
        opts: ["wir", "ihr", "sie"],
        correct: 0,
        rule: "«Wir» переводится как «мы».",
      },
      {
        q: "Как сказать «Вы» группе друзей или детей?",
        opts: ["Sie", "ihr", "wir"],
        correct: 1,
        rule: "«Ihr» — «вы» (множественное число для друзей).",
      },
      {
        q: "Как переводится «es»?",
        opts: ["он", "она", "оно"],
        correct: 2,
        rule: "«Es» — это «оно» (средний род).",
      },
      {
        q: "Как сказать «Она»?",
        opts: ["er", "es", "sie"],
        correct: 2,
        rule: "«Sie» (с маленькой буквы) — «она».",
      },
      {
        q: "В чем разница между «Sie» и «ihr»?",
        opts: [
          "Sie - вежливо, ihr - к группе друзей",
          "Разницы нет",
          "ihr - вежливо, Sie - к друзьям",
        ],
        correct: 0,
        rule: "Sie — вежливая форма к 1 человеку или группе, ihr — к нескольким друзьям.",
      },
      {
        q: "Как переводится местоимение «sie» (с маленькой буквы во мн. числе)?",
        opts: ["мы", "они", "вы"],
        correct: 1,
        rule: "«Sie / sie» также значит «они».",
      },
    ],
  },
  {
    id: 3,
    title: "4. Глагол 'sein'",
    unlocksVocab: [
      { de: "sein", ru: "быть", cat: "Глаголы" },
      { de: "ich bin", ru: "я есть", cat: "Глаголы" },
      { de: "du bist", ru: "ты есть", cat: "Глаголы" },
      { de: "er ist", ru: "он есть", cat: "Глаголы" },
    ],
    unlocksGrammarIds: [4],
    questions: [
      {
        q: "Выбери верную форму: Ich ___ Max.",
        opts: ["bist", "bin", "ist"],
        correct: 1,
        rule: "Форма для 'ich' — bin.",
      },
      {
        q: "Выбери верную форму: Du ___ alt.",
        opts: ["bin", "ist", "bist"],
        correct: 2,
        rule: "Форма для 'du' — bist.",
      },
      {
        q: "Выбери верную форму: Er ___ hier.",
        opts: ["ist", "sind", "seid"],
        correct: 0,
        rule: "Форма для 'er/sie/es' — ist.",
      },
      {
        q: "Выбери верную форму: Wir ___ Studenten.",
        opts: ["seid", "sind", "bin"],
        correct: 1,
        rule: "Форма для 'wir' — sind.",
      },
      {
        q: "Выбери верную форму: Ihr ___ müde.",
        opts: ["sind", "ist", "seid"],
        correct: 2,
        rule: "Форма для 'ihr' — seid.",
      },
      {
        q: "Выбери верную форму: Sie (Вы вежливо) ___ nett.",
        opts: ["sind", "bist", "seid"],
        correct: 0,
        rule: "Форма для 'Sie' — sind.",
      },
      {
        q: "Как сказать «Она здесь»?",
        opts: ["Sie bist hier", "Sie ist hier", "Sie bin hier"],
        correct: 1,
        rule: "Для 'sie' (она) используем 'ist'.",
      },
      {
        q: "Как сказать «Мы готовы»?",
        opts: ["Wir sind bereit", "Wir seid bereit", "Wir bin bereit"],
        correct: 0,
        rule: "Для 'wir' используем 'sind'.",
      },
      {
        q: "Какой инфинитив у глагола «быть»?",
        opts: ["haben", "sein", "werden"],
        correct: 1,
        rule: "Инфинитив — 'sein'.",
      },
      {
        q: "Переведи: «Ты красивый» (Du ___ schön)",
        opts: ["bist", "ist", "bin"],
        correct: 0,
        rule: "Du bist schön.",
      },
    ],
  },
  {
    id: 4,
    title: "5. Глагол 'haben' и Числа 1-10",
    unlocksVocab: [
      { de: "eins", ru: "один", cat: "Числа" },
      { de: "zwei", ru: "два", cat: "Числа" },
      { de: "drei", ru: "три", cat: "Числа" },
      { de: "haben", ru: "иметь", cat: "Глаголы" },
    ],
    unlocksGrammarIds: [5],
    questions: [
      {
        q: "Выбери верную форму: Ich ___ ein Buch.",
        opts: ["hast", "habe", "hat"],
        correct: 1,
        rule: "Ich habe (У меня есть).",
      },
      {
        q: "Выбери верную форму: Du ___ Zeit.",
        opts: ["habe", "hat", "hast"],
        correct: 2,
        rule: "Du hast (У тебя есть).",
      },
      {
        q: "Выбери верную форму: Er ___ ein Auto.",
        opts: ["hat", "haben", "hast"],
        correct: 0,
        rule: "Er hat (У него есть).",
      },
      {
        q: "Как переводится число «eins»?",
        opts: ["1", "2", "3"],
        correct: 0,
        rule: "Eins — это 1.",
      },
      {
        q: "Как по-немецки «два»?",
        opts: ["drei", "zwei", "vier"],
        correct: 1,
        rule: "2 — это zwei.",
      },
      {
        q: "Как переводится «пять»?",
        opts: ["fünf", "vier", "sechs"],
        correct: 0,
        rule: "5 — это fünf.",
      },
      {
        q: "Какое число называется «zehn»?",
        opts: ["7", "8", "10"],
        correct: 2,
        rule: "Zehn — это 10.",
      },
      {
        q: "Выбери верную форму: Wir ___ Geld.",
        opts: ["haben", "habt", "hat"],
        correct: 0,
        rule: "Wir haben (У нас есть).",
      },
      {
        q: "Как по-немецки «три»?",
        opts: ["drei", "eins", "zwei"],
        correct: 0,
        rule: "3 — это drei.",
      },
      {
        q: "Выбери правильную форму: Ihr ___ Hunger.",
        opts: ["haben", "habt", "hast"],
        correct: 1,
        rule: "Ihr habt.",
      },
    ],
  },
  {
    id: 5,
    title: "6. Семья и Притяжательные формы",
    unlocksVocab: [
      { de: "der Vater", ru: "Отец", cat: "Семья" },
      { de: "die Mutter", ru: "Мать", cat: "Семья" },
      { de: "mein", ru: "мой / мое", cat: "Местоимения" },
      { de: "meine", ru: "моя / мои", cat: "Местоимения" },
    ],
    unlocksGrammarIds: [6],
    questions: [
      {
        q: "Как переводится «der Vater»?",
        opts: ["Дедушка", "Отец", "Брат"],
        correct: 1,
        rule: "der Vater — отец.",
      },
      {
        q: "Как сказать «Мой отец»?",
        opts: ["meine Vater", "mein Vater", "deine Vater"],
        correct: 1,
        rule: "Мужской род — mein Vater.",
      },
      {
        q: "Как сказать «Моя мама»?",
        opts: ["mein Mutter", "meine Mutter", "dein Mutter"],
        correct: 1,
        rule: "Женский род требует окончания -e: meine Mutter.",
      },
      {
        q: "Как сказать «Твой брат» (Bruder - муж. род)?",
        opts: ["dein Bruder", "deine Bruder", "meine Bruder"],
        correct: 0,
        rule: "Мужской род — dein Bruder.",
      },
      {
        q: "Как переводится «die Schwester»?",
        opts: ["Сестра", "Мать", "Бабушка"],
        correct: 0,
        rule: "die Schwester — сестра.",
      },
      {
        q: "Как сказать «Моя сестра»?",
        opts: ["mein Schwester", "meine Schwester", "dein Schwester"],
        correct: 1,
        rule: "Женский род — meine Schwester.",
      },
      {
        q: "Как переводится «mein Kind»?",
        opts: ["Мой ребенок", "Твой ребенок", "Моя дочь"],
        correct: 0,
        rule: "mein Kind (средний род).",
      },
      {
        q: "Как сказать «Твоя кошка» (Katze - жен. род)?",
        opts: ["dein Katze", "deine Katze", "mein Katze"],
        correct: 1,
        rule: "Женский род — deine Katze.",
      },
      {
        q: "Как переводится «die Familie»?",
        opts: ["Семья", "Друг", "Дом"],
        correct: 0,
        rule: "die Familie — семья.",
      },
      {
        q: "Как сказать «Моя семья»?",
        opts: ["mein Familie", "meine Familie", "dein Familie"],
        correct: 1,
        rule: "Семья (die) — meine Familie.",
      },
    ],
  },
  {
    id: 6,
    title: "7. Отрицание: Nicht vs Kein",
    unlocksVocab: [
      { de: "kein", ru: "никакой (м./ср.р.)", cat: "Отрицания" },
      { de: "keine", ru: "никакая / никакие", cat: "Отрицания" },
      { de: "nicht", ru: "не", cat: "Отрицания" },
    ],
    unlocksGrammarIds: [7],
    questions: [
      {
        q: "Какое отрицание использовать с предметом: Ich habe ___ Auto.",
        opts: ["nicht", "kein", "nein"],
        correct: 1,
        rule: "С существительными используем kein/keine.",
      },
      {
        q: "Какое отрицание использовать для действий: Ich schlafe ___.",
        opts: ["kein", "nicht", "keine"],
        correct: 1,
        rule: "С глаголами используем nicht.",
      },
      {
        q: "Переведи: «У меня нет времени» (Ich habe ___ Zeit - жен.р.)",
        opts: ["kein", "keine", "nicht"],
        correct: 1,
        rule: "Женский род — keine Zeit.",
      },
      {
        q: "Переведи: «Это не хорошо» (Das ist ___ gut).",
        opts: ["nicht", "kein", "keine"],
        correct: 0,
        rule: "С прилагательными используем nicht.",
      },
      {
        q: "Переведи: «Я не работаю» (Ich arbeite ___).",
        opts: ["kein", "nicht", "keine"],
        correct: 1,
        rule: "Отрицание действия — nicht.",
      },
      {
        q: "Выберите верный вариант: «У меня нет братьев» (Ich habe ___ Brüder).",
        opts: ["kein", "nicht", "keine"],
        correct: 2,
        rule: "Во множественном числе — keine.",
      },
      {
        q: "Какое отрицание подходит: Er ist ___ alt (Он не старый).",
        opts: ["nicht", "kein", "keine"],
        correct: 0,
        rule: "С прилагательными — nicht.",
      },
      {
        q: "У меня нет стола: Ich habe ___ Tisch (муж.р. в Akkusativ - keinen).",
        opts: ["keinen", "nicht", "keine"],
        correct: 0,
        rule: "В винительном падеже муж. род — keinen.",
      },
      {
        q: "Что значит простое отрицательное слово «Nein»?",
        opts: ["Не", "Нет", "Никакой"],
        correct: 1,
        rule: "Nein — «Нет» (ответ на вопрос).",
      },
      {
        q: "Какое отрицание отрицает существительное без артикля?",
        opts: ["nicht", "kein", "nie"],
        correct: 1,
        rule: "Kein заменяет неопределенный артикль ein.",
      },
    ],
  },
  {
    id: 7,
    title: "8. Спряжение в Präsens",
    unlocksVocab: [
      { de: "kommen", ru: "приходить", cat: "Глаголы" },
      { de: "wohnen", ru: "жить", cat: "Глаголы" },
      { de: "machen", ru: "делать", cat: "Глаголы" },
      { de: "lernen", ru: "учить", cat: "Глаголы" },
    ],
    unlocksGrammarIds: [8],
    questions: [
      {
        q: "Какое окончание получает глагол с 'ich'? (Ich mach_)",
        opts: ["-st", "-e", "-t"],
        correct: 1,
        rule: "Для 'ich' окончание -e (Ich mache).",
      },
      {
        q: "Какое окончание получает глагол с 'du'? (Du mach_)",
        opts: ["-st", "-en", "-t"],
        correct: 0,
        rule: "Для 'du' окончание -st (Du machst).",
      },
      {
        q: "Какое окончание получает глагол с 'er'? (Er mach_)",
        opts: ["-e", "-t", "-en"],
        correct: 1,
        rule: "Для 'er/sie/es' окончание -t (Er macht).",
      },
      {
        q: "Какое окончание у глагола с 'wir'? (Wir mach_)",
        opts: ["-en", "-st", "-t"],
        correct: 0,
        rule: "Для 'wir' совпадает с инфинитивом -en (Wir machen).",
      },
      {
        q: "Вставьте правильное окончание: Ich wohn_ in Berlin.",
        opts: ["e", "st", "t"],
        correct: 0,
        rule: "Ich wohne.",
      },
      {
        q: "Вставьте правильное окончание: Wo wohn_ du?",
        opts: ["st", "e", "en"],
        correct: 0,
        rule: "Du wohnst.",
      },
      {
        q: "Вставьте форму: Er ___ Deutsch (lernen).",
        opts: ["lerne", "lernt", "lernst"],
        correct: 1,
        rule: "Er lernt.",
      },
      {
        q: "Вставьте форму: Wir ___ aus Deutschland (kommen).",
        opts: ["kommen", "kommt", "komme"],
        correct: 0,
        rule: "Wir kommen.",
      },
      {
        q: "Вставьте форму: Ihr ___ Machen (делать).",
        opts: ["macht", "machen", "machst"],
        correct: 0,
        rule: "Ihr macht.",
      },
      {
        q: "Вставьте форму: Sie (они) ___ hier.",
        opts: ["wohnen", "wohnt", "wohnst"],
        correct: 0,
        rule: "Sie wohnen.",
      },
    ],
  },
  {
    id: 8,
    title: "9. Порядок слов и Вопросы",
    unlocksVocab: [
      { de: "was", ru: "что", cat: "Вопросы" },
      { de: "wer", ru: "кто", cat: "Вопросы" },
      { de: "wo", ru: "где", cat: "Вопросы" },
      { de: "woher", ru: "откуда", cat: "Вопросы" },
    ],
    unlocksGrammarIds: [9],
    questions: [
      {
        q: "На каком месте стоит глагол в обычном предложении?",
        opts: ["На 1-м", "На 2-м", "На последнем"],
        correct: 1,
        rule: "Золотое правило: глагол всегда на 2-м месте!",
      },
      {
        q: "Как переводится вопросительное слово «Wo»?",
        opts: ["Где", "Кто", "Что"],
        correct: 0,
        rule: "Wo — «Где».",
      },
      {
        q: "Как переводится слово «Was»?",
        opts: ["Кто", "Что", "Как"],
        correct: 1,
        rule: "Was — «Что».",
      },
      {
        q: "Как переводится «Wer»?",
        opts: ["Кто", "Где", "Куда"],
        correct: 0,
        rule: "Wer — «Кто».",
      },
      {
        q: "С чего начинается вопрос БЕЗ вопросительного слова (Ja/Nein Frage)?",
        opts: ["С глагола", "С существительного", "С точки"],
        correct: 0,
        rule: "Общий вопрос начинается с глагола на 1-м месте (Lernst du?).",
      },
      {
        q: "Составь верное предложение: (lernen / wir / Deutsch)",
        opts: [
          "Wir lernen Deutsch.",
          "Lernen wir Deutsch.",
          "Deutsch wir lernen.",
        ],
        correct: 0,
        rule: "Глагол lernen на 2-м месте.",
      },
      {
        q: "Как спросить «Откуда ты?»",
        opts: ["Woher kommst du?", "Wo kommst du?", "Was kommst du?"],
        correct: 0,
        rule: "Woher — откуда.",
      },
      {
        q: "Как спросить «Где ты живешь?»",
        opts: ["Wo wohnst du?", "Wer wohnst du?", "Was wohnst du?"],
        correct: 0,
        rule: "Wo — где.",
      },
      {
        q: "Составь верный вопрос: «Учишься ли ты?»",
        opts: ["Lernst du?", "Du lernst?", "Wo lernst?"],
        correct: 0,
        rule: "Глагол выносим на 1 место.",
      },
      {
        q: "Как переводится вопросительное слово «Wie»?",
        opts: ["Как / Какой", "Где", "Зачем"],
        correct: 0,
        rule: "Wie — «Как» (например, Wie heißt du?).",
      },
    ],
  },
  {
    id: 9,
    title: "10. Винительный падеж (Akkusativ)",
    unlocksVocab: [
      { de: "den", ru: "артикль муж.р. в Akkusativ", cat: "Грамматика" },
      {
        de: "einen",
        ru: "неопр. артикль муж.р. в Akkusativ",
        cat: "Грамматика",
      },
      { de: "sehen", ru: "видеть", cat: "Глаголы" },
    ],
    unlocksGrammarIds: [10],
    questions: [
      {
        q: "Какой род ИЗМЕНЯЕТСЯ в винительном падеже (Akkusativ)?",
        opts: ["Женский", "Средний", "Мужской"],
        correct: 2,
        rule: "В Akkusativ меняется ТОЛЬКО мужской род!",
      },
      {
        q: "Во что превращается артикль «der» в Akkusativ?",
        opts: ["den", "dem", "des"],
        correct: 0,
        rule: "der превращается в den.",
      },
      {
        q: "Во что превращается неопределенный артикль «ein» для МУЖСКОГО рода?",
        opts: ["einen", "einem", "einer"],
        correct: 0,
        rule: "ein (муж.р.) превращается в einen.",
      },
      {
        q: "Меняется ли женский артикль «die» в Akkusativ?",
        opts: ["Да, на den", "Нет, остается die", "Меняется на das"],
        correct: 1,
        rule: "Женский род die не меняется.",
      },
      {
        q: "Меняется ли средний род «das» в Akkusativ?",
        opts: ["Да", "Нет, остается das", "Меняется на den"],
        correct: 1,
        rule: "Средний род das не меняется.",
      },
      {
        q: "Вставь верный артикль: Ich habe ___ Tisch (der Tisch).",
        opts: ["einen", "ein", "eine"],
        correct: 0,
        rule: "Так как Tisch мужского рода — einen Tisch.",
      },
      {
        q: "Вставь верный артикль: Ich sehe ___ Frau (die Frau).",
        opts: ["eine", "einen", "ein"],
        correct: 0,
        rule: "Женский род не меняется — eine Frau.",
      },
      {
        q: "Вставь верный артикль: Ich kaufe ___ Auto (das Auto).",
        opts: ["ein", "einen", "eine"],
        correct: 0,
        rule: "Средний род не меняется — ein Auto.",
      },
      {
        q: "Переведи: «Я вижу собаку» (der Hund → ___ Hund).",
        opts: ["den", "der", "die"],
        correct: 0,
        rule: "der Hund меняется на den Hund.",
      },
      {
        q: "На какие вопросы отвечает Akkusativ?",
        opts: ["Кого? Что? (Wen? Was?)", "Где? Когда?", "Кому? Чему?"],
        correct: 0,
        rule: "Akkusativ — Винительный падеж (Кого? Что?).",
      },
    ],
  },
];

// СИСТЕМА СОХРАНЕНИЯ ПРОГРЕССА
function saveProgress() {
  const data = {
    unlockedVocab,
    unlockedGrammarIds,
    mapNodes,
  };
  localStorage.setItem("german_app_progress", JSON.stringify(data));
  updateProfileStats();
}

function loadProgress() {
  const saved = localStorage.getItem("german_app_progress");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed.unlockedVocab) {
        unlockedVocab = parsed.unlockedVocab.map((w) => {
          if (!w.cat) {
            let foundCat = "Разное";
            lessons.forEach((l) =>
              l.unlocksVocab.forEach((item) => {
                if (item.de.toLowerCase() === w.de.toLowerCase())
                  foundCat = item.cat;
              }),
            );
            return { ...w, cat: foundCat };
          }
          return w;
        });
      }
      if (parsed.unlockedGrammarIds)
        unlockedGrammarIds = parsed.unlockedGrammarIds;
      if (parsed.mapNodes) mapNodes = parsed.mapNodes;
    } catch (e) {
      console.error("Ошибка загрузки данных", e);
    }
  }
  updateProfileStats();
}

function resetProgress() {
  if (confirm("Вы уверены, что хотите сбросить весь прогресс?")) {
    localStorage.removeItem("german_app_progress");
    location.reload();
  }
}

function updateProfileStats() {
  const completedCount = mapNodes.filter(
    (n) => n.status === "completed",
  ).length;
  document.getElementById("completed-count").innerText =
    `${completedCount} / 10`;
  document.getElementById("words-count").innerText = unlockedVocab.length;
}

function openModuleModal() {
  document.getElementById("module-modal").style.display = "flex";
}
function closeModuleModal() {
  document.getElementById("module-modal").style.display = "none";
}

function switchTab(tabId, btnId) {
  document
    .querySelectorAll(".screen-content")
    .forEach((el) => (el.style.display = "none"));
  document.getElementById(tabId).style.display = "block";

  document
    .querySelectorAll(".nav-btn")
    .forEach((btn) => btn.classList.remove("nav-active"));
  document.getElementById(btnId).classList.add("nav-active");

  if (tabId === "vocab-screen") renderVocab();
  if (tabId === "theory-screen") renderGrammar();
  if (tabId === "map-screen") renderMap();
  if (tabId === "profile-screen") updateProfileStats();
}

function renderMap() {
  const container = document.getElementById("path-container");
  if (!container) return;
  container.innerHTML = "";

  mapNodes.forEach((node, idx) => {
    const row = document.createElement("div");
    row.className = "node-row";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `node-btn ${node.status}`;
    btn.innerHTML = node.icon;

    if (node.status === "active" || node.status === "completed") {
      btn.onclick = function () {
        startLesson(idx);
      };
    }

    row.appendChild(btn);
    container.appendChild(row);
  });
}

function renderVocab() {
  const container = document.getElementById("vocab-container");
  if (!container) return;
  if (unlockedVocab.length === 0) {
    container.innerHTML =
      '<div class="empty-state">Пройдите первый урок, чтобы открыть изученные слова!</div>';
    return;
  }

  const searchInput = document.getElementById("vocab-search");
  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";

  const filtered = unlockedVocab.filter((w) => {
    return (
      w.ru.toLowerCase().includes(query) || w.de.toLowerCase().includes(query)
    );
  });

  if (filtered.length === 0) {
    container.innerHTML = '<div class="empty-state">Слово не найдено</div>';
    return;
  }

  // Группировка по категориям
  const grouped = {};
  filtered.forEach((w) => {
    const categoryName = w.cat || "Разное";
    if (!grouped[categoryName]) grouped[categoryName] = [];
    grouped[categoryName].push(w);
  });

  let html = "";
  for (const catName in grouped) {
    html += `<div class="vocab-category-header">${catName}</div>`;
    grouped[catName].forEach((w) => {
      html += `
          <div class="vocab-card">
            <span class="vocab-de">${w.de}</span>
            <span class="vocab-ru">${w.ru}</span>
          </div>
        `;
    });
  }

  container.innerHTML = html;
}

function renderGrammar() {
  const container = document.getElementById("theory-container");
  if (!container) return;
  if (unlockedGrammarIds.length === 0) {
    container.innerHTML =
      '<div class="empty-state">Раздел теории пуст. Проходите уроки на карте!</div>';
    return;
  }
  const topics = fullGrammarDatabase.filter((t) =>
    unlockedGrammarIds.includes(t.id),
  );
  container.innerHTML = topics
    .map(
      (t) => `
      <div class="theory-card">
        <div class="theory-level">${t.level}</div>
        <div class="theory-title">${t.title}</div>
        <div class="theory-text">${t.text}</div>
      </div>
    `,
    )
    .join("");
}

let activeLessonData = null;
let currentStep = 0;

function startLesson(idx) {
  if (!lessons[idx]) {
    alert("Этот урок пока находится в разработке!");
    return;
  }
  activeLessonData = lessons[idx];
  currentActiveLessonIndex = idx;

  document.getElementById("map-screen").style.display = "none";
  document.getElementById("bottom-nav").style.display = "none";
  document.getElementById("lesson-screen").style.display = "block";

  currentStep = 0;
  loadStep();
}

function closeLesson() {
  document.getElementById("lesson-screen").style.display = "none";
  document.getElementById("map-screen").style.display = "block";
  document.getElementById("bottom-nav").style.display = "flex";
}

function loadStep() {
  const data = activeLessonData.questions[currentStep];
  document.getElementById("progress").style.width =
    `${(currentStep / activeLessonData.questions.length) * 100}%`;
  document.getElementById("question").innerText = data.q;
  document.getElementById("feedback").style.display = "none";
  document.getElementById("next-btn").style.display = "none";

  const opts = document.getElementById("options");
  opts.innerHTML = "";
  data.opts.forEach((opt, i) => {
    const b = document.createElement("button");
    b.className = "opt-btn";
    b.innerText = opt;
    b.onclick = function () {
      check(i, b);
    };
    opts.appendChild(b);
  });
}

function check(idx, btnElement) {
  const data = activeLessonData.questions[currentStep];
  const fb = document.getElementById("feedback");
  document.querySelectorAll(".opt-btn").forEach((b) => (b.disabled = true));

  if (idx === data.correct) {
    btnElement.style.borderColor = "var(--success)";
    btnElement.style.color = "var(--success)";
    btnElement.style.background = "#f0fdf4";
    fb.style.background = "#dcfce7";
    fb.style.color = "#15803d";
    document.getElementById("feedback-title").innerText = "Правильно!";
    document.getElementById("feedback-text").innerText = "Отличный ответ!";
  } else {
    btnElement.style.borderColor = "var(--danger)";
    btnElement.style.color = "var(--danger)";
    btnElement.style.background = "#fef2f2";
    fb.style.background = "#fee2e2";
    fb.style.color = "#b91c1c";
    document.getElementById("feedback-title").innerText = "Ошибка!";
    document.getElementById("feedback-text").innerHTML =
      `<b>Правило:</b> ${data.rule}`;
  }
  fb.style.display = "block";
  document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
  currentStep++;
  if (currentStep < activeLessonData.questions.length) {
    loadStep();
  } else {
    activeLessonData.unlocksVocab.forEach((w) => {
      const alreadyExists = unlockedVocab.some(
        (v) => v.de.toLowerCase() === w.de.toLowerCase(),
      );
      if (!alreadyExists) unlockedVocab.push(w);
    });

    activeLessonData.unlocksGrammarIds.forEach((id) => {
      if (!unlockedGrammarIds.includes(id)) unlockedGrammarIds.push(id);
    });

    mapNodes[currentActiveLessonIndex].status = "completed";
    mapNodes[currentActiveLessonIndex].icon = "✔️";

    if (mapNodes[currentActiveLessonIndex + 1]) {
      mapNodes[currentActiveLessonIndex + 1].status = "active";
    }

    saveProgress();
    document.getElementById("completion-modal").style.display = "flex";
  }
}

function closeCompletionModal() {
  document.getElementById("completion-modal").style.display = "none";
  closeLesson();
  renderMap();
}

window.onload = function () {
  loadProgress();
  renderMap();
};

let quizScore = 0;
let currentQuizWord = null;

function startQuiz() {
  // Фильтруем только те слова, у которых есть явный артикль (der, die, das)
  // или в строке `de` слово начинается с артикля
  const availableWords = unlockedVocab.filter(item => {
    if (item.article) {
      const art = item.article.trim().toLowerCase();
      return art === 'der' || art === 'die' || art === 'das';
    }
    if (item.de) {
      const lower = item.de.toLowerCase();
      return lower.startsWith("der ") || lower.startsWith("die ") || lower.startsWith("das ");
    }
    return false;
  });

  if (availableWords.length === 0) {
    alert(
      "В твоем разблокированном словаре пока нет слов с артиклями! Пройди еще уроки.",
    );
    return;
  }

  document.getElementById("map-screen").style.display = "none";
  document.getElementById("bottom-nav").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";

  quizScore = 0;
  nextQuizRound(availableWords);
}

function closeQuiz() {
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("map-screen").style.display = "block";
  document.getElementById("bottom-nav").style.display = "flex";
}

function nextQuizRound(wordsPool) {
  // Сохраняем пул слов для раунда в глобальной переменной или передаем дальше
  window._currentQuizPool = wordsPool || window._currentQuizPool;
  
  document.getElementById("quiz-score").innerText = `Счет: ${quizScore}`;
  
  // Убираем старый статус ответа, если был
  const oldMsg = document.getElementById("feedback-msg");
  if (oldMsg) oldMsg.remove();
  
  const quizCard = document.getElementById("quiz-card") || document.getElementById("quiz-screen");
  quizCard.style.borderColor = "";
  quizCard.style.backgroundColor = "";

  const randomIndex = Math.floor(Math.random() * window._currentQuizPool.length);
  currentQuizWord = window._currentQuizPool[randomIndex];

  // Показываем слово без артикля для угадывания (если в de записано "das Haus", убираем артикль для теста)
  let displayWord = currentQuizWord.de;
  const lower = displayWord.toLowerCase();
  if (lower.startsWith("der ")) displayWord = displayWord.substring(4);
  else if (lower.startsWith("die ")) displayWord = displayWord.substring(4);
  else if (lower.startsWith("das ")) displayWord = displayWord.substring(4);

  document.getElementById("quiz-word-display").innerText = displayWord.trim();
}

function checkArticle(selectedArticle) {
  let correctArticle = currentQuizWord.article;

  if (!correctArticle) {
    const lower = currentQuizWord.de.toLowerCase();
    if (lower.startsWith("der ")) correctArticle = "der";
    else if (lower.startsWith("die ")) correctArticle = "die";
    else if (lower.startsWith("das ")) correctArticle = "das";
  }

  const quizCard = document.getElementById("quiz-card") || document.getElementById("quiz-screen");

  if (selectedArticle.toLowerCase() === correctArticle.toLowerCase()) {
    quizScore += 10;
    quizCard.style.borderColor = "#2ecc71";
    quizCard.style.backgroundColor = "#e8f8f5";
    showFeedback(`✅ Правильно! Это ${correctArticle} ${document.getElementById("quiz-word-display").innerText}`, "#2ecc71", quizCard);
  } else {
    quizCard.style.borderColor = "#e74c3c";
    quizCard.style.backgroundColor = "#fadbd8";
    showFeedback(`❌ Неправильно! Правильный ответ: ${correctArticle}`, "#e74c3c", quizCard);
  }

  // Пауза в 1.2 секунды перед следующим вопросом, чтобы игрок успел увидеть результат
  setTimeout(() => {
    nextQuizRound();
  }, 1200);
}

function showFeedback(text, color, container) {
  let msg = document.getElementById("feedback-msg");
  if (!msg) {
    msg = document.createElement("div");
    msg.id = "feedback-msg";
    msg.style.marginTop = "15px";
    msg.style.fontWeight = "bold";
    msg.style.fontSize = "16px";
    container.appendChild(msg);
  }
  msg.textContent = text;
  msg.style.color = color;
}
