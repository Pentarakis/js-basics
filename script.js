let num = 1000;

function clickCallback() {
    getID(id => {
        console.log('ID: ' + id);
        getData(id, character => {
           console.log(character);
        });
    });
}

function getID(callback) {
    setTimeout(() => {
        num++;
        callback(num);
        console.log(num);
    }, 2000);
}

function getData(id, callback) {
    fetch('http://localhost:3000/characters/' + id)
        .then(response => response.json())
        .then(callback);
}
