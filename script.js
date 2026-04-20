const apiURL = 'https://lanciweb.github.io/demo/api/pictures/';
const carta = document.querySelector('#carta');
const container = document.querySelector('#card-container')

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
    let pic = json[0];
    html += `
        <div class=" col-auto">
                <div class="carta col-12 col-md-6 col-lg-4 mb-4" data-gallery="panorama">
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
            </div>
      `;
    container.innerHTML = html
  })
  
  .catch(error => {
    console.error(error);
  })

// for (let i = 0; i < carta.length; i++)
//  const card = carta[i];
// const { id, title, date, url  } = card;
