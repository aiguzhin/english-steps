// ======================= Extra topics (from Intermediate & Pre-IELTS programmes) =======================
const LV = c => LEVELS.find(l=>l.code===c);

LV("B1").topics.unshift(
{id:"b1-review", title:"Повторение времён", en:"tense review",
theory:`<table><tr><th>Время</th><th>Когда</th><th>Пример</th></tr>
<tr><td>Present Simple</td><td>привычки, факты</td><td>She works in IT.</td></tr>
<tr><td>Present Continuous</td><td>сейчас, временно</td><td>She's working from home this week.</td></tr>
<tr><td>Past Simple</td><td>законченное в прошлом</td><td>She moved here in 2021.</td></tr>
<tr><td>Past Continuous</td><td>процесс в прошлом</td><td>She was living in Almaty then.</td></tr>
<tr><td>Present Perfect</td><td>опыт, результат, до сих пор</td><td>She has worked here for 3 years.</td></tr>
<tr><td>Future (will / going to)</td><td>решения, планы, прогнозы</td><td>She's going to apply for a promotion.</td></tr></table>
<p>Совет: сначала найдите в предложении «маркер» — every day, now, yesterday, at that moment, ever, since, tomorrow — он почти всегда подсказывает время.</p>`,
ex:[
G("We ___ (meet) at university ten years ago.","met"),
G("Right now he ___ (talk) to a client.","is talking|'s talking"),
G("I ___ (know) Dana since we were five.","have known|'ve known"),
G("They ___ (have) dinner when I called.","were having"),
M("How often ___ your friends?",["are you seeing","do you see","have you seen"],1),
M("I'm tired — I ___ well last night.",["didn't sleep","haven't slept","don't sleep"],0)
],
hw:[H("Напишите о лучшем друге 10 предложений, используя все 6 времён из таблицы: как познакомились, чем он занимается сейчас, что вы делали вместе, какие у вас планы.")]},
{id:"b1-stative", title:"Глаголы состояния и действия", en:"dynamic and stative meanings",
theory:`<p><b>Глаголы состояния</b> (stative) обычно не используют в Continuous: know, believe, understand, like, love, hate, want, need, prefer, belong, own, seem, mean.</p>
<p>Некоторые глаголы имеют два значения:</p>
<table><tr><th>Глагол</th><th>Состояние</th><th>Действие</th></tr>
<tr><td>think</td><td>I think he's right. (мнение)</td><td>I'm thinking about it. (размышляю)</td></tr>
<tr><td>have</td><td>I have a car. (владею)</td><td>I'm having lunch. (ем)</td></tr>
<tr><td>see</td><td>I see what you mean. (понимаю)</td><td>I'm seeing a doctor. (встречаюсь, хожу к)</td></tr>
<tr><td>taste / smell</td><td>The soup tastes good.</td><td>He's tasting the soup.</td></tr></table>`,
ex:[
M("I ___ what you mean.",["am understanding","understand","understands"],1),
M("We ___ a great time at the party!",["have","are having","has"],1),
G("This cake ___ (taste) amazing.","tastes"),
M("— Why are you so quiet? — I ___ about my exam.",["think","am thinking","thinks"],1),
G("This bag ___ (belong) to my sister.","belongs")
],
hw:[H("Напишите 6 пар предложений с think, have, see, taste, look, feel — в значении состояния и действия.")]},
{id:"b1-phrasal", title:"Фразовые глаголы (база)", en:"get up, find out, give up",
theory:`<p>Фразовый глагол = глагол + частица, значение часто нельзя угадать по частям.</p>
<table><tr><th>Глагол</th><th>Значение</th><th>Пример</th></tr>
<tr><td>find out</td><td>узнать</td><td>I found out the truth.</td></tr><tr><td>give up</td><td>бросить, сдаться</td><td>He gave up smoking.</td></tr>
<tr><td>look forward to</td><td>ждать с нетерпением</td><td>I look forward to meeting you.</td></tr><tr><td>turn up</td><td>появиться</td><td>She turned up late.</td></tr>
<tr><td>put on / take off</td><td>надеть / снять</td><td>Take off your shoes.</td></tr><tr><td>get on with</td><td>ладить</td><td>I get on well with my boss.</td></tr>
<tr><td>run out of</td><td>закончиться</td><td>We've run out of milk.</td></tr><tr><td>look after</td><td>заботиться</td><td>Can you look after my cat?</td></tr></table>
<p>Если частица отделяемая, местоимение ставится в середину: <i>Put it on</i> (не <i>put on it</i>).</p>`,
ex:[
G("We've run ___ of sugar.","out"),
G("I'm looking forward ___ the party.","to"),
G("Who looks ___ your grandmother?","after"),
M("Your jacket is on the chair. Put ___.",["on it","it on","it up"],1),
G("Don't give ___ — you're almost there!","up"),
M("Do you get on ___ your neighbours?",["with","to","at"],0)
],
hw:[H("Опишите вечеринку или праздник (120 слов), используя 8 фразовых глаголов из таблицы.")]},
{id:"b1-quant", title:"Существительные и выражения количества", en:"a piece of, plenty of, too much",
theory:`<p><b>Счётные слова для неисчисляемых:</b> a piece of advice/cake, a slice of bread, a bottle of water, a cup of tea, a loaf of bread, a bar of chocolate.</p>
<p><b>Количество:</b> plenty of (достаточно, с избытком), a lot of, lots of, hardly any (почти нет), none, several (несколько, исчисл.), a great deal of (много, неисчисл., формально).</p>
<p><b>too much / too many</b> — слишком много (плохо); <b>enough</b> — достаточно: <i>There isn't enough time. You eat too much sugar.</i></p>`,
ex:[
G("Can I give you a piece ___ advice?","of"),
M("There are ___ cars in the city centre.",["too much","too many","enough of"],1),
M("We have ___ time — no need to hurry.",["plenty of","a few of","many"],0),
G("There's hardly ___ milk left.","any"),
M("I'd like a ___ of chocolate.",["slice","bar","loaf"],1)
],
hw:[H("Опишите свою еду за вчерашний день (100 слов) с выражениями количества: a slice of, too much, hardly any, plenty of, enough.")]},
{id:"b1-timeprep", title:"Предлоги времени: by, until, during, for", en:"time prepositions",
theory:`<p><b>by</b> — не позже чем: <i>Send it by Friday.</i> <b>until/till</b> — до (действие длится до момента): <i>I'll wait until 6.</i></p>
<p><b>during</b> + существительное — во время: <i>during the film</i>. <b>while</b> + предложение: <i>while I was watching</i>.</p>
<p><b>for</b> — как долго: <i>for two hours</i>. <b>within</b> — в пределах: <i>within a week</i>. <b>since</b> — с момента.</p>`,
ex:[
G("Please return the book ___ Monday. (не позже)","by"),
G("The shop is open ___ 10 pm. (до)","until|till"),
G("Someone's phone rang ___ the concert.","during"),
M("I fell asleep ___ I was reading.",["during","while","for"],1),
G("We waited ___ forty minutes.","for")
],
hw:[H("Опишите правила вашей учёбы или работы (8 предложений) с by, until, during, for, within.")]}
);

