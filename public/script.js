const list = document.getElementById("heroList")

async function getHeroes() {
    const response = await fetch('/api/superheroes')
    const data = await response.json()

    data.forEach((hero) => {
        const li = document.createElement("li")
        li.textContent = `${hero.name} (${hero.powerstats})`;
        list.appendChild(li)
    });
}

getHeroes();