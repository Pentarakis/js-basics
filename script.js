let num = 0;

function onClickHandler () {
  getID((id) => {
    console.log(id);
  });
}

function getID(callback) {
  setTimeout(() => {
    num++;
    callback(num);
  }, 1000);
}

function getData(id, callback) {
  fetch('http://localhost:3000/characters/' + id)
    .then(callback);
}
