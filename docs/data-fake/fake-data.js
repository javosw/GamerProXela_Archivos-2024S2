// npm install @faker-js/faker --save-dev
// node fake-data.js

import { faker, fakerES_MX  } from '@faker-js/faker';

function getPersonas(){
	for(let i = 0; i < 25; i++){
		let nit = faker.number.int({ min: 1000000000000, max: 9999999999999 });
		let nombre = fakerES_MX.person.firstName('male') + " " + fakerES_MX.person.lastName('male') ;
		let nacimiento = faker.date.between({ from: '1985-01-01T00:00:00.000Z', to: '2000-01-01T00:00:00.000Z' })
		//faker.date.birthdate();
		let year = nacimiento.getFullYear(); //
		let month = String(nacimiento.getMonth() + 1).padStart(2, '0'); 
		let day = String(nacimiento.getDate()).padStart(2, '0');
		nacimiento.getDate();
		//new Date().toISOString().slice(0, 10).split('-').reverse().join('/');
		console.log(`(${nit},\'${nombre}\',\'${year}-${month}-${day}\'),`);	
	}
}
//getPersonas();

function getFechas(){
	for(let i = 0; i < 15; i++){
		let nit = faker.number.int({ min: 1000000000000, max: 9999999999999 });
		let nombre = fakerES_MX.person.firstName('male') + " " + fakerES_MX.person.lastName('male') ;
		let nacimiento = faker.date.between({ from: '2023-01-01T00:00:00.000Z', to: '2024-04-31T00:00:00.000Z' })
		//faker.date.birthdate();
		let year = nacimiento.getFullYear(); //
		let month = String(nacimiento.getMonth() + 1).padStart(2, '0'); 
		let day = String(nacimiento.getDate()).padStart(2, '0');
		nacimiento.getDate();
		//new Date().toISOString().slice(0, 10).split('-').reverse().join('/');
		console.log(`(\'${year}-${month}-${day}\',`);	
	}
}
getFechas();
