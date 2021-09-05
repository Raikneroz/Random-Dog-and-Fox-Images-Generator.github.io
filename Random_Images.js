const dog_btn = document.getElementById('dog_btn')
const fox_btn = document.getElementById('fox_btn')
const dog_result = document.getElementById('dog_result')
const fox_result = document.getElementById('fox_result')

dog_btn.addEventListener('click', getRandomDog)
fox_btn.addEventListener('click', getRandomFox)

function getRandomDog()
{
    fetch('https://random.dog/woof.json')
	.then(res => res.json())
	.then(data =>
    {
	    if(data.url.includes(".mp4"))
        {
		    getRandomDog()
		}
		else
        {
		    dog_result.innerHTML = `<img src=${data.url} alt="Dog">`
		}
	})
}

function getRandomFox()
{
	fetch('https://randomfox.ca/floof/')
	.then(res => res.json())
	.then(data =>
    {
        fox_result.innerHTML = `<img src=${data.image} alt="Fox">`  
	})
}