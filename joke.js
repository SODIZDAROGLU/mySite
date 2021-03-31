let setup = document.querySelector('.para1');
let punchline = document.querySelector('.para2');
let button = document.querySelector('#button');
button.addEventListener('click', () => {
	setup.innerHTML = '';
	punchline.innerHTML = '';
	
	// Fetch API CALL 
	fetch('https://official-joke-api.appspot.com/jokes/ten'
    )
	.then(res => res.json())
	.then(data => {
		
		let randomNum = Math.floor((Math.random() * data.length));
			console.log(data[randomNum]);
			let para1 = document.createTextNode(
			` ${data[randomNum].setup}`
			);
			let para2 = document.createTextNode(` ${data[randomNum].punchline}`);
			 setup.appendChild(para1);
			punchline.appendChild(para2);
	})
	.catch(error => console.log(error));
});