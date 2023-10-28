let num1 = document.querySelector('#number');
let btn = document.querySelector('button');
let num2 = document.querySelector('#predictions');

let arrPositive = [
    'Сьогодні на вас чекають приємні сюрпризи та несподівані радісні події.',
    'Ви зустрінете цікаву людину, яка принесе у ваше життя нові дружні стосунки або навіть можливість для романтики.',
    'Ваше творче натхнення сьогодні на висоті, і ви зможете успішно реалізувати свої ідеї та проекти.',
    'Сьогодні чудовий день для саморозвитку. Ви можете знайти нові знання та навички, які допоможуть вам у майбутньому.',
    'Ви відчуєте себе повними сил та енергії, готовими подолати будь-які перепони.'
];

let arrNegative = [
    'Сьогодні можливі небажані конфлікти чи непорозуміння з оточуючими, тому намагайтеся бути терпимими та стриманими.',
    'Можливі фінансові труднощі або несподівані витрати, тож будьте обережні з фінансами.',
    'Сьогодні можете відчути себе втомленими та без настрою.',
    'Складнощі щодо організації та управління часом можуть зробити день стресовим і непродуктивним.',
    'Сьогодні можливі перешкоди на шляху до ваших цілей. Будьте готові до того, що не все піде гладко.'
];

let combinedArray = arrPositive.concat(arrNegative);

let interval;

btn.addEventListener('click', function () {
    if (interval) {
        clearInterval(interval);
        btn.textContent = 'Отримати передбачення';
        let randomIndex = Math.floor(Math.random() * combinedArray.length);
        let randomElement = combinedArray[randomIndex];
        num2.textContent = randomElement;
        if (arrPositive.includes(randomElement)) {
            num2.classList.remove("negative");
            num2.classList.add("positive");
        } else {
            num2.classList.remove("positive");
            num2.classList.add("negative");
        }
        interval = null;
    } else {
        interval = setInterval(function () {
            let randomNumber = Math.floor(Math.random() * 10) + 1;
            num1.textContent = randomNumber;
            btn.textContent = 'Зупинити передбачення';
            num2.textContent = '';
        }, 100);
    }
});
