const recusar = document.getElementById("negar");
const aceitar = document.getElementById("aceitar");
let size = 1;

recusar.addEventListener("click", () => {
	let img = document.createElement("img");
	img.src = "./sad kitty.jpeg";
	let body = document.querySelector("body");
	img.id = "result"
	body.appendChild(img);
	let som = new Audio('BUAAAAAAA.mp3');
	som.play();

	setTimeout(() => {
		let texto = document.createElement("h1");
		texto.textContent = "to com fome :("
		texto.id = "resultado1"
		body.appendChild(texto);
	}, 4000);
})


aceitar.addEventListener("click", () => {
	let img = document.createElement("img");
	img.src = "happy kitty.jpeg";
	let body = document.querySelector("body");
	img.id = "result"
	body.appendChild(img);
	let som = new Audio('happy song.mp3');
	som.play();	

	setTimeout(() => {
		let texto = document.createElement("h1");
		texto.textContent = "Obrigado meu amor!!"
		texto.id = "resultado2"
		body.appendChild(texto);
	}, 2000);
})

