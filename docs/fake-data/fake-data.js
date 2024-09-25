// npm install @faker-js/faker --save-dev
// node fake-data.js

import { faker, fakerES_MX  } from '@faker-js/faker';

function getDPI(){
	return faker.number.int({ min: 100000, max: 999999 });
}

/*
const fechaActual = new Date();

const dia = fechaActual.getDate(); // Obtiene el día
const mes = fechaActual.getMonth() + 1; // Obtiene el mes (añade 1 porque los meses empiezan en 0)
const año = fechaActual.getFullYear(); // Obtiene el año

// Formatear la fecha como "DD/MM/YYYY"
const fechaCorta = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${año}`;

console.log(fechaCorta); // Ejemplo de salida: "22/09/2024"

*/

function cutDate(date){
	let year = date.getFullYear();
	let month = String(date.getMonth() + 1).padStart(2, '0'); 
	let day = String(date.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
}

function getNIT(){
	return faker.number.int({ min: 100000000, max: 999999999 });
}
function getNumero(min, max){
	return faker.number.int({ min, max });
}

function getNombreHombre(){
	return fakerES_MX.person.firstName('male') + " " + fakerES_MX.person.lastName('male') ;
}
function getNombreMujer(){
	return fakerES_MX.person.firstName('female') + " " + fakerES_MX.person.lastName('female') ;
}
function getNacimiento(){
	return faker.date.between({ from: '1985-01-01T00:00:00.000Z', to: '2000-01-01T00:00:00.000Z' });
	//faker.date.birthdate();
}
function getNacimientoUS(){
	return faker.date.birthdate().toLocaleDateString('en-US');
}

/* 
const date = new Date();
const shortDate = date.toLocaleDateString('en-US'); // 'en-US' gives MM/DD/YYYY format
console.log(shortDate); // Output: 9/22/2024 (example)

*/
function getPersonas(){
	for(let i = 0; i < 25; i++){
		let nit = getNIT();
		let nombre = getNombreHombre();
		let nacimiento = getNacimientoUS();//= cutDate(getNacimiento());
		//new Date().toISOString().slice(0, 10).split('-').reverse().join('/');
		console.log(`(${nit},\'${nombre}\',\'${nacimiento}\'),`);	
	}
}
function getUsername(){
	//return faker.internet.userName();
	return faker.hacker.verb() + faker.location.countryCode() + faker.location.countryCode() ;
}

function getPassword(){
	return faker.internet.password({ length: 7 });
}
function genEmpleados(unidades,sucursal,rol){
	for(let i = 0; i < unidades; i++){
		console.log(`(${getDPI()},'${getNombreHombre()}','${sucursal}','${rol}','${getUsername()}','${getPassword()}'),`);
	}
}
// 'caja', 'bodega', 'inventario', 'administracion'

function empleados(){
	genEmpleados(6,'parque', 'caja');
	genEmpleados(6,'centro1','caja');
	genEmpleados(6,'centro2','caja');
	
	genEmpleados(2,'parque', 'bodega');
	genEmpleados(2,'centro1','bodega');
	genEmpleados(2,'centro2','bodega');
	
	genEmpleados(4,'parque', 'inventario');
	genEmpleados(4,'centro1','inventario');
	genEmpleados(4,'centro2','inventario');
	
	genEmpleados(2,'parque', 'administracion');
	genEmpleados(2,'centro1','administracion');
	genEmpleados(2,'centro2','administracion');	
}

function getProductoID(){
	return `${faker.airline.airline().iataCode}${faker.airline.flightNumber({ length: 4 })}${faker.airline.recordLocator()}`;
}

function getProductoNombre(){
	return faker.commerce.product();
}

function genProducto(unidades,sucursal){
	for(let i = 0; i < unidades; i++){
		console.log(`('${getProductoID()}','${sucursal}','${getProductoNombre()}',${getNumero(25,500)},0,${getNumero(2,25)},0,-1),`);
	}
}

function productos(){
	genProducto(100,'parque');
	genProducto(75,'centro1');
	genProducto(75,'centro2');
}

//productos();

function getNombre(){
	return faker.person.fullName();
}

function genCliente(unidades){
	for(let i = 0; i < unidades; i++){
		console.log(`(${getNIT()},'${getNombre()}',0),`);
	}
}

genCliente(8);



