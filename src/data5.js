// ======================= Placement test =======================
const TEST = [
{lv:"A1", ...M("She ___ a doctor.",["am","is","are"],1)},
{lv:"A1", ...M("___ you like coffee?",["Does","Are","Do"],2)},
{lv:"A1", ...M("There ___ two cats in the garden.",["is","are","be"],1)},
{lv:"A2", ...M("I ___ to the cinema last night.",["go","went","have gone"],1)},
{lv:"A2", ...M("This is the ___ restaurant in town.",["better","most good","best"],2)},
{lv:"A2", ...M("How ___ water do you drink a day?",["many","much","few"],1)},
{lv:"B1", ...M("I've lived here ___ 2018.",["for","since","from"],1)},
{lv:"B1", ...M("If I ___ more money, I'd buy a car.",["have","had","would have"],1)},
{lv:"B1", ...M("The museum ___ in 1890.",["built","was built","has built"],1)},
{lv:"B2", ...M("When we arrived, the concert ___.",["already started","had already started","has already started"],1)},
{lv:"B2", ...M("He asked me where ___.",["did I live","I lived","do I live"],1)},
{lv:"B2", ...M("She can't ___ the email — she was offline all day.",["have read","read","had read"],0)},
{lv:"C1", ...M("___ had I sat down than the phone rang.",["Hardly","No sooner","Not only"],1)},
{lv:"C1", ...M("The minister is believed ___ the country last week.",["to leave","to have left","leaving"],1)},
{lv:"C1", ...M("It's essential that every applicant ___ an ID.",["provides","provide","provided"],1)}
];