// indirect questions after reported speech position in B1
LV("B1").topics.push(
{id:"b1-indq", title:"Косвенные вопросы", en:"Could you tell me where…?",
theory:`<p>Вежливые вопросы начинаются с фраз: <i>Could you tell me…, Do you know…, I wonder…, I'd like to know…</i></p>
<p>После них — <b>прямой порядок слов</b> и без do/does/did: <i>Where is the station? → Could you tell me where <b>the station is</b>?</i> <i>What time does it open? → Do you know what time <b>it opens</b>?</i></p>
<p>Вопрос да/нет → <b>if/whether</b>: <i>Is he coming? → Do you know if he is coming?</i></p>`,
ex:[
M("Could you tell me where ___?",["is the bank","the bank is","does the bank"],1),
M("Do you know what time ___?",["the film starts","does the film start","starts the film"],0),
G("I wonder ___ she will come. (да/нет)","if|whether"),
M("Can you tell me how much ___?",["does it cost","it costs","costs it"],1),
G("Do you know where ___ (he / live)?","he lives")
],
hw:[H("Перепишите 8 прямых вопросов туриста (Where is…? How much is…? When does…?) в вежливые косвенные.")]}
);

LV("B2").topics.push(
{id:"b2-articles", title:"Артикли: продвинутый уровень", en:"a / the / zero article",
theory:`<p><b>a/an</b> — один из многих, впервые упоминаем, профессия. <b>the</b> — единственный, уже известный, конкретный: <i>the sun, the book I gave you</i>.</p>
<p><b>Без артикля</b> — обобщение во множественном/неисчисляемом: <i>Dogs are loyal. Water is essential.</i>, а также названия большинства стран, городов, улиц.</p>
<p><b>the</b> с: реками, морями, горными цепями, группами островов (the Volga, the Alps), странами с Republic/Kingdom/States, превосходной степенью, порядковыми числами, the + прилагательное для групп (<i>the rich, the elderly</i>).</p>
<p>Устойчивые: go to school/hospital/prison (по назначению) vs go to <b>the</b> school (как посетитель).</p>`,
ex:[
G("___ Caspian Sea is the largest lake in the world.","the"),
M("___ honey never goes bad.",["The","A","—"],2,"Обобщение, неисчисляемое → без артикля."),
G("She is ___ honest person.","an"),
M("My grandfather is in ___ hospital — he's ill.",["the","a","—"],2),
G("We should help ___ elderly.","the"),
M("He lives in ___ United Kingdom.",["—","the","a"],1)
],
hw:[H("Возьмите абзац из английской статьи, удалите все артикли и через день восстановите их. Сверьтесь и разберите ошибки.")]},
{id:"b2-ftc", title:"Придаточные времени в будущем", en:"when / as soon as + Present",
theory:`<p>После <b>when, as soon as, before, after, until, once, by the time</b> о будущем используем <b>настоящее</b> время, а не will:</p>
<p><i>I'll call you <b>when</b> I <b>arrive</b>.</i> (не <i>when I will arrive</i>)</p>
<p>Если важно, что действие завершится, — Present Perfect: <i>I'll tell you as soon as I've finished.</i></p>`,
ex:[
G("I'll text you as soon as I ___ (get) home.","get"),
G("We won't start until everyone ___ (arrive).","arrives|has arrived"),
M("When she ___ , she'll find a job.",["will graduate","graduates","graduated"],1),
M("By the time you ___ this letter, I'll be in Paris.",["read","will read","are reading"],0),
G("Once I ___ (finish) this report, I'll join you.","have finished|'ve finished|finish")
],
hw:[H("Напишите план на день после выпуска (8 предложений) с when, as soon as, before, after, once, until.")]},
{id:"b2-habits", title:"Привычки: will, would, used to", en:"present & past habits",
theory:`<p><b>will</b> — типичное поведение сейчас: <i>She'll sit for hours reading.</i> С ударением — раздражение: <i>He <b>will</b> leave his socks everywhere!</i></p>
<p><b>would</b> — повторяющиеся действия в прошлом (не состояния!): <i>On Sundays we would visit Grandma.</i></p>
<p><b>used to</b> — и действия, и состояния в прошлом: <i>I used to have long hair</i> (с would нельзя).</p>`,
ex:[
M("When I was a kid, I ___ a dog.",["would have","used to have","will have"],1,"Состояние (have) → только used to."),
G("Every summer we ___ go to the lake. (повторяющееся действие)","would|used to"),
M("My brother ___ borrow my clothes without asking! (раздражает)",["will","used","would to"],0),
G("She didn't ___ to like coffee.","use")
],
hw:[H("Опишите детство в 10 предложениях с would и used to, и 3 нынешние привычки семьи с will.")]}
);

