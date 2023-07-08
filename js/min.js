'use strict'

const tabItem = document.querySelectorAll('.tabs__btn-item');//Получение элемента с класом tabs__btn-item
const tabContent = document.querySelectorAll('.tabs__content-item');//Получение элемента с класом tabs__content-item

tabItem.forEach(function (element) {
	element.addEventListener('click', open);//обработчик событий для каждой кнопки, вкладки в (tabItem) при клике вызывается фунция open(evt)
});

//function open  принимает обьект событий evt в качестве параметра
//function open будет вызываться при клике на кнопку
function open(evt) {
	const tabTarget = evt.currentTarget;//Получает текущую целевую кнопку,на которую был произведен клик
	const button = tabTarget.dataset.button;// Получаем значение атрибута data-button

	tabItem.forEach(function (item) {//удаляет tabs__btn-item--active у всех кнопок , чтобы снять активность с предыдущей кнопки
		item.classList.remove('tabs__btn-item--active');
	});


	tabContent.forEach(function (item) {//удаляет 'tabs__content-item--active' у всех элементов контента, чтобы скрыть предыдущий контент
		item.classList.remove('tabs__content-item--active');
	});


	tabTarget.classList.add('tabs__btn-item--active');// добавление класса tabs__btn-item--active к текущей целевой кнопке ,чтобы сделать её активной 

	document.querySelector(`#${button}`).classList.add('tabs__content-item--active');// ищет элемент с id соответствующим значению "button" и добавляет
}


const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu--active');
});
