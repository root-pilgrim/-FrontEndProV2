let length = prompt('Введите длину генирируемой строки.');

function getRandomString(length) {
    var randomChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var result = "";
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length),
      );
    }
    return result;
  } 

let str = getRandomString(length);
//Написать функцию generateObject(str), которая в аргументах принимает строку и возвращает объект.
const generateObject = (value) => ({
  value,
});
//Перебрать даную строку с помощью цикла и в каждой итерации для возвращаемого объекта сделать ключ, 
//который будет равен результату вызова такой функции
let i = length;
for (i; i > 0; i--){
  console.log(generateObject(str.slice(0, i))); 
}

//Дальше написать еще одну функцию, getStringFromObject(obj), которая принимает объект (результат вызова generateObject)
// из задания 1 и возвращает строку которую передавалась в функцию generateObject.
function getStringFromObject(obj) {
  return obj.value;
}