let num = 20;

function onClickHandler () {
  getID((id) => {
    showCharacterName(id)
  });
}

function showCharacterName(id, name) {
  document.getElementById('characterName')
    .innerText = `ID: ${id}, Character: ${name}`;
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
