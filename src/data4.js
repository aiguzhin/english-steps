// ======================= B2 =======================
LEVELS.push({
code:"B2", name:"Upper-Intermediate", ru:"Выше среднего",
goal:"Спорить и аргументировать, понимать TED-лекции, писать эссе и письма формального стиля.",
topics:[
{id:"b2-narr", title:"Повествовательные времена: Past Perfect", en:"had done / had been doing",
theory:`<p><b>Past Perfect</b> (had + V3) — действие, случившееся <b>раньше</b> другого действия в прошлом: <i>When I arrived, the film <b>had</b> already <b>started</b>.</i></p>
<p><b>Past Perfect Continuous</b> (had been + -ing) — длительность до момента в прошлом: <i>She was tired because she <b>had been working</b> all day.</i></p>
<p>В рассказе: Past Simple — основные события, Past Continuous — фон, Past Perfect — предыстория.</p>`,
ex:[
G("By the time we got to the station, the train ___ (leave).","had left|'d left"),
G("He was out of breath because he ___ (run).","had been running|'d been running"),
M("I didn't recognise her because she ___ her hair.",["changed","had changed","has changed"],1),
G("They ___ (never / see) snow before they moved to Astana.","had never seen|'d never seen"),
M("She ___ for two hours when the bus finally came.",["had been waiting","has been waiting","was waited"],0)
],
hw:[H("Напишите рассказ (180 слов), который начинается с фразы «When I opened the door, I realised something had happened…». Используйте все 4 прошедших времени.")]},
{id:"b2-cond3", title:"3-й и смешанный тип условных", en:"If I had known…",
theory:`<p><b>3 тип</b> — нереальное прошлое, сожаление: <i>If I had studied, I would have passed.</i> (If + Past Perfect, would have + V3)</p>
<p><b>Смешанный</b> — прошлое условие → настоящий результат: <i>If I had taken that job, I would be rich now.</i></p>
<p>Вместо would: could have / might have.</p>`,
ex:[
G("If you had told me, I ___ (help) you.","would have helped|'d have helped"),
G("If she ___ (not / miss) the bus, she wouldn't have been late.","hadn't missed|had not missed"),
M("If I had slept more last night, I ___ so tired now.",["wouldn't have been","wouldn't be","won't be"],1,"Смешанный тип: прошлое → сейчас."),
M("We ___ the match if our goalkeeper hadn't been injured.",["might have won","might win","would won"],0),
G("If they had left earlier, they ___ (catch) the plane.","would have caught|'d have caught|could have caught")
],
hw:[H("Напишите о 5 решениях в своей жизни и что было бы иначе (3 и смешанный тип)."),H("Цепочка: «If I hadn't…, I wouldn't have…, and then…» — 6 звеньев.")]},
{id:"b2-rep", title:"Косвенная речь", en:"She said (that) she was tired",
theory:`<p>При пересказе через said/told время обычно «сдвигается назад»: am → was, will → would, Past Simple → Past Perfect, can → could.</p>
<p>Меняются слова: today → that day, tomorrow → the next day, here → there.</p>
<p>Вопросы: <i>She asked <b>where I lived</b></i> (прямой порядок, без do). Да/нет: <i>He asked <b>if/whether</b> I was ready.</i></p>
<p><b>say</b> something, <b>tell</b> somebody something.</p>`,
ex:[
G("«I'm busy,» she said. → She said she ___ busy.","was"),
G("«We will call you.» → They said they ___ call me.","would"),
G("«Where do you work?» → He asked me where I ___.","worked"),
M("«Are you hungry?» → She asked ___.",["if I was hungry","was I hungry","if was I hungry"],0),
M("He ___ me that he was leaving.",["said","told","asked"],1)
],
hw:[H("Перескажите в косвенной речи короткий диалог из любимого сериала (10 реплик).")]},
{id:"b2-pass", title:"Пассив во всех временах и have something done", en:"is being built / had my car repaired",
theory:`<p>Формула всегда: <b>be</b> в нужном времени + V3. <i>The road <b>is being repaired</b>. The report <b>has been finished</b>. It <b>will be announced</b> tomorrow.</i></p>
<p>С модальными: <i>It must be done. It can't be fixed.</i></p>
<p><b>have/get something done</b> — кто-то делает это для вас: <i>I had my hair cut. We're getting the house painted.</i></p>`,
ex:[
G("A new bridge ___ (build) right now.","is being built"),
G("The results ___ (already / publish).","have already been published|have been already published"),
G("Yesterday I had my phone screen ___ (replace).","replaced"),
M("The winners ___ next week.",["will announce","will be announced","are announcing"],1),
M("Я подстригся (в парикмахерской):",["I cut my hair.","I had my hair cut.","I had cut my hair."],1)
],
hw:[H("Напишите новость (150 слов) о событии в вашем городе, используя минимум 5 пассивных форм разных времён."),H("Составьте список из 5 услуг, которыми вы пользуетесь, с have something done.")]},
{id:"b2-deduc", title:"Модальные глаголы предположения", en:"must have, can't have, might have",
theory:`<p>О настоящем: <b>must</b> (наверняка), <b>might/may/could</b> (возможно), <b>can't</b> (не может быть): <i>She must be at home — the lights are on.</i></p>
<p>О прошлом: модальный + <b>have + V3</b>: <i>He must have forgotten. They can't have seen us. She might have missed the bus.</i></p>
<p>Сожаление/упрёк: <i>You should have told me.</i></p>`,
ex:[
G("The ground is wet. It ___ have rained.","must"),
G("She ___ have stolen it — she was with me all evening.","can't|couldn't"),
M("I'm not sure where he is. He ___ be at the gym.",["must","might","can't"],1),
G("You ___ have told me earlier! (упрёк)","should"),
M("They ___ arrived yet — their car isn't here.",["can't have","mustn't have","shouldn't"],0)
],
hw:[H("Опишите загадочную ситуацию (например, пустая квартира с открытой дверью) и сделайте 8 предположений с must/might/can't have.")]},
{id:"b2-fut", title:"Future Continuous и Future Perfect", en:"will be doing / will have done",
theory:`<p><b>Future Continuous</b> (will be + -ing) — процесс в момент в будущем: <i>This time tomorrow I'll be flying to Dubai.</i></p>
<p><b>Future Perfect</b> (will have + V3) — к какому-то моменту будет сделано: <i>By 2030 I will have finished university.</i> Сигнал: <b>by</b>.</p>`,
ex:[
G("At 9 pm tonight I ___ (watch) the final.","will be watching|'ll be watching"),
G("By the end of the year she ___ (save) enough money.","will have saved|'ll have saved"),
M("Don't call at 3 — I ___ a meeting.",["will have","will be having","will have had"],1),
M("By the time you arrive, we ___ dinner.",["will finish","will have finished","are finishing"],1)
],
hw:[H("Напишите «письмо себе через 10 лет»: что вы будете делать в обычный день (Future Continuous) и чего добьётесь к тому времени (Future Perfect).")]},
{id:"b2-wish", title:"Wish и if only", en:"сожаления и желания",
theory:`<p><b>wish + Past Simple</b> — хотелось бы, чтобы сейчас было иначе: <i>I wish I had more time.</i></p>
<p><b>wish + Past Perfect</b> — сожаление о прошлом: <i>I wish I hadn't said that.</i></p>
<p><b>wish + would</b> — раздражение чужим поведением: <i>I wish you would stop talking.</i> <b>If only</b> — то же, но эмоциональнее.</p>`,
ex:[
G("I wish I ___ (can) speak Chinese.","could"),
G("She wishes she ___ (not / eat) so much cake yesterday.","hadn't eaten|had not eaten"),
G("I wish it ___ (be) summer now.","were|was"),
M("I wish my neighbours ___ so much noise.",["wouldn't make","didn't made","won't make"],0),
M("If only I ___ about the meeting earlier!",["knew","had known","know"],1)
],
hw:[H("Напишите 10 желаний: 4 о настоящем, 4 о прошлом, 2 о чужих привычках.")]},
{id:"b2-link", title:"Связки для эссе", en:"although, despite, however, whereas",
theory:`<p><b>although / even though</b> + предложение: <i>Although it was cold, we went out.</i></p>
<p><b>despite / in spite of</b> + существительное или -ing: <i>Despite the cold / Despite being tired…</i></p>
<p><b>however</b> — в начале нового предложения, после запятой: <i>It's expensive. However, it's worth it.</i></p>
<p><b>whereas / while</b> — противопоставление: <i>I love tea, whereas my wife prefers coffee.</i> Также: moreover, therefore, as a result, on the other hand.</p>`,
ex:[
M("___ the rain, the match continued.",["Although","Despite","However"],1),
M("___ he was ill, he went to work.",["Even though","In spite of","Despite"],0),
G("The hotel was cheap. ___, the rooms were dirty.","however"),
M("Despite ___ hard, he failed the test.",["he studied","studying","to study"],1),
G("My brother is outgoing, ___ I'm quite shy.","whereas|while")
],
hw:[H("Напишите эссе-мнение (200–250 слов): «Should students have part-time jobs?» Используйте минимум 6 разных связок.")]}
],
videos:[
V("arj7oStGLkU","Inside the mind of a master procrastinator","TED · Tim Urban","B2","Смешная и честная лекция о прокрастинации — живой разговорный английский.",[
M("Who takes control of the procrastinator's brain and wants only easy and fun things?",["The Panic Monster","The Instant Gratification Monkey","The Rational Decision-Maker"],1),
M("What finally makes the procrastinator start working?",["The Panic Monster, when a deadline gets close","A good night's sleep","A coffee break"],0),
M("Why is procrastination without deadlines especially dangerous, according to Urban?",["Because the Panic Monster never appears","Because work becomes too easy","Because monkeys get bored"],0),
M("What does the «Life Calendar» show?",["Holidays of the year","Each week of a 90-year life as a box","The price of time"],1)
],[H("Опишите своего «обезьянку мгновенного удовольствия»: что вы делаете вместо учёбы? (120 слов, с used to и wish)"),H("Напишите план борьбы с прокрастинацией на неделю (going to / will / Present Continuous).")]),
V("H14bBuluwB8","Grit: the power of passion and perseverance","TED · Angela Lee Duckworth","B2","Короткая (6 минут) лекция о том, почему упорство важнее таланта.",[
M("What job did Duckworth leave to teach maths?",["Doctor","Management consulting","Journalist"],1),
M("How does she define grit?",["Talent plus intelligence","Passion and perseverance for very long-term goals","Being strict with yourself"],1),
M("Which groups did she study?",["West Point cadets, spelling bee contestants, teachers and salespeople","Only university professors","Professional athletes only"],0),
M("Which idea does she mention as the best one she knows for building grit?",["Growth mindset","Strict punishment","Natural talent tests"],0)
],[H("Напишите эссе (180 слов): «Is talent more important than hard work?» с although/despite/however."),H("Расскажите о человеке с grit, которого вы знаете (Past Simple + Past Perfect).")]),
V("RcGyVTAoXEU","How to make stress your friend","TED · Kelly McGonigal","B2","Научная лекция с понятным языком: как отношение к стрессу меняет здоровье.",[
M("What increased the risk of dying in the study of 30,000 American adults?",["Any amount of stress","A lot of stress plus believing stress is harmful","Not having stress at all"],1),
M("Which hormone does McGonigal call a stress hormone that makes us want social contact?",["Adrenaline","Oxytocin","Insulin"],1),
M("When people saw their stress response as helpful, their blood vessels…",["stayed relaxed","became narrower","stopped working"],0),
M("According to the talk, what builds resilience?",["Avoiding everyone","Caring for others and reaching out","Drinking coffee"],1)
],[H("Напишите 6 предложений с wish/if only о стрессовых ситуациях в вашей жизни."),H("Дайте 5 советов другу перед экзаменом с should / ought to / had better.")])
]
});

