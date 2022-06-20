const randNum = Math.floor(Math.random() * 42) + 1;
const charDiv = document.querySelector(".charDiv");
const button = document.querySelector("#newChar");

const apiCharacterURl = `https://rickandmortyapi.com/api/character/?page=${randNum}`;

async function rickMortyCharacters() {
  const response = await fetch(apiCharacterURl);
  const data = await response.json();
  randomCharacters(data);
}

function randomCharacters(data) {
  const imageRandom = Math.floor(Math.random() * data.results.length);
  const character = data.results[imageRandom];
  console.log(character);
  const img = document.createElement("img");
  const name = document.createElement("p");
  const race = document.createElement("p");
  const episode = document.createElement("a");
  img.src = character.image;
  name.textContent = `Character: ${character.name}`;
  race.textContent = `Race: ${character.species}`;
  episode.textContent = `episode:`;
  episode.href = character.episode[0];
  charDiv.innerHTML = "";
  charDiv.appendChild(img);
  charDiv.appendChild(name);
  charDiv.appendChild(race);
  charDiv.appendChild(episode);
}

button.addEventListener("click", rickMortyCharacters);
rickMortyCharacters();
