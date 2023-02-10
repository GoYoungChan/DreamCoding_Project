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
	
	const target = event.target; /* 이벤트 실행 되는 요소*/
	const link = target.dataset.link; /* 요소의 data-link 의 값*/
	
	if(link == null){
		return;
	}
	
	//1
	
	//const ScrollTo = document.querySelector(link).offsetTop;
	scrollToView(link);
	
	// 2 
	
	const item = document.querySelector('.active');
	item.classList.remove('active');
	
	console.log(link);
	const additem = document.querySelector(link);
	target.classList.add('active');
})

const contactMe_btn = document.querySelector('.home__contact');

contactMe_btn.addEventListener('click',(event)=>{
	const link = event.target.dataset.link;
	scrollToView(link);
})

function scrollToView(selector) {
	const ScrollTo = document.querySelector(selector);
	ScrollTo.scrollIntoView({behavior : 'smooth'});
}


/* Home Opacity Fade Out*/






const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
	const scrollHeight = window.scrollY;
	console.log(1 - scrollHeight / homeHeight);
	const opacity = 1 - scrollHeight / homeHeight;
	
	if(opacity <0){
		return;
	}
	
	const home = document.querySelector('.home__container');
	home.style.opacity = opacity;
	
})

/* Go Top Scroll after TopScroll Button Click  */

const scrollTop = document.querySelector('.ScrollTop');
document.addEventListener('scroll',()=>{
	const homeHeight = home.getBoundingClientRect().height;
	
	if(window.scrollY > homeHeight){
		scrollTop.style.opacity= 1;
	}else {
		scrollTop.style.opacity= 0;
	}
})

document.addEventListener('click',()=>{
	
	window.scrollTo({top : 0 , behavior : 'smooth'});
})














 /* ScrollToId My Code 02-10
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