// ======================= Course programmes =======================
// k: topic id on this site | kind: "talk" (discussion/media/speaking), "review", "test"
function C(n,k,talk){return {n:n,k:k||null,talk:talk||null};}
const TALK={
movie:["What is your favourite animated film and why?","Describe a scene you remember well — use Past Simple and Past Continuous.","Would you prefer to live in the city or in the wild? Why?","Which character are you most like?"],
relat:["What makes a good friend?","How has a friendship of yours changed over time?","Is it possible to stay friends with an ex?","Online or offline — where is it easier to meet people today?"],
food:["What food could you never give up?","Describe a traditional dish from your country.","Have you ever tried a diet? Did it work?","Is fast food really that bad?"],
crime:["What is the strangest news story you have ever heard?","Why do people commit 'stupid' crimes?","Should punishment always fit the crime?","Retell a short crime story using Past Perfect."],
ted:["Which TED talk would you recommend to a friend?","What makes a speaker interesting?","Summarise a talk you watched in 5 sentences.","Prepare a 2-minute talk on an idea you care about."],
cartoon:["Describe the three main characters.","Which episode did you like most and why?","What makes cartoon humour work for adults?","Retell one episode in reported speech."],
person:["Are you an introvert or an extrovert?","Do personality tests tell the truth?","Which job suits your personality?","How did your personality change since childhood?"],
gap:["Would you take a gap year? What would you do?","Pros and cons of travelling before university.","Where would you go if money were no problem?","What can you learn outside school?"],
robots:["Which household chore would you give to a robot?","Will robots replace people at home?","Is technology making us lazy?","Describe your ideal smart home."],
rent:["Is it better to rent or to buy a home? Why?","What do young people in your city usually do?","What matters most when choosing a flat?","Would you share a flat with friends?"],
songs:["Which English song do you know by heart?","Pick a song and explain what it is about.","Find 5 phrasal verbs or idioms in a song you like.","Why are song lyrics hard to understand?"],
speaking:["Talk for 2 minutes about a person who influenced you.","Describe a place you would like to visit.","Talk about a skill you want to learn.","Answer: Do you prefer working alone or in a team? Why?"],
animals:["Should zoos exist?","Which animal would you like to be and why?","How do animals help people?","Describe an endangered species."],
watch:["Watch a short video (5–10 min) and write 5 key points.","Explain the speaker's main argument.","Do you agree? Give 3 reasons.","Write 5 new words from the video."]
};

