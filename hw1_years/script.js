let name = prompt('Как Вас зовут?');
let years = prompt('Какого Вы года рождения?');
let currentYears = 2022 - years;
let declinsion = ['год', 'года', 'лет'];

function plural( currentYears, titles) {
	cases = [2, 0, 1, 1, 1, 2];
	return titles[(currentYears % 100 > 4 && currentYears % 100 < 20) ? 2 : cases[(currentYears % 10 < 5) ? currentYears % 10 : 5]];
}

if ( years > 1922 && years < 2020){
	alert(name + ', Вам ' + currentYears + ' ' + plural(currentYears, declinsion) + '?');
} else {
	alert (name + ', Вы ввели некоректный год рождения!')
}


