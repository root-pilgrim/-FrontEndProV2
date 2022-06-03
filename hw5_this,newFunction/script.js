//Написать функцию конструктор Calculator
function Calculator(){
    // sum - сумма
    this.sum = (a, b) => {
        metodMap.sum += 1;
        updateData('sum', a, b)
        return a + b;
    },
    // subtract - вычитание
    this.subtract = (a, b) => {
        metodMap.subtract += 1;
        updateData('subtract', a, b)
        return a - b;
    },
    // pow - возведение в степень
    this.pow = (a, b) =>{
        metodMap.pow += 1;
        updateData('pow', a, b)
        return a ** b;
    },
    // multiply - умножение
    this.multiply = (a, b) => {
        metodMap.multiply += 1;
        updateData('multiply', a, b)
        return a * b;
    },
    // divide - деление
    this.divide = (a, b) => {
        metodMap.divide += 1;
        updateData('divide', a, b)
        return a / b;
    }
    //метод getMethodCallCount - который принимает в аргументах название метода и возвращает количество вызовов этого метода. 
    this.getMethodCallCount = (metod) => {
        switch (metod) {
            case "sum":
                return metodMap.sum;
            case "subtract":
                return metodMap.subtract;
            case "pow":
                return metodMap.pow;
            case "multiply":
                return metodMap.multiply;
            case "divide":
                return metodMap.divide;
        }
    }
    //метод getLastOperation, который возвращает объект с данными последней операции, которая была выполнена для этого объекта
    this.getLastOperation = () => {
        let result = lastAction.metod;
        let a = lastAction.firstArg;
        let b = lastAction.secondArg;
        return "method '" + result + "', result: " + calculator[result](a, b);
    }
    //обьект содержащий результат подсчета отработавших методов
    let metodMap = {
        sum: 0,
        subtract: 0,
        pow: 0,
        multiply: 0,
        divide: 0,
    }
    //обьект содержащий данные о последнем отработанном методе
    let lastAction = {
        metod: 'no actions',
        firstArg: 0,
        secondArg: 0,
    }
    // обновление данных содержащихся в обьектах
    const updateData = (methodName, a, b) => {
        lastAction.metod = methodName;
        lastAction.firstArg = a;
        lastAction.secondArg = b;
    }
}


// Проверка
const calculator = new Calculator();

calculator.sum(10, 5); // 15 
calculator.sum(20, 5); // 25 
calculator.subtract(10, 5); // 5
calculator.pow(2, 3); // 8
calculator.multiply(2, 3); // 6
calculator.divide(6, 2); // 3

calculator.getMethodCallCount("sum"); // 2
calculator.getMethodCallCount("subtract"); // 1

calculator.getLastOperation(); // { method 'divide', result: 3 }