// ======================= A2 =======================
LEVELS.push({
code:"A2", name:"Elementary", ru:"Элементарный",
goal:"Рассказывать о прошлом и планах, сравнивать вещи, общаться в магазине, кафе и в поездке.",
topics:[
{id:"a2-poss", title:"Притяжательный падеж 's", en:"Tom's car, my parents' house",
theory:`<p>Чтобы сказать «чей», к человеку добавляем <b>'s</b>: <i>Tom's car, my mum's job</i>.</p>
<p>Множественное число на -s → только апостроф: <i>my parents' house, the students' books</i>. Неправильное множественное → 's: <i>children's toys, people's ideas</i>.</p>
<p>Не путайте: <i>Tom's tall</i> = Tom is tall.</p>`,
ex:[
G("This is the bag of my sister. → This is my ___ bag.","sister's"),
G("The room of the boys → the ___ room","boys'"),
G("toys of the children → the ___ toys","children's"),
M("Это машина моих родителей.",["It's my parent's car.","It's my parents' car.","It's my parents car."],1),
M("Where is ___ phone? (Дана)",["Dana","Danas'","Dana's"],2)
],
hw:[H("Нарисуйте (или опишите словами) семейное дерево и напишите 8 фраз с 's: My uncle's wife is…, My grandparents' house is…")]},
{id:"a2-psq", title:"Present Simple: вопросы, отрицания, наречия частоты", en:"always, usually, never",
theory:`<p>Вопрос: (Wh-) + <b>do/does</b> + подлежащее + глагол: <i>What time does the film start? Where do you live?</i></p>
<p><b>Наречия частоты:</b> always (100%) – usually – often – sometimes – rarely – never (0%).</p>
<p>Место: <b>перед</b> обычным глаголом (<i>I usually walk</i>), но <b>после</b> to be (<i>She is always late</i>).</p>`,
ex:[
G("Where ___ your brother work?","does"),
G("I ___ eat meat. I'm a vegetarian. (никогда)","never"),
M("Правильный порядок:",["She always is busy.","She is always busy.","Always she is busy."],1),
M("Правильный порядок:",["I go usually to the gym.","I usually go to the gym.","Usually go I to the gym."],1),
G("What ___ you do at weekends?","do"),
M("He ___ like football.",["don't","doesn't","isn't"],1)
],
hw:[H("Напишите 8 предложений о своих привычках с разными наречиями частоты."),H("Составьте 6 вопросов для интервью однокурсника о его неделе и запишите ответы.")]},
{id:"a2-prep", title:"Предлоги времени in / on / at", en:"at 5, on Monday, in May",
theory:`<table><tr><th>at</th><th>on</th><th>in</th></tr>
<tr><td>точное время: at 7 o'clock, at noon, at night, at the weekend (брит.)</td><td>дни и даты: on Monday, on 5 May, on my birthday</td><td>месяцы, годы, сезоны, части дня: in June, in 2025, in winter, in the morning</td></tr></table>
<p>Без предлога: <i>this week, next year, last Monday, every day</i>.</p>`,
ex:[
G("The lesson starts ___ 9:30.","at"),
G("I was born ___ 2006.","in"),
G("We meet ___ Fridays.","on"),
G("She drinks coffee ___ the morning.","in"),
M("I'll see you ___.",["on next week","next week","in next week"],1),
G("My birthday is ___ 14 March.","on")
],
hw:[H("Напишите расписание своей недели (10 строк) с at/on/in.","On Monday I have English at 10 am. In the evening I go to the gym.")]},
{id:"a2-past", title:"Past Simple", en:"worked, went, did you…?",
theory:`<p>Законченное действие в прошлом, часто с временем: <i>yesterday, last week, in 2020, two days ago</i>.</p>
<p>Правильные глаголы: + <b>-ed</b> (work → worked, stop → stopped, study → studied). Неправильные надо учить: go → <b>went</b>, see → saw, have → had, buy → bought, make → made, eat → ate.</p>
<p>Отрицание и вопрос — через <b>did</b>, а глагол в первой форме: <i>I didn't go. Did you see it?</i></p>
<p>To be: was / were — <i>I was tired. They were at home.</i></p>`,
ex:[
G("Yesterday I ___ (go) to the cinema.","went"),
G("We ___ (watch) a film last night.","watched"),
G("She ___ (not / call) me.","didn't call|did not call"),
G("___ you see the match?","did"),
M("Did he ___ the email?",["sent","send","sends"],1,"После did — первая форма глагола."),
G("They ___ (be) in Turkey last summer.","were"),
M("I ___ breakfast this morning. (не завтракал)",["didn't have","didn't had","not had"],0)
],
hw:[H("Опишите вчерашний день в 10 предложениях (минимум 5 неправильных глаголов).","Yesterday I woke up at 8. I had breakfast and went to college…"),H("Выучите 20 неправильных глаголов (go–went, see–saw…) и составьте с 5 из них вопросы с did.")]},
{id:"a2-count", title:"Исчисляемые и неисчисляемые: some, any, much, many", en:"countable / uncountable",
theory:`<p><b>Исчисляемые</b> можно посчитать: an apple, two apples. <b>Неисчисляемые</b> нельзя: water, money, information, advice, bread.</p>
<table><tr><th></th><th>исчисляемые</th><th>неисчисляемые</th></tr>
<tr><td>много</td><td>many</td><td>much</td></tr><tr><td>немного</td><td>a few</td><td>a little</td></tr>
<tr><td>сколько?</td><td>How many…?</td><td>How much…?</td></tr></table>
<p><b>some</b> — в утверждениях и вежливых просьбах/предложениях (<i>Would you like some tea?</i>), <b>any</b> — в отрицаниях и вопросах. <b>A lot of</b> подходит для обоих типов.</p>`,
ex:[
G("How ___ money have you got?","much"),
G("How ___ brothers do you have?","many"),
G("There isn't ___ milk in the fridge.","any"),
G("Would you like ___ cake?","some"),
M("I need ___ advice.",["an","some","many"],1,"advice — неисчисляемое."),
M("There are ___ people in the café.",["a little","a few","much"],1)
],
hw:[H("Напишите список покупок на неделю (12 позиций) с some/a bottle of/a kilo of/a few."),H("Напишите 5 вопросов с How much/How many о вашем городе и найдите ответы.")]},
{id:"a2-pc", title:"Present Continuous vs Present Simple", en:"I'm working now / I work every day",
theory:`<p><b>Present Continuous</b> (am/is/are + -ing): действие прямо сейчас или временное: <i>I'm reading now. She's living with her aunt this month.</i></p>
<p><b>Present Simple</b>: привычки и факты: <i>I read every evening.</i></p>
<p>Глаголы состояния обычно не ставят в -ing: know, like, love, want, need, believe, understand. <i>I know</i> (не <i>I'm knowing</i>).</p>`,
ex:[
G("Look! It ___ (rain).","is raining|'s raining"),
G("She usually ___ (drive) to work.","drives"),
G("Be quiet, I ___ (study).","am studying|'m studying"),
M("I ___ the answer.",["am knowing","know","knows"],1),
M("What ___ now?",["do you do","are you doing","you doing"],1)
],
hw:[H("Опишите фото или улицу за окном: 6 предложений о том, что происходит сейчас (Present Continuous), и 4 — о том, что обычно происходит там.")]},
{id:"a2-comp", title:"Сравнительная и превосходная степень", en:"bigger, the biggest",
theory:`<table><tr><th>Прилагательное</th><th>Сравнительная</th><th>Превосходная</th></tr>
<tr><td>короткое: cheap</td><td>cheaper (than)</td><td>the cheapest</td></tr>
<tr><td>на -y: easy</td><td>easier</td><td>the easiest</td></tr>
<tr><td>CVC: big</td><td>bigger</td><td>the biggest</td></tr>
<tr><td>длинное: expensive</td><td>more expensive</td><td>the most expensive</td></tr>
<tr><td>good / bad / far</td><td>better / worse / further</td><td>the best / the worst / the furthest</td></tr></table>
<p>Равенство: <i>as tall as</i>. Неравенство: <i>not as cold as</i>.</p>`,
ex:[
G("Astana is ___ (cold) than Almaty.","colder"),
G("This is the ___ (good) pizza in town.","best"),
G("My phone is ___ (expensive) than yours.","more expensive"),
G("Today is ___ (hot) day of the year.","the hottest"),
M("English is ___ than Chinese.",["easyer","more easy","easier"],2),
M("He is ___ his brother.",["as tall as","as taller as","so tall than"],0)
],
hw:[H("Сравните два города (или две страны) в 8 предложениях: цены, погода, люди, транспорт."),H("Напишите «топ-5» вещей в вашем городе с превосходной степенью (the best café, the tallest building…).")]},
{id:"a2-future", title:"Going to, want to, would like to", en:"планы и желания",
theory:`<p><b>be going to + глагол</b> — уже решённые планы: <i>I'm going to visit my grandma on Sunday.</i> И прогноз по явным признакам: <i>Look at the clouds — it's going to rain.</i></p>
<p><b>want to</b> — хочу, <b>would like to</b> ('d like to) — вежливо «хотел бы»: <i>I'd like to book a table.</i> Также <b>hope to</b>, <b>plan to</b>.</p>`,
ex:[
G("We ___ going to buy a new sofa.","are|'re"),
G("Look at that car! It ___ going to crash.","is|'s"),
M("Вежливо в кафе:",["I want a coffee.","I'd like a coffee, please.","Give me coffee."],1),
G("I'd like ___ visit Japan.","to"),
M("___ you going to study tonight?",["Do","Are","Will"],1)
],
hw:[H("Напишите 6 планов на следующий месяц с going to и 4 мечты с would like to / hope to.")]},
{id:"a2-pp", title:"Present Perfect: первое знакомство", en:"I have been / I went",
theory:`<p><b>have/has + 3-я форма</b> (been, seen, done, eaten…). Говорим об опыте «когда-либо в жизни» без точного времени: <i>I've been to Turkey. Have you ever tried sushi?</i></p>
<p>Если называем, <b>когда</b> это было, — Past Simple: <i>I went to Turkey <u>last year</u>.</i></p>
<p>Слова-подсказки: ever, never, just, already, yet.</p>`,
ex:[
G("I ___ never been to London.","have|'ve"),
G("___ you ever eaten horse meat?","have"),
M("She ___ to Paris in 2019.",["has been","went","has gone"],1,"Есть точное время (in 2019) → Past Simple."),
G("He has ___ (see) this film three times.","seen"),
M("— Have you finished? — Yes, I ___ it an hour ago.",["have finished","finished","finish"],1)
],
hw:[H("Напишите 6 предложений о своём жизненном опыте (I've been…, I've never…) и к двум из них добавьте подробности в Past Simple.","I've been to Shymkent. I went there in 2023 with my friends.")]}
],
videos:[
V("jsp4HPmN8oc","Life story: How to introduce yourself — Present Simple listening practice","YouTube-урок","A2","Рассказ о жизни героя — тренирует Present Simple на слух.",[],[
H("Выпишите 8 глаголов в Present Simple с he/she (works, lives…)."),
H("Перескажите историю героя в 6 предложениях."),
H("Расскажите о себе по той же схеме и запишите аудио.")]),
V("gEdPVA-6rVs","BOX SET: 6 Minute English — Food and Drink","BBC Learning English","A2–B1","Подборка выпусков о еде: новая лексика и естественная британская речь.",[],[
H("Посмотрите один выпуск (6 минут). Выпишите 8 новых слов и фраз о еде."),
H("В каждом выпуске ведущие задают вопрос в начале. Запишите вопрос и свой ответ до того, как узнаете правильный."),
H("Напишите 5 предложений о своих пищевых привычках с новыми словами.")]),
V("b5DOQ7iOzO4","BOX SET: 6 Minute English — Lifestyle","BBC Learning English","A2–B1","Повседневные темы: образ жизни, привычки, здоровье.",[],[
H("Выберите один выпуск. Запишите его тему одним предложением."),
H("Выпишите 6 полезных выражений и составьте с ними свои предложения."),
H("Ответьте письменно на вопрос: какая привычка из выпуска подходит вам и почему? (5–6 предложений)")])
]
});
