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
  const imageRandom = Math.floor(Math.random() * data.results.length); // zufällige auswahl der char. auf der api seite
  const character = data.results[imageRandom]; // der zufällig gewählte character
  console.log(character); // nur uim zu sehen was wir für ein Objekt bekommen
  const img = document.createElement("img"); // erstellen des Img-tags
  const name = document.createElement("p"); // erstellen  des p-tags für den namen
  const race = document.createElement("p"); // erstellen  des p-tags für den spezies
  const episode = document.createElement("a"); // erstellen  des p-tags für den episoden-link
  img.src = character.image; // einfügen des image links um auf html seite angezeigt zu werden
  name.textContent = `Character: ${character.name}`; // einfügen des texts um auf html seite angezeigt zu werden
  race.textContent = `Race: ${character.species}`; // einfügen des texts um auf html seite angezeigt zu werden
  episode.textContent = `episode`; // einfügen des texts um auf html seite angezeigt zu werden
  episode.href = character.episode[0]; // href mit link zum episoden guide
  charDiv.innerHTML = ""; // hier wird das div wieder geleert / damit vermeiden wir das immer neue divs erzeugt werden

  // mit appendChild werden die elemente im html eingefügt
  charDiv.appendChild(img);
  charDiv.appendChild(name);
  charDiv.appendChild(race);
  charDiv.appendChild(episode);
}

button.addEventListener("click", rickMortyCharacters);
rickMortyCharacters();
