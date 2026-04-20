const apiURL = 'https://lanciweb.github.io/demo/api/pictures/';
const carta = document.querySelector('#carta');
const container = document.querySelector('#card-container');
const focus = document.querySelector('#prev-foto');
//selezionare il nodo html dove voglio stampare le card


fetch(apiURL)
  .then((risposta) => {
    return risposta.json();
  })
  .then(json => {
    console.log(json);
    console.log(json.title);
    console.log(json.url)
    //creare la struttura delle card e aggiungerla al contenitore

    let html = '';
    json.forEach(pic => {
      const pictureContainer = document.createElement('div');
      pictureContainer.classList.add('scatola-card');
      html = `
                <div class="carta col-lg-6 mb-4" data-gallery="panorama">
                    <img src="img/pin.svg" class="pin" alt="puntina">
                    <div class="polaroid">
                        <div class="img">
                          <img class="foto" src="${pic.url}" alt="${pic.title}">
                        </div>
                        <div class="info">
                            <span class="date">${pic.date}</span>
<p>${pic.title}</p>
                        </div>
                    </div>
                </div>
      `;
      //qui
      pictureContainer.innerHTML = html

      pictureContainer.addEventListener("click", function(){ console.log(pic.url); });
      
      container.appendChild(pictureContainer)

      
    }) 
  })
.catch(error => {
        console.error(error);
      })