// ======================= C1 =======================
LEVELS.push({
code:"C1", name:"Advanced", ru:"Продвинутый",
goal:"Говорить гибко и точно, понимать лекции и статьи без адаптации, писать академично (IELTS 7+).",
topics:[
{id:"c1-inv", title:"Инверсия для эмфазы", en:"Never have I seen…",
theory:`<p>После отрицательных и ограничительных слов в начале предложения порядок становится как в вопросе:</p>
<p><i><b>Never have I</b> seen such a mess. <b>Not only did she</b> win, but she also broke the record. <b>Hardly had we</b> arrived <b>when</b> it started to rain. <b>No sooner had</b> he left <b>than</b>… <b>Only then did I</b> realise… <b>Under no circumstances should you</b>…</i></p>
<p>Условная инверсия: <i>Had I known = If I had known. Should you need help = If you need help. Were I you = If I were you.</i></p>`,
ex:[
G("Never ___ I been so embarrassed.","have"),
G("Not only ___ he lie, but he also blamed me.","did"),
M("___ I known, I would have come.",["If","Had","Have"],1),
M("No sooner had we sat down ___ the phone rang.",["when","than","that"],1),
G("Under no circumstances ___ you open this door.","should"),
M("Only after the meeting ___ the truth.",["I learned","did I learn","I did learn"],1)
],
hw:[H("Перепишите 8 обычных предложений с инверсией (Seldom…, Rarely…, Little did I know…)."),H("Напишите вступление к выступлению (100 слов) с тремя инверсиями.")]},
{id:"c1-cleft", title:"Cleft sentences (выделение)", en:"It was… that / What I need is…",
theory:`<p>Разбиваем предложение, чтобы выделить главное:</p>
<p><i>Aliya broke the vase. → <b>It was Aliya who</b> broke the vase.</i> / <i><b>It was the vase that</b> she broke.</i></p>
<p><b>What</b>-clefts: <i>I need a holiday. → <b>What I need is</b> a holiday. <b>What happened was</b> (that)… <b>All I want is</b>…</i></p>
<p>Также: <i>The reason why… is that…, The thing that annoys me is…</i></p>`,
ex:[
G("___ I love about Almaty is the mountains.","what"),
G("It was my teacher ___ inspired me to study abroad.","who|that"),
M("Выделите время: «We met in 2019.»",["It was in 2019 that we met.","What we met was 2019.","It was 2019 who we met."],0),
G("All I want ___ some peace and quiet.","is"),
M("The reason I'm late ___ the bus broke down.",["is because of","is that","is why"],1)
],
hw:[H("Напишите 6 cleft-предложений о том, что вас раздражает, вдохновляет и мотивирует."),H("Перепишите абзац из своего эссе, добавив 3 выделяющие конструкции.")]},
{id:"c1-pass", title:"Безличный пассив", en:"It is said that… / He is believed to…",
theory:`<p>Для новостей и академического стиля, когда передаём мнение многих:</p>
<p><i>People say he is rich. → <b>It is said that</b> he is rich. → He <b>is said to be</b> rich.</i></p>
<p>О прошлом — перфектный инфинитив: <i>She is believed <b>to have left</b> the country.</i></p>
<p>Глаголы: say, believe, think, know, report, expect, consider, claim.</p>`,
ex:[
G("It ___ believed that the painting is a fake.","is"),
G("The company is expected ___ (announce) the results tomorrow.","to announce"),
G("The suspect is thought ___ (escape) last night.","to have escaped"),
M("People say that the castle is haunted. → The castle ___ haunted.",["is said to be","says to be","is said being"],0),
M("It ___ that over 1,000 people attended.",["reports","is reported","is reporting"],1)
],
hw:[H("Напишите короткую новостную заметку (150 слов) о научном открытии, используя 5 безличных пассивных конструкций.")]},
{id:"c1-part", title:"Причастные обороты", en:"Having finished…, Built in 1890…",
theory:`<p>Сокращают придаточные и делают текст плотнее:</p>
<p><i>As I was walking home, I… → <b>Walking</b> home, I… </i><br><i>After I had finished the report, I… → <b>Having finished</b> the report, I…</i><br><i>The bridge, which was built in 1890… → The bridge, <b>built</b> in 1890…</i></p>
<p>Подлежащее у оборота и главного предложения должно совпадать, иначе выходит ошибка: <i>✗ Walking home, the rain started.</i></p>`,
ex:[
G("___ (finish) her work, she went home. (после того как закончила)","having finished"),
G("The book, ___ (write) in 1960, is still popular.","written"),
G("___ (not / know) what to do, I called my dad.","not knowing"),
M("Какое предложение правильное?",["Arriving at the airport, my flight was cancelled.","Arriving at the airport, I found my flight was cancelled.","Arrived at the airport, I found…"],1,"Подлежащее оборота = подлежащее главного предложения (I)."),
M("___ by the noise, the baby started crying.",["Waking","Woken","Having woke"],1)
],
hw:[H("Перепишите 8 сложных предложений из любой статьи, заменив придаточные причастными оборотами.")]},
{id:"c1-subj", title:"Сослагательное наклонение и формальные конструкции", en:"It's essential that he be… / It's high time…",
theory:`<p>После suggest, recommend, insist, demand, it's essential/vital that — глагол в базовой форме (особенно в американском и формальном): <i>I suggest that he <b>apply</b> early. It's vital that she <b>be</b> informed.</i> В британском допустимо <i>should apply</i>.</p>
<p><b>It's (high) time</b> + Past: <i>It's time we left.</i> <b>I'd rather</b> you + Past: <i>I'd rather you didn't smoke.</i> <b>as if / as though</b> + Past для нереального: <i>He talks as if he knew everything.</i></p>`,
ex:[
G("The doctor recommended that he ___ (stop) smoking.","stop|should stop"),
G("It's high time you ___ (find) a job.","found"),
G("I'd rather you ___ (not / tell) anyone.","didn't tell|did not tell"),
M("It is essential that every student ___ the form.",["completes","complete","completed"],1),
M("She behaves as if she ___ the boss.",["is","were","be"],1)
],
hw:[H("Напишите официальное письмо-рекомендацию (180 слов) с 4 конструкциями: I recommend that…, It is essential that…, I would rather…, It's high time…")]},
{id:"c1-hedge", title:"Эмфаза и смягчение (hedging)", en:"I do believe… / It would seem that…",
theory:`<p><b>Эмфаза:</b> do/does/did перед глаголом — <i>I <b>do</b> understand.</i> Усилители: <i>by far the best, not in the slightest, the very same</i>.</p>
<p><b>Hedging</b> — смягчение категоричности в академическом и деловом английском: <i>It would seem that…, This may suggest…, To some extent…, arguably, apparently, tend to.</i></p>
<p>Сравните: <i>Social media causes depression.</i> → <i>Heavy social media use <b>may be associated with</b> higher rates of depression.</i></p>`,
ex:[
G("I ___ like your idea — I'm just not sure about the budget. (эмфаза)","do"),
M("Более академично:",["This proves that the method works.","These results suggest that the method may be effective.","The method works 100%."],1),
G("This is ___ far the best solution.","by"),
M("Young people ___ spend more time online than older generations.",["always","tend to","must"],1),
G("It would ___ that the government has changed its policy.","seem|appear")
],
hw:[H("Возьмите 5 категоричных утверждений из соцсетей и перепишите их в академичном, смягчённом стиле."),H("Напишите вступление к эссе IELTS Task 2 (80 слов) с 3 приёмами hedging.")]},
{id:"c1-phr", title:"Фразовые глаголы и коллокации", en:"come up with, put off, make a decision",
theory:`<table><tr><th>Фразовый</th><th>Значение</th><th>Формальная замена</th></tr>
<tr><td>come up with</td><td>придумать</td><td>devise</td></tr><tr><td>put off</td><td>откладывать</td><td>postpone</td></tr>
<tr><td>carry out</td><td>проводить (исследование)</td><td>conduct</td></tr><tr><td>look into</td><td>изучить</td><td>investigate</td></tr>
<tr><td>bring about</td><td>вызвать (перемены)</td><td>cause</td></tr><tr><td>turn down</td><td>отказаться</td><td>reject</td></tr></table>
<p><b>Коллокации:</b> make a decision, do research, take a risk, pay attention, raise awareness, meet a deadline, draw a conclusion, heavy traffic, strong coffee.</p>`,
ex:[
G("We need to come ___ with a better plan.","up"),
G("Stop putting ___ your homework!","off"),
M("Правильная коллокация:",["do a decision","make a decision","take a decision for"],1),
M("Scientists ___ an experiment.",["made","carried out","did up"],1),
G("She turned ___ the job offer because the salary was low.","down"),
M("The campaign aims to ___ awareness of climate change.",["rise","raise","grow"],1)
],
hw:[H("Выпишите 15 фразовых глаголов из видео или подкаста и составьте с каждым своё предложение."),H("Напишите текст (150 слов) о своём проекте, используя 8 коллокаций из темы.")]}
],
videos:[
V("iG9CE55wbtY","Do schools kill creativity?","TED · Sir Ken Robinson","C1","Самая просматриваемая лекция TED: британский юмор, сложная лексика, быстрый темп.",[
M("What does Robinson say about creativity in education?",["It is less important than maths","It is as important as literacy","It should be taught only at university"],1),
M("Gillian Lynne was taken to a doctor because she couldn't sit still. What did the doctor realise?",["She was ill","She was a dancer","She needed glasses"],1),
M("Which subjects are at the top of the hierarchy in most school systems?",["Dance and drama","Mathematics and languages","Art and music"],1),
M("Complete his idea: «If you're not prepared to be wrong, …»",["you'll never come up with anything original","you will fail exams","you should study more"],0)
],[H("Напишите эссе (250 слов): «Do schools kill creativity in your country?» с hedging и инверсией."),H("Выпишите 10 продвинутых слов/выражений из лекции и составьте с ними свои предложения.")]),
V("c0KYU2j0TM4","The power of introverts","TED · Susan Cain","C1","Глубокая лекция о личности и обществе — отлично для словаря и аргументации.",[
M("What did young Susan pack for summer camp?",["A guitar","A suitcase full of books","Sports equipment"],1),
M("How does Cain distinguish introversion from shyness?",["They are the same","Shyness is fear of social judgement; introversion is about how you respond to stimulation","Introverts are always shy"],1),
M("Roughly what part of the population are introverts, according to her?",["About one in ten","A third to a half","Almost everyone"],1),
M("Which is one of her three calls to action?",["Stop the madness for constant group work","Ban teamwork completely","Make everyone speak in public every day"],0)
],[H("Вы интроверт или экстраверт? Напишите аргументированный ответ (200 слов) с cleft sentences."),H("Подготовьте 2-минутный монолог по-английски: «What's in your suitcase?» — запишите аудио.")]),
V("UF8uR6Z6KLc","Steve Jobs' 2005 Stanford Commencement Address","Stanford University","C1","Знаменитая речь из трёх историй: живая риторика и сильные структуры.",[
M("How many stories does Jobs tell?",["Two","Three","Five"],1),
M("Which class he took after dropping out later influenced the Mac's typography?",["Calligraphy","Physics","Painting"],0),
M("What happened to Jobs at the age of 30?",["He was fired from Apple","He founded Microsoft","He finished university"],0),
M("How does the speech end?",["«Think different.»","«Stay hungry. Stay foolish.»","«Just do it.»"],1)
],[H("Перескажите три истории Jobs в косвенной речи (по 4 предложения на каждую)."),H("Напишите свою речь выпускника (250 слов) по той же схеме: три истории из жизни.")])
]
});
