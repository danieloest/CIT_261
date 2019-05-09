function listHikes() {
    const listElement = document.getElementById('hikes');
    console.log(listElement);
    listElement.innerHTML = '';

    hikeList.forEach( hike => {
        const newHike = renderHike(hike);
        newHike.addEventListener('touchend', () => {
            console.log(event);
        });
        listElement.appendChild(newHike);
    });
}

// Functions
function createHike(hike) {
    var item = document.createElement('li');

    const image = document.createElement('img');
    image.src = hike.imgSrc;
    image.alt = hike.imgAlt;

    const title = document.createElement('h2');
    title.innerText = hike.name;


    item.appendChild(image);
    item.appendChild(title);

    return item;
}

// Interpolation
function renderHike(hike) {
    var item = document.createElement('li');
    item.innerHTML = `
    <li>
    <img src="${ hike.imgSrc }" alt="${ hike.imgAlt }" />
    <h2>${ hike.name }</h2>
    <div>
      <h3>Distance</h3>
      <p>${ hike.distance }</p>
    </div>
    <div>
      <h3>Difficulty</h3>
      <p>${ hike.difficulty }</p>
    </div>
    <div>
      <h3>Description</h3>
      <p>${ hike.description }</p>
    </div>
    <div>
      <h3>How to get there</h3>
      <p>
      ${ hike.directions }
      </p>
    </div>
  </li>
`
return item;
}

window.addEventListener('load', () => {
    listHikes();
})