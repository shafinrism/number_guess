



	let player_2 = document.querySelector(".player_2")
	player_2.style.display="none"
	
	
	let submit = document.querySelector(".p_1_submit")
	submit.addEventListener("click", (event)=>{
		event.preventDefault()
		let input = document.querySelector(".input").value;
		
		let player_1 = document.querySelector(".player_1")
		player_1.style.display="none"
		player_2.style.display="block"
		
		
	
	})
	
	
	
	
	
	let submit_2 = document.querySelector(".submit_2")
	submit_2.addEventListener("click", (event)=>{
		event.preventDefault()

		let min = 1;
		let max = 9;
		let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
		

		
		
		let input = document.querySelector(".input").value;
		
		if(input==randomNumber){
			document.write("<h1>win</h1>")
		}else{
			document.write("<h1>lost</h1>")
		}
	})
	

	












