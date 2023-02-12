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
	
	navbarMenu.classList.add('close');

	scrollToView(link);

	// 2 
	
	const item = document.querySelector('.active');
	item.classList.remove('active');
	
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

scrollTop.addEventListener('click',()=>{
	window.scrollTo({top : 0 , behavior : 'smooth'});
})


/* Small Navbar Create and Down (Navbar Icon onClick) */

const navbarToggleBtn = document.querySelector('.navbar__toggle_btn');
navbarToggleBtn.addEventListener('click',()=>{
	navbarMenu.classList.toggle('close');
})



const workCategory = document.querySelector('.work__categories');
const projectCategory = document.querySelector('.work__projects');
const projectAll = document.querySelectorAll('.projects');

/* My Work Category Change Logic */

workCategory.addEventListener('click',(event) => {
	const target = event.target;
	const filter = target.dataset.filter || target.parentNode.dataset.filter;
	
	if(filter ==null){
		return;
	}
	projectCategory.classList.add('anim-out');
	setTimeout(()=>{
		projectAll.forEach((project) =>{
		console.log(project.dataset.type);
		if(filter == '*' || filter == project.dataset.type){
			project.classList.remove('invisible');
		} else {
			project.classList.add('invisible');
		}
	});
		projectCategory.classList.remove('anim-out')},300);
	
	// Parent Div -> Event Opened - > Chiled Div's data-type value Read!! 
	
	
	/*console.log(filter);*/
	/* My Work Category Change Logic */
	const removeClass = document.querySelector('.active');
	
	removeClass.classList.remove('active');
	target.classList.add('active');
})

/* Scroll forward this Section -> Navbar Border Activate Logic */
const sectionIds = [
	'#home',
	'#about',
	'#skills',
	'#work',
	'#testimonials',
	'#contact'
]

const sections =sectionIds.map(id => 
	document.querySelector(id));

const navbarsections = sectionIds.map(id => 
	document.querySelector(`[data-link="${id}"]`)
);

console.log(navbarsections);


/*
document.addEventListener('scroll',() =>{
	const test =document.getElementsByClassName('navbar__menu__item');
	console.log(test);
	// Navbar Instance Added.
	const NavbarItem = document.querySelectorAll('.navbar__menu__item');
	//console.log(NavbarItem);
	
	const allHeight = document.querySelectorAll('section');
	//console.log(allHeight); //7 Section Added.
	
	const Scroll = window.scrollY;
	//console.log(Scroll); // Current Scroll Value Added.
	
	const CurrentActivate = document.querySelector('.active');
	//console.log(CurrentActivate);
	//console.log(CurrentActivate.getBoundingClientRect().height);
	
	// Scroll 수치가 해당 Section의 Height 과 같거나 클 때
	// 해당 Navbar의 active Class 추가 및 기존 Navbar의 Active 삭제.
	// 그럴 때 필요한 변수. Scroll 값 , 해당 Section의 Height 값 , 
	// Section의 객체와 Navbar의 Data-link의 값 ( 연동 )
	allHeight.forEach((section)=>{
		//console.log(section.getBoundingClientRect().height);
		//console.log(Scroll);
		if(Scroll == 100){
			console.log(123);
		}
	})
	
})*/
/*
function NavbarActivate(sectionAll){
	const allHeight = document.querySelectorAll('section');
	
	sectionAll.forEach((section)=>{
		
	})
}
*/

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







