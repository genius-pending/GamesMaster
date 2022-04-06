//variables to hookup HTML features//
var modalBtn = document.getElementById('modalBtn');
var simpleModal = document.getElementById('simplemodal');
var closeBtn = document.getElementById('closeBtn');
var cardcontainer = document.getElementById('cardcontainer');
var searchButton = document.getElementById('searchfield');
var gamecardBtn = document.getElementById('gamecardimg');
var overview = document.getElementById('overview');
var API_KEY = '?key=2b5025a6e62447588a8adb3f3c732a71'
var Base_URL = `https://api.rawg.io/api/games` + API_KEY + `&search=`
var Description_URL = `https://api.rawg.io/api/games/`
var closeSynopsisBtn = document.getElementById('overviewcloseBtn');
var card = document.getElementById('card');
var footer = document.getElementById('footer');
var plotcontainer = document.getElementById('plotcontainer');



//Modal function to open and close the modal//
modalBtn.addEventListener('click', openModal);
function openModal() {
  simpleModal.style.display = 'block';
  document.body.style.backgroundImage = "URL('gamesmaster1.jpeg')";
  card.style.display = 'none';
  overview.style.display = 'none';
  cardcontainer.style.display = 'none';
  footer.style.display = 'none';


}
closeBtn.addEventListener('click', closeModal);
function closeModal() {
  simpleModal.style.display = 'none';
  document.body.style.backgroundImage = "URL('gamesmaster1.jpeg')";
}



closeSynopsisBtn.addEventListener('click', closeSynopsis);
function closeSynopsis() {
  overview.style.display = 'none';
}

//calls api to get data in json
function getGames(url) {
  var searchValue = document.getElementById('input');
  fetch(url + searchValue.value).then(res => res.json()).then(data => {
    showGames(data.results)
    console.log(data.results)

  })
}

//displays results from api call on the screen 
function showGames(data) {

  cardcontainer.innerHTML = "";

  data.forEach(game => {
    const { name, released, background_image, metacritic, id } = game
    const gameEl = document.createElement('div');
    gameEl.classList.add('cardclick');
    let day = new Date(released).getDate();
    let month = new Date(released).getMonth() + 1;
    let year = new Date(released).getFullYear();
    let newdate = `${day}/${month}/${year}`
    console.log('day:' + day)

    gameEl.innerHTML = ` 
      
      <img class="card-img-top" src=${background_image} id="gamecardimg" alt="Card image cap">
      <div class="card-body">
      <h5 class="card-title" id="gamename">${name}</h5>
      </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">Available On:</li>
      <li class="list-group-item">Released On: ${newdate}</li>
      <li class="list-group-item .${getColour(metacritic)}">Rating: ${metacritic}</li>
      </ul>
      <div class="card-body">
      <a href="#" class="card-link">Reviews</a>
      </div>
      </div>

      `
    cardcontainer.appendChild(gameEl)

    var description = document.getElementsByClassName("card-img-top")
    for (var i = 0; i < description.length; i++) {
      description[i].addEventListener('click', openDescription);

      function openDescription() {


        console.log(id);

        }
    }
    

  });





}
function searchRefresh() {
  simpleModal.style.display = 'none';
  document.body.style.backgroundImage = 'none';
  footer.style.display = 'block';
  cardcontainer.style.display = 'block';


}


function getColour(vote) {
  if (vote >= 80) {
    return 'green'
  } else if (vote >= 50) {
    return 'orange'
  } else {
    return 'red'
  }
}

//function to get user input and call api
searchButton.onclick = function (e) {

  e.preventDefault();
  searchRefresh();
  getGames(Base_URL);
}






