//1.Написать функцию removeDuplicates, которая удаляет все дублирующиеся элементы массива.
//Примечание: Все элементы массива только числа
function removeDuplicates(arr) {
     return arr.filter((item, index) => index === arr.indexOf(item));
}
//Проверка
console.log('check result for removeDuplicates: ' + removeDuplicates([1, 2, 3, 2, 2, 3, 1, 5, 9, 7, 7]))


//2.Написать функцию revertString которая на вход принимает строку а возвращает перевернутую строку
function reverteString(str) {
    return str.split("").reverse().join("");
  }
//Проверка
console.log('check result for reverteString: ' + reverteString('laptop')) // potpal


//3.Написать функцию createMatrix(n, m), которая создает многомерный массив (многомерный массив - 
//- это массив массивов такого тип -> [ [1, 2], [3, 4], [5, 6] ] ) и возвращает его. Эта функция принимает 2 аргумента:
//n - это количество подмассивов
//m - количество элементов в каждом подмассиве
//Каждый элемент подмассива должен быть инкрементирован (+ 1)
function createMatrix(n, m) {
    let arr = [];
    let elem = 0;
    for( let i = 1; i < m; i++ ){
        let iAdd = [];
        for( let j = 0; j <= n; j++ ){
         iAdd.push( elem +=1 );
        }
        arr.push( iAdd );
       } 
    return arr; 
    }
//Проверка
console.log( createMatrix(3, 4) );