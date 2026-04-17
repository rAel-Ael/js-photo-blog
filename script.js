

const apiURL = "https://lanciweb.github.io/demo/api/pictures/";
const card = document.querySelector('#card');


scatola.innerHTML = 'generazione';
    
fetch(apiURL)
    .then((risposta) => {
        return risposta.json();
    })
    .then(json => {
        console.log(json);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("completato")
    });