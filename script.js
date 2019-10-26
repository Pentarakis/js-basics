let num = 1000;

function clickCallback() {
    getID()
        .then(id => getData(id))
        .then(response => response.json())
        .then(console.log);
}

function getID() {
    return new Promise(resolve => {
        setTimeout(() => {
            num++;
            resolve(num);
            console.log(num);
        }, 1000);
    });
}

function getData(id) {
    return fetch('http://localhost:3000/characters/' + id);
}
