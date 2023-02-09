'use strict';

/*
	${} -> 해당 변수의 객체의 식별자를 의미합니다.
	그리고 객체를 Console로 표현하기 위해
	" " 이 아닌 ` ` 백틱을 사용한다.

*/

// Make navbar transition when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',() =>{
	
	// Scroll Test
	console.log(`window Scroll Y : ${window.scrollY}`);
	console.log(`navbarHeight : ${navbarHight}`);
	
	if(window.scrollY > navbarHight){
		navbar.classList.add('navbar__dark');
	}else {
		navbar.classList.remove('navbar__dark');
	}
})