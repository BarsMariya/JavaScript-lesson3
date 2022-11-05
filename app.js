const age = 21;
const gender = 'Муж' // жен
if (age > 18) {
    console.log("Вам больше 18 лет");
} else {
    console.log('вам меньше 18 лет');
}

if (gender.toLocaleLowerCase() === 'муж'){
    console.log('вам налево');
}
if (gender.toLocaleLowerCase() === 'жен'){
    console.log('вам направо');
}
