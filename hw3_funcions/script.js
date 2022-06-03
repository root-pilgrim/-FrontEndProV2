// Сделать функция isPalindrom. (ф-ция принимает в аргумент строку и проверяет палиндром ли это)
function isPalindrom (str) {
    return str == str.split('').reverse().join('');
  }
// test isPalindrom
console.log(isPalindrom('level'));
console.log(isPalindrom('velvet'));

// Создайте функцию repeat(str, n), которая возвращает строку, состоящую из n повторений
let n = 2;
let str = '';
function repeat(str, n){
    let i;
    let repStr = '';
    for (i = 0; i < n; i++){
        repStr += str + ' '; 
    }
    return repStr;
}
//test function repeat(str, n)
console.log(repeat('level', 5));  

// Напишите функцию operation(a,b,sumCallback). a и b — числовые переменные. 
//Внутри функции operation аргументы a и b нужно возвести в степень 2
//передать для дальнейшего выполнения в sumCallback и возвращать значение которое вернет этот коллбэк.
function sumCallback(a, b) {
    return a + b;
}
function operation(a, b, sumCallback){
    a = a*a;
    b = b*b;
    return sumCallback(a, b);
}

// test operation(a,b,sumCallback).
console.log(operation(2, 3, sumCallback));