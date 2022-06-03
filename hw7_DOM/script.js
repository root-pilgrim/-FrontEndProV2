//1.Создайте ul через createElement, затем вставьте каждый элемент этого массива в отдельную li (то есть создать 
//еще 2 элемента для свойства title и ы свойства text). Поместить все созданные li внутри этой ul, затем вставьте эту ul в конец body.
//Для каждого созданного li добавить класс list-item
const listArr = [
	{
	  title: 'Lorem ipsum dolor',
	  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
	},
	{
	  title: 'Lorem ipsum dolor 1',
	  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
	},
	{
	  title: 'Lorem ipsum dolor 2',
	  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
	},
	{
	  title: 'Lorem ipsum dolor 3',
	  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
	},
	{
	  title: 'Lorem ipsum dolor 4',
	  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
	},
	{
	  title: 'Lorem ipsum dolor 5',
	  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos. Nemo asperiores magni illum placeat quibusdam.',
	}
  ]

let ul = document.createElement('ul');
listArr.forEach((item) => {
	let li = document.createElement('li');
	let title = document.createElement('title');
	let text = document.createElement('text');
	let br = document.createElement('br');
	title = item.title;
	text.innerHTML = item.text;

	li.append(title);
	li.append(br);
	li.append(text);
	ul.append(li);

	li.classList.add('list-item');
})
document.body.append(ul)


//2. После это найти все элементы li и перебрать их в цикле.
//Сделать функцию которая будет возвращать рандомный цвет, и для каждого li применить этот рандомный цвет текста.
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
  }
let getLi = document.querySelectorAll('li')
for(let i = 0; i < getLi.length; i++) {
	getLi[i].style.backgroundColor = 'rgb('+getRandomInt(0,255)+', '+getRandomInt(0,255)+', '+getRandomInt(0,255)+')';
} 


