//const age = 21;
const gender = 'Муж' // жен
let age = 50;
//age = +age;

if (!isNaN(+age)) {   
    if (age > 18) {
        console.log("Вам больше 18 лет");
    } else if (age < 18) {
        console.log("вам меньше 18 лет");
    } else if (age === 18) {
        console.log("вам 18 лет");
    } else {
        console.log('Укажите ваш возраст');
    }
} else {
    console.log('Введите корректные данные')
}

if (gender.toLocaleLowerCase() === 'муж'){
    console.log('вам налево');
}
if (gender.toLocaleLowerCase() === 'жен'){
    console.log('вам направо');
}