LV("A2").course={title:"Edvibe · Elementary · 42", items:[
C("Lesson 1. am/is/are","a1-be"),C("Lesson 2. a, an, the","a1-art"),C("Lesson 3. Possessive determiners","a1-pron"),C("Lesson 4. Professions","a1-art"),
C("Short Story: Alex and his family",null,TALK.relat),C("Lesson 5. Possessive 's","a2-poss"),C("Lesson 6. Present Simple","a1-ps"),
C("Lesson 7. Present Simple (negative, question)","a2-psq"),C("Lesson 8. Object pronouns, like + V-ing","b1-ger"),C("Lesson 9. Time","a2-prep"),
C("Lesson 10. Adverbs of frequency","a2-psq"),C("Short story 2: Laura and her siblings",null,TALK.relat),C("Lesson 11. Prepositions of time","a2-prep"),
C("Lesson 12. Past Simple (affirmative)","a2-past"),C("Lesson 13. Time expressions, Weather","a2-past"),C("Short Story 3: Suzi's holidays",null,TALK.gap),
C("Lesson 14. Past Simple (negative, question)","a2-past"),C("Lesson 15. Review","review"),C("Lesson 16. There is / there are. Some/any","a1-there"),
C("Lesson 17. Prepositions of place","a1-there"),C("Lesson 18. Countable and uncountable nouns","a2-count"),C("Lesson 19. Present Continuous","a2-pc"),
C("Lesson 20. Comparative adjectives","a2-comp"),C("Lesson 21. Superlative adjectives","a2-comp"),C("Lesson 22. Review","review"),
C("Lesson 23. Can for ability","a1-can"),C("Lesson 24. Adverbs of manner. Frequency expressions","a2-psq"),C("Lesson 25. Want to, would like to, hope to","a2-future"),
C("Lesson 26. To be going to","a2-future"),C("Lesson 27. Present Perfect","a2-pp"),C("Lesson 28. Present Perfect vs Past Simple","a2-pp"),
C("Lesson 29. Questions with prepositions","a2-psq"),C("Lesson 30. Tense review","b1-review"),C("Lesson 31. Review","review"),
C("Short Story 4. Seasons",null,TALK.speaking),C("Short Story 5: At a restaurant",null,TALK.food),C("Short Story 6: A Dream Trip Around the World",null,TALK.gap),
C("Short Story: The Talent Show and the Dream Meal",null,TALK.food),C("Short Story: A mysterious letter",null,TALK.crime),C("4B Famous people's routines","a1-ps"),
C("Test","test"),C("Lesson 1 (bonus)","a1-be")
]};

