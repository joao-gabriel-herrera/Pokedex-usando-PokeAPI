const nomePokemon = document.querySelector(".pokemon-name");
const idPokemon = document.querySelector(".pokemon-number");
const imgPokemon = document.querySelector(".pokemon-img");
const pesquisaForm = document.querySelector(".form");
const inputForm = document.querySelector(".input-search");
const buscaPokemon = async (pokemon) => {
  const respostaAPI = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
  );
  if (respostaAPI.status === 200) {
    const dados = await respostaAPI.json();
    return dados;
  }
};
const exibirPokemon = async (pokemon) => {
  const dados = await buscaPokemon(pokemon);
  if (dados) {
    nomePokemon.innerHTML = dados.name;
    idPokemon.innerHTML = dados.id;
    imgPokemon.src =
      dados["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
        "front_default"
      ];
    inputForm.value = " ";
  }
};
pesquisaForm.addEventListener("submit", (event) => {
  event.preventDefault();
  exibirPokemon(inputForm.value);
});
