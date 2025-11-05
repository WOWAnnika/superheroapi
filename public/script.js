const list = document.getElementById("heroList")

async function getHeroes() {
    const response = await fetch('/api/superheroes')
    const data = await response.json()

    data.forEach((hero) => {
        const div = document.createElement("div");
        div.classList.add("hero-card");

        div.innerHTML = `
        <img src="${hero.image}" alt="${hero.name}" class="hero-img">
        <h3>${hero.id}. ${hero.name}</h3>
        <p>(Real name: ${hero.fullName})</p>
        <p>(Intelligence: ${hero.powerstats.intelligence})</p>
        <p>(Strength: ${hero.powerstats.strength})</p>
        <p>(Speed: ${hero.powerstats.speed})</p>
        <p>(Durability: ${hero.powerstats.durability})</p>
        <p>(Combat: ${hero.powerstats.combat})</p>
            `;
        list.appendChild(div);
    });

    // data.forEach((hero) => {
    //     const li = document.createElement("li")
    //     li.textContent = `
    //     ${hero.id}.
    //     ${hero.name}
    //     (Real name:${hero.fullName})\n
    //     (Intelligence: ${hero.powerstats.intelligence})
    //     (Strength: ${hero.powerstats.strength})
    //     (Speed: ${hero.powerstats.speed})
    //     (Durability: ${hero.powerstats.durability})
    //     (Power: ${hero.powerstats.power})
    //     (Combat: ${hero.powerstats.combat})`;
    //     list.appendChild(li)
    // });
}

getHeroes();