LV("B1").course={title:"Edvibe · Intermediate · 47", items:[
C("Placement Test","test"),C("Lesson 1. Friends. Tense review","b1-review"),C("Lesson 2. Friends. Adverbs of frequency","a2-psq"),
C("Lesson 3. Adrenaline. Present Perfect Simple","b1-pp"),C("Lesson 4. Adrenaline. Past Simple and Continuous. Superlative/Comparative","b1-pastc"),
C("Lesson 5. Relationships. Dynamic and stative meanings","b1-stative"),C("Lesson 6. Relationships. Present Perfect Simple and Continuous","b1-pp"),
C("Cinematic English. Madagascar",null,TALK.movie),C("Things about Relationships",null,TALK.relat),C("Lesson 7–8. Review A","review"),
C("Lesson 9. Party. Phrasal verbs","b1-phrasal"),C("Lesson 10. Party. Future forms","b1-future"),C("Try not to eat!",null,TALK.food),
C("Lesson 11. Edible. Nouns and quantity expressions","b1-quant"),C("Lesson 12. Edible. used to / would","b1-usedto"),
C("Lesson 13. Time. Time prepositions","b1-timeprep"),C("Lesson 14. Time. Modals of obligation and permission","b1-modals"),C("Lesson 15–16. Review B","review"),
C("Lesson 17. News. Verb patterns","b1-ger"),C("Lesson 18. News. Passives","b1-passive"),C("Guess what's next? Stupid crimes",null,TALK.crime),
C("Lesson 19. Journey. Modals of deduction","b2-deduc"),C("Lesson 20. Journey. Past Perfect","b2-narr"),C("Lesson 21. Opinions. Reported statements","b2-rep"),
C("Lesson 22. Opinions. Reported questions","b2-rep"),C("Lesson 23–24. Review C","review"),C("Ted talks",null,TALK.ted),
C("Lesson 25. Childhood. Real conditionals","b1-cond"),C("Lesson 26. Childhood. Indirect questions","b1-indq"),C("Lesson 27. Age. Unreal conditionals","b1-cond"),
C("Lesson 28. Age. Unreal conditionals 2","b2-cond3"),C("Lesson 29. Style",null,TALK.person),C("Lesson 30. Style. Have something done","b2-pass"),
C("We Bare Bears!",null,TALK.cartoon),C("Lesson 31–32. Review D","review"),C("1A 16 personalities",null,TALK.person),C("7B Gap year",null,TALK.gap),
C("3B Household Robots",null,TALK.robots),C("7C To rent or to buy?",null,TALK.rent),C("Final test","test"),C("Let's learn to understand song lyrics!",null,TALK.songs)
]};

LV("B2").course={title:"Edvibe · Pre-IELTS · 24", items:[
C("Lesson 1. Impressions. Tense review. Listening","b1-review"),C("Lesson 2. Generations. Tense review. Reading","b2-narr"),
C("Lesson 3. Writing. Reported Speech","b2-rep"),C("Lesson 4. Writing. Unreal conditionals","b2-cond3"),C("Lesson 5. Ted Talks",null,TALK.ted),
C("Lesson 6. Speaking",null,TALK.speaking),C("Lesson 7. Listening. Future continuous/perfect","b2-fut"),C("Lesson 8. Reading. will / used to / would","b2-habits"),
C("Lesson 9. Writing. Present perfect simple/continuous","b1-pp"),C("Lesson 10. Writing. Passive voice","b2-pass"),C("Lesson 11. Watch & Discuss",null,TALK.watch),
C("Lesson 12. Speaking",null,TALK.speaking),C("Lesson 13. Listening. Articles","b2-articles"),C("Lesson 14. Reading. Passive report structures","c1-pass"),
C("Lesson 15. Writing. Past modals of deduction and obligation","b2-deduc"),C("Lesson 16. Writing. Past Perfect Simple/Continuous","b2-narr"),
C("Lesson 17. Animals",null,TALK.animals),C("Lesson 18. Speaking",null,TALK.speaking),C("Lesson 19. Listening. Relative clauses","b1-rel"),
C("Lesson 20. Reading. Emphasis","c1-cleft"),C("Lesson 21. Writing. Future time clauses","b2-ftc"),C("Lesson 22. Writing. Participle clauses","c1-part"),
C("Lesson 23. Speaking",null,TALK.speaking),C("Lesson 24. Final test","test")
]};
