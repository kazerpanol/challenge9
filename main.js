

async function getAdvice(){
		const res = await fetch("https://api.adviceslip.com/advice")
		const data = await res.json()
		const button = document.querySelector(".circle")
		button.addEventListener("click",()=>{	
			renderAdvice(data.slip)
			getAdvice()
		})	
}

getAdvice()

function renderAdvice(data){
	const numAdvice = document.querySelector("h4")
	const parag = document.querySelector("p")
	numAdvice.innerText = `ADVICE #${data.id}`
	parag.innerText = `" ${data.advice} "`
}