const pokemonId = new URLSearchParams(window.location.search).get("id");
console.log("ID do Pokémon:", pokemonId); 

const pokemonDetailsContainer = document.getElementById('pokemonDetails');
const pokemonName = document.getElementById('pokemonName');


if (!pokemonId) {
    console.error("ID do Pokémon não encontrado!");
} else {

    if (typeof pokeApi !== "undefined") {
        pokeApi.getPokemonDetailById(pokemonId).then((pokemon) => {
            console.log("Detalhes do Pokémon:", pokemon);  

            // Atualizando o nome do Pokémon
            pokemonName.innerText = pokemon.name;

            // Renderizando os detalhes do Pokémon
            pokemonDetailsContainer.innerHTML = `
                <div class="card-header">
                    <h1>${pokemon.name}</h1>
                    <div class="type">${pokemon.types.join(", ")}</div>
                    <div class="number">#${pokemon.number}</div>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
                <div class="card-body">
                    <h2>About</h2>
                    <p>Species: Seed</p>
                    <p>Height: 2'3.6" (0.70 cm)</p>
                    <p>Weight: 15.2 lbs (6.9 kg)</p>
                    <div class="abilities">
                        <h2>Abilities</h2>
                        <span>Overgrow</span>
                        <span>Chlorophyll</span>
                    </div>
                    <div class="breeding">
                        <h2>Breeding</h2>
                        <span>Gender: ♂ 87.5% ♀ 12.5%</span>
                        <span>Egg Groups: Monster</span>
                        <span>Egg Cycle: Grass</span>
                    </div>
                </div>
            `;
        }).catch((error) => {
            console.error("Erro ao carregar os detalhes do Pokémon:", error);
            pokemonDetailsContainer.innerHTML = "<p>Erro ao carregar os detalhes do Pokémon.</p>";
        });
    } else {
        console.error("pokeApi não está definido!");
    }
}
