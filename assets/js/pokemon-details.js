const pokemonId = new URLSearchParams(window.location.search).get("id");
console.log("ID do Pokémon:", pokemonId); // Verificando o ID que está sendo passado na URL

const pokemonDetailsContainer = document.getElementById('pokemonDetails');
const pokemonName = document.getElementById('pokemonName');

// Verifica se o ID é válido antes de continuar
if (!pokemonId) {
    console.error("ID do Pokémon não encontrado!");
} else {
    pokeApi.getPokemonDetailById(pokemonId).then((pokemon) => {
        console.log("Detalhes do Pokémon:", pokemon);  // Verificando os dados do Pokémon

        // Atualizando o nome e detalhes do Pokémon
        pokemonName.innerText = pokemon.name;

        pokemonDetailsContainer.innerHTML = `
            <p><strong>Number:</strong> #${pokemon.number}</p>
            <p><strong>Type:</strong> ${pokemon.types.join(", ")}</p>
            <img src="${pokemon.photo}" alt="${pokemon.name}" />
            <p><strong>Details:</strong> Aqui você pode adicionar mais informações sobre o Pokémon...</p>
        `;
    }).catch((error) => {
        console.error("Erro ao carregar os detalhes do Pokémon:", error);
        pokemonDetailsContainer.innerHTML = "<p>Erro ao carregar os detalhes do Pokémon.</p>";
    });
}
