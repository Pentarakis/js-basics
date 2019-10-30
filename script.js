let num = 20;

function onClickHandler () {
  getID()
    .then(id => loadCharacterData(id))
    .then(response => response.json())
    .then(character => showCharacterName(character));
}

function showCharacterName(character) {
  document.getElementById('characterName')
    .innerText = `ID: ${character.id}, Character: ${character.name}`;
}

function getID() {
  return new Promise(resolve => {
    setTimeout(() => {
      num++;
      resolve(num);
    }, 1000);
  });
}

function loadCharacterData(id) {
  return fetch('http://localhost:3000/characters/' + id);
}
