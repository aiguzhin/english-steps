// ======================= B1 =======================
LEVELS.push({
code:"B1", name:"Intermediate", ru:"Средний",
goal:"Свободно рассказывать истории, обсуждать планы и условия, понимать основное в фильмах и подкастах.",
topics:[
{id:"b1-pastc", title:"Past Continuous и Past Simple", en:"I was walking when…",
theory:`<p><b>Past Continuous</b> (was/were + -ing) — процесс в момент в прошлом: <i>At 8 pm I was cooking.</i></p>
<p>Вместе с Past Simple: длинное действие прерывается коротким: <i>I <b>was walking</b> home when it <b>started</b> to rain.</i></p>
<p><b>when</b> обычно с коротким действием, <b>while</b> — с длинным: <i>While I was sleeping, someone called.</i></p>`,
ex:[
G("I ___ (watch) TV when the lights went out.","was watching"),
G("While they ___ (play) football, it began to snow.","were playing"),
G("She ___ (cut) her finger while she was cooking.","cut"),
M("What ___ at 10 last night?",["did you do","were you doing","you were doing"],1,"Процесс в конкретный момент."),
M("When I arrived, they ___ dinner, so I joined them.",["had","were having","have"],1)
],
hw:[H("Напишите историю (120 слов) «Странный день», используя минимум 4 Past Continuous и 6 Past Simple."),H("Опишите, что делали члены вашей семьи вчера в 7 вечера (6 предложений).")]},
{id:"b1-pp", title:"Present Perfect: for/since, just/already/yet и Continuous", en:"I've lived here since 2020",
theory:`<p>Действие началось в прошлом и продолжается сейчас: <i>I've lived here <b>for</b> 5 years / <b>since</b> 2020.</i> <b>for</b> + период, <b>since</b> + начальная точка.</p>
<p><b>just</b> — только что, <b>already</b> — уже (в утверждении), <b>yet</b> — уже?/ещё не (в вопросе и отрицании, в конце): <i>Have you finished yet? I haven't finished yet.</i></p>
<p><b>Present Perfect Continuous</b> (have been + -ing) подчёркивает длительность: <i>I've been waiting for an hour.</i></p>`,
ex:[
G("I've known her ___ we were kids.","since"),
G("They've been married ___ ten years.","for"),
G("Have you done your homework ___?","yet"),
G("She has ___ left — you missed her by a minute.","just"),
G("I ___ (learn) English for three years.","have been learning|'ve been learning|have learned|have learnt|'ve learned|'ve learnt"),
M("How long ___ here?",["are you living","have you lived","do you live"],1)
],
hw:[H("Напишите 8 фактов о себе с for/since (живу, учусь, дружу, занимаюсь спортом…)."),H("Составьте «чек-лист» дел на неделю и отметьте 6 пунктов фразами с already / yet / just.")]},
{id:"b1-future", title:"Будущее: will, going to, Present Continuous", en:"три способа говорить о будущем",
theory:`<p><b>will</b> — решение в момент речи, обещание, предсказание-мнение: <i>I'll help you. I think it will be sunny.</i></p>
<p><b>going to</b> — план, принятый заранее; прогноз по фактам: <i>I'm going to study medicine.</i></p>
<p><b>Present Continuous</b> — договорённость с конкретным временем: <i>I'm meeting Aliya at 6 tomorrow.</i></p>`,
ex:[
M("— The phone is ringing. — I ___ get it!",["'ll","'m going to","'m getting"],0,"Спонтанное решение."),
M("We ___ the dentist at 4 pm on Friday — it's booked.",["will see","are seeing","see"],1),
M("Look at that sky. It ___ storm.",["will","is going to","is"],1),
G("I promise I ___ tell anyone.","won't|will not"),
G("I think robots ___ do most jobs in the future.","will")
],
hw:[H("Напишите 3 абзаца: планы на лето (going to), встречи на эту неделю (Present Continuous), прогнозы на 2040 год (will).")]},
{id:"b1-cond", title:"Условные предложения: 0, 1 и 2 тип", en:"If I have / If I had",
theory:`<table><tr><th>Тип</th><th>Формула</th><th>Пример</th></tr>
<tr><td>0 — всегда правда</td><td>If + Present, Present</td><td>If you heat ice, it melts.</td></tr>
<tr><td>1 — реальное будущее</td><td>If + Present, will</td><td>If it rains, we'll stay home.</td></tr>
<tr><td>2 — нереальное настоящее</td><td>If + Past, would</td><td>If I had money, I would travel.</td></tr></table>
<p>В части с if не ставят will: <i>If it <b>rains</b></i> (не <i>will rain</i>). Во 2 типе часто <b>were</b> для всех лиц: <i>If I were you, I'd…</i></p>`,
ex:[
G("If you ___ (study), you will pass.","study"),
G("If I ___ (be) you, I would apologise.","were|was"),
G("If she had more time, she ___ (learn) Spanish.","would learn|'d learn"),
M("If it ___ tomorrow, we'll cancel the picnic.",["will rain","rains","rained"],1),
M("If you mix red and white, you ___ pink.",["get","would get","got"],0),
G("What would you do if you ___ (win) a million?","won")
],
hw:[H("Закончите 8 фраз: If I won the lottery…, If I lived abroad…, If it's sunny tomorrow…, If I don't sleep enough…"),H("Напишите совет другу в 5 предложениях, начиная с «If I were you…».")]},
{id:"b1-modals", title:"Модальные: must, have to, should", en:"обязанности и советы",
theory:`<p><b>must</b> — внутреннее «надо» или правило: <i>I must call Mum.</i> <b>mustn't</b> — нельзя: <i>You mustn't smoke here.</i></p>
<p><b>have to</b> — обязанность извне: <i>I have to wear a uniform.</i> <b>don't have to</b> — не обязательно: <i>You don't have to come.</i></p>
<p><b>should</b> — совет: <i>You should see a doctor.</i></p>
<p>Важно: <b>mustn't ≠ don't have to</b>.</p>`,
ex:[
M("You ___ touch that wire — it's dangerous!",["don't have to","mustn't","shouldn't to"],1),
M("It's Sunday, so I ___ get up early.",["mustn't","don't have to","haven't"],1),
G("You look tired. You ___ go to bed.","should"),
G("In Kazakhstan you ___ to be 18 to vote.","have"),
M("She ___ work on Saturdays — her boss says so.",["has to","must to","should to"],0)
],
hw:[H("Напишите 8 правил вашего колледжа/работы/дома с must, mustn't, have to, don't have to."),H("Дайте 5 советов первокурснику с should / shouldn't.")]},
{id:"b1-passive", title:"Страдательный залог (Present и Past)", en:"is made / was built",
theory:`<p><b>be + 3-я форма</b>. Важно действие, а не кто его сделал: <i>Paper is made from wood. The bridge was built in 1960.</i></p>
<p>Кто сделал — через <b>by</b>: <i>The book was written by Abai.</i></p>
<p>Present: am/is/are + V3. Past: was/were + V3.</p>`,
ex:[
G("English ___ (speak) all over the world.","is spoken"),
G("This house ___ (build) in 1925.","was built"),
G("The thieves ___ (catch) yesterday.","were caught"),
M("Coffee ___ in Brazil.",["grows","is grown","is grow"],1),
M("«Mona Lisa» ___ by Leonardo da Vinci.",["painted","was painted","is painting"],1)
],
hw:[H("Напишите 6 фактов о Казахстане в пассиве (Oil is produced…, Astana was founded…)."),H("Опишите, как готовится ваше любимое блюдо, в пассиве (6 шагов).")]},
{id:"b1-rel", title:"Придаточные определительные", en:"who, which, that, where, whose",
theory:`<p><b>who</b> — о людях, <b>which</b> — о вещах, <b>that</b> — о людях и вещах (в разговорной речи), <b>where</b> — о местах, <b>whose</b> — чей.</p>
<p><i>The woman <b>who</b> lives next door is a pilot. The café <b>where</b> we met is closed.</i></p>
<p>Если who/which/that — дополнение, его можно опустить: <i>The film (that) I saw was great.</i></p>`,
ex:[
G("That's the man ___ stole my bike.","who|that"),
G("This is the town ___ I grew up.","where"),
G("I have a friend ___ father is a pilot.","whose"),
M("The phone ___ I bought last week is broken.",["who","which","where"],1),
M("В каком предложении слово можно убрать?",["The girl who called you is here.","The book that I read was boring.","The man who lives here is old."],1)
],
hw:[H("Дайте определения 6 словам по-английски с who/which/where (A teacher is a person who…)."),H("Опишите 4 важных для вас места с where.")]},
{id:"b1-ger", title:"Герундий и инфинитив", en:"enjoy doing / want to do",
theory:`<p>После некоторых глаголов — <b>-ing</b>: enjoy, finish, mind, avoid, suggest, can't stand, keep: <i>I enjoy reading.</i></p>
<p>После других — <b>to + глагол</b>: want, decide, hope, plan, need, agree, refuse, would like: <i>She decided to leave.</i></p>
<p>После предлогов всегда -ing: <i>I'm good at drawing. Thanks for helping.</i></p>`,
ex:[
G("I enjoy ___ (cook).","cooking"),
G("They decided ___ (move) to Almaty.","to move"),
G("Would you mind ___ (open) the window?","opening"),
G("She's interested in ___ (learn) Korean.","learning"),
M("We hope ___ you soon.",["seeing","to see","see"],1),
M("He avoided ___ the question.",["to answer","answer","answering"],2)
],
hw:[H("Напишите 10 предложений о себе: 5 с -ing после enjoy/love/hate/can't stand/avoid и 5 с to после want/plan/hope/decide/need.")]},
{id:"b1-usedto", title:"Used to", en:"прошлые привычки",
theory:`<p><b>used to + глагол</b> — то, что было регулярно раньше, а сейчас нет: <i>I used to play the piano.</i></p>
<p>Отрицание и вопрос: <i>I didn't use to like fish. Did you use to live here?</i></p>
<p>Не путать с <b>be used to + -ing</b> (привык к): <i>I'm used to getting up early.</i></p>`,
ex:[
G("I ___ to have long hair, but now it's short.","used"),
G("Did you ___ to walk to school?","use"),
M("She ___ like vegetables, but now she loves them.",["didn't use to","didn't used to","not used to"],0),
M("I'm used to ___ in a big city.",["live","living","lived"],1)
],
hw:[H("Сравните себя в 10 лет и сейчас: 8 предложений с used to / didn't use to.")]}
],
videos:[
V("dqONk48l5vY","What would happen if you didn't sleep?","TED-Ed · Claudia Aguirre","B1","Короткая анимация о том, что сон делает с мозгом и телом.",[
M("Who stayed awake for 264 hours (about 11 days) as a school science project?",["A scientist from Harvard","A 17-year-old student, Randy Gardner","A soldier during the war"],1),
M("According to the video, what does the brain do while we sleep?",["It stops working completely","It clears out waste and toxins","It grows new teeth"],1),
M("Long-term lack of sleep is linked to…",["better memory","higher risk of diseases like diabetes and heart problems","faster muscle growth"],1),
M("Which grammar is in the title «What would happen if you didn't sleep?»",["First conditional","Second conditional","Present Perfect"],1,"If + Past Simple, would + глагол — нереальная ситуация.")
],[H("Напишите 6 предложений во 2-м условном: «If I didn't sleep for a week, I would…»"),H("Сколько вы обычно спите? Опишите свой режим сна (80–100 слов).")]),
V("MMmOLN5zBLY","The benefits of a bilingual brain","TED-Ed · Mia Nacamulli","B1","Как изучение второго языка меняет мозг — мотивация для вас.",[
M("Which type of bilingual learns two languages at the same time from early childhood?",["Compound bilingual","Subordinate bilingual","Coordinate bilingual"],0),
M("A subordinate bilingual learns the second language…",["at home with parents","by filtering it through their first language","only by reading"],1),
M("What can being bilingual delay, according to the video?",["Growing taller","The onset of Alzheimer's and dementia","Puberty"],1),
M("Is it too late to learn a language as an adult?",["Yes, the brain stops learning after 12","No, it is harder, but adults can still learn and benefit","Only if you live abroad"],1)
],[H("Какой вы тип билингва по классификации из видео? Объясните в 5 предложениях."),H("Напишите 5 причин учить английский с because / so that.")]),
V("Jsj-hDW9bS8","The history of the world according to cats","TED-Ed · Eva-Maria Geigl","B1","История через Past Simple и пассив — отличная практика времён.",[
M("Why did wildcats first come to human settlements?",["People fed them milk","They hunted rodents near stored grain","They were brought as gifts"],1),
M("Where did cat domestication begin?",["In the Near East / Fertile Crescent","In China","In South America"],0),
M("How did cats spread around the world?",["They swam across seas","On trade ships with people","By train"],1),
M("Найдите пассив: «Cats were carried on ships.» Какое время?",["Present Simple Passive","Past Simple Passive","Present Perfect"],1)
],[H("Перескажите видео в 8 предложениях, используя минимум 3 пассивные конструкции."),H("Напишите короткую «историю мира глазами» другого животного (собаки, лошади) — 100 слов, Past Simple.")])
]
});
