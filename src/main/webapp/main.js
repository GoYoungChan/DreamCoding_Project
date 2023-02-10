'use strict';

/*
	${} -> 해당 변수의 객체의 식별자를 의미합니다.
	그리고 객체를 Console로 표현하기 위해
	" " 이 아닌 ` ` 백틱을 사용한다.

*/

// Make navbar transition when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',() =>{
	
	// Scroll Test
	/*console.log(`window Scroll Y : ${window.scrollY}`);
	console.log(`navbarHeight : ${navbarHeight}`);*/
	
	if(window.scrollY > navbarHeight){
		navbar.classList.add('navbar__dark');
	}else {
		navbar.classList.remove('navbar__dark');
	}
})

// Handle scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{
	console.log(event.target.dataset.link);
	
	const target = event.target;
	const link = target.dataset.link;
	
	if(link == null){
		return;
	}
	
	//const ScrollTo = document.querySelector(link).offsetTop;
	const ScrollTo = document.querySelector(link);
	ScrollTo.scrollIntoView({behavior :'smooth'});
	
})







 /*
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;

const about = document.querySelector('#about');
const aboutHeight = home.getBoundingClientRect().height;

const skill = document.querySelector('#skill');
const skillHeight = home.getBoundingClientRect().height;

const work = document.querySelector('#work');
const workHeight = home.getBoundingClientRect().height;

const contact = document.querySelector('#contact');
const contactHeight = home.getBoundingClientRect().height;

const navbarItem = document.querySelector('.navbar__menu__item');
navbarItem.addEventListener('click',() =>{
	
	let itemName = navbarItem.innerHTML.toLowerCase();
	
	
	if(itemName == home.id){
		
		console.log(homeHeight);
		window.scrollTo(aboutHeight,1);
		
	} else if (itemName == about.id){
		console.log(aboutHeight);
		window.scrollTo(aboutHeight,1);
	}
})
*/







