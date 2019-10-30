let num = 20;

function onClickHandler () {
  getID((id) => {
    loadCharacterData(id, response => {
      response.json()
      .then(data => {
        showCharacterName(data);
      });
    });
  });
}

function showCharacterName(character) {
  document.getElementById('characterName')
    .innerText = `ID: ${character.id}, Character: ${character.name}`;
}

function getID(callback) {
  setTimeout(() => {
    num++;
    callback(num);
  }, 1000);
}

function loadCharacterData(id, callback) {
  fetch('http://localhost:3000/characters/' + id)
  .then(callback);
}
