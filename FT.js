 url = `https://newsapi.org/v2/top-headlines?sources=financial-times&pageSize=3&apiKey=${key}`


//Ändra till nytt namn på recievedNews i ny kod
const ft = (newsdata) => {
    const articlesDiv = document.querySelector(".ft")


    newsdata.articles.forEach((article, index) => {

			//Here we create and add html elements to our html file
      const div = document.createElement("div")
      div.className = "ft_artiklar"
//byter ut info i diven
      div.innerHTML = `<h4>${article.author}</h4>
                      <h2>${article.title}</h2>
                      <p>${article.description}</p>`

      articlesDiv.appendChild(div)

      if(index===0){
			     //This fetches and add images to our articles index 0 så det bara blir första gången
			        const img = document.createElement("img")
            img.src = article.urlToImage
            div.appendChild(img)
      }
			const link = document.createElement("a")
			link.href = article.url
      link.className = "button"
			link.innerHTML = "Läs mer"
			div.appendChild(link) //Lägger till information utan att skriva över
    })
}

//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.
fetch(url)
  .then(response => response.json())
  .then(ft)
