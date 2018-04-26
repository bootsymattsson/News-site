const key = "e6ef2cde327f46e3820d0344025b79fc"
let url = `https://newsapi.org/v2/top-headlines?pageSize=6&country=us&category=business&apiKey=${key}`

//Ändra till nytt namn på recievedNews i ny kod
const toppnyheter = (newsdata) => {
    const articlesDiv = document.querySelector(".toppnyheter")


    newsdata.articles.forEach((article, index) => {

			//Here we create and add html elements to our html file
      const div = document.createElement("div")
      div.className = "news"
//byter ut info i diven
      div.innerHTML = `<h4>${article.author}</h4>
                      <h2>${article.title}</h2>
                      <p>${article.description}</p>`

      articlesDiv.appendChild(div)

      if(index<3){
			     //This fetches and add images to our articles index 0 så det bara blir första gången
			        const img = document.createElement("img")
            img.src = article.urlToImage
            div.appendChild(img)
      }
			const link = document.createElement("a")
			link.href = article.url
			link.innerHTML = "Läs mer"
			div.appendChild(link) //Lägger till information utan att skriva över
    })
}

//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.
fetch(url)
  .then(response => response.json())
  .then(toppnyheter)
