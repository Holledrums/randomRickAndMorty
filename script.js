//const randNum = Math.floor(Math.random() * 42) + 1;
const charDiv = document.querySelector(".charDiv");
const button = document.querySelector("#newChar");

const apiCharacterURl = `https://rickandmortyapi.com/api/character`;

async function rickMortyCharacters() {
  const randNum = Math.floor(Math.random() * 826);
  const response = await fetch(`${apiCharacterURl}/${randNum}`);
  const data = await response.json();
  randomCharacters(data);
}

function randomCharacters(data) {
  //const imageRandom = Math.floor(Math.random() * data.results.length); // zufällige auswahl der char. auf der api seite
  const character = data; //[imageRandom]; // der zufällig gewählte character
  console.log(character, data); // nur uim zu sehen was wir für ein Objekt bekommen
  const img = document.createElement("img"); // erstellen des Img-tags
  const name = document.createElement("p"); // erstellen  des p-tags für den namen
  const species = document.createElement("p"); // erstellen  des p-tags für den spezies
  const episode = document.createElement("a"); // erstellen  des p-tags für den episoden-link
  const episodeToArr = character.episode[0].split("/");
  console.log(episodeToArr);
  const episodeNum = episodeToArr[episodeToArr.length - 1];
  console.log(episodeNum);

  img.src = character.image; // einfügen des image links um auf html seite angezeigt zu werden
  name.textContent = `Character: ${character.name}`; // einfügen des texts um auf html seite angezeigt zu werden
  species.textContent = `Species: ${character.species}`; // einfügen des texts um auf html seite angezeigt zu werden
  episode.textContent = `Episode: ${episodeNum}`; // einfügen des texts um auf html seite angezeigt zu werden
  episode.href = character.episode[0]; // href mit link zum episoden guide
  charDiv.innerHTML = ""; // hier wird das div wieder geleert / damit vermeiden wir das immer neue divs erzeugt werde    // mit appendChild werden die elemente im html eingefügt
  charDiv.appendChild(img);
  charDiv.appendChild(name);
  charDiv.appendChild(species);
  charDiv.appendChild(episode);
}

button.addEventListener("click", rickMortyCharacters);
rickMortyCharacters();

// have fun
