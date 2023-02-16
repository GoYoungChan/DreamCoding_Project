'use strict';

// Array 

const array = new Array();
const array2 = ['1','2'];


const fruits = ['사과','바나나'];
console.log(fruits.length);
console.log(fruits);
fruits.forEach((fruit,index) =>{
	console.log(fruit,index);
})

for(let i = 0 ; i < fruits.length;i++){
	console.log(fruits[i]);
}

for(let fruit of fruits){
	console.log(fruit);
}

fruits.push('수박');
console.log(fruits);

//fruits.pop('수박');
//console.log(fruits);
const fruits2 = ['오렌지','자몸'];
fruits.slice();
console.log(fruits);

fruits.push('딸기','레몬');
console.log(fruits);

fruits.splice(2);
console.log(fruits);

const concatFruits = fruits.concat(fruits2);
console.log(concatFruits);

console.clear();

// Define Arrray's Index Number
console.log(concatFruits.indexOf('사과'));
console.log(concatFruits.indexOf('자몸'));

// Array's Data Confirm True/False

console.log(concatFruits.includes('사과'));
console.log(concatFruits.lastIndexOf('자몸'));


console.clear();
const SortNumber = [5,11,241,52625,10000];

// Sort Function => 2개의 변수를 매개변수로 전달하여 Return 값이 1 일 경우 뒤의 있는 값이 적은 인덱스로 위치, -1일 경우 앞에 있는 값이 적은 인덱스로 조정된다.


SortNumber.sort((First,Second) =>{
	if(First > Second){ return 1;}
	else if(First < Second){return -1;}
	else {
		return 0;
	}
})

console.log(SortNumber);











// forEach ( => {}) 배열 값들을 앞에서부터 하나씩 선언한 매개변수로 전달하여 익명 함수를 실행시킨다. 

// 배열의 인덱스 이상으로 인덱스값을 주면 Undefined.