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
	
	
	navbarMenu.classList.add('close');
	scrollToView(link);
	SelectedNavbarItem(target);
	
})

const contactMe_btn = document.querySelector('.home__contact');

contactMe_btn.addEventListener('click',(event)=>{
	const link = event.target.dataset.link;
	scrollToView(link); // #contace
})

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
	scrollToView('#home');
})


/* Small Navbar Create and Down (Navbar Icon onClick) */

const navbarToggleBtn = document.querySelector('.navbar__toggle_btn');
navbarToggleBtn.addEventListener('click',()=>{
	navbarMenu.classList.toggle('close');
})



const workCategory = document.querySelector('.work__categories');
const projectCategory = document.querySelector('.work__projects');
const projectAll = document.querySelectorAll('.projects');
const workCategoryBtn = document.querySelectorAll('.category__btn');

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

		if(filter == '*' || filter == project.dataset.type){
			project.classList.remove('invisible');
		} else {
			project.classList.add('invisible');
		}
	});
		projectCategory.classList.remove('anim-out')},300);
	
	let removeClass = workCategory.querySelector('.active');
	removeClass.classList.remove('active');
	removeClass = target.classList.add('active');
	
	// Parent Div -> Event Opened - > Chiled Div's data-type value Read!! 
	
	
	/*console.log(filter);*/
	/* My Work Category Change Logic */
})

/* Scroll forward this Section -> Navbar Border Activate Logic */

// 1. 모든 섹션 요소를 가지고 온다.
// 2. Intersection을 이용하여 모든 섹션들을 관찰.
// 3. 보여지는 섹션에 해당되는 메뉴를 활성화.

// 1
const sectionIds = 
['#home',
'#about',
'#skills',
'#work',
'#testimonials',
'#contact'];

const sections = sectionIds.map(id =>document.querySelector(id)); // 각 section 별로 요소들을 불러옴.
//console.log(sections);

const navbarItems= sectionIds.map(id => document.querySelector(`[data-link = "${id}"]`));
//console.log(navbarItems);


// 2

const options = {
	root : null,
	rootMargin : '0px',
	threshold : 0.3
}

let selectedNavIndex = 0;
let selectNavItem = navbarItems[selectedNavIndex];

const callback = (entries,observer) =>{
	entries.forEach(entry =>{
		
		if(!entry.isIntersecting && entry.intersectionRatio > 0){
			const index = sectionIds.indexOf(`#${entry.target.id}`); //entry.target.id : 해당 섹션 요소의 Id를 리턴
			
			if(entry.boundingClientRect.y <0){
				selectedNavIndex = index + 1;
			}else {
				selectedNavIndex = index - 1;
			}
		}
	});
};

const observer = new IntersectionObserver(callback,options);

sections.forEach(section => observer.observe(section));

window.addEventListener('wheel',()=>{
	if(window.scrollY === 0){
		selectedNavIndex = 0;
	}else if(window.scrollY + window.innerHeight === document.body.clientHeight){
		selectedNavIndex = navbarItems.length - 1;
	}
	SelectedNavbarItem(navbarItems[selectedNavIndex]);
})

// Automatically Scrolled Method


function scrollToView(selector) {
	const ScrollTo = document.querySelector(selector);
	ScrollTo.scrollIntoView({behavior : 'smooth'});
	//console.log(navbarItems[sectionIds.indexOf(selector)]);
	SelectedNavbarItem(navbarItems[sectionIds.indexOf(selector)]);
}

function SelectedNavbarItem(selected){
			selectNavItem.classList.remove('active');
			selectNavItem = selected;
			selectNavItem.classList.add('active');
}

// observer.observe(navbarItems); // 변수에 요소들이 담겨진 변수를 전달.

//const observer = new IntersectionObserve(callback,options);
//sections.forEach(section => observer.observe(section))

