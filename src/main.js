let addContato = document.querySelector(".addContato");
let conversas = document.getElementById("conversas")
let grupos = document.getElementById("grupos");
let encontros = document.getElementById("encontro");
let telefone = document.getElementById("telefone");

conversas.addEventListener("click", () => {
	console.log('chat section clicked');
});

grupos.addEventListener("click", () => {
	console.log('group section clicked')	
});

encontros.addEventListener("click", () => {
	console.log('for you section clicked')	
});


telefone.addEventListener("click", () => {
	console.log('call section clicked')	
});

addContato.addEventListener("click", async () => {
	let DADOS = await fetch('/users');
	let users = await DADOS.json();

	console.log(users)
})

document.addEventListener("DOMContentLoaded", () => {
	console.log("main.js loaded sucessfuly")
})