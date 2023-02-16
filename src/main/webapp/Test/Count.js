'use strict';

const Button = document.querySelector('.Count__btn');

Button.addEventListener('click',(event) =>{
	
	const Target = event.target;
	const Link = Target.dataset.link;
	
	// 해당 이름의 요소를 함수로 받아와서
	const CountSelect = getCount(Link);
	console.log(CountSelect);
	
	// 요소를 전달하여 HTML 값을 하나 증가 시킨다.
	plusCount(CountSelect);
});

function getCount(ClassName){
	let Count = document.querySelector(`${ClassName}`);
	return Count;
}

function plusCount(selector){
	const number = Number(selector.innerHTML);
	selector.innerHTML = number + 1;
}