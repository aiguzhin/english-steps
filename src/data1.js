// ---------- helpers ----------
function M(q,o,a,e){return {t:"mc",q:q,o:o,a:a,e:e||""};}
function G(q,a,e){return {t:"gap",q:q,a:a.split("|"),e:e||""};}
function H(t,model){return {t:t,model:model||""};}
function V(id,title,who,level,why,qs,tasks){return {id:id,title:title,who:who,level:level,why:why,qs:qs||[],tasks:tasks||[]};}

const LEVELS = [];

// ======================= A1 =======================
LEVELS.push({
code:"A1", name:"Beginner", ru:"Начальный",
goal:"Представиться, рассказать о себе и семье, описать комнату, город и свой день простыми фразами.",
topics:[
{id:"a1-be", title:"Глагол to be", en:"am / is / are",
theory:`<p>«To be» значит «быть, являться». В русском его часто пропускают («Я студент»), а в английском он нужен всегда: <b>I am a student.</b></p>
<table><tr><th>Лицо</th><th>+</th><th>−</th><th>?</th></tr>
<tr><td>I</td><td>I am (I'm)</td><td>I'm not</td><td>Am I…?</td></tr>
<tr><td>he / she / it</td><td>is ('s)</td><td>isn't</td><td>Is she…?</td></tr>
<tr><td>we / you / they</td><td>are ('re)</td><td>aren't</td><td>Are they…?</td></tr></table>
<p><b>Короткие ответы:</b> Are you tired? — Yes, I am. / No, I'm not. (В коротком утвердительном ответе сокращение не ставят: <i>Yes, I am</i>, а не <i>Yes, I'm</i>.)</p>`,
ex:[
G("My name ___ Aigerim.","is"),
G("We ___ from Kazakhstan.","are"),
G("I ___ hungry. (−)","am not|'m not|’m not"),
G("___ you a teacher?","are"),
G("They ___ at home. (−)","aren't|are not"),
M("— Is he your brother? — Yes, he ___.",["is","'s","are"],0,"В коротком «да» сокращения нет: Yes, he is."),
M("Выберите правильное: ",["She are 20.","She is 20 years.","She is 20."],2,"Возраст: She is 20 (years old). Просто «20 years» без old не говорят."),
M("Where ___ your keys?",["is","are","am"],1,"keys — множественное число → are.")
],
hw:[
H("Напишите 6 предложений о себе с am/is/are: имя, возраст, город, профессия/учёба, характер, любимое место.","My name is Arman. I am 19. I'm from Almaty. I'm a student. I'm not shy. My favourite place is the park."),
H("Напишите 4 вопроса другу (Are you…? Is your…?) и ответьте на них коротко."),
H("Опишите члена семьи в 4 предложениях (He/She is…, He/She isn't…).")
]},
{id:"a1-pron", title:"Местоимения и притяжательные слова", en:"I – my, he – his",
theory:`<table><tr><th>Кто</th><th>Чей</th><th>Пример</th></tr>
<tr><td>I</td><td>my</td><td>my phone</td></tr><tr><td>you</td><td>your</td><td>your bag</td></tr>
<tr><td>he</td><td>his</td><td>his car</td></tr><tr><td>she</td><td>her</td><td>her name</td></tr>
<tr><td>it</td><td>its</td><td>its colour</td></tr><tr><td>we</td><td>our</td><td>our flat</td></tr>
<tr><td>they</td><td>their</td><td>their kids</td></tr></table>
<p>Частая ошибка: <b>its</b> (его/её — о предмете) и <b>it's</b> (= it is). Ещё одна: <b>their</b> (их) и <b>there</b> (там).</p>`,
ex:[
G("This is Tom. ___ sister is a nurse.","his"),
G("I love ___ mum.","my"),
G("We live in a small flat. ___ flat is near the park.","our"),
G("The cat is hungry. ___ bowl is empty.","its"),
M("Anna and Ben are here. ___ car is red.",["There","Their","They're"],1),
M("Is this ___ pen? (твоя)",["you","your","you're"],1),
G("Dana is a doctor. ___ office is in the city centre.","her")
],
hw:[
H("Опишите фото своей семьи: 6 предложений с my/his/her/their.","This is my family. My dad is a driver. His name is Serik. My mum is a teacher. Her school is big. My grandparents live with us — their house is old."),
H("Найдите в любой песне или посте 5 притяжательных слов и выпишите фразы.")
]},
{id:"a1-art", title:"Артикли a/an и множественное число", en:"a / an, plurals",
theory:`<p><b>a</b> — перед согласным звуком (a book, a university), <b>an</b> — перед гласным звуком (an apple, an hour). Важен звук, а не буква.</p>
<p>Артикль a/an ставят перед одним исчисляемым предметом и перед профессией: <i>She is a doctor.</i></p>
<p><b>Множественное число:</b> + s (cats), + es после s, sh, ch, x (boxes, watches), согласная + y → ies (city → cities). Исключения: man → men, woman → women, child → children, foot → feet, tooth → teeth, person → people.</p>`,
ex:[
G("I have ___ orange.","an"),
G("He is ___ engineer.","an"),
G("She is ___ university student.","a"),
G("one child, two ___","children"),
G("one city, three ___","cities"),
G("one box, five ___","boxes"),
M("Выберите правильное:",["an hour","a hour","hour"],0,"h в hour не читается, слово начинается с гласного звука."),
M("one person, many ___",["persons","peoples","people"],2)
],
hw:[
H("Перечислите 10 вещей в своей комнате с a/an (a bed, an armchair…)."),
H("Напишите 8 слов-исключений во множественном числе и составьте с 4 из них предложения.")
]},
{id:"a1-this", title:"This, that, these, those", en:"указательные слова",
theory:`<table><tr><th></th><th>Близко</th><th>Далеко</th></tr>
<tr><td>Один предмет</td><td>this</td><td>that</td></tr>
<tr><td>Много</td><td>these</td><td>those</td></tr></table>
<p><i>This is my phone. Those are my friends over there.</i> В вопросе: <i>What's this? Who are those people?</i></p>`,
ex:[
G("___ shoes here are new.","these"),
G("Look at ___ bird in the sky! (одна, далеко)","that"),
G("Is ___ your coffee? (рядом со мной)","this"),
M("___ are my parents over there.",["This","These","Those"],2),
M("What are ___? (у меня в руке — ключи)",["this","these","that"],1)
],
hw:[H("Сфотографируйте 4 предмета рядом и 4 вдали и подпишите их: This is…/These are…/That is…/Those are…")]},
{id:"a1-have", title:"Have got / has got", en:"обладание",
theory:`<p>Говорим, что у нас есть: <b>I have got</b> (I've got) a brother. <b>She has got</b> (she's got) a cat.</p>
<p>Отрицание: haven't got / hasn't got. Вопрос: <b>Have you got</b> a car? — Yes, I have.</p>
<p>В американском английском чаще просто <b>have</b>: <i>Do you have a car?</i> Обе формы правильные.</p>`,
ex:[
G("She ___ got two sisters.","has"),
G("We ___ got a dog. (−)","haven't|have not"),
G("___ you got a pen?","have"),
M("He ___ a new phone.",["have got","has got","is got"],1),
M("— Has your brother got a car? — No, he ___.",["hasn't","haven't","doesn't"],0)
],
hw:[H("Напишите 6 предложений: что у вас есть и чего нет (I've got…, I haven't got…).","I've got a laptop. I haven't got a car. I've got two cousins.")]},
{id:"a1-there", title:"There is / there are", en:"что где находится",
theory:`<p>Когда сообщаем, что что-то <b>где-то есть</b>: <i>There is a sofa in the room. There are two windows.</i></p>
<p>Отрицание: There isn't a…, There aren't any… Вопрос: Is there a…? Are there any…?</p>
<p>Порядок в русском обратный: «В комнате есть диван» → <b>There is a sofa in the room.</b></p>`,
ex:[
G("___ a bank near my house.","there is|there's"),
G("There ___ three chairs in the kitchen.","are"),
G("___ there a lift in your building?","is"),
M("There ___ any shops here.",["isn't","aren't","not"],1),
M("В городе есть два музея.",["The city has there two museums.","There are two museums in the city.","Two museums is in the city."],1)
],
hw:[H("Опишите свою квартиру или комнату в 8 предложениях с there is/there are.","There is a big window in my room. There are two shelves. There isn't a TV.")]},
{id:"a1-can", title:"Can / can't", en:"умения и возможность",
theory:`<p><b>can + глагол без to</b>: I can swim. She can't (cannot) drive.</p>
<p>Вопрос: <b>Can</b> you cook? — Yes, I can. / No, I can't. После can не бывает -s: <i>He can speak</i> (не <i>cans speak</i>).</p>
<p>Просьба: <i>Can I open the window? Can you help me?</i></p>`,
ex:[
G("My little brother ___ read yet. (−)","can't|cannot|can not"),
G("___ you play the guitar?","can"),
M("She can ___ three languages.",["speaks","to speak","speak"],2),
M("Вежливая просьба:",["Can you to help me?","Can you help me?","You can help me?"],1)
],
hw:[H("Напишите 5 вещей, которые вы умеете, и 5 — которые не умеете. Добавьте одну вещь, которой хотите научиться.")]},
{id:"a1-ps", title:"Present Simple: основы", en:"I work / she works",
theory:`<p>Используем для привычек, распорядка и фактов: <i>I get up at 7. Water boils at 100°C.</i></p>
<p>С <b>he/she/it</b> добавляем <b>-s</b>: work → works, watch → watches, study → studies, go → goes, have → <b>has</b>.</p>
<p>Отрицание: don't / doesn't + глагол (без -s): <i>She doesn't like coffee.</i> Вопрос: <b>Do</b> you…? <b>Does</b> he…?</p>`,
ex:[
G("She ___ (work) in a bank.","works"),
G("My dad ___ (watch) the news every evening.","watches"),
G("I ___ (not / like) cold weather.","don't like|do not like"),
G("___ your sister live in Astana?","does"),
M("He ___ to school by bus.",["go","goes","going"],1),
M("Найдите ошибку:",["She doesn't works on Sunday.","She doesn't work on Sunday.","Does she work on Sunday?"],0,"После doesn't глагол без -s.")
],
hw:[H("Опишите свой обычный день в 10 предложениях (I get up…, I have breakfast…).","I get up at 7. I have tea and eggs. I go to college by bus…"),H("Опишите день друга или родственника — с he/she и окончанием -s.")]}
],
videos:[
V("8_G409aK37k","How to Introduce Yourself in English","YouTube-урок","A1","Готовые фразы для знакомства — первая ступень к разговору.",[],[
H("Выпишите 5 фраз, которыми представляются в видео (имя, возраст, откуда, работа, хобби)."),
H("Запишите себя на телефон: представьтесь за 30 секунд, используя эти фразы."),
H("Какие вопросы задают при знакомстве? Запишите 3 и ответьте на них.","What's your name? Where are you from? What do you do?")]),
V("wY84mLC8e7M","Slow English for Beginners: How to Introduce Yourself (A1 Practice)","YouTube-урок","A1","Медленная речь — удобно слушать без субтитров.",[],[
H("Посмотрите один раз с субтитрами и один раз без. Сколько фраз вы поняли без субтитров?"),
H("Повторяйте за диктором каждую фразу (shadowing) — 2 раза подряд."),
H("Напишите свой рассказ о себе из 6 предложений по образцу видео.")])
]
});
