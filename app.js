//const age = 21;
//const gender = 'Муж' // жен
//let age = 50;
//age = +age;

// if (!isNaN(+age)) {   
//     if (age > 18) {
//         console.log("Вам больше 18 лет");
//     } else if (age < 18) {
//         console.log("вам меньше 18 лет");
//     } else if (age === 18) {
//         console.log("вам 18 лет");
//     } else {
//         console.log('Укажите ваш возраст');
//     }
// } else {
//     console.log('Введите корректные данные')
// }

// if (gender.toLocaleLowerCase() === 'муж'){
//     console.log('вам налево');
// }
// if (gender.toLocaleLowerCase() === 'жен'){
//     console.log('вам направо');
// }
// const isAdmin = true;

// console.log(`Добро пожаловать: ${
//     isAdmin 
//     ? `Администратор`
//     : `Пользователь`
// }`);
// const typeUser = 'user'; // user, guest, bot

// switch (typeUser) {
//     case 'admin':
//         console.log('Вы администратор');
//         break;
//     case 'user':
//         console.log('Вы пользователь');
//         break;
//     case 'guest':
//         console.log('Вы гость');
//         break;
//     case 'bot':
//         console.log('Вы бот');
//         break;
//     default:
//         console.log('Неизвестный тип пользователя')
//         break;
// }
// let i = 0;
// const lastNumber = 10;
// let message = ' ';
// while (++i <= lastNumber) {
//     message += `${i}${i !== lastNumber ? ', ':''}`;
// }
// console.log(message);
let message = '';
for (let index = 0; index < 10; index++) {
    if (index % 2 !== 0)
    message += `${index} `;
}
console.log(message);